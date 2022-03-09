import * as Types from '../../types';

import { SolvedEntityFragmentFragment, CloudFileFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { SolvedEntityFragmentFragmentDoc, CloudFileFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const TaxesAndCostsFragmentFragmentDoc = gql`
    fragment TaxesAndCostsFragment on TaxesAndCostsResponse {
  id
  product {
    ...SolvedEntityFragment
  }
  shoppingTax {
    ...SolvedEntityFragment
  }
  applyIco
  valueIco
  includeIcoInCost
  productCost
  unitCost
  valueUnitTaxCost {
    ...SolvedEntityFragment
  }
  totalUnitCost {
    ...SolvedEntityFragment
  }
  unitTaxCost {
    ...SolvedEntityFragment
  }
  updatedAt
}
    ${SolvedEntityFragmentFragmentDoc}`;
export type TaxesAndCostsFragmentFragment = (
  Pick<Types.TaxesAndCostsResponse, 'id' | 'applyIco' | 'valueIco' | 'includeIcoInCost' | 'productCost' | 'unitCost' | 'updatedAt'>
  & { product: SolvedEntityFragmentFragment, shoppingTax: SolvedEntityFragmentFragment, valueUnitTaxCost: SolvedEntityFragmentFragment, totalUnitCost: SolvedEntityFragmentFragment, unitTaxCost: SolvedEntityFragmentFragment }
);
