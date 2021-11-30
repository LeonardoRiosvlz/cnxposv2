import * as Types from '../../types';

import { gql } from '@apollo/client';
export const ProductStructureFragmentFragmentDoc = gql`
    fragment ProductStructureFragment on ProductStructureResponse {
  id
  name
  code
  createdAt
  updatedAt
}
    `;
export type ProductStructureFragmentFragment = Pick<Types.ProductStructureResponse, 'id' | 'name' | 'code' | 'createdAt' | 'updatedAt'>;
