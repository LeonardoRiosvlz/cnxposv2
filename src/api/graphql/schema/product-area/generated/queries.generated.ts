import * as Types from '../../types';

import { ProductAreaFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { ProductAreaFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllProductAreaDocument = gql`
    query getAllProductArea($input: GetAllProductAreaInput!) {
  getAllProductArea(input: $input) {
    ...ProductAreaFragment
  }
}
    ${ProductAreaFragmentFragmentDoc}`;
export type GetAllProductAreaProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllProductAreaQuery, GetAllProductAreaQueryVariables>
    } & TChildProps;
export function withGetAllProductArea<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllProductAreaQuery,
  GetAllProductAreaQueryVariables,
  GetAllProductAreaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllProductAreaQuery, GetAllProductAreaQueryVariables, GetAllProductAreaProps<TChildProps, TDataName>>(GetAllProductAreaDocument, {
      alias: 'getAllProductArea',
      ...operationOptions
    });
};

/**
 * __useGetAllProductAreaQuery__
 *
 * To run a query within a React component, call `useGetAllProductAreaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductAreaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductAreaQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllProductAreaQuery(baseOptions: Apollo.QueryHookOptions<GetAllProductAreaQuery, GetAllProductAreaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductAreaQuery, GetAllProductAreaQueryVariables>(GetAllProductAreaDocument, options);
      }
export function useGetAllProductAreaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductAreaQuery, GetAllProductAreaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductAreaQuery, GetAllProductAreaQueryVariables>(GetAllProductAreaDocument, options);
        }
export type GetAllProductAreaQueryHookResult = ReturnType<typeof useGetAllProductAreaQuery>;
export type GetAllProductAreaLazyQueryHookResult = ReturnType<typeof useGetAllProductAreaLazyQuery>;
export type GetAllProductAreaQueryResult = Apollo.QueryResult<GetAllProductAreaQuery, GetAllProductAreaQueryVariables>;
export const GetPaginatedProductAreaDocument = gql`
    query getPaginatedProductArea($input: GetPaginatedProductAreaInput!) {
  getPaginatedProductArea(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...ProductAreaFragment
    }
  }
}
    ${ProductAreaFragmentFragmentDoc}`;
export type GetPaginatedProductAreaProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedProductAreaQuery, GetPaginatedProductAreaQueryVariables>
    } & TChildProps;
export function withGetPaginatedProductArea<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedProductAreaQuery,
  GetPaginatedProductAreaQueryVariables,
  GetPaginatedProductAreaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedProductAreaQuery, GetPaginatedProductAreaQueryVariables, GetPaginatedProductAreaProps<TChildProps, TDataName>>(GetPaginatedProductAreaDocument, {
      alias: 'getPaginatedProductArea',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedProductAreaQuery__
 *
 * To run a query within a React component, call `useGetPaginatedProductAreaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedProductAreaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedProductAreaQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedProductAreaQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedProductAreaQuery, GetPaginatedProductAreaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedProductAreaQuery, GetPaginatedProductAreaQueryVariables>(GetPaginatedProductAreaDocument, options);
      }
export function useGetPaginatedProductAreaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedProductAreaQuery, GetPaginatedProductAreaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedProductAreaQuery, GetPaginatedProductAreaQueryVariables>(GetPaginatedProductAreaDocument, options);
        }
export type GetPaginatedProductAreaQueryHookResult = ReturnType<typeof useGetPaginatedProductAreaQuery>;
export type GetPaginatedProductAreaLazyQueryHookResult = ReturnType<typeof useGetPaginatedProductAreaLazyQuery>;
export type GetPaginatedProductAreaQueryResult = Apollo.QueryResult<GetPaginatedProductAreaQuery, GetPaginatedProductAreaQueryVariables>;
export const GetOneProductAreaDocument = gql`
    query getOneProductArea($input: GetOneProductAreaInput!) {
  getOneProductArea(input: $input) {
    ...ProductAreaFragment
  }
}
    ${ProductAreaFragmentFragmentDoc}`;
export type GetOneProductAreaProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneProductAreaQuery, GetOneProductAreaQueryVariables>
    } & TChildProps;
export function withGetOneProductArea<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneProductAreaQuery,
  GetOneProductAreaQueryVariables,
  GetOneProductAreaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneProductAreaQuery, GetOneProductAreaQueryVariables, GetOneProductAreaProps<TChildProps, TDataName>>(GetOneProductAreaDocument, {
      alias: 'getOneProductArea',
      ...operationOptions
    });
};

/**
 * __useGetOneProductAreaQuery__
 *
 * To run a query within a React component, call `useGetOneProductAreaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneProductAreaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneProductAreaQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneProductAreaQuery(baseOptions: Apollo.QueryHookOptions<GetOneProductAreaQuery, GetOneProductAreaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneProductAreaQuery, GetOneProductAreaQueryVariables>(GetOneProductAreaDocument, options);
      }
export function useGetOneProductAreaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneProductAreaQuery, GetOneProductAreaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneProductAreaQuery, GetOneProductAreaQueryVariables>(GetOneProductAreaDocument, options);
        }
export type GetOneProductAreaQueryHookResult = ReturnType<typeof useGetOneProductAreaQuery>;
export type GetOneProductAreaLazyQueryHookResult = ReturnType<typeof useGetOneProductAreaLazyQuery>;
export type GetOneProductAreaQueryResult = Apollo.QueryResult<GetOneProductAreaQuery, GetOneProductAreaQueryVariables>;
export type GetAllProductAreaQueryVariables = Types.Exact<{
  input: Types.GetAllProductAreaInput;
}>;


export type GetAllProductAreaQuery = { getAllProductArea: Array<ProductAreaFragmentFragment> };

export type GetPaginatedProductAreaQueryVariables = Types.Exact<{
  input: Types.GetPaginatedProductAreaInput;
}>;


export type GetPaginatedProductAreaQuery = { getPaginatedProductArea?: Types.Maybe<(
    Pick<Types.PaginatedProductAreaResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<ProductAreaFragmentFragment> }
  )> };

export type GetOneProductAreaQueryVariables = Types.Exact<{
  input: Types.GetOneProductAreaInput;
}>;


export type GetOneProductAreaQuery = { getOneProductArea?: Types.Maybe<ProductAreaFragmentFragment> };
