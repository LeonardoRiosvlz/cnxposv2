import * as Types from '../../types';

import { MonetaryDenominationFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { MonetaryDenominationFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllMonetaryDenominationDocument = gql`
    query getAllMonetaryDenomination($input: GetAllMonetaryDenominationInput!) {
  getAllMonetaryDenomination(input: $input) {
    ...MonetaryDenominationFragment
  }
}
    ${MonetaryDenominationFragmentFragmentDoc}`;
export type GetAllMonetaryDenominationProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllMonetaryDenominationQuery, GetAllMonetaryDenominationQueryVariables>
    } & TChildProps;
export function withGetAllMonetaryDenomination<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllMonetaryDenominationQuery,
  GetAllMonetaryDenominationQueryVariables,
  GetAllMonetaryDenominationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllMonetaryDenominationQuery, GetAllMonetaryDenominationQueryVariables, GetAllMonetaryDenominationProps<TChildProps, TDataName>>(GetAllMonetaryDenominationDocument, {
      alias: 'getAllMonetaryDenomination',
      ...operationOptions
    });
};

/**
 * __useGetAllMonetaryDenominationQuery__
 *
 * To run a query within a React component, call `useGetAllMonetaryDenominationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMonetaryDenominationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMonetaryDenominationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllMonetaryDenominationQuery(baseOptions: Apollo.QueryHookOptions<GetAllMonetaryDenominationQuery, GetAllMonetaryDenominationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMonetaryDenominationQuery, GetAllMonetaryDenominationQueryVariables>(GetAllMonetaryDenominationDocument, options);
      }
export function useGetAllMonetaryDenominationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMonetaryDenominationQuery, GetAllMonetaryDenominationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMonetaryDenominationQuery, GetAllMonetaryDenominationQueryVariables>(GetAllMonetaryDenominationDocument, options);
        }
export type GetAllMonetaryDenominationQueryHookResult = ReturnType<typeof useGetAllMonetaryDenominationQuery>;
export type GetAllMonetaryDenominationLazyQueryHookResult = ReturnType<typeof useGetAllMonetaryDenominationLazyQuery>;
export type GetAllMonetaryDenominationQueryResult = Apollo.QueryResult<GetAllMonetaryDenominationQuery, GetAllMonetaryDenominationQueryVariables>;
export const GetPaginatedMonetaryDenominationDocument = gql`
    query getPaginatedMonetaryDenomination($input: GetPaginatedMonetaryDenominationInput!) {
  getPaginatedMonetaryDenomination(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...MonetaryDenominationFragment
    }
  }
}
    ${MonetaryDenominationFragmentFragmentDoc}`;
export type GetPaginatedMonetaryDenominationProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedMonetaryDenominationQuery, GetPaginatedMonetaryDenominationQueryVariables>
    } & TChildProps;
export function withGetPaginatedMonetaryDenomination<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedMonetaryDenominationQuery,
  GetPaginatedMonetaryDenominationQueryVariables,
  GetPaginatedMonetaryDenominationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedMonetaryDenominationQuery, GetPaginatedMonetaryDenominationQueryVariables, GetPaginatedMonetaryDenominationProps<TChildProps, TDataName>>(GetPaginatedMonetaryDenominationDocument, {
      alias: 'getPaginatedMonetaryDenomination',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedMonetaryDenominationQuery__
 *
 * To run a query within a React component, call `useGetPaginatedMonetaryDenominationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedMonetaryDenominationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedMonetaryDenominationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedMonetaryDenominationQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedMonetaryDenominationQuery, GetPaginatedMonetaryDenominationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedMonetaryDenominationQuery, GetPaginatedMonetaryDenominationQueryVariables>(GetPaginatedMonetaryDenominationDocument, options);
      }
export function useGetPaginatedMonetaryDenominationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedMonetaryDenominationQuery, GetPaginatedMonetaryDenominationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedMonetaryDenominationQuery, GetPaginatedMonetaryDenominationQueryVariables>(GetPaginatedMonetaryDenominationDocument, options);
        }
export type GetPaginatedMonetaryDenominationQueryHookResult = ReturnType<typeof useGetPaginatedMonetaryDenominationQuery>;
export type GetPaginatedMonetaryDenominationLazyQueryHookResult = ReturnType<typeof useGetPaginatedMonetaryDenominationLazyQuery>;
export type GetPaginatedMonetaryDenominationQueryResult = Apollo.QueryResult<GetPaginatedMonetaryDenominationQuery, GetPaginatedMonetaryDenominationQueryVariables>;
export const GetOneMonetaryDenominationDocument = gql`
    query getOneMonetaryDenomination($input: GetOneMonetaryDenominationInput!) {
  getOneMonetaryDenomination(input: $input) {
    ...MonetaryDenominationFragment
  }
}
    ${MonetaryDenominationFragmentFragmentDoc}`;
export type GetOneMonetaryDenominationProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneMonetaryDenominationQuery, GetOneMonetaryDenominationQueryVariables>
    } & TChildProps;
export function withGetOneMonetaryDenomination<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneMonetaryDenominationQuery,
  GetOneMonetaryDenominationQueryVariables,
  GetOneMonetaryDenominationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneMonetaryDenominationQuery, GetOneMonetaryDenominationQueryVariables, GetOneMonetaryDenominationProps<TChildProps, TDataName>>(GetOneMonetaryDenominationDocument, {
      alias: 'getOneMonetaryDenomination',
      ...operationOptions
    });
};

/**
 * __useGetOneMonetaryDenominationQuery__
 *
 * To run a query within a React component, call `useGetOneMonetaryDenominationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneMonetaryDenominationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneMonetaryDenominationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneMonetaryDenominationQuery(baseOptions: Apollo.QueryHookOptions<GetOneMonetaryDenominationQuery, GetOneMonetaryDenominationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneMonetaryDenominationQuery, GetOneMonetaryDenominationQueryVariables>(GetOneMonetaryDenominationDocument, options);
      }
export function useGetOneMonetaryDenominationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneMonetaryDenominationQuery, GetOneMonetaryDenominationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneMonetaryDenominationQuery, GetOneMonetaryDenominationQueryVariables>(GetOneMonetaryDenominationDocument, options);
        }
export type GetOneMonetaryDenominationQueryHookResult = ReturnType<typeof useGetOneMonetaryDenominationQuery>;
export type GetOneMonetaryDenominationLazyQueryHookResult = ReturnType<typeof useGetOneMonetaryDenominationLazyQuery>;
export type GetOneMonetaryDenominationQueryResult = Apollo.QueryResult<GetOneMonetaryDenominationQuery, GetOneMonetaryDenominationQueryVariables>;
export type GetAllMonetaryDenominationQueryVariables = Types.Exact<{
  input: Types.GetAllMonetaryDenominationInput;
}>;


export type GetAllMonetaryDenominationQuery = { getAllMonetaryDenomination: Array<MonetaryDenominationFragmentFragment> };

export type GetPaginatedMonetaryDenominationQueryVariables = Types.Exact<{
  input: Types.GetPaginatedMonetaryDenominationInput;
}>;


export type GetPaginatedMonetaryDenominationQuery = { getPaginatedMonetaryDenomination?: Types.Maybe<(
    Pick<Types.PaginatedMonetaryDenominationResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<MonetaryDenominationFragmentFragment> }
  )> };

export type GetOneMonetaryDenominationQueryVariables = Types.Exact<{
  input: Types.GetOneMonetaryDenominationInput;
}>;


export type GetOneMonetaryDenominationQuery = { getOneMonetaryDenomination?: Types.Maybe<MonetaryDenominationFragmentFragment> };
