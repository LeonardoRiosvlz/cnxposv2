import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	DialogProps,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ButtonLoader from 'app/modules/common/components/ButtonLoader';

const useStyles = makeStyles({
	dialogContent: {
		minWidth: 700
	},

	title: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#3C3C3C',
		fontSize: 8,
		color: '#ccc'
	}


});

export type GenericModalProps = {
	onClose: () => void
	open: boolean
	okLoading?: boolean
	title: string,
	children?: React.ReactNode | Array<React.ReactNode>
	formId?: string,
	cancelBtn?: boolean,
	okBtnTxt: string,
	handleOk?: (...args: Array<any>) => unknown,
	minHeight?: number | string
} & Pick<DialogProps, 'maxWidth'>

const GenericModal: React.FC<GenericModalProps> = ({
													   onClose,
													   open,
													   okLoading = false,
													   title,
													   formId,
													   children,
													   cancelBtn = false,
													   okBtnTxt,
													   maxWidth = 'sm',
													   minHeight = 400,
													   handleOk
												   }) => {
	const classes = useStyles();
	const { t } = useTranslation(['common']);
	const handleClose = () => {
		onClose();
	};

	const okBtnLabel = okBtnTxt || t('EXIT');

	return (
		<Dialog fullWidth maxWidth={maxWidth} onClose={handleClose} open={open}>
			<DialogTitle className={classes.title}>{title}</DialogTitle>
			<DialogContent className="z-10" style={{ minHeight }}>
				{children}
			</DialogContent>
			<DialogActions className='w-full p-16 z-10'>
				{cancelBtn && <Button onClick={handleClose} className="whitespace-nowrap"
									  variant="contained"
									  color="primary">
					{t('CANCEL')}
				</Button>}
				<Button className="whitespace-nowrap"
						variant="contained"
						color="primary"
						type={formId ? 'submit' : 'button'}
						onClick={handleOk}
						form={formId}>
					{okLoading ? <ButtonLoader /> : okBtnLabel}
				</Button>
			</DialogActions>
			<div className='w-full absolute bottom-0 left-0 z-0 opacity-30' >
				<svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 198.5,283 397,316 637,316 C 877,316 1158.5,283 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#204657ff" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>	
			</div>
		</Dialog>

	);
};


export default GenericModal;



