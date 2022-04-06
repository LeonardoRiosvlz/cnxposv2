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
import { ProductCurveRepository } from 'api/repositories/product-curve/product-curve.repository';
import { ProductCurve } from 'api/repositories/product-curve/types/product-curve.types';


export type CompositionFormField = {

     product: string;
     name: string;
     ref?:string;
     code?:string;

} 

type Props = {

    IdProduct: string,
    salesPrices: ProductSalePrice
    costUnit: number;
    product:Product
}
const ProductCurveForm: React.FC<Props> = ({ IdProduct, costUnit, salesPrices, product }: Props) => {
    const repo = useRepository(ProductCurveRepository)
    const { t } = useTranslation(['product', 'common']);
    const [loading, setLoading] = React.useState<boolean>(false)
    const [firstLoad, setFirstLoad] = React.useState<boolean>(false)
    const [entity, setEntity] = React.useState<Array<ProductCurve>>([]);
    const schema = yup.object().shape({

        portion: yup.number().required(t('common:NAME_REQUIRED')),
        supplies: yup.string().required(t('common:NAME_REQUIRED')),

    });


    const { handleSubmit, watch, getValues, setValue, control, formState: { errors, dirtyFields, isValid } } = useForm<CompositionFormField>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(schema),
    });

    const [priceByVolume, setPriceByVolume,] = React.useState<PriceByVolume>(null)
    const [valueTotal, setValueTotal] = React.useState<number>(0)
    const [curve, setCurve] = React.useState<ProductCurve>(undefined);
	const [editMode, setEditMode] = React.useState<boolean>(false);
	const [entityId, setEntityId] = React.useState<string>('');


    const productRepo = useRepository(ProductRepository)
    const productCurveRepo = useRepository(ProductCurveRepository)
 

    React.useEffect(() => {
       
      
        fetch();
    }, [])
    React.useEffect(() => {
       


    }, [])


    const onSubmit = async (data: CompositionFormField) => {
        //@ts-ignore
        if (editMode || firstLoad) {
            editAction(data);
        } else {
            addAction();
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
            }).then((res: Array<ProductCurve>) => {
                // @ts-ignore
                setEntity(res);
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
                entityId: curve.id,
                update: {
                    ...formData
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
    const addAction =async () => {
        let idConst:number =0;
        for (let index = 0; index < product.groups.length; index++) {

            for (let y = 0; y < product.subgroup.length; y++) {
                //let code:number =Math.floor( Math.random() * (99 - 10) + 10);
                //let codeTwo:number =Math.floor( Math.random() * (99 - 10) + 10);
                //console.log(product.code+"-"+code+" "+codeTwo+" "+product.name+" "+product.groups[index].identifier+" "+product.subgroup[y].identifier)
                idConst=idConst+1;
                setLoading(true);
                await repo.create({
                    input: {
                        product:IdProduct,
                        code:product.code+"000"+idConst,
                        name:product.name+" "+product.groups[index].identifier+" "+product.subgroup[y].identifier,
                        ref:product.groups[index].identifier+" "+product.subgroup[y].identifier
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
                        
            }
        }

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

	}


    const editSetForm = (row:ProductCurve)=>{
        setEditMode(true)
        setCurve(row)
		// @ts-ignore

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
                    {t('PRODUCT_CURVE')}
                </Typography>
            </Grid>
                {entity.length<1 && <Button disabled={loading} onClick={()=>addAction()} className=" float-right bg-green-400  text-white" variant="contained">{t('GENERATE_CURVE')}</Button>}
            <Divider className="w-full" />
        </Grid>


    </form>
    <TableContainer >
        <Table style={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="left">{t('NAME')}</TableCell>
                <TableCell align="left">{t('REF')}</TableCell>
                <TableCell align="left">{t('CODE')}</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {entity && entity.map((row) => (
                    <TableRow
                    key={row.id}
                    >
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.ref}</TableCell>
                    <TableCell align="left" >{row.code}</TableCell>
            </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    </>);


};


export default ProductCurveForm;
