import React from 'react';
import {useTranslation} from 'react-i18next';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {Switch} from '@material-ui/core';
import { ResolutionClass, ResolutionType } from 'api/graphql/schema/types';
import EnumSelector from 'app/modules/common/components/EnumSelector';
import moment from 'moment';


export type BillingResolutionFormField = {
    resolutionClass: ResolutionClass;
    resolutionType: ResolutionType;
    resolutionNumber: string;
    from?: Date;
    to?: Date;
    prefix: string;
    initialNumber: number;
    finalNumber: number;
    localBilling?: boolean;
}



type SelectorData = {
    //taxes: Array<Tax>
    //processCategories: Array<ProcessCategory>
}

type BillingResolutionFormFiles = {
    //resolutionFile?: CloudFile,
    //programFile?: CloudFile
}

type Props = {
    submitAction: (data: BillingResolutionFormField) => unknown
    formId: string
    initialData?: BillingResolutionFormField
    initialFiles?: BillingResolutionFormFiles,
    upLoading?: () => void,
}
const BillingResolutionForm: React.FC<Props> = ({submitAction, initialFiles, upLoading, formId, initialData}: Props) => {

    const {t} = useTranslation(['billing-resolution', 'common']);
    //	const { processFile } = useFile();
    const schema = yup.object().shape({
        resolutionClass: yup.string().required(t('RESOLUTION_CLASS_REQUIRED')),
        resolutionType: yup.string().required(t('RESOLUTION_TYPE_REQUIRED')),
        resolutionNumber: yup.string().required(t('RESOLUTION_NUMBER_REQUIRED')),
        from: yup.date().required(t('common:FROM_REQUIRED')),
        to: yup.date().required(t('TO_REQUIRED')),
        initialNumber: yup.number().required(t('INITIAL_NUMBER_REQUIRED')),
        finalNumber: yup.number().required(t('FINAL_NUMBER_REQUIRED')),
     
    });

    const defaultValues: BillingResolutionFormField | {} = initialData ? {
        ...initialData
    } : {};

    const {handleSubmit, control, formState: {errors, dirtyFields, isValid}} = useForm<BillingResolutionFormField>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
        defaultValues

    });


    //const [files, setFiles] = React.useState<{ [K in keyof BillingResolutionFormFiles]?: File }>({});

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


    const onSubmit = (data: BillingResolutionFormField) => {

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

        <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                name="resolutionClass"
                control={control}
                render={({ field }) => (
                    <EnumSelector<ResolutionClass>
                    enumerator={ResolutionClass}
                    {...field}
                    size='small'
                    label={t('RESOLUTION_CLASS')}
                    autoFocus
                    variant="outlined"
                    fullWidth
                    i18n={{
                        enabled: true,
                        ns: 'billing-resolution'
                    }}
                    />)} />
        </Grid>


        <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                name="resolutionType"
                control={control}
                render={({ field }) => (
                    <EnumSelector<ResolutionType>
                    enumerator={ResolutionType}
                    {...field}
                    size='small'
                    label={t('RESOLUTION_TYPE')}
                    autoFocus
                    variant="outlined"
                    fullWidth
                    i18n={{
                        enabled: true,
                        ns: 'billing-resolution'
                    }}
                    />)} />
            </Grid>

            <Grid item xs={12} className='w-full p-16'>

                <Controller
                    name="resolutionNumber"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('RESOLUTION_NUMBER')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.resolutionNumber}
                            helperText={errors?.resolutionNumber?.message}
                            required
                        />)}/>
            </Grid>

            <Grid item xs={12} md={6} className='w-full p-16'>

                <Controller
                name="from"
                control={control}
                render={({ field }) => (
                    <TextField
                    {...field}
                    size='small'
                    value={moment(field.value).format('YYYY-MM-DD')}
                    label={t('FROM')}
                    autoFocus
                    variant="outlined"
                    fullWidth
                        type='date'
                    error={!!errors.from}
                    helperText={errors?.from?.message}
                    required
                    />)} />
            </Grid>

            <Grid item xs={12} md={6} className='w-full p-16'>

                <Controller
                name="to"
                control={control}
                render={({ field }) => (
                    <TextField
                    {...field}
                    size='small'
                    value={moment(field.value).format('YYYY-MM-DD')}
                    label={t('TO')}
                    autoFocus
                    variant="outlined"
                    fullWidth
                        type='date'
                    error={!!errors.to}
                    helperText={errors?.to?.message}
                    required
                    />)} />
            </Grid>

            <Grid item xs={12} className='w-full p-16'>

                <Controller
                    name="prefix"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('PREFIX')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.prefix}
                            helperText={errors?.prefix?.message}
                            required
                        />)}/>
            </Grid>


            <Grid item xs={12} className='w-full p-16'>

                <Controller
                    name="initialNumber"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('INITIAL_NUMBER')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.initialNumber}
                            helperText={errors?.initialNumber?.message}
                            required
                        />)}/>
            </Grid>



            <Grid item xs={12} className='w-full p-16'>

                <Controller
                    name="finalNumber"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('FINAL_NUMBER')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.finalNumber}
                            helperText={errors?.finalNumber?.message}
                            required
                        />)}/>
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


export default BillingResolutionForm;
