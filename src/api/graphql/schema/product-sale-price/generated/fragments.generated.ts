import * as Types from '../../types';

import { SolvedEntityFragmentFragment, CloudFileFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { SolvedEntityFragmentFragmentDoc, CloudFileFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const ProductSalePriceFragmentFragmentDoc = gql`
    fragment ProductSalePriceFragment on ProductSalePriceResponse {
  id
  product {
    ...SolvedEntityFragment
  }
  generalValueTax {
    ...SolvedEntityFragment
  }
  generalValue
  generalUtilityValue
  commission
  specialOneValueTax {
    ...SolvedEntityFragment
  }
  specialOneValue
  specialOneUtilityValue
  specialTwoValueTax {
    ...SolvedEntityFragment
  }
  specialTwoValue
  specialTwoUtilityValue
  priceNet {
    ...SolvedEntityFragment
  }
  priceNetSpecialOne {
    ...SolvedEntityFragment
  }
  priceNetSpecialTwo {
    ...SolvedEntityFragment
  }
  commissionNet {
    ...SolvedEntityFragment
  }
  commissionNetSpecialOne {
    ...SolvedEntityFragment
  }
  commissionNetSpecialTwo {
    ...SolvedEntityFragment
  }
  createdAt
  updatedAt
}
    ${SolvedEntityFragmentFragmentDoc}`;
export type ProductSalePriceFragmentFragment = (
  Pick<Types.ProductSalePriceResponse, 'id' | 'generalValue' | 'generalUtilityValue' | 'commission' | 'specialOneValue' | 'specialOneUtilityValue' | 'specialTwoValue' | 'specialTwoUtilityValue' | 'createdAt' | 'updatedAt'>
  & { product: SolvedEntityFragmentFragment, generalValueTax: SolvedEntityFragmentFragment, specialOneValueTax: SolvedEntityFragmentFragment, specialTwoValueTax: SolvedEntityFragmentFragment, priceNet: SolvedEntityFragmentFragment, priceNetSpecialOne: SolvedEntityFragmentFragment, priceNetSpecialTwo: SolvedEntityFragmentFragment, commissionNet: SolvedEntityFragmentFragment, commissionNetSpecialOne: SolvedEntityFragmentFragment, commissionNetSpecialTwo: SolvedEntityFragmentFragment }
);
