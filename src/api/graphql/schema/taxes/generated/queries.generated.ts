import * as Types from '../../types';

import { TaxesFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { TaxesFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllTaxesDocument = gql`
    query getAllTaxes($input: GetAllTaxesInput!) {
  getAllTaxes(input: $input) {
    ...TaxesFragment
  }
}
    ${TaxesFragmentFragmentDoc}`;
export type GetAllTaxesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllTaxesQuery, GetAllTaxesQueryVariables>
    } & TChildProps;
export function withGetAllTaxes<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllTaxesQuery,
  GetAllTaxesQueryVariables,
  GetAllTaxesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllTaxesQuery, GetAllTaxesQueryVariables, GetAllTaxesProps<TChildProps, TDataName>>(GetAllTaxesDocument, {
      alias: 'getAllTaxes',
      ...operationOptions
    });
};

/**
 * __useGetAllTaxesQuery__
 *
 * To run a query within a React component, call `useGetAllTaxesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTaxesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTaxesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllTaxesQuery(baseOptions: Apollo.QueryHookOptions<GetAllTaxesQuery, GetAllTaxesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTaxesQuery, GetAllTaxesQueryVariables>(GetAllTaxesDocument, options);
      }
export function useGetAllTaxesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTaxesQuery, GetAllTaxesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTaxesQuery, GetAllTaxesQueryVariables>(GetAllTaxesDocument, options);
        }
export type GetAllTaxesQueryHookResult = ReturnType<typeof useGetAllTaxesQuery>;
export type GetAllTaxesLazyQueryHookResult = ReturnType<typeof useGetAllTaxesLazyQuery>;
export type GetAllTaxesQueryResult = Apollo.QueryResult<GetAllTaxesQuery, GetAllTaxesQueryVariables>;
export const GetPaginatedTaxesDocument = gql`
    query getPaginatedTaxes($input: GetPaginatedTaxesInput!) {
  getPaginatedTaxes(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...TaxesFragment
    }
  }
}
    ${TaxesFragmentFragmentDoc}`;
export type GetPaginatedTaxesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedTaxesQuery, GetPaginatedTaxesQueryVariables>
    } & TChildProps;
export function withGetPaginatedTaxes<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedTaxesQuery,
  GetPaginatedTaxesQueryVariables,
  GetPaginatedTaxesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedTaxesQuery, GetPaginatedTaxesQueryVariables, GetPaginatedTaxesProps<TChildProps, TDataName>>(GetPaginatedTaxesDocument, {
      alias: 'getPaginatedTaxes',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedTaxesQuery__
 *
 * To run a query within a React component, call `useGetPaginatedTaxesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedTaxesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedTaxesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedTaxesQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedTaxesQuery, GetPaginatedTaxesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedTaxesQuery, GetPaginatedTaxesQueryVariables>(GetPaginatedTaxesDocument, options);
      }
export function useGetPaginatedTaxesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedTaxesQuery, GetPaginatedTaxesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedTaxesQuery, GetPaginatedTaxesQueryVariables>(GetPaginatedTaxesDocument, options);
        }
export type GetPaginatedTaxesQueryHookResult = ReturnType<typeof useGetPaginatedTaxesQuery>;
export type GetPaginatedTaxesLazyQueryHookResult = ReturnType<typeof useGetPaginatedTaxesLazyQuery>;
export type GetPaginatedTaxesQueryResult = Apollo.QueryResult<GetPaginatedTaxesQuery, GetPaginatedTaxesQueryVariables>;
export const GetOneTaxesDocument = gql`
    query getOneTaxes($input: GetOneTaxesInput!) {
  getOneTaxes(input: $input) {
    ...TaxesFragment
  }
}
    ${TaxesFragmentFragmentDoc}`;
export type GetOneTaxesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneTaxesQuery, GetOneTaxesQueryVariables>
    } & TChildProps;
export function withGetOneTaxes<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneTaxesQuery,
  GetOneTaxesQueryVariables,
  GetOneTaxesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneTaxesQuery, GetOneTaxesQueryVariables, GetOneTaxesProps<TChildProps, TDataName>>(GetOneTaxesDocument, {
      alias: 'getOneTaxes',
      ...operationOptions
    });
};

/**
 * __useGetOneTaxesQuery__
 *
 * To run a query within a React component, call `useGetOneTaxesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneTaxesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneTaxesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneTaxesQuery(baseOptions: Apollo.QueryHookOptions<GetOneTaxesQuery, GetOneTaxesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneTaxesQuery, GetOneTaxesQueryVariables>(GetOneTaxesDocument, options);
      }
export function useGetOneTaxesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneTaxesQuery, GetOneTaxesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneTaxesQuery, GetOneTaxesQueryVariables>(GetOneTaxesDocument, options);
        }
export type GetOneTaxesQueryHookResult = ReturnType<typeof useGetOneTaxesQuery>;
export type GetOneTaxesLazyQueryHookResult = ReturnType<typeof useGetOneTaxesLazyQuery>;
export type GetOneTaxesQueryResult = Apollo.QueryResult<GetOneTaxesQuery, GetOneTaxesQueryVariables>;
export type GetAllTaxesQueryVariables = Types.Exact<{
  input: Types.GetAllTaxesInput;
}>;


export type GetAllTaxesQuery = { getAllTaxes: Array<TaxesFragmentFragment> };

export type GetPaginatedTaxesQueryVariables = Types.Exact<{
  input: Types.GetPaginatedTaxesInput;
}>;


export type GetPaginatedTaxesQuery = { getPaginatedTaxes?: Types.Maybe<(
    Pick<Types.PaginatedTaxesResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<TaxesFragmentFragment> }
  )> };

export type GetOneTaxesQueryVariables = Types.Exact<{
  input: Types.GetOneTaxesInput;
}>;


export type GetOneTaxesQuery = { getOneTaxes?: Types.Maybe<TaxesFragmentFragment> };
