import * as Types from '../../types';

import { SolvedEntityFragmentFragment, CloudFileFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { SolvedEntityFragmentFragmentDoc, CloudFileFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const ProductLineFragmentFragmentDoc = gql`
    fragment ProductLineFragment on ProductLineResponse {
  id
  productStructure {
    ...SolvedEntityFragment
  }
  name
  code
  createdAt
  updatedAt
}
    ${SolvedEntityFragmentFragmentDoc}`;
export type ProductLineFragmentFragment = (
  Pick<Types.ProductLineResponse, 'id' | 'name' | 'code' | 'createdAt' | 'updatedAt'>
  & { productStructure?: Types.Maybe<SolvedEntityFragmentFragment> }
);
