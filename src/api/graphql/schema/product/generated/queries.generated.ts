import * as Types from '../../types';

import { ProductFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { ProductFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllProductDocument = gql`
    query getAllProduct($input: GetAllProductInput!) {
  getAllProduct(input: $input) {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export type GetAllProductProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllProductQuery, GetAllProductQueryVariables>
    } & TChildProps;
export function withGetAllProduct<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllProductQuery,
  GetAllProductQueryVariables,
  GetAllProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllProductQuery, GetAllProductQueryVariables, GetAllProductProps<TChildProps, TDataName>>(GetAllProductDocument, {
      alias: 'getAllProduct',
      ...operationOptions
    });
};

/**
 * __useGetAllProductQuery__
 *
 * To run a query within a React component, call `useGetAllProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllProductQuery(baseOptions: Apollo.QueryHookOptions<GetAllProductQuery, GetAllProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductQuery, GetAllProductQueryVariables>(GetAllProductDocument, options);
      }
export function useGetAllProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductQuery, GetAllProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductQuery, GetAllProductQueryVariables>(GetAllProductDocument, options);
        }
export type GetAllProductQueryHookResult = ReturnType<typeof useGetAllProductQuery>;
export type GetAllProductLazyQueryHookResult = ReturnType<typeof useGetAllProductLazyQuery>;
export type GetAllProductQueryResult = Apollo.QueryResult<GetAllProductQuery, GetAllProductQueryVariables>;
export const GetPaginatedProductDocument = gql`
    query getPaginatedProduct($input: GetPaginatedProductInput!) {
  getPaginatedProduct(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...ProductFragment
    }
  }
}
    ${ProductFragmentFragmentDoc}`;
export type GetPaginatedProductProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedProductQuery, GetPaginatedProductQueryVariables>
    } & TChildProps;
export function withGetPaginatedProduct<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedProductQuery,
  GetPaginatedProductQueryVariables,
  GetPaginatedProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedProductQuery, GetPaginatedProductQueryVariables, GetPaginatedProductProps<TChildProps, TDataName>>(GetPaginatedProductDocument, {
      alias: 'getPaginatedProduct',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedProductQuery__
 *
 * To run a query within a React component, call `useGetPaginatedProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedProductQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedProductQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedProductQuery, GetPaginatedProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedProductQuery, GetPaginatedProductQueryVariables>(GetPaginatedProductDocument, options);
      }
export function useGetPaginatedProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedProductQuery, GetPaginatedProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedProductQuery, GetPaginatedProductQueryVariables>(GetPaginatedProductDocument, options);
        }
export type GetPaginatedProductQueryHookResult = ReturnType<typeof useGetPaginatedProductQuery>;
export type GetPaginatedProductLazyQueryHookResult = ReturnType<typeof useGetPaginatedProductLazyQuery>;
export type GetPaginatedProductQueryResult = Apollo.QueryResult<GetPaginatedProductQuery, GetPaginatedProductQueryVariables>;
export const GetOneProductDocument = gql`
    query getOneProduct($input: GetOneProductInput!) {
  getOneProduct(input: $input) {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export type GetOneProductProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneProductQuery, GetOneProductQueryVariables>
    } & TChildProps;
export function withGetOneProduct<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneProductQuery,
  GetOneProductQueryVariables,
  GetOneProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneProductQuery, GetOneProductQueryVariables, GetOneProductProps<TChildProps, TDataName>>(GetOneProductDocument, {
      alias: 'getOneProduct',
      ...operationOptions
    });
};

/**
 * __useGetOneProductQuery__
 *
 * To run a query within a React component, call `useGetOneProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneProductQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneProductQuery(baseOptions: Apollo.QueryHookOptions<GetOneProductQuery, GetOneProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneProductQuery, GetOneProductQueryVariables>(GetOneProductDocument, options);
      }
export function useGetOneProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneProductQuery, GetOneProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneProductQuery, GetOneProductQueryVariables>(GetOneProductDocument, options);
        }
export type GetOneProductQueryHookResult = ReturnType<typeof useGetOneProductQuery>;
export type GetOneProductLazyQueryHookResult = ReturnType<typeof useGetOneProductLazyQuery>;
export type GetOneProductQueryResult = Apollo.QueryResult<GetOneProductQuery, GetOneProductQueryVariables>;
export type GetAllProductQueryVariables = Types.Exact<{
  input: Types.GetAllProductInput;
}>;


export type GetAllProductQuery = { getAllProduct: Array<ProductFragmentFragment> };

export type GetPaginatedProductQueryVariables = Types.Exact<{
  input: Types.GetPaginatedProductInput;
}>;


export type GetPaginatedProductQuery = { getPaginatedProduct?: Types.Maybe<(
    Pick<Types.PaginatedProductResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<ProductFragmentFragment> }
  )> };

export type GetOneProductQueryVariables = Types.Exact<{
  input: Types.GetOneProductInput;
}>;


export type GetOneProductQuery = { getOneProduct?: Types.Maybe<ProductFragmentFragment> };
