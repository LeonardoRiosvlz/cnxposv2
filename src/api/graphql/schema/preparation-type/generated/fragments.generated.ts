import * as Types from '../../types';

import { SolvedEntityFragmentFragment, CloudFileFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { SolvedEntityFragmentFragmentDoc, CloudFileFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const PreparationTypeFragmentFragmentDoc = gql`
    fragment PreparationTypeFragment on PreparationTypeResponse {
  id
  name
  description
  preparation {
    ...SolvedEntityFragment
  }
  createdAt
  updatedAt
}
    ${SolvedEntityFragmentFragmentDoc}`;
export type PreparationTypeFragmentFragment = (
  Pick<Types.PreparationTypeResponse, 'id' | 'name' | 'description' | 'createdAt' | 'updatedAt'>
  & { preparation: Array<SolvedEntityFragmentFragment> }
);
