import * as Types from '../../types';

import { TaxesAndCostsFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { TaxesAndCostsFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllTaxesAndCostsDocument = gql`
    query getAllTaxesAndCosts($input: GetAllTaxesAndCostsInput!) {
  getAllTaxesAndCosts(input: $input) {
    ...TaxesAndCostsFragment
  }
}
    ${TaxesAndCostsFragmentFragmentDoc}`;
export type GetAllTaxesAndCostsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllTaxesAndCostsQuery, GetAllTaxesAndCostsQueryVariables>
    } & TChildProps;
export function withGetAllTaxesAndCosts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllTaxesAndCostsQuery,
  GetAllTaxesAndCostsQueryVariables,
  GetAllTaxesAndCostsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllTaxesAndCostsQuery, GetAllTaxesAndCostsQueryVariables, GetAllTaxesAndCostsProps<TChildProps, TDataName>>(GetAllTaxesAndCostsDocument, {
      alias: 'getAllTaxesAndCosts',
      ...operationOptions
    });
};

/**
 * __useGetAllTaxesAndCostsQuery__
 *
 * To run a query within a React component, call `useGetAllTaxesAndCostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTaxesAndCostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTaxesAndCostsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllTaxesAndCostsQuery(baseOptions: Apollo.QueryHookOptions<GetAllTaxesAndCostsQuery, GetAllTaxesAndCostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTaxesAndCostsQuery, GetAllTaxesAndCostsQueryVariables>(GetAllTaxesAndCostsDocument, options);
      }
export function useGetAllTaxesAndCostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTaxesAndCostsQuery, GetAllTaxesAndCostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTaxesAndCostsQuery, GetAllTaxesAndCostsQueryVariables>(GetAllTaxesAndCostsDocument, options);
        }
export type GetAllTaxesAndCostsQueryHookResult = ReturnType<typeof useGetAllTaxesAndCostsQuery>;
export type GetAllTaxesAndCostsLazyQueryHookResult = ReturnType<typeof useGetAllTaxesAndCostsLazyQuery>;
export type GetAllTaxesAndCostsQueryResult = Apollo.QueryResult<GetAllTaxesAndCostsQuery, GetAllTaxesAndCostsQueryVariables>;
export const GetPaginatedTaxesAndCostsDocument = gql`
    query getPaginatedTaxesAndCosts($input: GetPaginatedTaxesAndCostsInput!) {
  getPaginatedTaxesAndCosts(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...TaxesAndCostsFragment
    }
  }
}
    ${TaxesAndCostsFragmentFragmentDoc}`;
export type GetPaginatedTaxesAndCostsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedTaxesAndCostsQuery, GetPaginatedTaxesAndCostsQueryVariables>
    } & TChildProps;
export function withGetPaginatedTaxesAndCosts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedTaxesAndCostsQuery,
  GetPaginatedTaxesAndCostsQueryVariables,
  GetPaginatedTaxesAndCostsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedTaxesAndCostsQuery, GetPaginatedTaxesAndCostsQueryVariables, GetPaginatedTaxesAndCostsProps<TChildProps, TDataName>>(GetPaginatedTaxesAndCostsDocument, {
      alias: 'getPaginatedTaxesAndCosts',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedTaxesAndCostsQuery__
 *
 * To run a query within a React component, call `useGetPaginatedTaxesAndCostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedTaxesAndCostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedTaxesAndCostsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedTaxesAndCostsQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedTaxesAndCostsQuery, GetPaginatedTaxesAndCostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedTaxesAndCostsQuery, GetPaginatedTaxesAndCostsQueryVariables>(GetPaginatedTaxesAndCostsDocument, options);
      }
export function useGetPaginatedTaxesAndCostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedTaxesAndCostsQuery, GetPaginatedTaxesAndCostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedTaxesAndCostsQuery, GetPaginatedTaxesAndCostsQueryVariables>(GetPaginatedTaxesAndCostsDocument, options);
        }
export type GetPaginatedTaxesAndCostsQueryHookResult = ReturnType<typeof useGetPaginatedTaxesAndCostsQuery>;
export type GetPaginatedTaxesAndCostsLazyQueryHookResult = ReturnType<typeof useGetPaginatedTaxesAndCostsLazyQuery>;
export type GetPaginatedTaxesAndCostsQueryResult = Apollo.QueryResult<GetPaginatedTaxesAndCostsQuery, GetPaginatedTaxesAndCostsQueryVariables>;
export const GetOneTaxesAndCostsDocument = gql`
    query getOneTaxesAndCosts($input: GetOneTaxesAndCostsInput!) {
  getOneTaxesAndCosts(input: $input) {
    ...TaxesAndCostsFragment
  }
}
    ${TaxesAndCostsFragmentFragmentDoc}`;
export type GetOneTaxesAndCostsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneTaxesAndCostsQuery, GetOneTaxesAndCostsQueryVariables>
    } & TChildProps;
export function withGetOneTaxesAndCosts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneTaxesAndCostsQuery,
  GetOneTaxesAndCostsQueryVariables,
  GetOneTaxesAndCostsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneTaxesAndCostsQuery, GetOneTaxesAndCostsQueryVariables, GetOneTaxesAndCostsProps<TChildProps, TDataName>>(GetOneTaxesAndCostsDocument, {
      alias: 'getOneTaxesAndCosts',
      ...operationOptions
    });
};

/**
 * __useGetOneTaxesAndCostsQuery__
 *
 * To run a query within a React component, call `useGetOneTaxesAndCostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneTaxesAndCostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneTaxesAndCostsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneTaxesAndCostsQuery(baseOptions: Apollo.QueryHookOptions<GetOneTaxesAndCostsQuery, GetOneTaxesAndCostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneTaxesAndCostsQuery, GetOneTaxesAndCostsQueryVariables>(GetOneTaxesAndCostsDocument, options);
      }
export function useGetOneTaxesAndCostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneTaxesAndCostsQuery, GetOneTaxesAndCostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneTaxesAndCostsQuery, GetOneTaxesAndCostsQueryVariables>(GetOneTaxesAndCostsDocument, options);
        }
export type GetOneTaxesAndCostsQueryHookResult = ReturnType<typeof useGetOneTaxesAndCostsQuery>;
export type GetOneTaxesAndCostsLazyQueryHookResult = ReturnType<typeof useGetOneTaxesAndCostsLazyQuery>;
export type GetOneTaxesAndCostsQueryResult = Apollo.QueryResult<GetOneTaxesAndCostsQuery, GetOneTaxesAndCostsQueryVariables>;
export type GetAllTaxesAndCostsQueryVariables = Types.Exact<{
  input: Types.GetAllTaxesAndCostsInput;
}>;


export type GetAllTaxesAndCostsQuery = { getAllTaxesAndCosts: Array<TaxesAndCostsFragmentFragment> };

export type GetPaginatedTaxesAndCostsQueryVariables = Types.Exact<{
  input: Types.GetPaginatedTaxesAndCostsInput;
}>;


export type GetPaginatedTaxesAndCostsQuery = { getPaginatedTaxesAndCosts?: Types.Maybe<(
    Pick<Types.PaginatedTaxesAndCostsResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<TaxesAndCostsFragmentFragment> }
  )> };

export type GetOneTaxesAndCostsQueryVariables = Types.Exact<{
  input: Types.GetOneTaxesAndCostsInput;
}>;


export type GetOneTaxesAndCostsQuery = { getOneTaxesAndCosts?: Types.Maybe<TaxesAndCostsFragmentFragment> };
