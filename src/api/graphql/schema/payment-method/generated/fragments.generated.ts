import * as Types from '../../types';

import { SolvedEntityFragmentFragment, CloudFileFragmentFragment } from '../../common/generated/fragments.generated';
import { gql } from '@apollo/client';
import { SolvedEntityFragmentFragmentDoc, CloudFileFragmentFragmentDoc } from '../../common/generated/fragments.generated';
export const PaymentMethodFragmentFragmentDoc = gql`
    fragment PaymentMethodFragment on PaymentMethodResponse {
  id
  name
  code
  cashOnHand
  credit
  divideIntoInstallments
  paycheck
  deferPayment
  days
  accounting
  alwaysLinkedWith
  accountingAccount
  askBank
  askBoucherNumber
  askDocumentDate
  askCardType
  paymentMethodDian {
    ...SolvedEntityFragment
  }
  paymentMethodDianType
  administersDominicilios
  administersBonuses
  administersAdvanceReservationsOrders
  affectVouchersConsignmentsThirds
  showIva
  iva {
    ...SolvedEntityFragment
  }
  confirmReturns
  confirmCreditCut
  photoFile {
    ...CloudFileFragment
  }
  createdAt
  updatedAt
}
    ${SolvedEntityFragmentFragmentDoc}
${CloudFileFragmentFragmentDoc}`;
export type PaymentMethodFragmentFragment = (
  Pick<Types.PaymentMethodResponse, 'id' | 'name' | 'code' | 'cashOnHand' | 'credit' | 'divideIntoInstallments' | 'paycheck' | 'deferPayment' | 'days' | 'accounting' | 'alwaysLinkedWith' | 'accountingAccount' | 'askBank' | 'askBoucherNumber' | 'askDocumentDate' | 'askCardType' | 'paymentMethodDianType' | 'administersDominicilios' | 'administersBonuses' | 'administersAdvanceReservationsOrders' | 'affectVouchersConsignmentsThirds' | 'showIva' | 'confirmReturns' | 'confirmCreditCut' | 'createdAt' | 'updatedAt'>
  & { paymentMethodDian?: Types.Maybe<SolvedEntityFragmentFragment>, iva?: Types.Maybe<SolvedEntityFragmentFragment>, photoFile?: Types.Maybe<CloudFileFragmentFragment> }
);
