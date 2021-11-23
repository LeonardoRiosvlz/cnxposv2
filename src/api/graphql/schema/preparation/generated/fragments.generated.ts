import * as Types from '../../types';

import { gql } from '@apollo/client';
export const PreparationFragmentFragmentDoc = gql`
    fragment PreparationFragment on PreparationResponse {
  id
  name
  description
  createdAt
  updatedAt
}
    `;
export type PreparationFragmentFragment = Pick<Types.PreparationResponse, 'id' | 'name' | 'description' | 'createdAt' | 'updatedAt'>;
