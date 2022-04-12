import * as Types from '../../types';

import { SolvedEntityFragmentFragment, CloudFileFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { SolvedEntityFragmentFragmentDoc, CloudFileFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const ThirdPartiesFragmentFragmentDoc = gql`
    fragment ThirdPartiesFragment on ThirdPartiesResponse {
  id
  identificationDocument
  verificationDigit
  identificationDocumentType
  personType
  barCode
  firstName
  lastName
  firstSurname
  secondSurname
  businessName
  tradename
  address
  phoneNumber
  secondPhoneNumber
  birthday
  email
  department
  city
  neighborhood
  thirdPartyClassification {
    ...SolvedEntityFragment
  }
  nationality
  regime
  isClient
  isEmployee
  isSupplier
  isOtherSellers
  isPosBilling
  photoFile {
    ...CloudFileFragment
  }
  assignDebtQuota
  debtQuota
  isSetPrices
  priceType
  isActive
  enablePoints
  baseRetention
  percentageRetention
  seller {
    ...SolvedEntityFragment
  }
  products {
    ...SolvedEntityFragment
  }
  restrictPaymentMethod
  restrictAllPaymentMethod
  paymentMethod {
    ...SolvedEntityFragment
  }
  createdAt
  updatedAt
}
    ${SolvedEntityFragmentFragmentDoc}
${CloudFileFragmentFragmentDoc}`;
export type ThirdPartiesFragmentFragment = (
  Pick<Types.ThirdPartiesResponse, 'id' | 'identificationDocument' | 'verificationDigit' | 'identificationDocumentType' | 'personType' | 'barCode' | 'firstName' | 'lastName' | 'firstSurname' | 'secondSurname' | 'businessName' | 'tradename' | 'address' | 'phoneNumber' | 'secondPhoneNumber' | 'birthday' | 'email' | 'department' | 'city' | 'neighborhood' | 'nationality' | 'regime' | 'isClient' | 'isEmployee' | 'isSupplier' | 'isOtherSellers' | 'isPosBilling' | 'assignDebtQuota' | 'debtQuota' | 'isSetPrices' | 'priceType' | 'isActive' | 'enablePoints' | 'baseRetention' | 'percentageRetention' | 'restrictPaymentMethod' | 'restrictAllPaymentMethod' | 'createdAt' | 'updatedAt'>
  & { thirdPartyClassification?: Types.Maybe<SolvedEntityFragmentFragment>, photoFile?: Types.Maybe<CloudFileFragmentFragment>, seller: SolvedEntityFragmentFragment, products: Array<SolvedEntityFragmentFragment>, paymentMethod: Array<SolvedEntityFragmentFragment> }
);
