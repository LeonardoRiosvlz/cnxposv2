import * as Types from '../../types';

import { SolvedEntityFragmentFragment, CloudFileFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { SolvedEntityFragmentFragmentDoc, CloudFileFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const ProductGroupFragmentFragmentDoc = gql`
    fragment ProductGroupFragment on ProductGroupResponse {
  id
  name
  sortingToOrders
  source
  tipInOrder
  categories {
    ...SolvedEntityFragment
  }
  warehouses {
    ...SolvedEntityFragment
  }
  taxAppliedToPurchases {
    ...SolvedEntityFragment
  }
  taxAppliedToSales {
    ...SolvedEntityFragment
  }
  timeTax
  from
  to
  isActive
  createdAt
  updatedAt
}
    ${SolvedEntityFragmentFragmentDoc}`;
export type ProductGroupFragmentFragment = (
  Pick<Types.ProductGroupResponse, 'id' | 'name' | 'sortingToOrders' | 'source' | 'tipInOrder' | 'timeTax' | 'from' | 'to' | 'isActive' | 'createdAt' | 'updatedAt'>
  & { categories: Array<SolvedEntityFragmentFragment>, warehouses: Array<SolvedEntityFragmentFragment>, taxAppliedToPurchases: Array<SolvedEntityFragmentFragment>, taxAppliedToSales: Array<SolvedEntityFragmentFragment> }
);
