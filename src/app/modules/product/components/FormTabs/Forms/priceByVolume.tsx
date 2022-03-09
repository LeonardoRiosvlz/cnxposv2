import React from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Grid from '@material-ui/core/Grid';
import { Button, Card, CircularProgress, Divider, Icon, IconButton, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography } from '@material-ui/core';
import useRepository from 'app/modules/common/hooks/use-repository';
import { toast } from 'react-toastify';
import GenericSelector from 'app/modules/common/components/GenericSelector';
import _ from '@lodash';
import useFile from 'app/modules/files/hooks/use-file';
import { Product } from 'api/repositories/product/types/product.types';
import { FormUtils } from 'app/modules/common/utils/FormUtils';
import { ProductSalePriceRepository } from "api/repositories/product-sale-price/product-sale-price.repository";
import { ProductSalePrice } from "api/repositories/product-sale-price/types/product-sale-price.types";
import { TaxesRepository } from 'api/repositories/taxes/taxes.repository';
import { Taxes } from 'api/repositories/taxes/types/taxes.types';
import PriceField from 'app/modules/common/components/PriceField';
import PercentageField from 'app/modules/common/components/PercentageField';
import PriceCell from 'app/modules/common/components/TableCell/PriceCell';
import { PriceByVolumeRepository } from 'api/repositories/price-by-volume/price-by-volume.repository';
import { PriceByVolume } from 'api/repositories/price-by-volume/types/price-by-volume.types';
import PriceCellSimple from 'app/modules/common/components/TableCell/PriceCellSimple';


export type PriceByVolumeFormField = {

     tax: string;
     utility: number;
     value: number;
     quantity: number;
 
} 

type SelectorData = {
    taxes: Array<Taxes>
}


type Props = {

    IdProduct: string,
    salesPrices: ProductSalePrice
    costUnit: number;
}
const PriceByVolumeForm: React.FC<Props> = ({ IdProduct, costUnit, salesPrices }: Props) => {
    const repo = useRepository(PriceByVolumeRepository)
    const { t } = useTranslation(['product', 'common']);
    const [loading, setLoading] = React.useState<boolean>(false)
    const [firstLoad, setFirstLoad] = React.useState<boolean>(false)
    const [entity, setEntity] = React.useState<Array<PriceByVolume>>([]);
    const schema = yup.object().shape({
        utility: yup.number().required(t('common:NAME_REQUIRED')),
        value: yup.number().required(t('common:NAME_REQUIRED')),
        quantity: yup.number().required(t('common:NAME_REQUIRED')),
        tax: yup.string().required(t('common:NAME_REQUIRED')),
    });


    const { handleSubmit, watch, getValues, setValue, control, formState: { errors, dirtyFields, isValid } } = useForm<PriceByVolumeFormField>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
    });

    const [selectorData, setSelectorData] = React.useState<SelectorData>({ taxes: [], })
    const [priceByVolume, setPriceByVolume,] = React.useState<PriceByVolume>(null)
    const taxesRepo = useRepository(TaxesRepository)
    const [collection, setCollection] = React.useState<PriceByVolume>(undefined);
	const [editMode, setEditMode] = React.useState<boolean>(false);
	const [entityId, setEntityId] = React.useState<string>('');
    const loadSelectorData = async () => {
        try {
            const taxes = await taxesRepo.findAll({ input: { where: {} } })
            setSelectorData({ taxes })
        } catch (err) {
            toast.error(err?.toString())
        }
    }
    React.useEffect(() => {
       
        loadSelectorData().then()
        fetch();
    }, [])

    React.useEffect(() => {


    }, [entity,watch('tax')])


    const utilityToPercentage =  ( ) => {
       const value = costUnit*(getValues('utility')/100);
       setValue('value',value+costUnit)

    };
    const utilityToGeneraValue =  ( ) => {
        const generalValue= getValues('value')?getValues('value'):0;
        const values =(generalValue*100)/costUnit; 
        const percentage = (values-100)<1? 0: values-100;
        setValue('utility',percentage)
    }


    const onSubmit = async (data: PriceByVolumeFormField) => {
        //@ts-ignore
        if (editMode || firstLoad) {
            editAction(data);
        } else {
            addAction(data);
        }
    };

    const fetch = () => {
        // @ts-ignore
        repo.findAll(
            {
                input: {
                    where: {
                        and: [{ product: { eq: IdProduct } }]
                    }
                }
            }).then((res: Array<PriceByVolume>) => {
                // @ts-ignore
                setEntity(res);
            }).catch((err: any) => {
                // @ts-ignore
                toast.error(err?.toString());
            });
    };

    const editAction = (formData: PriceByVolumeFormField) => {
        setLoading(true);
        const toUpdateData = FormUtils.toUpdateValue<PriceByVolumeFormField, PriceByVolume>(formData, priceByVolume);
        repo.update({
            input: {
                entityId: collection.id,
                update: {

                    tax:getValues('tax'),
                    quantity:getValues('quantity'),
                    value:getValues('value'),
                    utility:getValues('utility'),
                },
            }
        }).then(() => {
            fetch();
            setLoading(false);
            toast.info(t('common:ELEMENT_EDITED'));
        }).catch((err: any) => {
            toast.error(err?.toString());
            setLoading(false);
        });
    };
    const addAction = (formData: PriceByVolumeFormField) => {

        setLoading(true);
        repo.create({
            input: {
                ...formData,
                product: IdProduct
            }
        }).then(() => {
            toast.info(t('common:ELEMENT_CREATED'));
            setLoading(false);
            setFirstLoad(true);
            fetch();
        }).catch((err: any) => {
            toast.error(err?.toString());
            setLoading(false);
        });
    };

    const removeAction = (id:string) => {
        repo.delete({input: {entityId: id}}).then(() => {
            fetch();
            toast.info(t('common:ELEMENT_DELETED'));
        }).catch((err: any) => {
            toast.error(err?.toString());
        });
    };

	const resetForm = ()=>{
		
		setEditMode(false);
		setValue('utility',0);
		setValue('value',costUnit);
		setValue('quantity',1);
		setValue('tax','');
	}
    const editSetForm = (row:PriceByVolume)=>{
        setEditMode(true)
        setCollection(row)
		// @ts-ignore
        setValue('utility',row.utility);
		setValue('value',row.value);
		setValue('quantity',row.quantity);
		setValue('tax',row.tax.id);
	}
    const styles = {
        container: {
          width: 65,
          whiteSpace:'nowrap',
          textOverflow:'ellipsis',
          overflow:'hidden'
    
        } as React.CSSProperties,
      };
    return (<>
        <form id='taxAndCost'
        className='w-full flex flex-col p-2'
        onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
            <Grid item xs={12} className='w-full p-16 flex justify-between'>

                <Typography variant="h6" className="text-center mb-16 opacity-75">
                    {t('PRICE_BY_VOLUME')}
                </Typography>
            </Grid>
            <Grid item xs={12} className='w-full p-16 flex justify-between'>

                <PriceCell title={t('TOTAL_UNIT_COST')} stl={'text-2xl text-green-600'} price={costUnit} />
        
            </Grid>

            <Divider className="w-full" />
            <Grid item xs={6} md={6} className='w-full p-16'>
                {watch('tax')}
                <Controller
                    name="tax"
                    control={control}
                    render={({ field }) => (
                        <GenericSelector<Taxes>
                            {...field}
                            param={'id'}
                            displayField={'name'}
                            values={selectorData.taxes}
                            render={(item) => <label>{item.tax? item.tax : collection.tax.identifier}</label>}
                            size='small'
                            label={t('TAX')}
                            variant="outlined"
                            fullWidth
                        />
                    )} />
            </Grid>
            <Grid item xs={6} md={6} className="w-full p-16">

                <Controller
                    name="value"
                    control={control}
                    render={({ field }) => (
                        <PriceField
                            {...field}
                            size="small"
                            label={t("GENERAL_VALUE")}
                            variant="outlined"
                            fullWidth
                            inputProps={{ min: 0 }}
                            error={!!errors.value}
                            helperText={errors?.value?.message}
                            onChange={e =>{
                                setValue('value',parseFloat(e.target.value))
                                utilityToGeneraValue()
                              }
                            }
                            required
                        />)} />
            </Grid>
             
            <Grid item xs={6} md={6} className="w-full p-16">

                <Controller
                    name="utility"
                    control={control}
                    render={({ field }) => (
                        <PercentageField
                            {...field}
                            size="small"
                            label={t("GENERAL_UTILITY_VALUE")}
                            variant="outlined"
                            fullWidth
                            inputProps={{ min: 0 }}
                            error={!!errors.utility}
                            helperText={errors?.utility?.message}
                            onChange={e =>{
                                setValue('utility',parseFloat(e.target.value));
                                utilityToPercentage();
                              }
                            }
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                        />)} />
            </Grid>

            <Grid item xs={6} md={6} className="w-full p-16">

                <Controller
                    name="quantity"
                    control={control}
                    render={({ field }) => (
                        <PercentageField
                            {...field}
                            size="small"
                            label={t("QUANTITY")}
                            variant="outlined"
                            fullWidth
                            inputProps={{ min: 0 }}
                            error={!!errors.quantity}
                            helperText={errors?.quantity?.message}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                        />)} />
            </Grid>
            
				<Grid item xs={12} className='w-full p-16'>
					{loading && <CircularProgress className=" float-center "  />}
					{!editMode && <Button disabled={loading} className=" float-right bg-green-400 text-white" variant="contained" type='submit'>
						{t('common:ADD')}
					</Button>}
					{editMode && <Button disabled={loading} className=" float-right bg-green-400  text-white" variant="contained" type='submit'>
						{t('common:EDIT')}
					</Button>}
					{editMode && <Button disabled={loading} onClick={()=>resetForm()} className=" float-right bg-green-400  text-white" variant="contained">
						+
					</Button>}
				</Grid>


        </Grid>


    </form>
    <TableContainer >
        <Table style={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="left">{t('TAX')}</TableCell>
                <TableCell align="left">{t('UTILITY')}</TableCell>
                <TableCell align="left">{t('VALUE')}</TableCell>
                <TableCell align="left">{t('QUANTITY')}</TableCell>
                <TableCell align="left">Actions</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {entity && entity.map((row) => (
                    <TableRow
                    key={row.id}
                    >
                    <TableCell align="left"> {row.tax ? row.tax.identifier : ''}</TableCell>
                    <TableCell component="th" scope="row">
                         <div style={styles.container}>% {row.utility}</div> 
                    </TableCell>
                    <TableCell align="left" ><PriceCellSimple price={row.value} /></TableCell>
                    <TableCell align="left">{row.quantity}</TableCell>
                    <TableCell align="left">
                            <IconButton disabled={loading} onClick={()=>editSetForm(row)} className='py-0 pb-0 m-0 red text-blue-600' aria-label="delete" size="small">
                                <Icon className="p-0 m-0">edit</Icon>
                            </IconButton>
                            <IconButton disabled={loading} onClick={()=>removeAction(row.id)} className='py-0 pb-0 m-0 text-red-600' aria-label="delete" size="small">
                                <Icon className="py-0 m-0">delete</Icon>
                            </IconButton>
                    </TableCell>
            </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    </>);


};


export default PriceByVolumeForm;
