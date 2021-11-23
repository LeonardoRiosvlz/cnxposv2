import * as Types from '../../types';

import { ProductGroupFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { ProductGroupFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllProductGroupDocument = gql`
    query getAllProductGroup($input: GetAllProductGroupInput!) {
  getAllProductGroup(input: $input) {
    ...ProductGroupFragment
  }
}
    ${ProductGroupFragmentFragmentDoc}`;
export type GetAllProductGroupProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllProductGroupQuery, GetAllProductGroupQueryVariables>
    } & TChildProps;
export function withGetAllProductGroup<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllProductGroupQuery,
  GetAllProductGroupQueryVariables,
  GetAllProductGroupProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllProductGroupQuery, GetAllProductGroupQueryVariables, GetAllProductGroupProps<TChildProps, TDataName>>(GetAllProductGroupDocument, {
      alias: 'getAllProductGroup',
      ...operationOptions
    });
};

/**
 * __useGetAllProductGroupQuery__
 *
 * To run a query within a React component, call `useGetAllProductGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductGroupQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllProductGroupQuery(baseOptions: Apollo.QueryHookOptions<GetAllProductGroupQuery, GetAllProductGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductGroupQuery, GetAllProductGroupQueryVariables>(GetAllProductGroupDocument, options);
      }
export function useGetAllProductGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductGroupQuery, GetAllProductGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductGroupQuery, GetAllProductGroupQueryVariables>(GetAllProductGroupDocument, options);
        }
export type GetAllProductGroupQueryHookResult = ReturnType<typeof useGetAllProductGroupQuery>;
export type GetAllProductGroupLazyQueryHookResult = ReturnType<typeof useGetAllProductGroupLazyQuery>;
export type GetAllProductGroupQueryResult = Apollo.QueryResult<GetAllProductGroupQuery, GetAllProductGroupQueryVariables>;
export const GetPaginatedProductGroupDocument = gql`
    query getPaginatedProductGroup($input: GetPaginatedProductGroupInput!) {
  getPaginatedProductGroup(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...ProductGroupFragment
    }
  }
}
    ${ProductGroupFragmentFragmentDoc}`;
export type GetPaginatedProductGroupProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedProductGroupQuery, GetPaginatedProductGroupQueryVariables>
    } & TChildProps;
export function withGetPaginatedProductGroup<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedProductGroupQuery,
  GetPaginatedProductGroupQueryVariables,
  GetPaginatedProductGroupProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedProductGroupQuery, GetPaginatedProductGroupQueryVariables, GetPaginatedProductGroupProps<TChildProps, TDataName>>(GetPaginatedProductGroupDocument, {
      alias: 'getPaginatedProductGroup',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedProductGroupQuery__
 *
 * To run a query within a React component, call `useGetPaginatedProductGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedProductGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedProductGroupQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedProductGroupQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedProductGroupQuery, GetPaginatedProductGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedProductGroupQuery, GetPaginatedProductGroupQueryVariables>(GetPaginatedProductGroupDocument, options);
      }
export function useGetPaginatedProductGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedProductGroupQuery, GetPaginatedProductGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedProductGroupQuery, GetPaginatedProductGroupQueryVariables>(GetPaginatedProductGroupDocument, options);
        }
export type GetPaginatedProductGroupQueryHookResult = ReturnType<typeof useGetPaginatedProductGroupQuery>;
export type GetPaginatedProductGroupLazyQueryHookResult = ReturnType<typeof useGetPaginatedProductGroupLazyQuery>;
export type GetPaginatedProductGroupQueryResult = Apollo.QueryResult<GetPaginatedProductGroupQuery, GetPaginatedProductGroupQueryVariables>;
export const GetOneProductGroupDocument = gql`
    query getOneProductGroup($input: GetOneProductGroupInput!) {
  getOneProductGroup(input: $input) {
    ...ProductGroupFragment
  }
}
    ${ProductGroupFragmentFragmentDoc}`;
export type GetOneProductGroupProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneProductGroupQuery, GetOneProductGroupQueryVariables>
    } & TChildProps;
export function withGetOneProductGroup<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneProductGroupQuery,
  GetOneProductGroupQueryVariables,
  GetOneProductGroupProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneProductGroupQuery, GetOneProductGroupQueryVariables, GetOneProductGroupProps<TChildProps, TDataName>>(GetOneProductGroupDocument, {
      alias: 'getOneProductGroup',
      ...operationOptions
    });
};

/**
 * __useGetOneProductGroupQuery__
 *
 * To run a query within a React component, call `useGetOneProductGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneProductGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneProductGroupQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneProductGroupQuery(baseOptions: Apollo.QueryHookOptions<GetOneProductGroupQuery, GetOneProductGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneProductGroupQuery, GetOneProductGroupQueryVariables>(GetOneProductGroupDocument, options);
      }
export function useGetOneProductGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneProductGroupQuery, GetOneProductGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneProductGroupQuery, GetOneProductGroupQueryVariables>(GetOneProductGroupDocument, options);
        }
export type GetOneProductGroupQueryHookResult = ReturnType<typeof useGetOneProductGroupQuery>;
export type GetOneProductGroupLazyQueryHookResult = ReturnType<typeof useGetOneProductGroupLazyQuery>;
export type GetOneProductGroupQueryResult = Apollo.QueryResult<GetOneProductGroupQuery, GetOneProductGroupQueryVariables>;
export type GetAllProductGroupQueryVariables = Types.Exact<{
  input: Types.GetAllProductGroupInput;
}>;


export type GetAllProductGroupQuery = { getAllProductGroup: Array<ProductGroupFragmentFragment> };

export type GetPaginatedProductGroupQueryVariables = Types.Exact<{
  input: Types.GetPaginatedProductGroupInput;
}>;


export type GetPaginatedProductGroupQuery = { getPaginatedProductGroup?: Types.Maybe<(
    Pick<Types.PaginatedProductGroupResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<ProductGroupFragmentFragment> }
  )> };

export type GetOneProductGroupQueryVariables = Types.Exact<{
  input: Types.GetOneProductGroupInput;
}>;


export type GetOneProductGroupQuery = { getOneProductGroup?: Types.Maybe<ProductGroupFragmentFragment> };
