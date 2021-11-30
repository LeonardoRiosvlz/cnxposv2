import * as Types from '../../types';

import { CloudFileFragmentFragment, SolvedEntityFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { CloudFileFragmentFragmentDoc, SolvedEntityFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const CompanyFragmentFragmentDoc = gql`
    fragment CompanyFragment on CompanyResponse {
  id
  name
  country
  city
  webSite
  address
  phoneNumber
  email
  nit
  isActive
  photoFile {
    ...CloudFileFragment
  }
  contact {
    ...SolvedEntityFragment
  }
  createdAt
  updatedAt
}
    ${CloudFileFragmentFragmentDoc}
${SolvedEntityFragmentFragmentDoc}`;
export type CompanyFragmentFragment = (
  Pick<Types.CompanyResponse, 'id' | 'name' | 'country' | 'city' | 'webSite' | 'address' | 'phoneNumber' | 'email' | 'nit' | 'isActive' | 'createdAt' | 'updatedAt'>
  & { photoFile?: Types.Maybe<CloudFileFragmentFragment>, contact?: Types.Maybe<SolvedEntityFragmentFragment> }
);
