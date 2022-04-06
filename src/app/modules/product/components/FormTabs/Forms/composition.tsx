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
import { Composition } from 'api/repositories/composition/types/composition.types';
import { ProductRepository } from 'api/repositories/product/product.repository';
import { CompositionRepository } from 'api/repositories/composition/composition.repository';
import NumberField from 'app/modules/common/components/NumberField';
import { ProductLineRepository } from 'api/repositories/product-line/product-line.repository';
import { ProductStructureRepository } from 'api/repositories/product-structure/product-structure.repository';
import { ProductStructure } from 'api/repositories/product-structure/types/product-structure.types';
import { ProductLine } from 'api/repositories/product-line/types/product-line.types';


export type CompositionFormField = {

     supplies: string;
     portion: number;
     structure:string;
     line:string;
     name:string;
} 

type SelectorData = {
    product: Array<Product>
    line: Array<Product>
    structure: Array<Product>
}


type Props = {

    IdProduct: string,
    salesPrices: ProductSalePrice
    costUnit: number;
}
const CompositionForm: React.FC<Props> = ({ IdProduct, costUnit, salesPrices }: Props) => {
    const repo = useRepository(CompositionRepository)
    const { t } = useTranslation(['product', 'common']);
    const [loading, setLoading] = React.useState<boolean>(false)
    const [firstLoad, setFirstLoad] = React.useState<boolean>(false)
    const [entity, setEntity] = React.useState<Array<Composition>>([]);
    const schema = yup.object().shape({

        portion: yup.number().required(t('common:NAME_REQUIRED')),
        supplies: yup.string().required(t('common:NAME_REQUIRED')),

    });


    const { handleSubmit, watch, getValues, setValue, control, formState: { errors, dirtyFields, isValid } } = useForm<CompositionFormField>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
    });

    const [selectorData, setSelectorData] = React.useState<SelectorData>({ product: [], line: [],structure: [],})
    const [priceByVolume, setPriceByVolume,] = React.useState<PriceByVolume>(null)
    const [valueTotal, setValueTotal] = React.useState<number>(0)
    const [collection, setCollection] = React.useState<Composition>(undefined);
	const [editMode, setEditMode] = React.useState<boolean>(false);
	const [entityId, setEntityId] = React.useState<string>('');

    let structureWatch = watch('structure');
    let lineWatch = watch('line');
    let nameWatch = watch('name');

    const productRepo = useRepository(ProductRepository)
    const productLineRepo = useRepository(ProductLineRepository)
    const productStructureRepo = useRepository(ProductStructureRepository)
    const loadSelectorData = async () => {
        try {
            let product = await productRepo.findAll({ input: { 
                where: 
                (lineWatch&&!nameWatch) ? {and:[{productLine:{eq:lineWatch},compound:{is:false}}]} :
                (!lineWatch&&nameWatch) ? {and:[{name:{iLike:nameWatch},compound:{is:false}}]} :
                (lineWatch&&nameWatch) ? {and:[{productLine:{eq:lineWatch},name:{iLike:nameWatch},compound:{is:false}}]} :{
               
                } 
            }})
            let line = await productLineRepo.findAll({ input: { 
                where: structureWatch ? {productStructure:{eq:structureWatch}} : {}
            }})?? []
            let structure = await productStructureRepo.findAll({ input: {where: { }}})
            setSelectorData({ product ,line, structure})
        } catch (err) {
            toast.error(err?.toString())
        }
    }
    React.useEffect(() => {
       
      
        fetch();
    }, [])
    React.useEffect(() => {
       
        loadSelectorData().then()

    }, [structureWatch,lineWatch,nameWatch])


    const onSubmit = async (data: CompositionFormField) => {
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
                        product:{eq:IdProduct}
                    }
                }
            }).then((res: Array<Composition>) => {
                // @ts-ignore
                setEntity(res);
                let total= 0;
                res.map((x)=>{

                    if(x.costUnit.identifier!==null){
                        total = total+parseFloat(x.costUnit.identifier);
                    }
                  
                })
                setValueTotal(total)
            }).catch((err: any) => { 
                // @ts-ignore
                toast.error(err?.toString());
            });
    };

    const editAction = (formData: CompositionFormField) => {
        setLoading(true);
        const toUpdateData = FormUtils.toUpdateValue<CompositionFormField, PriceByVolume>(formData, priceByVolume);
        repo.update({
            input: {
                entityId: collection.id,
                update: {
                    portion:getValues('portion'),
                    supplies:getValues('supplies'),
                },
            }
        }).then(() => {
            fetch();
            setLoading(false);
            setValue('portion',0)
            setValue('structure','')
            setValue('line','')
            setValue('name','')
            setValue('supplies','')
            toast.info(t('common:ELEMENT_EDITED'));
        }).catch((err: any) => {
            toast.error(err?.toString());
            setLoading(false);
        });
    };
    const addAction = (formData: CompositionFormField) => {

        setLoading(true);
        repo.create({
            input: {
                supplies:formData.supplies,
                portion:formData.portion,
                product: IdProduct
            }
        }).then(() => {
            toast.info(t('common:ELEMENT_CREATED'));
            setLoading(false);
            setFirstLoad(true);
            setValue('portion',0)
            setValue('structure','')
            setValue('line','')
            setValue('name','')
            setValue('supplies','')
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
		setValue('portion',0);
		setValue('supplies',"");
	}

    const editSetForm = (row:Composition)=>{
        setEditMode(true)
        setCollection(row)
		// @ts-ignore
        setValue('portion',row.portion);
		setValue('supplies',row.supplies.id);
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
                    {t('COMPOSITION')}
                </Typography>
            </Grid>

            <Divider className="w-full" />

                <Grid item xs={6} md={6} className='w-full p-16'>
                    <Controller
                        name="structure"
                        control={control}
                        render={({ field }) => (
                            <GenericSelector<ProductStructure>
                                {...field}
                                param={'id'}
                                displayField={'name'}
                                values={selectorData.structure}
                                render={(item) => <label>{item.code}-{item.name}</label>}
                                size='small'
                                label={t('LEVEL')}
                                variant="outlined"
                                fullWidth
                                required
                            />
                        )} />
                </Grid>

                <Grid item xs={6} md={6} className='w-full p-16'>
                    <Controller
                        name="line"
                        control={control}
                        render={({ field }) => (
                            <GenericSelector<ProductLine>
                                {...field}
                                param={'id'}
                                displayField={'name'}
                                values={selectorData.line}
                                render={(item) => <label>{item.code}-{item.name}</label>}
                                size='small'
                                label={t('LINE')}
                                variant="outlined"
                                fullWidth
                            />
                        )} />
                </Grid>

                <Grid item xs={6} className='w-full p-16'>

                    <Controller
                        name="name"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                size='small'
                                label={t('REF')}
                                autoFocus
                                variant="outlined"
                                fullWidth
                                error={!!errors.name}
                                helperText={errors?.name?.message}
                            />)}/>
                </Grid>
                <Grid item xs={6} md={6} className='w-full p-16'>
                    <Controller
                        name="supplies"
                        control={control}
                        render={({ field }) => (
                            <GenericSelector<Product>
                                {...field}
                                param={'id'}
                                displayField={'name'}
                                values={selectorData.product}
                                render={(item) => <label>{item.name}-{item.um.identifier?? ''}</label>}
                                size='small'
                                label={t('SUPPLIES')}
                                variant="outlined"
                                fullWidth
                            />
                        )} />
                </Grid>
                <Grid item xs={6} md={6} className="w-full p-16">

                    <Controller
                        name="portion"
                        control={control}
                        render={({ field }) => (
                            <NumberField
                                {...field}
                                size="small"
                                label={t("PORTION")}
                                variant="outlined"
                                fullWidth
                                inputProps={{ min: 0 }}
                                error={!!errors.portion}
                                helperText={errors?.portion?.message}
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
                <TableCell align="left">{t('SUPPLIES')}</TableCell>
                <TableCell align="left">{t('PORTION')}</TableCell>
                <TableCell align="left">{t('COST')}</TableCell>
                <TableCell align="left">Actions</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {entity && entity.map((row) => (
                    <TableRow
                    key={row.id}
                    >
                    <TableCell align="left"> {row.supplies ? row.supplies.identifier : ''}</TableCell>
                    <TableCell align="left">{row.portion} </TableCell>
                    <TableCell align="left" ><PriceCellSimple price={ row.costUnit!==null ? parseFloat(row.costUnit.identifier) : 0}/></TableCell>
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
    <PriceCellSimple price={valueTotal}/>
    </>);


};


export default CompositionForm;
