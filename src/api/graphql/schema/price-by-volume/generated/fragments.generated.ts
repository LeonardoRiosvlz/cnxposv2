import * as Types from '../../types';

import { SolvedEntityFragmentFragment, CloudFileFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { SolvedEntityFragmentFragmentDoc, CloudFileFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const PriceByVolumeFragmentFragmentDoc = gql`
    fragment PriceByVolumeFragment on PriceByVolumeResponse {
  id
  product {
    ...SolvedEntityFragment
  }
  tax {
    ...SolvedEntityFragment
  }
  utility
  value
  quantity
  createdAt
  updatedAt
}
    ${SolvedEntityFragmentFragmentDoc}`;
export type PriceByVolumeFragmentFragment = (
  Pick<Types.PriceByVolumeResponse, 'id' | 'utility' | 'value' | 'quantity' | 'createdAt' | 'updatedAt'>
  & { product: SolvedEntityFragmentFragment, tax: SolvedEntityFragmentFragment }
);
