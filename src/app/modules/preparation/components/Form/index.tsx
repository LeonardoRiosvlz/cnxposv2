import React from 'react';
import {useTranslation} from 'react-i18next';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {Switch} from '@material-ui/core';


export type PreparationFormField = {
    name: string;
    description?: string;
}



type SelectorData = {
    //taxes: Array<Tax>
    //processCategories: Array<ProcessCategory>
}

type PreparationFormFiles = {
    //resolutionFile?: CloudFile,
    //programFile?: CloudFile
}

type Props = {
    submitAction: (data: PreparationFormField) => unknown
    formId: string
    initialData?: PreparationFormField
    initialFiles?: PreparationFormFiles,
    upLoading?: () => void,
}
const PreparationForm: React.FC<Props> = ({submitAction, initialFiles, upLoading, formId, initialData}: Props) => {

    const {t} = useTranslation(['preparation', 'common']);
    //	const { processFile } = useFile();
    const schema = yup.object().shape({
        name: yup.string().required(t('common:NAME_REQUIRED')),
      
    });

    const defaultValues: PreparationFormField | {} = initialData ? {
        ...initialData
    } : {};

    const {handleSubmit, control, formState: {errors, dirtyFields, isValid}} = useForm<PreparationFormField>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
        defaultValues

    });


    //const [files, setFiles] = React.useState<{ [K in keyof PreparationFormFiles]?: File }>({});

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


    const onSubmit = (data: PreparationFormField) => {

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


            <Grid item xs={12} className='w-full p-16'>

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


export default PreparationForm;
