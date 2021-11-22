import React from 'react';
import {useTranslation} from 'react-i18next';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {Switch} from '@material-ui/core';
import { WarehouseTypes } from 'api/graphql/schema/types';
import EnumSelector from 'app/modules/common/components/EnumSelector';


export type WarehouseFormField = {
    name: string;
    code: string;
    location: string;
    description?: string;
    warehouseTypes: WarehouseTypes;
    isActive?: boolean;
}



type SelectorData = {
    //taxes: Array<Tax>
    //processCategories: Array<ProcessCategory>
}

type WarehouseFormFiles = {
    //resolutionFile?: CloudFile,
    //programFile?: CloudFile
}

type Props = {
    submitAction: (data: WarehouseFormField) => unknown
    formId: string
    initialData?: WarehouseFormField
    initialFiles?: WarehouseFormFiles,
    upLoading?: () => void,
}
const WarehouseForm: React.FC<Props> = ({submitAction, initialFiles, upLoading, formId, initialData}: Props) => {

    const {t} = useTranslation(['warehouse', 'common']);
    //	const { processFile } = useFile();
    const schema = yup.object().shape({
        name: yup.string().required(t('common:NAME_REQUIRED')),
        isActive: yup.boolean(),
    });

    const defaultValues: WarehouseFormField | {} = initialData ? {
        ...initialData
    } : {isActive: true};

    const {handleSubmit, control, formState: {errors, dirtyFields, isValid}} = useForm<WarehouseFormField>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
        defaultValues

    });


    //const [files, setFiles] = React.useState<{ [K in keyof WarehouseFormFiles]?: File }>({});

    /*const [selectorData, setSelectorData] = React.useState<SelectorData>({taxes: [], processCategories: []})

    const taxRepo = useRepository(TaxRepository)
    const processCategoryRepo = useRepository(ProcessCategoryRepository)


    const loadSelectorData = async () => {

        try {
            const taxes = await taxRepo.findAll({input: {where: {}}})
            const processCategories = await processCategoryRepo.findAll({input: {where: {}}})
            setSelectorData({taxes, processCategories})
        } catch (err) {
            toast.error(err?.toString())
        }
    }

    React.useEffect(() => {
        loadSelectorData().then()
    }, [])*/


    const onSubmit = (data: WarehouseFormField) => {

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
                    name="code"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('common:CODE')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.code}
                            helperText={errors?.code?.message}
                            required
                        />)}/>
            </Grid>
            <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="location"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('common:LOCATION')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.location}
                            helperText={errors?.location?.message}
                            required
                        />)}/>
            </Grid>
            <Grid item xs={6} md={6} className='w-full p-16'>
                <Controller
                name="warehouseTypes"
                control={control}
                render={({ field }) => (
                    <EnumSelector<WarehouseTypes>
                    enumerator={WarehouseTypes}
                    {...field}
                    size='small'
                    label={t('WAREHOUSE_TYPES')}
                    autoFocus
                    variant="outlined"
                    fullWidth
                    i18n={{
                        enabled: true,
                        ns: 'monetary-denomination'
                    }}
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

            {/*<Grid item xs={12} className='w-full p-16'>
				<GenericUpload title={t('PROGRAM_FILE')}
							   accept={'application/pdf'}
							   disabled={!apResolution}
							   upFiles={(fs) => {
								   setFiles({ ...files, programFile: _.first(fs) });
							   }} initial={initialFiles?.programFile} />
			</Grid>*/}

        </Grid>


    </form>);


};


export default WarehouseForm;
