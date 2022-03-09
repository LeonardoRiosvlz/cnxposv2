import React from 'react';
import {useTranslation} from 'react-i18next';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {Switch} from '@material-ui/core';
import { ProductLine } from 'api/repositories/product-line/types/product-line.types';
import { UnitMeasurement } from 'api/repositories/unit-measurement/types/unit-measurement.types';
import { ProductArea } from 'api/repositories/product-area/types/product-area.types';
import { ProductGroup } from 'api/repositories/product-group/types/product-group.types';
import { ProductLineRepository } from 'api/repositories/product-line/product-line.repository';
import { UnitMeasurementRepository } from 'api/repositories/unit-measurement/unit-measurement.repository';
import { ProductAreaRepository } from 'api/repositories/product-area/product-area.repository';
import { ProductGroupRepository } from 'api/repositories/product-group/product-group.repository';
import useRepository from 'app/modules/common/hooks/use-repository';
import { toast } from 'react-toastify';
import GenericSelector from 'app/modules/common/components/GenericSelector';
import { ProductStructure } from 'api/repositories/product-structure/types/product-structure.types';
import { ProductStructureRepository } from 'api/repositories/product-structure/product-structure.repository';
import BooleanSelector from 'app/modules/common/components/BooleanSelector';
import { omit } from 'lodash';
import GenericUpload from 'app/modules/common/components/GenericUpload';
import _ from '@lodash';
import {CloudFile} from "api/types/cloud-file.type";
import { makeProcessedFieldsMerger } from '@apollo/client/cache/inmemory/helpers';
import useFile from 'app/modules/files/hooks/use-file';

export type ProductFormField = {
    name: string;
    code: string;
    description?: string;
    ref?: string;
    isActive?: boolean;
    shoppingAssistant?: boolean;
    compound?: boolean;
    structure: string;
    productLine: string;
    um: string;
    composition?: string;
    area?: string;
    groups?: Array<string>;
    barCode?: Array<string>;
    barCodeProduct?: string;
    photoFile?: string;
}


type Line = string ;

type SelectorData = {
    productLine: Array<ProductLine>
    um: Array<UnitMeasurement>
    area: Array<ProductArea>
    groups:Array<ProductGroup>
    structure:Array<ProductStructure>
}

type ProductFormFiles = {
    photoFile?: CloudFile | null,
}

type Props = {
    submitAction: (data: ProductFormField) => unknown
    formId: string
    initialData?: ProductFormField
    initialFiles?: ProductFormFiles,
    upLoading?: () => void,
}
const ProductForm: React.FC<Props> = ({submitAction, initialFiles, upLoading, formId, initialData}: Props) => {

    const {t} = useTranslation(['product', 'common']);
	const { processFile } = useFile();
    const schema = yup.object().shape({
        name: yup.string().required(t('common:NAME_REQUIRED')),
        isActive: yup.boolean(),
    });

    const defaultValues: ProductFormField | {} = initialData ? {
        ...initialData
    } : {isActive: true,code:""};

    const {handleSubmit,watch,setValue,control, formState: {errors, dirtyFields, isValid}} = useForm<ProductFormField>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
        defaultValues

    }); 
    const structure = Boolean(watch('structure'));
    
    const [files, setFiles] = React.useState<{ [K in keyof ProductFormFiles]?: File }>({photoFile: undefined});

    const [selectorData, setSelectorData] = React.useState<SelectorData>({
                                                                            productLine: [], 
                                                                            um: [],
                                                                            area: [], 
                                                                            groups: [],
                                                                            structure: []
                                                                        })

    const productLineRepo = useRepository(ProductLineRepository)
    const unitMeasurementRepo = useRepository(UnitMeasurementRepository)
    const productAreaRepo = useRepository(ProductAreaRepository)
    const productGroupRepo = useRepository(ProductGroupRepository)
    const productStructureRepo = useRepository(ProductStructureRepository)
    const loadSelectorData = async () => {

        try {
            const productLine =  await productLineRepo.findAll({input: {where: {}}})
            const um = await unitMeasurementRepo.findAll({input: {where: {}}})
            const area = await productAreaRepo.findAll({input: {where: {}}})
            const groups = await productGroupRepo.findAll({input: {where: {}}})
            const structure = await productStructureRepo.findAll({input: {where: {}}})
            setSelectorData({productLine, um, area, groups, structure})
        } catch (err) {
            toast.error(err?.toString())
        }
    }
    const loadLineData = async (id) => {
        console.log("load")
        try {
            const um=selectorData.um
            const area=selectorData.area
            const groups=selectorData.groups
            const structure=selectorData.structure
            const productLine =  await productLineRepo.findAll({input: {where: {productStructure:{eq:id}}}})
            setSelectorData({productLine, um, area, groups, structure})
        } catch (err) {
            toast.error(err?.toString())
        }
    }


    React.useEffect(() => {
        loadSelectorData().then()
    }, [])
    
 
    const onSubmit = async (data: ProductFormField)  => {
       
    let photoFile;
      if (isValid && files.photoFile) {
    if (upLoading) {
        upLoading();
    }
    const fileParam = 'photoFile';
    const toRemove = initialFiles?.photoFile?.id;
    const uploadResult = await processFile({ file: files.photoFile, fileParam, toRemove });
    photoFile = uploadResult?.[fileParam];
}

        submitAction({...data, photoFile});
    };

    return (<form id={formId}
                  className='w-full flex flex-col p-2'
                  onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>

            <Grid item xs={6} className='w-full p-16 flex justify-end'>

                <Controller
                    // @ts-ignore
                    name={'compound'}
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
                            /><label>{t('COMPOUND')}</label></div>)}/>
            </Grid>

            <Grid item xs={6} className='w-full p-16 flex justify-end'>

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
            <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="barCodeProduct"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('BARCODE_PRODUCT')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.barCodeProduct}
                            helperText={errors?.barCodeProduct?.message}

                        />)}/>
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

            <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="ref"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('REF')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.ref}
                            helperText={errors?.ref?.message}
                        />)}/>
            </Grid>

            <Grid item xs={6} md={6} className='w-full p-16'>
                <Controller
                    name="structure"
                    control={control}
                    render={({ field }) => (
                        <GenericSelector<ProductStructure>
                            {...field}
                            param={'id'}
                            displayField={'name'}
                            values={selectorData.structure}
                            render={(item) => <label>{item.code}-{item.name}</label>}
                            onChange={({ target: { value } }) => {
                                loadLineData(value)
                                setValue('structure',value)
                            }}
                            size='small'
                            label={t('LEVEL')}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    )} />
            </Grid>

            <Grid item xs={6} md={6} className='w-full p-16'>
                <Controller
                    name="productLine"
                    control={control}
                    render={({ field }) => (
                        <GenericSelector<ProductLine>
                            {...field}
                            param={'id'}
                            displayField={'name'}
                            values={selectorData.productLine}
                            render={(item) => <label>{item.code}-{item.name}</label>}
                            size='small'
                            label={t('LINE')}
                            variant="outlined"
                            fullWidth

                        />
                    )} />
            </Grid>

            <Grid item xs={6} md={6} className='w-full p-16'>
                <Controller
                    name="um"
                    control={control}
                    render={({ field }) => (
                        <GenericSelector<UnitMeasurement>
                            {...field}
                            param={'id'}
                            displayField={'name'}
                            values={selectorData.um}
                            render={(item) => <label>{item.name}</label>}
                            size='small'
                            label={t('UNIT_MEASUREMENT')}
                            variant="outlined"
                            fullWidth
                        />
                    )} />
            </Grid>

            <Grid item xs={6} md={6} className='w-full p-16'>
                <Controller
                    name="area"
                    control={control}
                    render={({ field }) => (
                        <GenericSelector<ProductArea>
                            {...field}
                            param={'id'}
                            displayField={'name'}
                            values={selectorData.area}
                            render={(item) => <label>{item.name}</label>}
                            size='small'
                            label={t('PRODUCT_AREA')}
                            variant="outlined"
                            fullWidth
                        />
                    )} />
            </Grid>           
            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                    name="shoppingAssistant"
                    control={control}
                    render={({ field }) => (
                        <BooleanSelector
                            {...field}
                            size='small'
                            label={t('SHOPPING_ASSISTANT')}
                            variant="outlined"
                            fullWidth
                        />)} />
            </Grid>    

            <Grid item xs={12} className='w-full p-16'>
                <Controller
                    name="groups"
                    control={control}
                    render={({ field }) => (
                        <GenericSelector<ProductGroup>
                            {...omit(field, ['value'])}
                            multiple
                            value={Array.from(field.value ?? [])}
                            param={'id'}
                            displayField={'name'}
                            values={selectorData.groups}
                            size='small'
                            label={t('GROUPS')}
                            variant="outlined"
                            fullWidth
                            
                        />
                    )} />
            </Grid>

 
            <Grid item xs={12} md={6} className='w-full p-16 hidden'>
                <Controller
                    name="compound"
                    control={control}
                    render={({ field }) => (
                        <BooleanSelector
                            {...field}
                            size='small'
                            label={t('COMPOUND')}
                            variant="outlined"
                            fullWidth
                        />)} />
            </Grid>      
            {/*
              <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                    name="tax"
                    control={control}
                    render={({field}) => (
                        <GenericSelector<Tax>
                            {...field}
                            param={'id'}
                            displayField={'name'}
                            values={selectorData.taxes}
                            render={(item) => <label>{item.name}</label>}
                            size='small'
                            label={t('common:TAX')}
                            variant="outlined"
                            fullWidth
                        />
                    )}/>
            </Grid>

             */}

            <Grid item xs={12} className='w-full p-16'>
                <Controller
                    name="description"
                    control={control}
                    render={({field}) => (
                        <TextField multiline
                                   rows={4}
                                   {...field}
                                   size='small'
                                   label={t('common:DESCRIPTION')}
                                   autoFocus
                                   variant="outlined"
                                   fullWidth
                        />)}/>
            </Grid>

            <Grid item xs={12} className='w-full p-16'>
				<GenericUpload title={t('FILE')}
							   accept={'image/*'}
							   upFiles={(fs) => {
								   setFiles({ ...files, photoFile: _.first(fs) });
							   }} initial={initialFiles?.photoFile} />
			</Grid>

        </Grid>


    </form>);


};


export default ProductForm;
