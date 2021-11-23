import React from 'react';
import {useTranslation} from 'react-i18next';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {Switch} from '@material-ui/core';
import { Taxes } from 'api/repositories/taxes/types/taxes.types';
import { Warehouse } from 'api/repositories/warehouse/types/warehouse.types';
import { TaxesRepository } from 'api/repositories/taxes/taxes.repository';
import useRepository from 'app/modules/common/hooks/use-repository';
import { WarehouseRepository } from 'api/repositories/warehouse/warehouse.repository';
import { toast } from 'react-toastify';
import GenericSelector from 'app/modules/common/components/GenericSelector';
import { omit } from 'lodash';
import BooleanSelector from 'app/modules/common/components/BooleanSelector';
import { ProductCategory } from 'api/repositories/product-category/types/product-category.types';
import { ProductCategoryRepository } from 'api/repositories/product-category/product-category.repository';


export type ProductGroupFormField = {
    name: string;
    sortingToOrders?: boolean;
    source: string;
    tipInOrder?: boolean;
    categories?: Array<string>;
    warehouses?: Array<string>;
    taxAppliedToPurchases?: Array<string>;
    taxAppliedToSales?: Array<string>;
    timeTax?: boolean;
    from?: Date;
    to?: Date;
    isActive: boolean;
}



type SelectorData = {
    taxes: Array<Taxes>
    warehouses: Array<Warehouse>
    productCategory: Array<ProductCategory>
}

type ProductGroupFormFiles = {
    //resolutionFile?: CloudFile,
    //programFile?: CloudFile
}

type Props = {
    submitAction: (data: ProductGroupFormField) => unknown
    formId: string
    initialData?: ProductGroupFormField
    initialFiles?: ProductGroupFormFiles,
    upLoading?: () => void,
}
const ProductGroupForm: React.FC<Props> = ({submitAction, initialFiles, upLoading, formId, initialData}: Props) => {

    const {t} = useTranslation(['product-group', 'common']);
    //	const { processFile } = useFile();
    const schema = yup.object().shape({
        name: yup.string().required(t('common:NAME_REQUIRED')),
        isActive: yup.boolean(),
    });

    const defaultValues: ProductGroupFormField | {} = initialData ? {
        ...initialData
    } : {isActive: true};

    const {handleSubmit, control, formState: {errors, dirtyFields, isValid}} = useForm<ProductGroupFormField>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
        defaultValues

    });


    //const [files, setFiles] = React.useState<{ [K in keyof ProductGroupFormFiles]?: File }>({});

    const [selectorData, setSelectorData] = React.useState<SelectorData>({taxes: [], warehouses: [], productCategory: []})

    const taxRepo = useRepository(TaxesRepository)
    const warehouseRepo = useRepository(WarehouseRepository)
    const productCategoryRepo = useRepository(ProductCategoryRepository)

    const loadSelectorData = async () => {

        try {
            const taxes = await taxRepo.findAll({input: {where: {}}})
            const productCategory = await productCategoryRepo.findAll({input: {where: {}}})
            const warehouses = await warehouseRepo.findAll({input: {where: {}}})
            setSelectorData({taxes, warehouses,productCategory})
        } catch (err) {
            toast.error(err?.toString())
        }
    }

    React.useEffect(() => {
        loadSelectorData().then()
    }, [])


    const onSubmit = (data: ProductGroupFormField) => {

        /*let resolutionFile;
      if (isValid && files.resolutionFile) {
    if (upLoading) {
        upLoading();
    }
    const fileParam = 'resolutionFile';
    const toRemove = initialFiles?.resolutionFile?.id;
    const uploadResult = await processFile({ file: files.resolutionFile, fileParam, toRemove });
    resolutionFile = uploadResult?.[fileParam];
}*/

        submitAction(data);
    };

    return (<form id={formId}
                  className='w-full flex flex-col p-2'
                  onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>

            <Grid item xs={12} className='w-full p-16 flex justify-end'>

                <Controller
                    // @ts-ignore
                    name={'isActive'}
                    // @ts-ignore
                    defaultValue={true}
                    control={control}
                    render={({field: {onChange, onBlur, value, name, ref}}) => (
                        <div className='flex items-center'>
                            <Switch
                                size='small'
                                onBlur={onBlur}
                                onChange={onChange}
                                checked={Boolean(value)}
                                inputRef={ref}
                            /><label>{t('common:ACTIVE')}</label></div>)}/>
            </Grid>

            <Grid item xs={12} className='w-full p-16'>
                <Controller
                    name="categories"
                    control={control} 
                    render={({ field }) => (
                        <GenericSelector<ProductCategory>
                            {...omit(field, ['value'])}
                            multiple
                            value={Array.from(field.value ?? [])}
                            param={'id'}
                            displayField={'name'}
                            values={selectorData.productCategory}
                            size='small'
                            label={t('GROUPS')}
                            variant="outlined"
                            fullWidth
                            
                        />
                    )} />
            </Grid>

            <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="name"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('common:NAME')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.name}
                            helperText={errors?.name?.message}
                            required
                        />)}/>
            </Grid>



            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                    name="sortingToOrders"
                    control={control}
                    render={({ field }) => (
                        <BooleanSelector
                            {...field}
                            size='small'
                            label={t('SORTING_TO_ORDERS')}
                            variant="outlined"
                            fullWidth
                        />)} />
            </Grid>


            <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="source"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('SOURCE')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.source}
                            helperText={errors?.source?.message}
                            required
                        />)}/>
            </Grid>


            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                    name="tipInOrder"
                    control={control}
                    render={({ field }) => (
                        <BooleanSelector
                            {...field}
                            size='small'
                            label={t('TIP_IN_ORDER')}
                            variant="outlined"
                            fullWidth
                        />)} />
            </Grid>


            <Grid item xs={12} className='w-full p-16'>
                <Controller
                    name="warehouses"
                    control={control}
                    render={({ field }) => (
                        <GenericSelector<Warehouse>
                            {...omit(field, ['value'])}
                            multiple
                            value={Array.from(field.value ?? [])}
                            param={'id'}
                            displayField={'name'}
                            values={selectorData.warehouses}
                            size='small'
                            label={t('WAREHOUSE')}
                            variant="outlined"
                            fullWidth
                            
                        />
                    )} />
            </Grid>

            <Grid item xs={12} className='w-full p-16'>
                <Controller
                    name="taxAppliedToPurchases"
                    control={control}
                    render={({ field }) => (
                        <GenericSelector<Taxes>
                            {...omit(field, ['value'])}
                            multiple
                            value={Array.from(field.value ?? [])}
                            param={'id'}
                            displayField={'name'}
                            values={selectorData.taxes}
                            size='small'
                            label={t('TAX_APPLIED_TO_PURCHASES')}
                            variant="outlined"
                            fullWidth
                            
                        />
                    )} />
            </Grid>


            <Grid item xs={12} className='w-full p-16'>
                <Controller
                    name="taxAppliedToSales"
                    control={control}
                    render={({ field }) => (
                        <GenericSelector<Taxes>
                            {...omit(field, ['value'])}
                            multiple
                            value={Array.from(field.value ?? [])}
                            param={'id'}
                            displayField={'name'}
                            values={selectorData.taxes}
                            size='small'
                            label={t('TAX_APPLIED_TO_SALES')}
                            variant="outlined"
                            fullWidth
                            
                        />
                    )} />
            </Grid>



            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                    name="timeTax"
                    control={control}
                    render={({ field }) => (
                        <BooleanSelector
                            {...field}
                            size='small'
                            label={t('TIME_TAX')}
                            variant="outlined"
                            fullWidth
                        />)} />
            </Grid>
            



        </Grid>


    </form>);


};


export default ProductGroupForm;
