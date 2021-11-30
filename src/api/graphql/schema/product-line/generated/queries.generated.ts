import * as Types from '../../types';

import { ProductLineFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { ProductLineFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllProductLineDocument = gql`
    query getAllProductLine($input: GetAllProductLineInput!) {
  getAllProductLine(input: $input) {
    ...ProductLineFragment
  }
}
    ${ProductLineFragmentFragmentDoc}`;
export type GetAllProductLineProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllProductLineQuery, GetAllProductLineQueryVariables>
    } & TChildProps;
export function withGetAllProductLine<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllProductLineQuery,
  GetAllProductLineQueryVariables,
  GetAllProductLineProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllProductLineQuery, GetAllProductLineQueryVariables, GetAllProductLineProps<TChildProps, TDataName>>(GetAllProductLineDocument, {
      alias: 'getAllProductLine',
      ...operationOptions
    });
};

/**
 * __useGetAllProductLineQuery__
 *
 * To run a query within a React component, call `useGetAllProductLineQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductLineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductLineQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllProductLineQuery(baseOptions: Apollo.QueryHookOptions<GetAllProductLineQuery, GetAllProductLineQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductLineQuery, GetAllProductLineQueryVariables>(GetAllProductLineDocument, options);
      }
export function useGetAllProductLineLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductLineQuery, GetAllProductLineQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductLineQuery, GetAllProductLineQueryVariables>(GetAllProductLineDocument, options);
        }
export type GetAllProductLineQueryHookResult = ReturnType<typeof useGetAllProductLineQuery>;
export type GetAllProductLineLazyQueryHookResult = ReturnType<typeof useGetAllProductLineLazyQuery>;
export type GetAllProductLineQueryResult = Apollo.QueryResult<GetAllProductLineQuery, GetAllProductLineQueryVariables>;
export const GetPaginatedProductLineDocument = gql`
    query getPaginatedProductLine($input: GetPaginatedProductLineInput!) {
  getPaginatedProductLine(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...ProductLineFragment
    }
  }
}
    ${ProductLineFragmentFragmentDoc}`;
export type GetPaginatedProductLineProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedProductLineQuery, GetPaginatedProductLineQueryVariables>
    } & TChildProps;
export function withGetPaginatedProductLine<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedProductLineQuery,
  GetPaginatedProductLineQueryVariables,
  GetPaginatedProductLineProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedProductLineQuery, GetPaginatedProductLineQueryVariables, GetPaginatedProductLineProps<TChildProps, TDataName>>(GetPaginatedProductLineDocument, {
      alias: 'getPaginatedProductLine',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedProductLineQuery__
 *
 * To run a query within a React component, call `useGetPaginatedProductLineQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedProductLineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedProductLineQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedProductLineQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedProductLineQuery, GetPaginatedProductLineQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedProductLineQuery, GetPaginatedProductLineQueryVariables>(GetPaginatedProductLineDocument, options);
      }
export function useGetPaginatedProductLineLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedProductLineQuery, GetPaginatedProductLineQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedProductLineQuery, GetPaginatedProductLineQueryVariables>(GetPaginatedProductLineDocument, options);
        }
export type GetPaginatedProductLineQueryHookResult = ReturnType<typeof useGetPaginatedProductLineQuery>;
export type GetPaginatedProductLineLazyQueryHookResult = ReturnType<typeof useGetPaginatedProductLineLazyQuery>;
export type GetPaginatedProductLineQueryResult = Apollo.QueryResult<GetPaginatedProductLineQuery, GetPaginatedProductLineQueryVariables>;
export const GetOneProductLineDocument = gql`
    query getOneProductLine($input: GetOneProductLineInput!) {
  getOneProductLine(input: $input) {
    ...ProductLineFragment
  }
}
    ${ProductLineFragmentFragmentDoc}`;
export type GetOneProductLineProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneProductLineQuery, GetOneProductLineQueryVariables>
    } & TChildProps;
export function withGetOneProductLine<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneProductLineQuery,
  GetOneProductLineQueryVariables,
  GetOneProductLineProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneProductLineQuery, GetOneProductLineQueryVariables, GetOneProductLineProps<TChildProps, TDataName>>(GetOneProductLineDocument, {
      alias: 'getOneProductLine',
      ...operationOptions
    });
};

/**
 * __useGetOneProductLineQuery__
 *
 * To run a query within a React component, call `useGetOneProductLineQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneProductLineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneProductLineQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneProductLineQuery(baseOptions: Apollo.QueryHookOptions<GetOneProductLineQuery, GetOneProductLineQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneProductLineQuery, GetOneProductLineQueryVariables>(GetOneProductLineDocument, options);
      }
export function useGetOneProductLineLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneProductLineQuery, GetOneProductLineQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneProductLineQuery, GetOneProductLineQueryVariables>(GetOneProductLineDocument, options);
        }
export type GetOneProductLineQueryHookResult = ReturnType<typeof useGetOneProductLineQuery>;
export type GetOneProductLineLazyQueryHookResult = ReturnType<typeof useGetOneProductLineLazyQuery>;
export type GetOneProductLineQueryResult = Apollo.QueryResult<GetOneProductLineQuery, GetOneProductLineQueryVariables>;
export type GetAllProductLineQueryVariables = Types.Exact<{
  input: Types.GetAllProductLineInput;
}>;


export type GetAllProductLineQuery = { getAllProductLine: Array<ProductLineFragmentFragment> };

export type GetPaginatedProductLineQueryVariables = Types.Exact<{
  input: Types.GetPaginatedProductLineInput;
}>;


export type GetPaginatedProductLineQuery = { getPaginatedProductLine?: Types.Maybe<(
    Pick<Types.PaginatedProductLineResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<ProductLineFragmentFragment> }
  )> };

export type GetOneProductLineQueryVariables = Types.Exact<{
  input: Types.GetOneProductLineInput;
}>;


export type GetOneProductLineQuery = { getOneProductLine?: Types.Maybe<ProductLineFragmentFragment> };
