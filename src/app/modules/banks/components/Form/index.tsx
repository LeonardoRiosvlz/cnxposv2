import React from 'react';
import {useTranslation} from 'react-i18next';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {Switch} from '@material-ui/core';


export type BanksFormField = {
    name: string;
    accountingAccount?: number;
}



type SelectorData = {
    //taxes: Array<Tax>
    //processCategories: Array<ProcessCategory>
}

type BanksFormFiles = {
    //resolutionFile?: CloudFile,
    //programFile?: CloudFile
}

type Props = {
    submitAction: (data: BanksFormField) => unknown
    formId: string
    initialData?: BanksFormField
    initialFiles?: BanksFormFiles,
    upLoading?: () => void,
}
const BanksForm: React.FC<Props> = ({submitAction, initialFiles, upLoading, formId, initialData}: Props) => {

    const {t} = useTranslation(['banks', 'common']);
    //	const { processFile } = useFile();
    const schema = yup.object().shape({
        name: yup.string().required(t('common:NAME_REQUIRED')),
        accountingAccount: yup.number().required(t('ACCOUNTING_ACCOUNT')),
    });

    const defaultValues: BanksFormField | {} = initialData ? {
        ...initialData
    } : {

    };

    const {handleSubmit, control, formState: {errors, dirtyFields, isValid}} = useForm<BanksFormField>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
        defaultValues

    });


    //const [files, setFiles] = React.useState<{ [K in keyof BanksFormFiles]?: File }>({});

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


    const onSubmit = (data: BanksFormField) => {

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


            <Grid item xs={12} className='w-full p-16'>

                <Controller
                    name="accountingAccount"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('ACCOUNTING_ACCOUNT')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.accountingAccount}
                            helperText={errors?.accountingAccount?.message}
                    
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


export default BanksForm;
