import * as Types from '../../types';

import { gql } from '@apollo/client';
export const ProductAreaFragmentFragmentDoc = gql`
    fragment ProductAreaFragment on ProductAreaResponse {
  id
  name
  description
  isActive
  attentionArea
  createdAt
  updatedAt
}
    `;
export type ProductAreaFragmentFragment = Pick<Types.ProductAreaResponse, 'id' | 'name' | 'description' | 'isActive' | 'attentionArea' | 'createdAt' | 'updatedAt'>;
