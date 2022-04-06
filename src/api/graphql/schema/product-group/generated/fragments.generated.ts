import * as Types from '../../types';

import { gql } from '@apollo/client';
export const ProductGroupFragmentFragmentDoc = gql`
    fragment ProductGroupFragment on ProductGroupResponse {
  id
  name
  isActive
  createdAt
  updatedAt
}
    `;
export type ProductGroupFragmentFragment = Pick<Types.ProductGroupResponse, 'id' | 'name' | 'isActive' | 'createdAt' | 'updatedAt'>;
