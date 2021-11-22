import React from 'react';
import {useTranslation} from 'react-i18next';
import * as yup from 'yup';
import _ from '@lodash'
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {Switch} from '@material-ui/core';
import {CloudFile} from "api/types/cloud-file.type";
import { MonetaryDenominationTypes } from 'api/graphql/schema/types';
import useFile from 'app/modules/files/hooks/use-file';
import GenericUpload from 'app/modules/common/components/GenericUpload';
import EnumSelector from 'app/modules/common/components/EnumSelector';


export type MonetaryDenominationFormField = {
     value: number;
     monetaryDenominationTypes: MonetaryDenominationTypes;
     photoFile?: string;
}


 
type SelectorData = {
    //taxes: Array<Tax>
    //processCategories: Array<ProcessCategory>
}

type MonetaryDenominationFormFiles = {
    photoFile?: CloudFile | null,

}

type Props = {
    submitAction: (data: MonetaryDenominationFormField) => unknown
    formId: string
    initialData?: MonetaryDenominationFormField
    initialFiles?: MonetaryDenominationFormFiles,
    upLoading?: () => void,
}
const MonetaryDenominationForm: React.FC<Props> = ({submitAction, initialFiles, upLoading, formId, initialData}: Props) => {

    const {t} = useTranslation(['monetary-denomination', 'common']);
    const { processFile } = useFile();
    const schema = yup.object().shape({
        value: yup.number().required(t('common:VALUE_REQUIRED')),
 
    });

    const defaultValues: MonetaryDenominationFormField | {} = initialData ? {
        ...initialData
    } : {};

    const {handleSubmit, control, formState: {errors, dirtyFields, isValid}} = useForm<MonetaryDenominationFormField>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
        defaultValues

    });


    const [files, setFiles] = React.useState<{ [K in keyof MonetaryDenominationFormFiles]?: File }>({});

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


    const onSubmit  = async (data: MonetaryDenominationFormField) => {


        let photoFile;
        if (isValid && files.photoFile) {
            if (upLoading) {
                upLoading();
            }
            const fileParam = 'photoFile';
            const toRemove = initialFiles?.photoFile?.id;
            const uploadResult = await processFile({file: files.photoFile, fileParam, toRemove});
            photoFile = uploadResult?.[fileParam];
        }

        submitAction({...data, photoFile});
    };
    

    return (<form id={formId}
                  className='w-full flex flex-col p-2'
                  onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>

            <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="value"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('common:NAME')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.value}
                            helperText={errors?.value?.message}
                            required
                        />)}/>
            </Grid>
            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                name="monetaryDenominationTypes"
                control={control}
                render={({ field }) => (
                    <EnumSelector<MonetaryDenominationTypes>
                    enumerator={MonetaryDenominationTypes}
                    {...field}
                    size='small'
                    label={t('MONETARY_DENOMINATION_TYPE')}
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
				<GenericUpload title={t('IMAGE')}
							   accept={'image/*'}
							   upFiles={(fs) => {
								   setFiles({ ...files, photoFile: _.first(fs) });
							   }} initial={initialFiles?.photoFile} />
			</Grid>

        </Grid>


    </form>);


};


export default MonetaryDenominationForm;
