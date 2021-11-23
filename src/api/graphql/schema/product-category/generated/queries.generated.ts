import * as Types from '../../types';

import { ProductCategoryFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { ProductCategoryFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllProductCategoryDocument = gql`
    query getAllProductCategory($input: GetAllProductCategoryInput!) {
  getAllProductCategory(input: $input) {
    ...ProductCategoryFragment
  }
}
    ${ProductCategoryFragmentFragmentDoc}`;
export type GetAllProductCategoryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllProductCategoryQuery, GetAllProductCategoryQueryVariables>
    } & TChildProps;
export function withGetAllProductCategory<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllProductCategoryQuery,
  GetAllProductCategoryQueryVariables,
  GetAllProductCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllProductCategoryQuery, GetAllProductCategoryQueryVariables, GetAllProductCategoryProps<TChildProps, TDataName>>(GetAllProductCategoryDocument, {
      alias: 'getAllProductCategory',
      ...operationOptions
    });
};

/**
 * __useGetAllProductCategoryQuery__
 *
 * To run a query within a React component, call `useGetAllProductCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductCategoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllProductCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetAllProductCategoryQuery, GetAllProductCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductCategoryQuery, GetAllProductCategoryQueryVariables>(GetAllProductCategoryDocument, options);
      }
export function useGetAllProductCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductCategoryQuery, GetAllProductCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductCategoryQuery, GetAllProductCategoryQueryVariables>(GetAllProductCategoryDocument, options);
        }
export type GetAllProductCategoryQueryHookResult = ReturnType<typeof useGetAllProductCategoryQuery>;
export type GetAllProductCategoryLazyQueryHookResult = ReturnType<typeof useGetAllProductCategoryLazyQuery>;
export type GetAllProductCategoryQueryResult = Apollo.QueryResult<GetAllProductCategoryQuery, GetAllProductCategoryQueryVariables>;
export const GetPaginatedProductCategoryDocument = gql`
    query getPaginatedProductCategory($input: GetPaginatedProductCategoryInput!) {
  getPaginatedProductCategory(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...ProductCategoryFragment
    }
  }
}
    ${ProductCategoryFragmentFragmentDoc}`;
export type GetPaginatedProductCategoryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedProductCategoryQuery, GetPaginatedProductCategoryQueryVariables>
    } & TChildProps;
export function withGetPaginatedProductCategory<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedProductCategoryQuery,
  GetPaginatedProductCategoryQueryVariables,
  GetPaginatedProductCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedProductCategoryQuery, GetPaginatedProductCategoryQueryVariables, GetPaginatedProductCategoryProps<TChildProps, TDataName>>(GetPaginatedProductCategoryDocument, {
      alias: 'getPaginatedProductCategory',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedProductCategoryQuery__
 *
 * To run a query within a React component, call `useGetPaginatedProductCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedProductCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedProductCategoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedProductCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedProductCategoryQuery, GetPaginatedProductCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedProductCategoryQuery, GetPaginatedProductCategoryQueryVariables>(GetPaginatedProductCategoryDocument, options);
      }
export function useGetPaginatedProductCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedProductCategoryQuery, GetPaginatedProductCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedProductCategoryQuery, GetPaginatedProductCategoryQueryVariables>(GetPaginatedProductCategoryDocument, options);
        }
export type GetPaginatedProductCategoryQueryHookResult = ReturnType<typeof useGetPaginatedProductCategoryQuery>;
export type GetPaginatedProductCategoryLazyQueryHookResult = ReturnType<typeof useGetPaginatedProductCategoryLazyQuery>;
export type GetPaginatedProductCategoryQueryResult = Apollo.QueryResult<GetPaginatedProductCategoryQuery, GetPaginatedProductCategoryQueryVariables>;
export const GetOneProductCategoryDocument = gql`
    query getOneProductCategory($input: GetOneProductCategoryInput!) {
  getOneProductCategory(input: $input) {
    ...ProductCategoryFragment
  }
}
    ${ProductCategoryFragmentFragmentDoc}`;
export type GetOneProductCategoryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneProductCategoryQuery, GetOneProductCategoryQueryVariables>
    } & TChildProps;
export function withGetOneProductCategory<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneProductCategoryQuery,
  GetOneProductCategoryQueryVariables,
  GetOneProductCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneProductCategoryQuery, GetOneProductCategoryQueryVariables, GetOneProductCategoryProps<TChildProps, TDataName>>(GetOneProductCategoryDocument, {
      alias: 'getOneProductCategory',
      ...operationOptions
    });
};

/**
 * __useGetOneProductCategoryQuery__
 *
 * To run a query within a React component, call `useGetOneProductCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneProductCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneProductCategoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneProductCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetOneProductCategoryQuery, GetOneProductCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneProductCategoryQuery, GetOneProductCategoryQueryVariables>(GetOneProductCategoryDocument, options);
      }
export function useGetOneProductCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneProductCategoryQuery, GetOneProductCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneProductCategoryQuery, GetOneProductCategoryQueryVariables>(GetOneProductCategoryDocument, options);
        }
export type GetOneProductCategoryQueryHookResult = ReturnType<typeof useGetOneProductCategoryQuery>;
export type GetOneProductCategoryLazyQueryHookResult = ReturnType<typeof useGetOneProductCategoryLazyQuery>;
export type GetOneProductCategoryQueryResult = Apollo.QueryResult<GetOneProductCategoryQuery, GetOneProductCategoryQueryVariables>;
export type GetAllProductCategoryQueryVariables = Types.Exact<{
  input: Types.GetAllProductCategoryInput;
}>;


export type GetAllProductCategoryQuery = { getAllProductCategory: Array<ProductCategoryFragmentFragment> };

export type GetPaginatedProductCategoryQueryVariables = Types.Exact<{
  input: Types.GetPaginatedProductCategoryInput;
}>;


export type GetPaginatedProductCategoryQuery = { getPaginatedProductCategory?: Types.Maybe<(
    Pick<Types.PaginatedProductCategoryResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<ProductCategoryFragmentFragment> }
  )> };

export type GetOneProductCategoryQueryVariables = Types.Exact<{
  input: Types.GetOneProductCategoryInput;
}>;


export type GetOneProductCategoryQuery = { getOneProductCategory?: Types.Maybe<ProductCategoryFragmentFragment> };
