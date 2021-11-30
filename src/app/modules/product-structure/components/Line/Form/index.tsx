import React from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import useFile from "app/modules/files/hooks/use-file";
import GenericUpload from "app/modules/common/components/GenericUpload";
import EnumSelector from 'app/modules/common/components/EnumSelector';
import _ from '@lodash';
import {CloudFile} from "api/types/cloud-file.type";
import { Switch } from '@material-ui/core';

type ProductLineFormFiles = {
	file?: CloudFile | null,
}

export type ProductLineFormField = {
	name: string;
	code: string;
}

type Props = {
	submitAction: (data: ProductLineFormField) => unknown
	formId: string
	initialData?: ProductLineFormField,
	upLoading?: () => void,
	initialFiles?: ProductLineFormFiles
}
const ProductLineForm: React.FC<Props> = ({ submitAction, upLoading, initialFiles, formId, initialData }: Props) => {

	const { t } = useTranslation(['quick-medical-history', 'common']);
	const { processFile } = useFile();
	const schema = yup.object().shape({
        name: yup.string().required(t('common:NAME_REQUIRED')),
	});

	const defaultValues: ProductLineFormField | {} = initialData ? {
		...initialData
	} : {code:"000"};

	const [files, setFiles] = React.useState<{ [K in keyof ProductLineFormFiles]?: File }>({file: undefined});


	const { handleSubmit, watch, control, formState: { errors, dirtyFields, isValid } } = useForm<ProductLineFormField>({
		mode: 'onChange',
		//@ts-ignore
		resolver: yupResolver(schema),
		defaultValues

	});


    const onSubmit  = async (data: ProductLineFormField) => {


        let file;
        if (isValid && files.file) {
            if (upLoading) {
                upLoading();
            }
            const fileParam = 'icon';
            const toRemove = initialFiles?.file?.id;
            const uploadResult = await processFile({file: files.file, fileParam, toRemove});
            file = uploadResult?.[fileParam];
        }

        submitAction({...data});
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

		</Grid>
	</form>);


};


export default ProductLineForm;