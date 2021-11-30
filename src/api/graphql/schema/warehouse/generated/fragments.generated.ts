import * as Types from '../../types';

import { SolvedEntityFragmentFragment, CloudFileFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { SolvedEntityFragmentFragmentDoc, CloudFileFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const WarehouseFragmentFragmentDoc = gql`
    fragment WarehouseFragment on WarehouseResponse {
  id
  name
  code
  location
  description
  warehouseTypes
  isActive
  billingResolution {
    ...SolvedEntityFragment
  }
  createdAt
  updatedAt
}
    ${SolvedEntityFragmentFragmentDoc}`;
export type WarehouseFragmentFragment = (
  Pick<Types.WarehouseResponse, 'id' | 'name' | 'code' | 'location' | 'description' | 'warehouseTypes' | 'isActive' | 'createdAt' | 'updatedAt'>
  & { billingResolution?: Types.Maybe<SolvedEntityFragmentFragment> }
);
