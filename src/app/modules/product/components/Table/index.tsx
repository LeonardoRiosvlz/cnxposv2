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

import ProductForm, {ProductFormField} from '../Form';
import ProductDetails from '../Details';
import {Product} from 'api/repositories/product/types/product.types';
import ConfirmDialog from 'app/modules/common/components/ConfirmDialog';
import BooleanCell from 'app/modules/common/components/TableCell/BooleanCell';
import {Action_List, App_Modules, OrderByType} from 'api/graphql/schema/types';
import usePermits from 'app/modules/auth/hooks/use-permits';
import useRepository from "app/modules/common/hooks/use-repository";
import {ProductRepository} from "api/repositories/product/product.repository";
import {IPaginatedEntity} from "api/interfaces/IPaginatedEntity";
import FormTabs from '../FormTabs';
import ImageCell from 'app/modules/common/components/TableCell/ImageCell';
import QRCode from "react-qr-code";

type DialogState = { view: boolean, add: boolean, edit: boolean, delete: boolean, deleteMany: false,  tab: boolean }
type CrudLoadingState = DialogState
type Props = {}
const ProductTable: React.FC<Props> = (props: Props) => {
    const {t} = useTranslation(['product', 'common']);
    const dispatch = useAppDispatch();
    const {hasPermission} = usePermits();
    const {paginator, query, context, selected} = useAppSelector(state => state.table) as GenericTableState;
    const productRepo = useRepository(ProductRepository)
    const paginatorInput = paginator.in;
    const [id, setId] = React.useState<string>('')
    const [productSelected, setProductSelected] = React.useState<Product>(undefined)
    const [dialog, setDialog] = React.useState<DialogState>({
        view: false,
        add: false,
        edit: false,
        delete: false,
        tab: false,
        deleteMany: false
    });
    const [crudLoading, setCrudLoading] = React.useState<CrudLoadingState>({
        view: false,
        add: false,
        edit: false,
        delete: false,
        tab: false,
        deleteMany: false
    });


    const selectedItem = _.first(selected) as Product;
    const handleOpenDialog = (type: keyof DialogState): void => {
        setDialog({...dialog, [type]: true});
    };

    const handleCloseDialog = (type: keyof DialogState): void => {
        setDialog({...dialog, [type]: false});
        // @ts-ignore
        dispatch(setSelected([]));
        if(type==='tab'){
            fetch();
        }

    };

    React.useEffect(() => {
        // @ts-ignore
        dispatch(setContext(App_Modules.Product));
    }, []);

    React.useEffect(() => {
        fetch();
    }, [paginatorInput, query]);

    const fetch = () => {
        // @ts-ignore
        dispatch(setLoading(true));
        productRepo.findPaginated(
            {
                input: {
                    paginator: {limit: paginatorInput.rowsPerPage, page: paginatorInput.page},
                    where: query ? {or: [{name: {iLike: query}}]} : {}
                }
            }).then((res: IPaginatedEntity<Product>) => {
            // @ts-ignore
            dispatch(setPaginatedData(res));
        }).catch((err: any) => {
            // @ts-ignore
            dispatch(setLoading(false));
            toast.error(err?.toString());
        });
    };
    const fetchLast =async () => {
        // @ts-ignore
     await productRepo.findPaginated({
      input: { 
              paginator: {limit: 1, page: 1},
              where:{
                //  patient:{ eq:id}
              },
              orderBy:{
                createdAt:OrderByType.Desc
              }    
            }
        }).then((res) => {
            // @ts-ignore
            setId(res.items[0].id)
            setDialog({...dialog, tab: true, add:false});
            setProductSelected(res.items[0])
        }).catch((err: any) => {
            // @ts-ignore

        });
    };
 
    const addAction = (formData: ProductFormField) => {
        setCrudLoading({...crudLoading, add: true});
        productRepo.create({input: {
            ...formData,
            compound:formData.compound??false,
            isActive:formData.isActive??true
        }}).then(() => {
            setCrudLoading({...crudLoading, add: false});
            fetch();
            fetchLast()
            toast.info(t('common:ELEMENT_CREATED'));
        }).catch((err: any) => {
            toast.error(err?.toString());
            setCrudLoading({...crudLoading, add: false});
        });
    };

    const editAction = (formData: ProductFormField) => {
        setCrudLoading({...crudLoading, edit: true});

        const toUpdateData = FormUtils.toUpdateValue<ProductFormField, Product>(formData, selectedItem);

        productRepo.update({
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

        productRepo.delete({input: {entityId: selectedItem?.id}}).then(() => {
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

        productRepo.deleteMany({input: {where: {id: {in: ids}}}}).then(() => {
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


    const rows: Array<RowsDef<Product>> = [
        {
            id: 'code',
            align: 'left',
            sort: true,
            label: t('common:CODE'),
            render: (record) => <label> {record.productLine? record.productLine.identifier+record.code:''}</label>
        },
        {
            id: 'name',
            align: 'left',
            sort: true,
            label: t('common:NAME')
        },
        {
            id: 'description',
            align: 'left',
            sort: true,
            label: t('common:DESCRIPTION')
        },
        {
            id: 'isActive',
            align: 'left',
            sort: true,
            label: t('common:ACTIVE'),
            render: (record) => <BooleanCell value={record.isActive}/>
        },
        {
            id: 'photoFile',
            align: 'left',
            sort: true,
            label: t('common:IMG'),
            render: (row) => <ImageCell value={row?.photoFile}/>
        },
        

    ];

    const actions: Array<TableAction> = [
        /*{
            label: t('common:VIEW'),
            action: (record) => handleOpenDialog('view'),
            icon: 'visibility'
        },*/
        {
            label: t('common:EDIT'),
            action: (record) => {

                setId(record.id)
                setDialog({...dialog, tab: true});
            },
            icon: 'edit',
            disabled: !hasPermission(context, Action_List.Update)
        },
        {
            label: t('common:DELETE'),
            action: (record) => handleOpenDialog('delete'),
            icon: 'delete_forever',
            disabled: !hasPermission(context, Action_List.DeleteOne)
        }
    ];


    const formId = {
        edit: `edit-product`,
        add: `add-product`
    };

    // @ts-ignore
    return (<>
            <div className='w-full flex flex-col'>
                <GenericTable rows={rows}
                              addBtn
                              headerIcon={'inventory_2'}
                              onAddAction={() => handleOpenDialog('add')}
                              title={t('PRODUCT')}
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
                    <ProductDetails row={selectedItem}/>
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
                    <ProductForm
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
                    <ProductForm
                        upLoading={() => setCrudLoading({ ...crudLoading, edit: true })}
                        initialData={{
                        ...FormUtils.setInitialData<Product, ProductFormField>(selectedItem)
                    }}
                                  submitAction={editAction}
                                  formId={formId.edit}/>
                </div>
            </GenericModal>

            <GenericModal maxWidth={'md'}  onClose={() => handleCloseDialog('tab')}
                          minHeight={700}
                          open={dialog.tab}
                          title={`${t('PRODUCT')}`}
                          handleOk={() => handleCloseDialog('view')}
                          okBtnTxt={t('common:CLOSE')}>
          
                 {(selectedItem || productSelected )&&id&&<FormTabs product={selectedItem??productSelected} dataID={id}/>}
           
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

export default ProductTable;
