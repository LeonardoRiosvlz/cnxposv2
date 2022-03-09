import * as React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box, Icon, Tab, Tabs, Tooltip, Typography } from '@material-ui/core';
//import QuickMedicalHistoryFormTab from '../Forms/QuickMedicalHistoryFormTab';
import FuseAnimate from '@fuse/core/FuseAnimate';
import QRCode from "react-qr-code";
import ProductIndexForm, { ProductFormField } from './Forms';
import { FormUtils } from 'app/modules/common/utils/FormUtils';
import { Product } from 'api/repositories/product/types/product.types';
import useRepository from 'app/modules/common/hooks/use-repository';
import {TaxesAndCostsRepository} from "api/repositories/taxes-and-costs/taxes-and-costs.repository";
import {TaxesAndCosts} from "api/repositories/taxes-and-costs/types/taxes-and-costs.types";
import {ProductSalePriceRepository} from "api/repositories/product-sale-price/product-sale-price.repository";
import {ProductSalePrice} from "api/repositories/product-sale-price/types/product-sale-price.types";
import { toast } from 'react-toastify';
import ConstAndPriceForm, { TaxesAndCostsFormField } from './Forms/costAndPrice';
import SalePricesForm, { PricesFormField } from './Forms/prices';
import PriceByVolumeForm from './Forms/priceByVolume';
import CompositionForm from './Forms/composition';

function TabPanel(props) {
  const { children, value, index, ...other } = props; 

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ padding:3 }} >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}



type Props = {
	dataID:string
  product:Product
}
const FormTabs: React.FC<Props> = (props: Props) => {
  const [value, setValue] = React.useState(0);
  const [formId, setFormId] = React.useState<string>(`formId-${0}`);
  const [taxesAndCost, setTaxesAndCost] = React.useState<TaxesAndCosts>(null);
  const [editModeTaxesAndCost, setEditModeTaxesAndCost] = React.useState<Boolean>(false);
  const { t } = useTranslation(['product', 'common']);
  const taxesAndCostsRepo = useRepository(TaxesAndCostsRepository)
  const salePricesRepo = useRepository(ProductSalePriceRepository)
  const [editModeSalePrices, setEditModeSalePrices] = React.useState<Boolean>(false);
  const [salesPrices, setSalesPrices] = React.useState<ProductSalePrice>(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  React.useEffect(() => {

    fetchTaxAndCost();
    fetchSalesPrice();
  }, [])



  const fetchTaxAndCost = () => {
    // @ts-ignore
    taxesAndCostsRepo.findAll(
        {
            input: {
                where:{
                  and: [{product: {eq: props.product.id}}]}
            }
        }).then((res: Array<TaxesAndCosts>) => {
        // @ts-ignore
        setTaxesAndCost(res[0])
        let editMode = res.length>0 ? true : false;
        setEditModeTaxesAndCost(editMode);
    }).catch((err: any) => {
        // @ts-ignore
        toast.error(err?.toString());
    });
};

const fetchSalesPrice = () => {
  // @ts-ignore
  salePricesRepo.findAll(
      {
          input: {
              where:{
                and: [{product: {eq: props.product.id}}]}
          }
      }).then((res: Array<ProductSalePrice>) => {
      // @ts-ignore
      setSalesPrices(res[0])
      let editMode = res.length>0 ? true : false;
      setEditModeSalePrices(editMode);

  }).catch((err: any) => {
      // @ts-ignore
      toast.error(err?.toString());
  });
};




  return (
    <>
    <Box     style={{ flexGrow: 2,  display: 'flex', height:0 }}  >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
		style={{ borderRight: 3, borderColor: 'divider', width:150,height:700, textAlign:'left'}}
      >
        <Tab  label={
            <Tooltip title={t('PRODUCT')}> 
              <Icon className='text-2xl'>inventory_2</Icon> 
            </Tooltip>
            } {...a11yProps(0)} /> 
        {!props.product.compound && <Tab onClick={()=>console.log("hi")} label={
            <Tooltip title={t('COSTS_AND_PRICES')}>
               <Icon className='text-2xl'>attach_money</Icon>
            </Tooltip>
        } {...a11yProps(1)} />}

        {props.product.compound &&<Tab onClick={()=>console.log("hi")} label={
            <Tooltip title={t('COMPOSITION')}>
               <Icon className='text-2xl'>extension</Icon>
            </Tooltip>
        } {...a11yProps(4)} />}


        <Tab  onClick={()=> fetchTaxAndCost} style={{ textAlign:'left'}} label={

          <Tooltip title={t('SALE_PRICES')}>
             <Icon className='text-xl'>local_offer</Icon>
          </Tooltip>

        } {...a11yProps(2)} />
        <Tab label={
           <Tooltip title={t('PRICE_BY_VOLUME')}>
              <Icon className='text-xl'>table_view</Icon>
           </Tooltip>
        } {...a11yProps(3)} />
        <Tab label={t('CURVE')} {...a11yProps(7)} />
        <Tab label={t('COMPOSITION')} {...a11yProps(5)} />
        <Tab label={t('PRICE_BY_VOLUME')} {...a11yProps(6)} />
      </Tabs> 
      </Box>
      <TabPanel  value={value}   index={0}>
        <div style={{marginLeft:155}}>
          <FuseAnimate animation="transition.slideDownIn" delay={300}>
            <>
              {props.product && <ProductIndexForm
                    initialData={{
                        ...FormUtils.setInitialData<Product, ProductFormField>(props.product,['um','productLine','area','structure','groups']),
                        productLine: props.product.productLine ? props.product.productLine.id : '',
                        um: props.product.um ? props.product.um.id : '',
                        area: props.product.area ? props.product.area.id : '',
                        structure: props.product.structure ? props.product.structure.id : '',
                        groups: Array.from(props.product?.groups ?? []).map(x => x.id)
                    }}
                    IdProduct={props.product.id}
                    product={props.product}
                 /> }
            </>
          </FuseAnimate>
        </div> 
      </TabPanel>
      <TabPanel value={value} index={1}>
          <div style={{marginLeft:155}}>
            <FuseAnimate animation="transition.slideDownIn" delay={300}>
              <>
                {props.product  && <ConstAndPriceForm
                      initialData={{
                          ...FormUtils.setInitialData<TaxesAndCosts,TaxesAndCostsFormField>(taxesAndCost,['shoppingTax','unitTaxCost']),
                          shoppingTax: taxesAndCost? taxesAndCost.shoppingTax.id : '',
                          unitTaxCost: taxesAndCost? taxesAndCost.unitTaxCost.id : '',
                      }}
                      IdProduct={props.product.id}
                      taxesAndCost={taxesAndCost}
                      editMode={editModeTaxesAndCost}
                  /> } 
              </>
            </FuseAnimate> 
          </div> 
      </TabPanel>
      <TabPanel value={value} index={2}>
          <div style={{marginLeft:155}}>
            <FuseAnimate animation="transition.slideDownIn" delay={300}>
              <>
                {props.product  && <SalePricesForm
                      initialData={{
                          ...FormUtils.setInitialData<ProductSalePrice,PricesFormField>(salesPrices,['generalValueTax','specialOneValueTax','specialTwoValueTax']),
                          generalValueTax: salesPrices ? salesPrices.generalValueTax.id : '',
                          specialOneValueTax: salesPrices ? salesPrices.specialOneValueTax.id : '',
                          specialTwoValueTax: salesPrices ? salesPrices.specialTwoValueTax.id : '',
                      }}
                      costUnit={taxesAndCost? parseFloat(taxesAndCost.totalUnitCost.identifier) : 0}
                      IdProduct={props.product.id}
                      salesPrices={salesPrices}
                      editMode={editModeSalePrices}
                  /> } 
              </>
            </FuseAnimate> 
          </div> 
      </TabPanel>
      <TabPanel value={value} index={3}>
          <div style={{marginLeft:155}}>
            <FuseAnimate animation="transition.slideDownIn" delay={300}>
              <>
                {props.product  && <PriceByVolumeForm

                      costUnit={taxesAndCost? parseFloat(taxesAndCost.totalUnitCost.identifier) : 0}
                      IdProduct={props.product.id}
                      salesPrices={salesPrices}
                  /> } 
              </>
            </FuseAnimate> 
          </div> 
      </TabPanel>
      <TabPanel value={value} index={4}>
          <div style={{marginLeft:155}}>
            <FuseAnimate animation="transition.slideDownIn" delay={300}>
              <>
                {props.product  && <CompositionForm

                      costUnit={taxesAndCost? parseFloat(taxesAndCost.totalUnitCost.identifier) : 0}
                      IdProduct={props.product.id}
                      salesPrices={salesPrices}
                  /> } 
              </>
            </FuseAnimate> 
          </div> 
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
  

    </>
  );
};
export default FormTabs;