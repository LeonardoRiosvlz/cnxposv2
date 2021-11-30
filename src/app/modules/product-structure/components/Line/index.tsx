import { GenericTableLittleState, setLoading, setPaginatedData, setSelected } from 'app/modules/common/components/GenericTable/store/generic-table-little.slice';
import GenericTableLittle from 'app/modules/common/components/GenericTable/little';
import { useAppSelector, useAppDispatch } from 'app/modules/common/hooks/use-app-redux'
import React from 'react';
import _ from '@lodash'
import { useTranslation } from 'react-i18next'
import { RowsDef, TableAction } from 'app/modules/common/components/GenericTable/GenericTableBody';
import FuseAnimate from '@fuse/core/FuseAnimate';
import { Icon, IconButton, Typography } from '@material-ui/core';

import GenericModal from 'app/modules/common/components/GenericModal';

import { toast } from 'react-toastify';
import { FormUtils } from 'app/modules/common/utils/FormUtils';
import ProductLineForm, { ProductLineFormField } from './Form';
import ConfirmDialog from 'app/modules/common/components/ConfirmDialog';
import useAuth from 'app/modules/auth/hooks/use-auth';
import useRepository from 'app/modules/common/hooks/use-repository';
import ImageCell from 'app/modules/common/components/TableCell/ImageCell';
import { ProductLineRepository } from 'api/repositories/product-line/product-line.repository';
import { ProductLine } from 'api/repositories/product-line/types/product-line.types';


type DialogState = { view: boolean, add: boolean, edit: boolean, delete: boolean, deleteMany: false }
type CrudLoadingState = DialogState

type Props = {
   dataID:string
}
export const ProductLineTab: React.FC<Props> = (props: Props) => {
    const { user } = useAuth()
    const { t } = useTranslation(['common']);
    const { paginator, selected } = useAppSelector(state => state.table_little) as GenericTableLittleState;
    const dispatch = useAppDispatch();

    const productLineRepo = useRepository(ProductLineRepository)


    const [dialog, setDialog] = React.useState<DialogState>({
        view: false,
        add: false,
        edit: false,
        delete: false,
        deleteMany: false
    });
    const [crudLoading, setCrudLoading] = React.useState<CrudLoadingState>({
        view: false,
        add: false,
        edit: false,
        delete: false,
        deleteMany: false
    });

    const selectedItem = _.first(selected) as ProductLine;
    const formId = {
        edit: `edit-files-corporation-ein`,
        add: `add-files-corporation-ein`
    };
    const handleOpenDialog = (type: keyof DialogState): void => {
        setDialog({ ...dialog, [type]: true });
    };

    const handleCloseDialog = (type: keyof DialogState): void => {
        setDialog({ ...dialog, [type]: false });
        // @ts-ignore
        dispatch(setSelected([]));
    };

    React.useEffect(() => {
            fetch()
    }, [])



    const fetch = () => {
        // @ts-ignore
        dispatch(setLoading(true));
        productLineRepo.findPaginated(
            {
                input: {
                    paginator: { limit: paginator.in.rowsPerPage, page: paginator.in.page },
                    where: { productStructure:{eq:props.dataID} }
                }
            }).then((res) => {
                // @ts-ignore
                dispatch(setPaginatedData(res));
            });
    };




    //actions

    const addAction = (formData: ProductLineFormField) => {
        setCrudLoading({ ...crudLoading, add: true });
        productLineRepo.create({ input: {productStructure:props.dataID, ...formData } }).then(() => {
            setCrudLoading({ ...crudLoading, add: false });
            handleCloseDialog('add');
            fetch();

            toast.info(t('common:ELEMENT_CREATED'));
        }).catch((err) => {
            toast.error(err?.toString());
            setCrudLoading({ ...crudLoading, add: false });
            //handleCloseDialog('add');
        });
    };

    const editAction = (formData: ProductLineFormField) => {
        setCrudLoading({ ...crudLoading, edit: true });

        const toUpdateData = FormUtils.toUpdateValue<ProductLineFormField, ProductLine>(formData, selectedItem);

        productLineRepo.update({
            input: {
                entityId: selectedItem.id,
                update: { 
                    name:toUpdateData.name,
                    code:toUpdateData.code,
                 }
            }
        }).then(() => {
            setCrudLoading({ ...crudLoading, edit: false });
            handleCloseDialog('edit');
            fetch();
            toast.info(t('common:ELEMENT_EDITED'));
        }).catch((err) => {
            toast.error(err?.toString());
            setCrudLoading({ ...crudLoading, edit: false });


        });
    };

    const removeAction = () => {
        setCrudLoading({ ...crudLoading, delete: true });

        productLineRepo.delete({ input: { entityId: selectedItem.id } }).then(() => {
            setCrudLoading({ ...crudLoading, delete: false });
            handleCloseDialog('delete');
            fetch();
            toast.info(t('common:ELEMENT_DELETED'));
        }).catch((err) => {
            setCrudLoading({ ...crudLoading, delete: false });
            handleCloseDialog('delete');
            toast.error(err?.toString());
        });
    };

    const removeMultipleAction = () => {
        setCrudLoading({ ...crudLoading, delete: true });
        const ids: Array<string> = selected.map(x => x.id);

        productLineRepo.deleteMany({ input: { where: { id: { in: ids } } } }).then(() => {
            setCrudLoading({ ...crudLoading, delete: false });
            handleCloseDialog('deleteMany');
            fetch();
            toast.info(t('common:ELEMENTS_DELETED'));
        }).catch((err) => {
            setCrudLoading({ ...crudLoading, delete: false });
            handleCloseDialog('deleteMany');
            toast.error(err?.toString());
        });
    };



    const rows: Array<RowsDef<ProductLine>> = [
        {
            id: 'name',
            align: 'left',
            sort: true,
            label: t('common:NAME')
        },
        {
            id: 'code',
            align: 'left',
            sort: true,
            label: t('common:CODE')
        }

    ];

    const actions: Array<TableAction<ProductLine>> = [
        {
            label: t('common:EDIT'),
            icon: 'edit',
            action: () => handleOpenDialog('edit'),
       

        },
        {
            label: t('common:DELETE'),
            icon: 'delete_forever',
            action: (record) => handleOpenDialog('delete'),
        }
    ];


    if (!props.dataID) {
        return (
            <FuseAnimate delay={100}>
                <div className="flex flex-1 items-center justify-center h-full">
                    <Typography color="textSecondary" variant="h5">
                        {t('common:NO_RECORD')}
                    </Typography>
                </div>
            </FuseAnimate>)

    }

    return (
        <>
            <div className='w-full flex flex-col'>
                <div className='w-full flex justify-end'>

                    <FuseAnimate delay={100}>
                        <IconButton
                            size='small'
                            color='primary'
                            disabled={Boolean(selected?.length <= 1)}
                            onClick={() => handleOpenDialog('deleteMany')} >
                            <Icon>delete_forever</Icon>
                        </IconButton>
                    </FuseAnimate>

                    <FuseAnimate delay={100}>
                        <IconButton size='small' color='secondary' onClick={() => handleOpenDialog('add')} >
                            <Icon>add</Icon>
                        </IconButton>
                    </FuseAnimate>

                </div>
                <GenericTableLittle
                    rows={rows}
                    actions={actions}
                />
            </div>

            <GenericModal maxWidth={'sm'} minHeight={200}
                onClose={() => handleCloseDialog('add')}
                formId={formId.add}
                open={dialog.add}
                title={`${t('FILES')} `}
                cancelBtn
                okLoading={crudLoading.add}
                okBtnTxt={t('common:ADD')}>
                <div className='w-full p-4 mt-16'>
                    <ProductLineForm
                        formId={formId.add}
                        upLoading={() => setCrudLoading({ ...crudLoading, add: true })}
                        submitAction={addAction}
                    />
                </div>

            </GenericModal>

            <GenericModal maxWidth={'sm'} minHeight={200}
                onClose={() => handleCloseDialog('edit')}
                formId={formId.edit}
                open={dialog.edit}
                title={`${t('MEDICAL_RECORDS')} - ${t('common:EDIT')}`}
                cancelBtn
                okLoading={crudLoading.edit}
                okBtnTxt={t('common:ADD')}>
                <div className='w-full p-4 mt-16'>
                    <ProductLineForm
                        formId={formId.edit}
                        upLoading={() => setCrudLoading({ ...crudLoading, edit: true })}
                        submitAction={editAction}
                        initialData={{
                            ...FormUtils?.setInitialData<ProductLine, ProductLineFormField>(selectedItem),
                        }}
                    />
                </div>
            </GenericModal>

            <ConfirmDialog onClose={() => handleCloseDialog('delete')}
                title={`${t('MEDICAL_RECORDS')} - ${t('common:CONFIRM_DELETE')}`}
                type={'CONFIRM_DELETE'}
                message={t('common:CONFIRM_DELETE_MSG')}
                handleOk={() => {
                    removeAction();
                }}
                okLoading={crudLoading.delete}
                open={dialog.delete} />

            <ConfirmDialog onClose={() => handleCloseDialog('deleteMany')}
                title={`${t('MEDICAL_RECORDS')} - ${t('common:CONFIRM_DELETE_MULTIPLE')}`}
                type={'CONFIRM_DELETE'}
                message={t('common:CONFIRM_DELETE_MULTIPLE_MSG')}
                handleOk={() => {
                    removeMultipleAction();
                }}
                okLoading={crudLoading.deleteMany}
                open={dialog.deleteMany} />
        </>
    )


}

export default ProductLineTab