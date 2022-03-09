import React from 'react';
import {useTranslation} from 'react-i18next';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Grid from '@material-ui/core/Grid';
import {Button, Card, CircularProgress, Divider, Icon, Switch, Tooltip, Typography} from '@material-ui/core';
import useRepository from 'app/modules/common/hooks/use-repository';
import { toast } from 'react-toastify';
import GenericSelector from 'app/modules/common/components/GenericSelector';
import _ from '@lodash';
import useFile from 'app/modules/files/hooks/use-file';
import { Product } from 'api/repositories/product/types/product.types';
import { FormUtils } from 'app/modules/common/utils/FormUtils';
import {ProductRepository} from "api/repositories/product/product.repository";
import { TaxesRepository } from 'api/repositories/taxes/taxes.repository';
import { Taxes } from 'api/repositories/taxes/types/taxes.types';
import PriceField from 'app/modules/common/components/PriceField';
import PriceCell from 'app/modules/common/components/TableCell/PriceCell';
import {TaxesAndCostsRepository} from "api/repositories/taxes-and-costs/taxes-and-costs.repository";
import {TaxesAndCosts} from "api/repositories/taxes-and-costs/types/taxes-and-costs.types";


export type TaxesAndCostsFormField = {
     shoppingTax: string;
     applyIco: boolean;
     valueIco: number;
     includeIcoInCost: boolean; 
     productCost: number;
     unitCost: number;
     unitTaxCost: string;
}

 
type Line = string ;

type SelectorData = {
    taxes: Array<Taxes>
}


type Props = {

    IdProduct:string,
    initialData?: TaxesAndCostsFormField,
    upLoading?: () => void,
    taxesAndCost:TaxesAndCosts
    editMode:Boolean
}
const ConstAndPriceForm: React.FC<Props> = ({ upLoading,IdProduct, editMode, taxesAndCost,  initialData}: Props) => {
    const repo = useRepository(TaxesAndCostsRepository)
    const {t} = useTranslation(['product', 'common']);
    const [loading, setLoading] = React.useState<Boolean>(false)
    const [firstLoad, setFirstLoad] = React.useState<Boolean>(false)
    const [entity, setEntity] = React.useState<TaxesAndCosts>(null);
    const schema = yup.object().shape({
        unitCost: yup.number().required(t('common:NAME_REQUIRED')),
        productCost: yup.number().required(t('common:NAME_REQUIRED')),
        valueIco: yup.number().required(t('common:NAME_REQUIRED')),
    });

    const defaultValues: TaxesAndCostsFormField | {} = initialData ? {
        ...initialData
    } : {};

    const {handleSubmit,watch,getValues, setValue, control, formState: {errors, dirtyFields, isValid}} = useForm<TaxesAndCostsFormField>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
        defaultValues

    });
    
    const [selectorData, setSelectorData] = React.useState<SelectorData>({taxes: [],  })

    const taxesRepo = useRepository(TaxesRepository)
    const loadSelectorData = async () => {
        try {   
            const taxes = await taxesRepo.findAll({input: {where: {}}})
            setSelectorData({taxes})
        } catch (err) {
            toast.error(err?.toString())
        }
    }
    React.useEffect(() => {
        loadSelectorData().then()
        fetchTaxAndCost();
    }, [])

    React.useEffect(() => {

    }, [entity])
 
    const onSubmit = async (data: TaxesAndCostsFormField)  => {
    //@ts-ignore
        console.log(editMode)
        if(editMode||firstLoad){
            editAction(data);
        }else{
            addAction(data);  
        }
    };

    const applyIco=  Boolean(watch('applyIco'));

    const fetchTaxAndCost = () => {
        // @ts-ignore
        repo.findAll(
            {
                input: {
                    where:{
                      and: [{product: {eq: IdProduct}}]}
                }
            }).then((res: Array<TaxesAndCosts>) => {
            // @ts-ignore
            setEntity(res[0]);
        }).catch((err: any) => {
            // @ts-ignore
            toast.error(err?.toString());
        });
    };

    const editAction = (formData: TaxesAndCostsFormField) => {
        setLoading(true);
        const toUpdateData = FormUtils.toUpdateValue<TaxesAndCostsFormField,TaxesAndCosts>(formData, taxesAndCost);
        repo.update({
            input: {
                entityId:entity.id,
                update: {
                    shoppingTax: toUpdateData.shoppingTax,
                    applyIco: toUpdateData.applyIco,
                    valueIco:toUpdateData.valueIco,
                    includeIcoInCost: toUpdateData.includeIcoInCost,
                    productCost:toUpdateData.productCost,
                    unitCost:toUpdateData.unitCost,
                    unitTaxCost:toUpdateData.unitTaxCost,
                },
            }
        }).then(() => {
            fetchTaxAndCost();
            setLoading(false);
            toast.info(t('common:ELEMENT_EDITED'));
        }).catch((err: any) => {
            toast.error(err?.toString());
            setLoading(false);
        });
    };
    const addAction = (formData: TaxesAndCostsFormField) => {
        
        setLoading(true);
        repo.create({input: {
            ...formData,
            product:IdProduct
            }}).then(() => {
             toast.info(t('common:ELEMENT_CREATED'));
             setLoading(false);
             setFirstLoad(true);
             fetchTaxAndCost();
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
                    {t('COSTS_AND_PRICES')}
                </Typography>
                <Tooltip title={ t('common:ADD')}>
                    <Button className='bg-blue' type='submit' variant="outlined">{(editMode || firstLoad) && <Icon>edit</Icon>} {!editMode &&!firstLoad && <Icon>save</Icon>} {loading&& <CircularProgress className=" float-center "  />} </Button>
                </Tooltip>
            </Grid>
            <Divider className="w-full"/>    
            <Grid item xs={4} className='w-full p-16 flex justify-start'>

                <Controller
                    // @ts-ignore
                    name={'applyIco'}
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
                            /><label>{t('APPLY_ICO')}</label></div>)}/>
            </Grid>

            <Grid item xs={4} md={4} className="w-full p-16">

                <Controller
                name="valueIco"
                control={control}
                render={({ field }) => (
                    <PriceField
                    {...field}
                    size="small"
                    label={t("VALUE_ICO")}
                    variant="outlined"
                    fullWidth
                    disabled={!applyIco}
                    inputProps={{ min: 0 }}
                    error={!!errors.valueIco}
                    helperText={errors?.valueIco?.message}
                    required
                    />)} />
            </Grid>

            <Grid item xs={4} className='w-full p-16 flex justify-start'>

                <Controller
                    // @ts-ignore
                    name={'includeIcoInCost'}
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
                            /><label>{t('INCLUDE_ICO_IN_COST')}</label></div>)}/>
            </Grid>

            <Divider className="w-full"/>

            <Grid item xs={6} md={6} className="w-full p-16">

                <Controller
                name="productCost"
                control={control}
                render={({ field }) => (
                    <PriceField
                    {...field}
                    size="small"
                    label={t("PRODUCT_COST")}
                    variant="outlined"
                    fullWidth
                    disabled={!applyIco}
                    inputProps={{ min: 0 }}
                    error={!!errors.productCost}
                    helperText={errors?.productCost?.message}
                    required
                    />)} />
            </Grid>

            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                    name="shoppingTax"
                    control={control}
                    render={({field}) => (
                        <GenericSelector<Taxes>
                            {...field}
                            param={'id'}
                            displayField={'name'}
                            values={selectorData.taxes}
                            render={(item) => <label>{item.name}</label>}
                            size='small'
                            label={t('SHOPPING_TAX')}
                            variant="outlined"
                            fullWidth
                        />
                    )}/>
            </Grid>

            <Grid item xs={6} md={6} className="w-full p-16">

                <Controller
                name="unitCost"
                control={control}
                render={({ field }) => (
                    <PriceField
                    {...field}
                    size="small"
                    label={t("UNIT_COST")}
                    variant="outlined"
                    fullWidth
                    disabled={!applyIco}
                    inputProps={{ min: 0 }}
                    error={!!errors.unitCost}
                    helperText={errors?.unitCost?.message}
                    required
                    />)} />
            </Grid>

            <Grid item xs={12} md={6} className='w-full p-16'>
                <Controller
                    name="unitTaxCost"
                    control={control}
                    render={({field}) => (
                        <GenericSelector<Taxes>
                            {...field}
                            param={'id'}
                            displayField={'name'}
                            values={selectorData.taxes}
                            render={(item) => <label>{item.name}</label>}
                            size='small'
                            label={t('UNIT_TAX_COST')}
                            variant="outlined"
                            fullWidth
                        />
                    )}/>
            </Grid>

            <Divider className="w-full"/>

            {entity &&<Grid item xs={6} md={6} className='w-full p-16'>
                <Card className='w-full text-left p-14 bg-black'>
                        <PriceCell title={t('TOTAL_UNIT_COST')} stl={' font-mono text-2xl text-green-600'} price={entity? parseFloat(entity.totalUnitCost.identifier): 0} />
                        <PriceCell title={t('VALUE_UNIT_TAX_COST')} stl={' font-mono text-lg text-green-600'} price={entity? parseFloat(entity.valueUnitTaxCost.identifier): 0} />
                </Card>
            </Grid>}


        </Grid>


    </form>);


};


export default ConstAndPriceForm;
