import React from 'react';
import {useTranslation} from 'react-i18next';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {Switch} from '@material-ui/core';
import { Preparation } from 'api/repositories/preparation/types/preparation.types';
import { PreparationRepository } from 'api/repositories/preparation/preparation.repository';
import useRepository from 'app/modules/common/hooks/use-repository';
import { toast } from 'react-toastify';
import GenericSelector from 'app/modules/common/components/GenericSelector';
import { omit } from 'lodash';

export type PreparationTypeFormField = {
    name: string;
    description?: string;
    preparation?: Array<string>;
}



type SelectorData = {
    preparation: Array<Preparation>
    //processCategories: Array<ProcessCategory>
}

type PreparationTypeFormFiles = {
    //resolutionFile?: CloudFile,
    //programFile?: CloudFile
}

type Props = {
    submitAction: (data: PreparationTypeFormField) => unknown
    formId: string
    initialData?: PreparationTypeFormField
    initialFiles?: PreparationTypeFormFiles,
    upLoading?: () => void,
}
const PreparationTypeForm: React.FC<Props> = ({submitAction, initialFiles, upLoading, formId, initialData}: Props) => {

    const {t} = useTranslation(['preparation-type', 'common']);
    //	const { processFile } = useFile();
    const schema = yup.object().shape({
        name: yup.string().required(t('common:NAME_REQUIRED')),
        isActive: yup.boolean(),
    });

    const defaultValues: PreparationTypeFormField | {} = initialData ? {
        ...initialData
    } : {};

    const {handleSubmit, control, formState: {errors, dirtyFields, isValid}} = useForm<PreparationTypeFormField>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
        defaultValues

    });


    //const [files, setFiles] = React.useState<{ [K in keyof PreparationTypeFormFiles]?: File }>({});

    const [selectorData, setSelectorData] = React.useState<SelectorData>({preparation: []})

    const preparationRepo = useRepository(PreparationRepository)


    const loadSelectorData = async () => {

        try {
            const preparation = await preparationRepo.findAll({input: {where: {}}})
            setSelectorData({preparation})
        } catch (err) {
            toast.error(err?.toString())
        }
    }

    React.useEffect(() => {
        loadSelectorData().then()
    }, [])


    const onSubmit = (data: PreparationTypeFormField) => {

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
                    name="preparation"
                    control={control}
                    render={({ field }) => (
                        <GenericSelector<Preparation>
                            {...omit(field, ['value'])}
                            multiple
                            value={Array.from(field.value ?? [])}
                            param={'id'}
                            displayField={'name'}
                            values={selectorData.preparation}
                            size='small'
                            label={t('PREPARATION')}
                            variant="outlined"
                            fullWidth
                            
                        />
                    )} />
            </Grid>

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


export default PreparationTypeForm;
