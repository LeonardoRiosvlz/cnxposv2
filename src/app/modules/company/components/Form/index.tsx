import React from 'react';
import {useTranslation} from 'react-i18next';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {Switch} from '@material-ui/core';
import CountrySelector from 'app/modules/common/components/CountrySelector';
import { User } from 'api/repositories/user/types/user.types';
import useRepository from 'app/modules/common/hooks/use-repository';
import { UserRepository } from 'api/repositories/user/user.repository';
import { toast } from 'react-toastify';
import GenericSelector from 'app/modules/common/components/GenericSelector';
import _ from '@lodash'
import {CloudFile} from "api/types/cloud-file.type";
import useFile from "app/modules/files/hooks/use-file";
import GenericUpload from "app/modules/common/components/GenericUpload";


export type CompanyFormField = {
    name: string;
    country: string;
    city: string;
    webSite: string;
    address: string;
    phoneNumber: string;
    email: string;
    nit: string;
    isActive: boolean;
    photoFile?: string;
    contact?: string;
}



type SelectorData = {
    user: Array<User>
    //processCategories: Array<ProcessCategory>
}

type CompanyFormFiles = {
    photoFile?: CloudFile | null,
}

type Props = {
    submitAction: (data: CompanyFormField) => unknown
    formId: string
    initialData?: CompanyFormField
    initialFiles?: CompanyFormFiles,
    upLoading?: () => void,
}
const CompanyForm: React.FC<Props> = ({submitAction, initialFiles, upLoading, formId, initialData}: Props) => {

    const {t} = useTranslation(['company', 'common']);
    const { processFile } = useFile();
    const schema = yup.object().shape({
        name: yup.string().required(t('common:NAME_REQUIRED')),
        isActive: yup.boolean(),
    });

    const defaultValues: CompanyFormField | {} = initialData ? {
        ...initialData
    } : {isActive: true};

    const {handleSubmit, control, formState: {errors, dirtyFields, isValid}} = useForm<CompanyFormField>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
        defaultValues

    });


    const [files, setFiles] = React.useState<{ [K in keyof CompanyFormFiles]?: File }>({photoFile: undefined});

    const [selectorData, setSelectorData] = React.useState<SelectorData>({user: []})

    const userRepo = useRepository(UserRepository)


    const loadSelectorData = async () => {

        try {
            const user = await userRepo.findAll({input: {where: {}}})
            setSelectorData({user})
        } catch (err) {
            toast.error(err?.toString())
        }
    }

    React.useEffect(() => {
        loadSelectorData().then()
    }, [])


    const onSubmit  = async (data: CompanyFormField) => {


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

            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                    name="country"
                    control={control}
                    render={({field}) => (
                        <CountrySelector
                            {...field}
                            size='small'
                            label={t('COUNTRY')}
                            variant="outlined"
                            fullWidth
                        />)}/>
            </Grid>

            <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="city"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('common:CITY')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.city}
                            helperText={errors?.city?.message}
                            required
                        />)}/>
            </Grid>
            
            <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="webSite"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('common:WEBSITE')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.webSite}
                            helperText={errors?.webSite?.message}
                            required
                        />)}/>
            </Grid>

            <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="address"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('common:ADDRESS')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.address}
                            helperText={errors?.address?.message}
                            required
                        />)}/>
             </Grid>

             <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="phoneNumber"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('common:PHONE_NUMBER')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.phoneNumber}
                            helperText={errors?.phoneNumber?.message}
                            required
                        />)}/>
            </Grid>


            <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="email"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('common:EMAIL')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.email}
                            helperText={errors?.email?.message}
                            required
                        />)}/>
            </Grid>

            <Grid item xs={6} className='w-full p-16'>

                <Controller
                    name="nit"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            size='small'
                            label={t('common:NIT')}
                            autoFocus
                            variant="outlined"
                            fullWidth
                            error={!!errors.nit}
                            helperText={errors?.nit?.message}
                            required
                        />)}/>
            </Grid>

            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                    name="contact"
                    control={control}
                    render={({ field }) => (
                        <GenericSelector<User>
                            {...field}
                            param={'id'}
                            displayField={'email'}
                            values={selectorData.user}
                            render={(item) => <label>{item.email}</label>}
                            size='small'
                            label={t('CONTACT')}
                            variant="outlined"
                            fullWidth
                        />
                    )} />
            </Grid>
            <Grid item xs={12} className='w-full p-16'>
				<GenericUpload title={t('PHOTO')}
							   accept={'image/*'}
							   upFiles={(fs) => {
								   setFiles({ ...files, photoFile: _.first(fs) });
							   }} initial={initialFiles?.photoFile} />
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


export default CompanyForm;
