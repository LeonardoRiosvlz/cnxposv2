import * as Types from '../../types';

import { gql } from '@apollo/client';
export const TaxesFragmentFragmentDoc = gql`
    fragment TaxesFragment on TaxesResponse {
  id
  name
  tax
  description
  taxType
  isActive
  createdAt
  updatedAt
}
    `;
export type TaxesFragmentFragment = Pick<Types.TaxesResponse, 'id' | 'name' | 'tax' | 'description' | 'taxType' | 'isActive' | 'createdAt' | 'updatedAt'>;
