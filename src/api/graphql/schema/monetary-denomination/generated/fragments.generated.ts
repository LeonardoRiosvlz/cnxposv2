import * as Types from '../../types';

import { CloudFileFragmentFragment, SolvedEntityFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { CloudFileFragmentFragmentDoc, SolvedEntityFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const MonetaryDenominationFragmentFragmentDoc = gql`
    fragment MonetaryDenominationFragment on MonetaryDenominationResponse {
  id
  value
  monetaryDenominationTypes
  photoFile {
    ...CloudFileFragment
  }
  createdAt
  updatedAt
}
    ${CloudFileFragmentFragmentDoc}`;
export type MonetaryDenominationFragmentFragment = (
  Pick<Types.MonetaryDenominationResponse, 'id' | 'value' | 'monetaryDenominationTypes' | 'createdAt' | 'updatedAt'>
  & { photoFile?: Types.Maybe<CloudFileFragmentFragment> }
);
