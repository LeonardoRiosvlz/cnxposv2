import * as Types from '../../types';

import { gql } from '@apollo/client';
export const BillingResolutionFragmentFragmentDoc = gql`
    fragment BillingResolutionFragment on BillingResolutionResponse {
  id
  resolutionClass
  resolutionType
  resolutionNumber
  from
  to
  prefix
  initialNumber
  finalNumber
  createdAt
  updatedAt
}
    `;
export type BillingResolutionFragmentFragment = Pick<Types.BillingResolutionResponse, 'id' | 'resolutionClass' | 'resolutionType' | 'resolutionNumber' | 'from' | 'to' | 'prefix' | 'initialNumber' | 'finalNumber' | 'createdAt' | 'updatedAt'>;
