import * as Types from '../../types';

import { BillingResolutionFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { BillingResolutionFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllBillingResolutionDocument = gql`
    query getAllBillingResolution($input: GetAllBillingResolutionInput!) {
  getAllBillingResolution(input: $input) {
    ...BillingResolutionFragment
  }
}
    ${BillingResolutionFragmentFragmentDoc}`;
export type GetAllBillingResolutionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllBillingResolutionQuery, GetAllBillingResolutionQueryVariables>
    } & TChildProps;
export function withGetAllBillingResolution<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllBillingResolutionQuery,
  GetAllBillingResolutionQueryVariables,
  GetAllBillingResolutionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllBillingResolutionQuery, GetAllBillingResolutionQueryVariables, GetAllBillingResolutionProps<TChildProps, TDataName>>(GetAllBillingResolutionDocument, {
      alias: 'getAllBillingResolution',
      ...operationOptions
    });
};

/**
 * __useGetAllBillingResolutionQuery__
 *
 * To run a query within a React component, call `useGetAllBillingResolutionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBillingResolutionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBillingResolutionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllBillingResolutionQuery(baseOptions: Apollo.QueryHookOptions<GetAllBillingResolutionQuery, GetAllBillingResolutionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBillingResolutionQuery, GetAllBillingResolutionQueryVariables>(GetAllBillingResolutionDocument, options);
      }
export function useGetAllBillingResolutionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBillingResolutionQuery, GetAllBillingResolutionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBillingResolutionQuery, GetAllBillingResolutionQueryVariables>(GetAllBillingResolutionDocument, options);
        }
export type GetAllBillingResolutionQueryHookResult = ReturnType<typeof useGetAllBillingResolutionQuery>;
export type GetAllBillingResolutionLazyQueryHookResult = ReturnType<typeof useGetAllBillingResolutionLazyQuery>;
export type GetAllBillingResolutionQueryResult = Apollo.QueryResult<GetAllBillingResolutionQuery, GetAllBillingResolutionQueryVariables>;
export const GetPaginatedBillingResolutionDocument = gql`
    query getPaginatedBillingResolution($input: GetPaginatedBillingResolutionInput!) {
  getPaginatedBillingResolution(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...BillingResolutionFragment
    }
  }
}
    ${BillingResolutionFragmentFragmentDoc}`;
export type GetPaginatedBillingResolutionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedBillingResolutionQuery, GetPaginatedBillingResolutionQueryVariables>
    } & TChildProps;
export function withGetPaginatedBillingResolution<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedBillingResolutionQuery,
  GetPaginatedBillingResolutionQueryVariables,
  GetPaginatedBillingResolutionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedBillingResolutionQuery, GetPaginatedBillingResolutionQueryVariables, GetPaginatedBillingResolutionProps<TChildProps, TDataName>>(GetPaginatedBillingResolutionDocument, {
      alias: 'getPaginatedBillingResolution',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedBillingResolutionQuery__
 *
 * To run a query within a React component, call `useGetPaginatedBillingResolutionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedBillingResolutionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedBillingResolutionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedBillingResolutionQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedBillingResolutionQuery, GetPaginatedBillingResolutionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedBillingResolutionQuery, GetPaginatedBillingResolutionQueryVariables>(GetPaginatedBillingResolutionDocument, options);
      }
export function useGetPaginatedBillingResolutionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedBillingResolutionQuery, GetPaginatedBillingResolutionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedBillingResolutionQuery, GetPaginatedBillingResolutionQueryVariables>(GetPaginatedBillingResolutionDocument, options);
        }
export type GetPaginatedBillingResolutionQueryHookResult = ReturnType<typeof useGetPaginatedBillingResolutionQuery>;
export type GetPaginatedBillingResolutionLazyQueryHookResult = ReturnType<typeof useGetPaginatedBillingResolutionLazyQuery>;
export type GetPaginatedBillingResolutionQueryResult = Apollo.QueryResult<GetPaginatedBillingResolutionQuery, GetPaginatedBillingResolutionQueryVariables>;
export const GetOneBillingResolutionDocument = gql`
    query getOneBillingResolution($input: GetOneBillingResolutionInput!) {
  getOneBillingResolution(input: $input) {
    ...BillingResolutionFragment
  }
}
    ${BillingResolutionFragmentFragmentDoc}`;
export type GetOneBillingResolutionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneBillingResolutionQuery, GetOneBillingResolutionQueryVariables>
    } & TChildProps;
export function withGetOneBillingResolution<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneBillingResolutionQuery,
  GetOneBillingResolutionQueryVariables,
  GetOneBillingResolutionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneBillingResolutionQuery, GetOneBillingResolutionQueryVariables, GetOneBillingResolutionProps<TChildProps, TDataName>>(GetOneBillingResolutionDocument, {
      alias: 'getOneBillingResolution',
      ...operationOptions
    });
};

/**
 * __useGetOneBillingResolutionQuery__
 *
 * To run a query within a React component, call `useGetOneBillingResolutionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneBillingResolutionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneBillingResolutionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneBillingResolutionQuery(baseOptions: Apollo.QueryHookOptions<GetOneBillingResolutionQuery, GetOneBillingResolutionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneBillingResolutionQuery, GetOneBillingResolutionQueryVariables>(GetOneBillingResolutionDocument, options);
      }
export function useGetOneBillingResolutionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneBillingResolutionQuery, GetOneBillingResolutionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneBillingResolutionQuery, GetOneBillingResolutionQueryVariables>(GetOneBillingResolutionDocument, options);
        }
export type GetOneBillingResolutionQueryHookResult = ReturnType<typeof useGetOneBillingResolutionQuery>;
export type GetOneBillingResolutionLazyQueryHookResult = ReturnType<typeof useGetOneBillingResolutionLazyQuery>;
export type GetOneBillingResolutionQueryResult = Apollo.QueryResult<GetOneBillingResolutionQuery, GetOneBillingResolutionQueryVariables>;
export type GetAllBillingResolutionQueryVariables = Types.Exact<{
  input: Types.GetAllBillingResolutionInput;
}>;


export type GetAllBillingResolutionQuery = { getAllBillingResolution: Array<BillingResolutionFragmentFragment> };

export type GetPaginatedBillingResolutionQueryVariables = Types.Exact<{
  input: Types.GetPaginatedBillingResolutionInput;
}>;


export type GetPaginatedBillingResolutionQuery = { getPaginatedBillingResolution?: Types.Maybe<(
    Pick<Types.PaginatedBillingResolutionResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<BillingResolutionFragmentFragment> }
  )> };

export type GetOneBillingResolutionQueryVariables = Types.Exact<{
  input: Types.GetOneBillingResolutionInput;
}>;


export type GetOneBillingResolutionQuery = { getOneBillingResolution?: Types.Maybe<BillingResolutionFragmentFragment> };
