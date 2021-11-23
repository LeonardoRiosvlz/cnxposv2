import * as Types from '../../types';

import { gql } from '@apollo/client';
export const ProductCategoryFragmentFragmentDoc = gql`
    fragment ProductCategoryFragment on ProductCategoryResponse {
  id
  name
  description
  createdAt
  updatedAt
}
    `;
export type ProductCategoryFragmentFragment = Pick<Types.ProductCategoryResponse, 'id' | 'name' | 'description' | 'createdAt' | 'updatedAt'>;
