import * as Types from '../../types';

import { UnitMeasurementFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { UnitMeasurementFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllUnitMeasurementDocument = gql`
    query getAllUnitMeasurement($input: GetAllUnitMeasurementInput!) {
  getAllUnitMeasurement(input: $input) {
    ...UnitMeasurementFragment
  }
}
    ${UnitMeasurementFragmentFragmentDoc}`;
export type GetAllUnitMeasurementProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllUnitMeasurementQuery, GetAllUnitMeasurementQueryVariables>
    } & TChildProps;
export function withGetAllUnitMeasurement<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllUnitMeasurementQuery,
  GetAllUnitMeasurementQueryVariables,
  GetAllUnitMeasurementProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllUnitMeasurementQuery, GetAllUnitMeasurementQueryVariables, GetAllUnitMeasurementProps<TChildProps, TDataName>>(GetAllUnitMeasurementDocument, {
      alias: 'getAllUnitMeasurement',
      ...operationOptions
    });
};

/**
 * __useGetAllUnitMeasurementQuery__
 *
 * To run a query within a React component, call `useGetAllUnitMeasurementQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUnitMeasurementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUnitMeasurementQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllUnitMeasurementQuery(baseOptions: Apollo.QueryHookOptions<GetAllUnitMeasurementQuery, GetAllUnitMeasurementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUnitMeasurementQuery, GetAllUnitMeasurementQueryVariables>(GetAllUnitMeasurementDocument, options);
      }
export function useGetAllUnitMeasurementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUnitMeasurementQuery, GetAllUnitMeasurementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUnitMeasurementQuery, GetAllUnitMeasurementQueryVariables>(GetAllUnitMeasurementDocument, options);
        }
export type GetAllUnitMeasurementQueryHookResult = ReturnType<typeof useGetAllUnitMeasurementQuery>;
export type GetAllUnitMeasurementLazyQueryHookResult = ReturnType<typeof useGetAllUnitMeasurementLazyQuery>;
export type GetAllUnitMeasurementQueryResult = Apollo.QueryResult<GetAllUnitMeasurementQuery, GetAllUnitMeasurementQueryVariables>;
export const GetPaginatedUnitMeasurementDocument = gql`
    query getPaginatedUnitMeasurement($input: GetPaginatedUnitMeasurementInput!) {
  getPaginatedUnitMeasurement(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...UnitMeasurementFragment
    }
  }
}
    ${UnitMeasurementFragmentFragmentDoc}`;
export type GetPaginatedUnitMeasurementProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedUnitMeasurementQuery, GetPaginatedUnitMeasurementQueryVariables>
    } & TChildProps;
export function withGetPaginatedUnitMeasurement<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedUnitMeasurementQuery,
  GetPaginatedUnitMeasurementQueryVariables,
  GetPaginatedUnitMeasurementProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedUnitMeasurementQuery, GetPaginatedUnitMeasurementQueryVariables, GetPaginatedUnitMeasurementProps<TChildProps, TDataName>>(GetPaginatedUnitMeasurementDocument, {
      alias: 'getPaginatedUnitMeasurement',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedUnitMeasurementQuery__
 *
 * To run a query within a React component, call `useGetPaginatedUnitMeasurementQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedUnitMeasurementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedUnitMeasurementQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedUnitMeasurementQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedUnitMeasurementQuery, GetPaginatedUnitMeasurementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedUnitMeasurementQuery, GetPaginatedUnitMeasurementQueryVariables>(GetPaginatedUnitMeasurementDocument, options);
      }
export function useGetPaginatedUnitMeasurementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedUnitMeasurementQuery, GetPaginatedUnitMeasurementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedUnitMeasurementQuery, GetPaginatedUnitMeasurementQueryVariables>(GetPaginatedUnitMeasurementDocument, options);
        }
export type GetPaginatedUnitMeasurementQueryHookResult = ReturnType<typeof useGetPaginatedUnitMeasurementQuery>;
export type GetPaginatedUnitMeasurementLazyQueryHookResult = ReturnType<typeof useGetPaginatedUnitMeasurementLazyQuery>;
export type GetPaginatedUnitMeasurementQueryResult = Apollo.QueryResult<GetPaginatedUnitMeasurementQuery, GetPaginatedUnitMeasurementQueryVariables>;
export const GetOneUnitMeasurementDocument = gql`
    query getOneUnitMeasurement($input: GetOneUnitMeasurementInput!) {
  getOneUnitMeasurement(input: $input) {
    ...UnitMeasurementFragment
  }
}
    ${UnitMeasurementFragmentFragmentDoc}`;
export type GetOneUnitMeasurementProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneUnitMeasurementQuery, GetOneUnitMeasurementQueryVariables>
    } & TChildProps;
export function withGetOneUnitMeasurement<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneUnitMeasurementQuery,
  GetOneUnitMeasurementQueryVariables,
  GetOneUnitMeasurementProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneUnitMeasurementQuery, GetOneUnitMeasurementQueryVariables, GetOneUnitMeasurementProps<TChildProps, TDataName>>(GetOneUnitMeasurementDocument, {
      alias: 'getOneUnitMeasurement',
      ...operationOptions
    });
};

/**
 * __useGetOneUnitMeasurementQuery__
 *
 * To run a query within a React component, call `useGetOneUnitMeasurementQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUnitMeasurementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUnitMeasurementQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneUnitMeasurementQuery(baseOptions: Apollo.QueryHookOptions<GetOneUnitMeasurementQuery, GetOneUnitMeasurementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneUnitMeasurementQuery, GetOneUnitMeasurementQueryVariables>(GetOneUnitMeasurementDocument, options);
      }
export function useGetOneUnitMeasurementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneUnitMeasurementQuery, GetOneUnitMeasurementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneUnitMeasurementQuery, GetOneUnitMeasurementQueryVariables>(GetOneUnitMeasurementDocument, options);
        }
export type GetOneUnitMeasurementQueryHookResult = ReturnType<typeof useGetOneUnitMeasurementQuery>;
export type GetOneUnitMeasurementLazyQueryHookResult = ReturnType<typeof useGetOneUnitMeasurementLazyQuery>;
export type GetOneUnitMeasurementQueryResult = Apollo.QueryResult<GetOneUnitMeasurementQuery, GetOneUnitMeasurementQueryVariables>;
export type GetAllUnitMeasurementQueryVariables = Types.Exact<{
  input: Types.GetAllUnitMeasurementInput;
}>;


export type GetAllUnitMeasurementQuery = { getAllUnitMeasurement: Array<UnitMeasurementFragmentFragment> };

export type GetPaginatedUnitMeasurementQueryVariables = Types.Exact<{
  input: Types.GetPaginatedUnitMeasurementInput;
}>;


export type GetPaginatedUnitMeasurementQuery = { getPaginatedUnitMeasurement?: Types.Maybe<(
    Pick<Types.PaginatedUnitMeasurementResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<UnitMeasurementFragmentFragment> }
  )> };

export type GetOneUnitMeasurementQueryVariables = Types.Exact<{
  input: Types.GetOneUnitMeasurementInput;
}>;


export type GetOneUnitMeasurementQuery = { getOneUnitMeasurement?: Types.Maybe<UnitMeasurementFragmentFragment> };
