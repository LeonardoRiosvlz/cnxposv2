import * as Types from '../../types';

import { gql } from '@apollo/client';
export const WarehouseFragmentFragmentDoc = gql`
    fragment WarehouseFragment on WarehouseResponse {
  id
  name
  code
  location
  description
  warehouseTypes
  isActive
  createdAt
  updatedAt
}
    `;
export type WarehouseFragmentFragment = Pick<Types.WarehouseResponse, 'id' | 'name' | 'code' | 'location' | 'description' | 'warehouseTypes' | 'isActive' | 'createdAt' | 'updatedAt'>;
