import * as Types from '../../types';

import { CompositionFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { CompositionFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllCompositionDocument = gql`
    query getAllComposition($input: GetAllCompositionInput!) {
  getAllComposition(input: $input) {
    ...CompositionFragment
  }
}
    ${CompositionFragmentFragmentDoc}`;
export type GetAllCompositionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllCompositionQuery, GetAllCompositionQueryVariables>
    } & TChildProps;
export function withGetAllComposition<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllCompositionQuery,
  GetAllCompositionQueryVariables,
  GetAllCompositionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllCompositionQuery, GetAllCompositionQueryVariables, GetAllCompositionProps<TChildProps, TDataName>>(GetAllCompositionDocument, {
      alias: 'getAllComposition',
      ...operationOptions
    });
};

/**
 * __useGetAllCompositionQuery__
 *
 * To run a query within a React component, call `useGetAllCompositionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCompositionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCompositionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllCompositionQuery(baseOptions: Apollo.QueryHookOptions<GetAllCompositionQuery, GetAllCompositionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCompositionQuery, GetAllCompositionQueryVariables>(GetAllCompositionDocument, options);
      }
export function useGetAllCompositionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCompositionQuery, GetAllCompositionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCompositionQuery, GetAllCompositionQueryVariables>(GetAllCompositionDocument, options);
        }
export type GetAllCompositionQueryHookResult = ReturnType<typeof useGetAllCompositionQuery>;
export type GetAllCompositionLazyQueryHookResult = ReturnType<typeof useGetAllCompositionLazyQuery>;
export type GetAllCompositionQueryResult = Apollo.QueryResult<GetAllCompositionQuery, GetAllCompositionQueryVariables>;
export const GetPaginatedCompositionDocument = gql`
    query getPaginatedComposition($input: GetPaginatedCompositionInput!) {
  getPaginatedComposition(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...CompositionFragment
    }
  }
}
    ${CompositionFragmentFragmentDoc}`;
export type GetPaginatedCompositionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedCompositionQuery, GetPaginatedCompositionQueryVariables>
    } & TChildProps;
export function withGetPaginatedComposition<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedCompositionQuery,
  GetPaginatedCompositionQueryVariables,
  GetPaginatedCompositionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedCompositionQuery, GetPaginatedCompositionQueryVariables, GetPaginatedCompositionProps<TChildProps, TDataName>>(GetPaginatedCompositionDocument, {
      alias: 'getPaginatedComposition',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedCompositionQuery__
 *
 * To run a query within a React component, call `useGetPaginatedCompositionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedCompositionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedCompositionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedCompositionQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedCompositionQuery, GetPaginatedCompositionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedCompositionQuery, GetPaginatedCompositionQueryVariables>(GetPaginatedCompositionDocument, options);
      }
export function useGetPaginatedCompositionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedCompositionQuery, GetPaginatedCompositionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedCompositionQuery, GetPaginatedCompositionQueryVariables>(GetPaginatedCompositionDocument, options);
        }
export type GetPaginatedCompositionQueryHookResult = ReturnType<typeof useGetPaginatedCompositionQuery>;
export type GetPaginatedCompositionLazyQueryHookResult = ReturnType<typeof useGetPaginatedCompositionLazyQuery>;
export type GetPaginatedCompositionQueryResult = Apollo.QueryResult<GetPaginatedCompositionQuery, GetPaginatedCompositionQueryVariables>;
export const GetOneCompositionDocument = gql`
    query getOneComposition($input: GetOneCompositionInput!) {
  getOneComposition(input: $input) {
    ...CompositionFragment
  }
}
    ${CompositionFragmentFragmentDoc}`;
export type GetOneCompositionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneCompositionQuery, GetOneCompositionQueryVariables>
    } & TChildProps;
export function withGetOneComposition<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneCompositionQuery,
  GetOneCompositionQueryVariables,
  GetOneCompositionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneCompositionQuery, GetOneCompositionQueryVariables, GetOneCompositionProps<TChildProps, TDataName>>(GetOneCompositionDocument, {
      alias: 'getOneComposition',
      ...operationOptions
    });
};

/**
 * __useGetOneCompositionQuery__
 *
 * To run a query within a React component, call `useGetOneCompositionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneCompositionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneCompositionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneCompositionQuery(baseOptions: Apollo.QueryHookOptions<GetOneCompositionQuery, GetOneCompositionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneCompositionQuery, GetOneCompositionQueryVariables>(GetOneCompositionDocument, options);
      }
export function useGetOneCompositionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneCompositionQuery, GetOneCompositionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneCompositionQuery, GetOneCompositionQueryVariables>(GetOneCompositionDocument, options);
        }
export type GetOneCompositionQueryHookResult = ReturnType<typeof useGetOneCompositionQuery>;
export type GetOneCompositionLazyQueryHookResult = ReturnType<typeof useGetOneCompositionLazyQuery>;
export type GetOneCompositionQueryResult = Apollo.QueryResult<GetOneCompositionQuery, GetOneCompositionQueryVariables>;
export type GetAllCompositionQueryVariables = Types.Exact<{
  input: Types.GetAllCompositionInput;
}>;


export type GetAllCompositionQuery = { getAllComposition: Array<CompositionFragmentFragment> };

export type GetPaginatedCompositionQueryVariables = Types.Exact<{
  input: Types.GetPaginatedCompositionInput;
}>;


export type GetPaginatedCompositionQuery = { getPaginatedComposition?: Types.Maybe<(
    Pick<Types.PaginatedCompositionResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<CompositionFragmentFragment> }
  )> };

export type GetOneCompositionQueryVariables = Types.Exact<{
  input: Types.GetOneCompositionInput;
}>;


export type GetOneCompositionQuery = { getOneComposition?: Types.Maybe<CompositionFragmentFragment> };
