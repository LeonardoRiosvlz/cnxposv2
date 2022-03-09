import * as Types from '../../types';

import { ProductSalePriceFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { ProductSalePriceFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllProductSalePriceDocument = gql`
    query getAllProductSalePrice($input: GetAllProductSalePriceInput!) {
  getAllProductSalePrice(input: $input) {
    ...ProductSalePriceFragment
  }
}
    ${ProductSalePriceFragmentFragmentDoc}`;
export type GetAllProductSalePriceProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllProductSalePriceQuery, GetAllProductSalePriceQueryVariables>
    } & TChildProps;
export function withGetAllProductSalePrice<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllProductSalePriceQuery,
  GetAllProductSalePriceQueryVariables,
  GetAllProductSalePriceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllProductSalePriceQuery, GetAllProductSalePriceQueryVariables, GetAllProductSalePriceProps<TChildProps, TDataName>>(GetAllProductSalePriceDocument, {
      alias: 'getAllProductSalePrice',
      ...operationOptions
    });
};

/**
 * __useGetAllProductSalePriceQuery__
 *
 * To run a query within a React component, call `useGetAllProductSalePriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductSalePriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductSalePriceQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllProductSalePriceQuery(baseOptions: Apollo.QueryHookOptions<GetAllProductSalePriceQuery, GetAllProductSalePriceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductSalePriceQuery, GetAllProductSalePriceQueryVariables>(GetAllProductSalePriceDocument, options);
      }
export function useGetAllProductSalePriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductSalePriceQuery, GetAllProductSalePriceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductSalePriceQuery, GetAllProductSalePriceQueryVariables>(GetAllProductSalePriceDocument, options);
        }
export type GetAllProductSalePriceQueryHookResult = ReturnType<typeof useGetAllProductSalePriceQuery>;
export type GetAllProductSalePriceLazyQueryHookResult = ReturnType<typeof useGetAllProductSalePriceLazyQuery>;
export type GetAllProductSalePriceQueryResult = Apollo.QueryResult<GetAllProductSalePriceQuery, GetAllProductSalePriceQueryVariables>;
export const GetPaginatedProductSalePriceDocument = gql`
    query getPaginatedProductSalePrice($input: GetPaginatedProductSalePriceInput!) {
  getPaginatedProductSalePrice(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...ProductSalePriceFragment
    }
  }
}
    ${ProductSalePriceFragmentFragmentDoc}`;
export type GetPaginatedProductSalePriceProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedProductSalePriceQuery, GetPaginatedProductSalePriceQueryVariables>
    } & TChildProps;
export function withGetPaginatedProductSalePrice<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedProductSalePriceQuery,
  GetPaginatedProductSalePriceQueryVariables,
  GetPaginatedProductSalePriceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedProductSalePriceQuery, GetPaginatedProductSalePriceQueryVariables, GetPaginatedProductSalePriceProps<TChildProps, TDataName>>(GetPaginatedProductSalePriceDocument, {
      alias: 'getPaginatedProductSalePrice',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedProductSalePriceQuery__
 *
 * To run a query within a React component, call `useGetPaginatedProductSalePriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedProductSalePriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedProductSalePriceQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedProductSalePriceQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedProductSalePriceQuery, GetPaginatedProductSalePriceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedProductSalePriceQuery, GetPaginatedProductSalePriceQueryVariables>(GetPaginatedProductSalePriceDocument, options);
      }
export function useGetPaginatedProductSalePriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedProductSalePriceQuery, GetPaginatedProductSalePriceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedProductSalePriceQuery, GetPaginatedProductSalePriceQueryVariables>(GetPaginatedProductSalePriceDocument, options);
        }
export type GetPaginatedProductSalePriceQueryHookResult = ReturnType<typeof useGetPaginatedProductSalePriceQuery>;
export type GetPaginatedProductSalePriceLazyQueryHookResult = ReturnType<typeof useGetPaginatedProductSalePriceLazyQuery>;
export type GetPaginatedProductSalePriceQueryResult = Apollo.QueryResult<GetPaginatedProductSalePriceQuery, GetPaginatedProductSalePriceQueryVariables>;
export const GetOneProductSalePriceDocument = gql`
    query getOneProductSalePrice($input: GetOneProductSalePriceInput!) {
  getOneProductSalePrice(input: $input) {
    ...ProductSalePriceFragment
  }
}
    ${ProductSalePriceFragmentFragmentDoc}`;
export type GetOneProductSalePriceProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneProductSalePriceQuery, GetOneProductSalePriceQueryVariables>
    } & TChildProps;
export function withGetOneProductSalePrice<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneProductSalePriceQuery,
  GetOneProductSalePriceQueryVariables,
  GetOneProductSalePriceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneProductSalePriceQuery, GetOneProductSalePriceQueryVariables, GetOneProductSalePriceProps<TChildProps, TDataName>>(GetOneProductSalePriceDocument, {
      alias: 'getOneProductSalePrice',
      ...operationOptions
    });
};

/**
 * __useGetOneProductSalePriceQuery__
 *
 * To run a query within a React component, call `useGetOneProductSalePriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneProductSalePriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneProductSalePriceQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneProductSalePriceQuery(baseOptions: Apollo.QueryHookOptions<GetOneProductSalePriceQuery, GetOneProductSalePriceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneProductSalePriceQuery, GetOneProductSalePriceQueryVariables>(GetOneProductSalePriceDocument, options);
      }
export function useGetOneProductSalePriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneProductSalePriceQuery, GetOneProductSalePriceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneProductSalePriceQuery, GetOneProductSalePriceQueryVariables>(GetOneProductSalePriceDocument, options);
        }
export type GetOneProductSalePriceQueryHookResult = ReturnType<typeof useGetOneProductSalePriceQuery>;
export type GetOneProductSalePriceLazyQueryHookResult = ReturnType<typeof useGetOneProductSalePriceLazyQuery>;
export type GetOneProductSalePriceQueryResult = Apollo.QueryResult<GetOneProductSalePriceQuery, GetOneProductSalePriceQueryVariables>;
export type GetAllProductSalePriceQueryVariables = Types.Exact<{
  input: Types.GetAllProductSalePriceInput;
}>;


export type GetAllProductSalePriceQuery = { getAllProductSalePrice: Array<ProductSalePriceFragmentFragment> };

export type GetPaginatedProductSalePriceQueryVariables = Types.Exact<{
  input: Types.GetPaginatedProductSalePriceInput;
}>;


export type GetPaginatedProductSalePriceQuery = { getPaginatedProductSalePrice?: Types.Maybe<(
    Pick<Types.PaginatedProductSalePriceResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<ProductSalePriceFragmentFragment> }
  )> };

export type GetOneProductSalePriceQueryVariables = Types.Exact<{
  input: Types.GetOneProductSalePriceInput;
}>;


export type GetOneProductSalePriceQuery = { getOneProductSalePrice?: Types.Maybe<ProductSalePriceFragmentFragment> };
