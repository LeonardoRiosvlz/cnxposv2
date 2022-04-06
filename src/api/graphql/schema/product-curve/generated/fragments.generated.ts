import * as Types from '../../types';

import { SolvedEntityFragmentFragment, CloudFileFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { SolvedEntityFragmentFragmentDoc, CloudFileFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const ProductCurveFragmentFragmentDoc = gql`
    fragment ProductCurveFragment on ProductCurveResponse {
  id
  product {
    ...SolvedEntityFragment
  }
  name
  code
  ref
  createdAt
  updatedAt
}
    ${SolvedEntityFragmentFragmentDoc}`;
export type ProductCurveFragmentFragment = (
  Pick<Types.ProductCurveResponse, 'id' | 'name' | 'code' | 'ref' | 'createdAt' | 'updatedAt'>
  & { product: SolvedEntityFragmentFragment }
);
