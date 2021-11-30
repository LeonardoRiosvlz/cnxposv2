import React from 'react';
import {useTranslation} from 'react-i18next';
import GenericTable from 'app/modules/common/components/GenericTable';
import {useAppDispatch, useAppSelector} from 'app/modules/common/hooks/use-app-redux';
import {
    GenericTableState,
    setContext,
    setLoading,
    setPaginatedData,
    setSelected
} from 'app/modules/common/components/GenericTable/store/generic-table.slice';
import {RowsDef, TableAction} from 'app/modules/common/components/GenericTable/GenericTableBody';
import _ from '@lodash';
import GenericModal from 'app/modules/common/components/GenericModal';


import {toast} from 'react-toastify';
import {FormUtils} from 'app/modules/common/utils/FormUtils';

import ProductStructureForm, {ProductStructureFormField} from '../Form';
import ProductStructureDetails from '../Details';
import {ProductStructure} from 'api/repositories/product-structure/types/product-structure.types';
import ConfirmDialog from 'app/modules/common/components/ConfirmDialog';
import BooleanCell from 'app/modules/common/components/TableCell/BooleanCell';
import {Action_List, App_Modules} from 'api/graphql/schema/types';
import usePermits from 'app/modules/auth/hooks/use-permits';
import useRepository from "app/modules/common/hooks/use-repository";
import {ProductStructureRepository} from "api/repositories/product-structure/product-structure.repository";
import {IPaginatedEntity} from "api/interfaces/IPaginatedEntity";
import ProductLineTab from '../Line';

type DocID = {  doc?: string }
type DialogState = { view: boolean, add: boolean, line: boolean, edit: boolean, delete: boolean, deleteMany: false }
type CrudLoadingState = DialogState
type Props = {}
const ProductStructureTable: React.FC<Props> = (props: Props) => {
    const {t} = useTranslation(['product-structure', 'common']);
    const dispatch = useAppDispatch();
    const {hasPermission} = usePermits();
    const [doc,setDoc] = React.useState<DocID>({doc: ''});
    const {paginator, query, context, selected} = useAppSelector(state => state.table) as GenericTableState;
    const productStructureRepo = useRepository(ProductStructureRepository)
    const paginatorInput = paginator.in;

    const [dialog, setDialog] = React.useState<DialogState>({
        view: false,
        add: false,
        edit: false,
        delete: false,
        line: false,
        deleteMany: false
    });
    const [crudLoading, setCrudLoading] = React.useState<CrudLoadingState>({
        view: false,
        add: false,
        edit: false,
        delete: false,
        line: false,
        deleteMany: false
    });


    const selectedItem = _.first(selected) as ProductStructure;
    const handleOpenDialog = (type: keyof DialogState): void => {
        setDialog({...dialog, [type]: true});
    };

    const handleCloseDialog = (type: keyof DialogState): void => {
        setDialog({...dialog, [type]: false});
        // @ts-ignore
        dispatch(setSelected([]));
    };

    React.useEffect(() => {
        // @ts-ignore
        dispatch(setContext(App_Modules.ProductStructure));
    }, []);

    React.useEffect(() => {
        fetch();
    }, [paginatorInput, query]);

    const fetch = () => {
        // @ts-ignore
        dispatch(setLoading(true));
        productStructureRepo.findPaginated(
            {
                input: {
                    paginator: {limit: paginatorInput.rowsPerPage, page: paginatorInput.page},
                    where: query ? {or: [{name: {iLike: query}}, {code: {iLike: query}}]} : {}
                }
            }).then((res: IPaginatedEntity<ProductStructure>) => {
            // @ts-ignore
            dispatch(setPaginatedData(res));
        }).catch((err: any) => {
            // @ts-ignore
            dispatch(setLoading(false));
            toast.error(err?.toString());
        });
    };


    const addAction = (formData: ProductStructureFormField) => {
        setCrudLoading({...crudLoading, add: true});
        productStructureRepo.create({input: {...formData}}).then(() => {
            setCrudLoading({...crudLoading, add: false});
            handleCloseDialog('add');
            fetch();

            toast.info(t('common:ELEMENT_CREATED'));
        }).catch((err: any) => {
            toast.error(err?.toString());
            setCrudLoading({...crudLoading, add: false});
        });
    };

    const editAction = (formData: ProductStructureFormField) => {
        setCrudLoading({...crudLoading, edit: true});

        const toUpdateData = FormUtils.toUpdateValue<ProductStructureFormField, ProductStructure>(formData, selectedItem);

        productStructureRepo.update({
            input: {
                entityId: selectedItem?.id,
                update: {...toUpdateData}
            }
        }).then(() => {
            setCrudLoading({...crudLoading, edit: false});
            handleCloseDialog('edit');
            fetch();
            toast.info(t('common:ELEMENT_EDITED'));
        }).catch((err: any) => {
            toast.error(err?.toString());
            setCrudLoading({...crudLoading, edit: false});
        });
    };

    const removeAction = () => {
        setCrudLoading({...crudLoading, delete: true});

        productStructureRepo.delete({input: {entityId: selectedItem?.id}}).then(() => {
            setCrudLoading({...crudLoading, delete: false});
            handleCloseDialog('delete');
            fetch();
            toast.info(t('common:ELEMENT_DELETED'));
        }).catch((err: any) => {
            setCrudLoading({...crudLoading, delete: false});
            handleCloseDialog('delete');
            toast.error(err?.toString());
        });
    };

    const removeMultipleAction = () => {
        setCrudLoading({...crudLoading, delete: true});
        const ids: Array<string> = selected.map(x => x.id);

        productStructureRepo.deleteMany({input: {where: {id: {in: ids}}}}).then(() => {
            setCrudLoading({...crudLoading, delete: false});
            handleCloseDialog('deleteMany');
            fetch();
            toast.info(t('common:ELEMENTS_DELETED'));
        }).catch((err: any) => {
            setCrudLoading({...crudLoading, delete: false});
            handleCloseDialog('deleteMany');
            toast.error(err?.toString());
        });
    };

    const irepRoadTaxesFile = () => {

        handleOpenDialog('line');
        setDoc({doc:selectedItem.id})

    }

    const rows: Array<RowsDef<ProductStructure>> = [
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

    const actions: Array<TableAction> = [
        /*{
            label: t('common:VIEW'),
            action: (record) => handleOpenDialog('view'),
            icon: 'visibility'
        },*/
        {
            label: t('common:EDIT'),
            action: (record) => handleOpenDialog('edit'),
            icon: 'edit',
            disabled: !hasPermission(context, Action_List.Update)
        },
        {
            label: t('common:DELETE'),
            action: (record) => handleOpenDialog('delete'),
            icon: 'delete_forever',
            disabled: !hasPermission(context, Action_List.DeleteOne)
        },
        {
            label: t('common:LINE'),
            action: (record) =>irepRoadTaxesFile(),
            icon: 'folder',
            disabled: !hasPermission(context, Action_List.Update)
        }
    ];


    const formId = {
        edit: `edit-product-structure`,
        add: `add-product-structure`
    };

    // @ts-ignore
    return (<>
            <div className='w-full flex flex-col'>
                <GenericTable rows={rows}
                              addBtn
                              headerIcon={'area_chart'}
                              onAddAction={() => handleOpenDialog('add')}
                              title={t('common:PRODUCT_STRUCTURE')}
                              options={{actionColumn: true}}
                              onCheckSelectedMenuClick={() => handleOpenDialog('deleteMany')}
                              actions={actions}/>
            </div>

            <GenericModal onClose={() => handleCloseDialog('view')}
                          minHeight={150}
                          open={dialog.view}
                          title={`${t('common:DETAILS')}`}
                          handleOk={() => handleCloseDialog('view')}
                          okBtnTxt={t('common:CLOSE')}>
                <div className='w-full p-4'>
                    <ProductStructureDetails row={selectedItem}/>
                </div>
            </GenericModal>

            <GenericModal maxWidth={'sm'} minHeight={200}
                          onClose={() => handleCloseDialog('add')}
                          formId={formId.add}
                          open={dialog.add}
                          title={t('common:ADD')}
                          cancelBtn
                          okLoading={crudLoading.add}
                          okBtnTxt={t('common:ADD')}>
                <div className='w-full p-4 mt-16'>
                    <ProductStructureForm
                        upLoading={() => setCrudLoading({ ...crudLoading, add: true })}
                        submitAction={addAction}
                        formId={formId.add}/>
                </div>

            </GenericModal>

            <GenericModal maxWidth={'sm'} minHeight={200}
                          onClose={() => handleCloseDialog('edit')}
                          open={dialog.edit}
                          okLoading={crudLoading.edit}
                          title={`${t('common:EDIT')} : ${selectedItem?.name}`}
                          okBtnTxt={t('common:EDIT')}
                          cancelBtn
                          formId={formId.edit}>
                <div className='w-full p-4 mt-16'>
                    <ProductStructureForm
                        upLoading={() => setCrudLoading({ ...crudLoading, edit: true })}
                        initialData={{
                        ...FormUtils.setInitialData<ProductStructure, ProductStructureFormField>(selectedItem)
                    }}
                                  submitAction={editAction}
                                  formId={formId.edit}/>
                </div>
            </GenericModal>

            <GenericModal maxWidth={'md'} minHeight={300}
                          onClose={() => handleCloseDialog('line')}
                          open={dialog.line}
                          okLoading={crudLoading.line}
                          title={`${t('common:LINE')} : ${t(selectedItem?.code)}`}
                          okBtnTxt={t('')}
                        
                          formId={formId.edit}>
                <div className='w-full p-4 mt-16'>
                     {doc.doc!='' &&<ProductLineTab dataID={doc.doc} />}
                </div>
            </GenericModal>

            <ConfirmDialog onClose={() => handleCloseDialog('delete')}
                           title={t('common:CONFIRM_DELETE')}
                           type={'CONFIRM_DELETE'}
                           message={t('common:CONFIRM_DELETE_MSG')}
                           handleOk={() => {
                               removeAction();
                           }}
                           okLoading={crudLoading.delete}
                           open={dialog.delete}/>

            <ConfirmDialog onClose={() => handleCloseDialog('deleteMany')}
                           title={t('common:CONFIRM_DELETE_MULTIPLE')}
                           type={'CONFIRM_DELETE'}
                           message={t('common:CONFIRM_DELETE_MULTIPLE_MSG')}
                           handleOk={() => {
                               removeMultipleAction();
                           }}
                           okLoading={crudLoading.deleteMany}
                           open={dialog.deleteMany}/>

        </>

    );
};

export default ProductStructureTable;
