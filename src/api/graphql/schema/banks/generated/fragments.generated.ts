import * as Types from '../../types';

import { gql } from '@apollo/client';
export const BanksFragmentFragmentDoc = gql`
    fragment BanksFragment on BanksResponse {
  id
  name
  accountingAccount
  createdAt
  updatedAt
}
    `;
export type BanksFragmentFragment = Pick<Types.BanksResponse, 'id' | 'name' | 'accountingAccount' | 'createdAt' | 'updatedAt'>;
