import * as Types from '../../types';

import { gql } from '@apollo/client';
export const ThirdPartyClassificationFragmentFragmentDoc = gql`
    fragment ThirdPartyClassificationFragment on ThirdPartyClassificationResponse {
  id
  name
  assignDebtQuota
  debtQuota
  gourmetConnection
  includeServiceOrders
  createdAt
  updatedAt
}
    `;
export type ThirdPartyClassificationFragmentFragment = Pick<Types.ThirdPartyClassificationResponse, 'id' | 'name' | 'assignDebtQuota' | 'debtQuota' | 'gourmetConnection' | 'includeServiceOrders' | 'createdAt' | 'updatedAt'>;
