import * as Types from '../../types';

import { gql } from '@apollo/client';
export const SubgroupFragmentFragmentDoc = gql`
    fragment SubgroupFragment on SubgroupResponse {
  id
  name
  isActive
  createdAt
  updatedAt
}
    `;
export type SubgroupFragmentFragment = Pick<Types.SubgroupResponse, 'id' | 'name' | 'isActive' | 'createdAt' | 'updatedAt'>;
