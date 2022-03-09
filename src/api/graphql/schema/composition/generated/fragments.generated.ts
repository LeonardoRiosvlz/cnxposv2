import * as Types from '../../types';

import { SolvedEntityFragmentFragment, CloudFileFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { SolvedEntityFragmentFragmentDoc, CloudFileFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const CompositionFragmentFragmentDoc = gql`
    fragment CompositionFragment on CompositionResponse {
  id
  product {
    ...SolvedEntityFragment
  }
  supplies {
    ...SolvedEntityFragment
  }
  costUnit {
    ...SolvedEntityFragment
  }
  portion
  createdAt
  updatedAt
}
    ${SolvedEntityFragmentFragmentDoc}`;
export type CompositionFragmentFragment = (
  Pick<Types.CompositionResponse, 'id' | 'portion' | 'createdAt' | 'updatedAt'>
  & { product: SolvedEntityFragmentFragment, supplies: SolvedEntityFragmentFragment, costUnit?: Types.Maybe<SolvedEntityFragmentFragment> }
);
