import React from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Grid from '@material-ui/core/Grid';
import { Button, Card, CircularProgress, Divider, Icon, Switch, TextField, Tooltip, Typography } from '@material-ui/core';
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
import { TaxesAndCostsRepository } from "api/repositories/taxes-and-costs/taxes-and-costs.repository";
import { TaxesAndCosts } from "api/repositories/taxes-and-costs/types/taxes-and-costs.types";


export type PricesFormField = {

    generalValueTax: string;
    generalValue: number;
    generalUtilityValue: number;
    commission: number;
    specialOneValueTax: string;
    specialOneValue: number;
    specialOneUtilityValue: number;
    specialTwoValueTax: string;
    specialTwoValue: number;
    specialTwoUtilityValue: number;

}
type Line = string;

type SelectorData = {
    taxes: Array<Taxes>
}


type Props = {

    IdProduct: string,
    initialData?: PricesFormField,
    upLoading?: () => void,
    salesPrices: ProductSalePrice
    editMode: Boolean,
    costUnit: number;
}
const SalePricesForm: React.FC<Props> = ({ upLoading, IdProduct, editMode, costUnit, salesPrices, initialData }: Props) => {
    const repo = useRepository(ProductSalePriceRepository)
    const { t } = useTranslation(['product', 'common']);
    const [loading, setLoading] = React.useState<Boolean>(false)
    const [firstLoad, setFirstLoad] = React.useState<Boolean>(false)
    const [entity, setEntity] = React.useState<ProductSalePrice>(null);
    const schema = yup.object().shape({
        generalValue: yup.number().required(t('common:NAME_REQUIRED')),
        generalValueTax: yup.string().required(t('common:NAME_REQUIRED')),
        generalUtilityValue: yup.number().required(t('common:NAME_REQUIRED')),
        commission: yup.number().required(t('common:NAME_REQUIRED')),
        specialOneValueTax: yup.string().required(t('common:NAME_REQUIRED')),
        specialOneUtilityValue: yup.number().required(t('common:NAME_REQUIRED')),
        specialOneValue: yup.number().required(t('common:NAME_REQUIRED')),
        specialTwoValueTax: yup.string().required(t('common:NAME_REQUIRED')),
        specialTwoValue: yup.number().required(t('common:NAME_REQUIRED')),
        specialTwoUtilityValue: yup.number().required(t('common:NAME_REQUIRED')),
    });

    const defaultValues: PricesFormField | {} = initialData ? {
        ...initialData
    } : {};

    const { handleSubmit, watch, getValues, setValue, control, formState: { errors, dirtyFields, isValid } } = useForm<PricesFormField>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
        defaultValues

    });

    const [selectorData, setSelectorData] = React.useState<SelectorData>({ taxes: [], })

    const taxesRepo = useRepository(TaxesRepository)
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


    }, [entity])


    const utilityToPercentage =  ( ) => {
       const value = costUnit*(getValues('generalUtilityValue')/100);
       setValue('generalValue',value+costUnit)

    };
    const utilityToGeneraValue =  ( ) => {
        const generalValue= getValues('generalValue')?getValues('generalValue'):0;
        const values =(generalValue*100)/costUnit; 
        const percentage = (values-100)<1? 0: values-100;
        setValue('generalUtilityValue',percentage)
    }
    const utilityToPercentageSpecialOne =  ( ) => {

        const value = costUnit*(getValues('specialOneUtilityValue')/100);
        setValue('specialOneValue',value+costUnit)
 
     };
     const utilityToGeneraValueSpecialOne=  ( ) => {
         const generalValue= getValues('specialOneValue')?getValues('specialOneValue'):0;
         const values =(generalValue*100)/costUnit; 
         const percentage = (values-100)<1? 0: values-100;
         setValue('specialOneUtilityValue',percentage)
     }
     const utilityToPercentageSpecialTwo =  ( ) => {

        const value = costUnit*(getValues('specialTwoUtilityValue')/100);
        setValue('specialTwoValue',value+costUnit)
 
     };
     const utilityToGeneraValueSpecialTwo=  ( ) => {
         const generalValue= getValues('specialTwoValue')?getValues('specialTwoValue'):0;
         const values =(generalValue*100)/costUnit; 
         const percentage = (values-100)<1? 0: values-100;
         setValue('specialTwoUtilityValue',percentage)
     }


    const onSubmit = async (data: PricesFormField) => {
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
            }).then((res: Array<ProductSalePrice>) => {
                // @ts-ignore
                setEntity(res[0]);
            }).catch((err: any) => {
                // @ts-ignore
                toast.error(err?.toString());
            });
    };

    const editAction = (formData: PricesFormField) => {
        setLoading(true);
        const toUpdateData = FormUtils.toUpdateValue<PricesFormField, ProductSalePrice>(formData, salesPrices);
        repo.update({
            input: {
                entityId: entity.id,
                update: {
                    ...toUpdateData
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
    const addAction = (formData: PricesFormField) => {

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


    return (<form id='taxAndCost'
        className='w-full flex flex-col p-2'
        onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
            <Grid item xs={12} className='w-full p-16 flex justify-between'>

                <Typography variant="h6" className="text-center mb-16 opacity-75">
                    {t('SALE_PRICES')}
                </Typography>
                <Tooltip title={t('common:ADD')}>
                    <Button className='bg-blue' type='submit' variant="outlined">{(editMode || firstLoad) && <Icon>edit</Icon>} {!editMode && !firstLoad && <Icon>save</Icon>} {loading && <CircularProgress className=" float-center " />} </Button>
                </Tooltip>
            </Grid>
            <Grid item xs={12} className='w-full p-16 flex justify-between'>

                <PriceCell title={t('TOTAL_UNIT_COST')} stl={'text-2xl text-green-600'} price={costUnit} />
        
            </Grid>

            <Divider className="w-full" />
            <Grid item xs={2} md={2} className='w-full p-16'>
                <Controller
                    name="generalValueTax"
                    control={control}
                    render={({ field }) => (
                        <GenericSelector<Taxes>
                            {...field}
                            param={'id'}
                            displayField={'name'}
                            values={selectorData.taxes}
                            render={(item) => <label>{item.name} {item.tax}%</label>}
                            size='small'
                            label={t('TAX')}
                            variant="outlined"
                            fullWidth
                        />
                    )} />
            </Grid>
            <Grid item xs={5} md={5} className="w-full p-16">

                <Controller
                    name="generalValue"
                    control={control}
                    render={({ field }) => (
                        <PriceField
                            {...field}
                            size="small"
                            label={t("GENERAL_VALUE")}
                            variant="outlined"
                            fullWidth
                            inputProps={{ min: 0 }}
                            error={!!errors.generalValue}
                            helperText={errors?.generalValue?.message}
                            onChange={e =>{
                                setValue('generalValue',parseFloat(e.target.value))
                                utilityToGeneraValue()
                              }
                            }
                            required
                        />)} />
            </Grid>
             
            <Grid item xs={5} md={5} className="w-full p-16">

                <Controller
                    name="generalUtilityValue"
                    control={control}
                    render={({ field }) => (
                        <PercentageField
                            {...field}
                            size="small"
                            label={t("GENERAL_UTILITY_VALUE")}
                            variant="outlined"
                            fullWidth
                            inputProps={{ min: 0 }}
                            error={!!errors.generalUtilityValue}
                            helperText={errors?.generalUtilityValue?.message}
                            onChange={e =>{
                                setValue('generalUtilityValue',parseFloat(e.target.value));
                                utilityToPercentage();
                              }
                            }
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                        />)} />
            </Grid>
            <Divider className="w-full" />
            <Grid item xs={2} md={2} className='w-full p-16'>
                <Controller
                    name="specialOneValueTax"
                    control={control}
                    render={({ field }) => (
                        <GenericSelector<Taxes>
                            {...field}
                            param={'id'}
                            displayField={'name'}
                            values={selectorData.taxes}
                            render={(item) => <label>{item.name} {item.tax}%</label>}
                            size='small'
                            label={t('TAX')}
                            variant="outlined"
                            fullWidth
                        />
                    )} />
            </Grid>
            <Grid item xs={5} md={5} className="w-full p-16">

                <Controller
                    name="specialOneValue"
                    control={control}
                    render={({ field }) => (
                        <PriceField
                            {...field}
                            size="small"
                            label={t("SPECIAL_ONE_VALUE")}
                            variant="outlined"
                            fullWidth
                            inputProps={{ min: 0 }}
                            error={!!errors.specialOneValue}
                            helperText={errors?.specialOneValue?.message}
                            onChange={e =>{
                                setValue('specialOneValue',parseFloat(e.target.value))
                                utilityToGeneraValueSpecialOne()
                            }
                            }
                            required
                        />)} />
                </Grid>

                <Grid item xs={5} md={5} className="w-full p-16">

                    <Controller
                        name="specialOneUtilityValue"
                        control={control}
                        render={({ field }) => (
                            <PercentageField
                                {...field}
                                size="small"
                                label={t("SPECIAL_ONE_UTILITY_VALUE")}
                                variant="outlined"
                                fullWidth
                                inputProps={{ min: 0 }}
                                error={!!errors.specialOneUtilityValue}
                                helperText={errors?.specialOneUtilityValue?.message}
                                onChange={e =>{
                                    setValue('specialOneUtilityValue',parseFloat(e.target.value));
                                    utilityToPercentageSpecialOne();
                                }
                                }
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                required
                            />)} />
                </Grid>

                <Divider className="w-full" />
                <Grid item xs={2} md={2} className='w-full p-16'>
                    <Controller
                        name="specialTwoValueTax"
                        control={control}
                        render={({ field }) => (
                            <GenericSelector<Taxes>
                                {...field}
                                param={'id'}
                                displayField={'name'}
                                values={selectorData.taxes}
                                render={(item) => <label>{item.name} {item.tax}%</label>}
                                size='small'
                                label={t('TAX')}
                                variant="outlined"
                                fullWidth
                            />
                        )} />
                </Grid>
                <Grid item xs={5} md={5} className="w-full p-16">

                    <Controller
                        name="specialTwoValue"
                        control={control}
                        render={({ field }) => (
                            <PriceField
                                {...field}
                                size="small"
                                label={t("SPECIAL_TWO_VALUE")}
                                variant="outlined"
                                fullWidth
                                inputProps={{ min: 0 }}
                                error={!!errors.specialTwoValue}
                                helperText={errors?.specialTwoValue?.message}
                                onChange={e =>{
                                    setValue('specialTwoValue',parseFloat(e.target.value))
                                    utilityToGeneraValueSpecialTwo()
                                }
                                }
                                required
                            />)} />
                    </Grid>

                    <Grid item xs={5} md={5} className="w-full p-16">

                    <Controller
                        name="specialTwoUtilityValue"
                        control={control}
                        render={({ field }) => (
                            <PercentageField
                                {...field}
                                size="small"
                                label={t("SPECIAL_ONE_UTILITY_VALUE")}
                                variant="outlined"
                                fullWidth
                                inputProps={{ min: 0 }}
                                error={!!errors.specialTwoUtilityValue}
                                helperText={errors?.specialTwoUtilityValue?.message}
                                onChange={e =>{
                                    setValue('specialTwoUtilityValue',parseFloat(e.target.value));
                                    utilityToPercentageSpecialTwo();
                                }
                                }
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                required
                            />)} />
                    </Grid>
                    <Divider className="w-full" />
                    <Grid item xs={5} md={5} className="w-full p-16">

                        <Controller
                            name="commission"
                            control={control}
                            render={({ field }) => (
                                <PercentageField
                                    {...field}
                                    size="small"
                                    label={t("COMMISSION")}
                                    variant="outlined"
                                    fullWidth
                                    inputProps={{ min: 0 }}
                                    error={!!errors.commission}
                                    helperText={errors?.commission?.message}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                />)} />
                    </Grid>
                    <Grid item xs={12} md={12} className='w-full p-16'>

                    </Grid>
                    {entity && <Grid item xs={12} md={12} className='w-full p-16'>
                                <Card className='w-full text-left p-14 bg-black'>
                                    <PriceCell title={t('PRICE_NET')} stl={' font-mono text-2xl text-green-600'} price={entity.priceNet? parseFloat(entity.priceNet.identifier): 0} />
                                    <PriceCell title={t('IVA')} stl={' font-mono text-2xl text-green-600'} price={entity.priceNet? (parseFloat(entity.priceNet.identifier)-entity.generalValue): 0} />
                                    <PriceCell title={t('COMMISSION')} stl={' font-mono text-2xl text-green-600'} price={entity.commissionNet? parseFloat(entity.commissionNet.identifier): 0} />
                                <Divider className='w-full my-14'/>

                                    <PriceCell title={t('PRICE_NET_SPECIAL_ONE')} stl={' font-mono text-2xl text-green-600'} price={entity.priceNetSpecialOne? parseFloat(entity.priceNetSpecialOne.identifier): 0} />
                                    <PriceCell title={t('IVA')} stl={' font-mono text-2xl text-green-600'} price={entity.priceNetSpecialOne? (parseFloat(entity.priceNetSpecialOne.identifier)-entity.specialOneValue): 0} />
                                    <PriceCell title={t('COMMISSION')} stl={' font-mono text-2xl text-green-600'} price={entity.commissionNetSpecialOne? parseFloat(entity.commissionNetSpecialOne.identifier): 0} />
                                
                                <Divider className='w-full my-14'/>
                                    <PriceCell title={t('PRICE_NET_SPECIAL_TWO')} stl={' font-mono text-2xl text-green-600'} price={entity.priceNetSpecialTwo? parseFloat(entity.priceNetSpecialTwo.identifier): 0} />
                                    <PriceCell title={t('IVA')} stl={' font-mono text-2xl text-green-600'} price={entity.priceNetSpecialTwo? (parseFloat(entity.priceNetSpecialTwo.identifier)-entity.specialTwoValue): 0} />
                                    <PriceCell title={t('COMMISSION')} stl={' font-mono text-2xl text-green-600'} price={entity.commissionNetSpecialTwo ? parseFloat(entity.commissionNetSpecialTwo.identifier): 0} />
                                
                        </Card>
                    </Grid>}
        </Grid>


    </form>);


};


export default SalePricesForm;
