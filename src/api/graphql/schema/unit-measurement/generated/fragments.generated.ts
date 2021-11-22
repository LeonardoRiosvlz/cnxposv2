import * as Types from '../../types';

import { gql } from '@apollo/client';
export const UnitMeasurementFragmentFragmentDoc = gql`
    fragment UnitMeasurementFragment on UnitMeasurementResponse {
  id
  name
  description
  createdAt
  updatedAt
}
    `;
export type UnitMeasurementFragmentFragment = Pick<Types.UnitMeasurementResponse, 'id' | 'name' | 'description' | 'createdAt' | 'updatedAt'>;
