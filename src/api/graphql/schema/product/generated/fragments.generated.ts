import * as Types from '../../types';

import { SolvedEntityFragmentFragment, CloudFileFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { SolvedEntityFragmentFragmentDoc, CloudFileFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const ProductFragmentFragmentDoc = gql`
    fragment ProductFragment on ProductResponse {
  id
  name
  code
  description
  ref
  productLine {
    ...SolvedEntityFragment
  }
  structure {
    ...SolvedEntityFragment
  }
  um {
    ...SolvedEntityFragment
  }
  area {
    ...SolvedEntityFragment
  }
  composition {
    ...SolvedEntityFragment
  }
  photoFile {
    ...CloudFileFragment
  }
  groups {
    ...SolvedEntityFragment
  }
  barCode {
    ...SolvedEntityFragment
  }
  barCodeProduct
  isActive
  compound
  createdAt
  updatedAt
}
    ${SolvedEntityFragmentFragmentDoc}
${CloudFileFragmentFragmentDoc}`;
export type ProductFragmentFragment = (
  Pick<Types.ProductResponse, 'id' | 'name' | 'code' | 'description' | 'ref' | 'barCodeProduct' | 'isActive' | 'compound' | 'createdAt' | 'updatedAt'>
  & { productLine?: Types.Maybe<SolvedEntityFragmentFragment>, structure?: Types.Maybe<SolvedEntityFragmentFragment>, um?: Types.Maybe<SolvedEntityFragmentFragment>, area?: Types.Maybe<SolvedEntityFragmentFragment>, composition?: Types.Maybe<SolvedEntityFragmentFragment>, photoFile?: Types.Maybe<CloudFileFragmentFragment>, groups?: Types.Maybe<Array<SolvedEntityFragmentFragment>>, barCode?: Types.Maybe<Array<SolvedEntityFragmentFragment>> }
);
