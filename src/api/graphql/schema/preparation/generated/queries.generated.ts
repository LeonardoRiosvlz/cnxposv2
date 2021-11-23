import * as Types from '../../types';

import { PreparationFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { PreparationFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllPreparationDocument = gql`
    query getAllPreparation($input: GetAllPreparationInput!) {
  getAllPreparation(input: $input) {
    ...PreparationFragment
  }
}
    ${PreparationFragmentFragmentDoc}`;
export type GetAllPreparationProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllPreparationQuery, GetAllPreparationQueryVariables>
    } & TChildProps;
export function withGetAllPreparation<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllPreparationQuery,
  GetAllPreparationQueryVariables,
  GetAllPreparationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllPreparationQuery, GetAllPreparationQueryVariables, GetAllPreparationProps<TChildProps, TDataName>>(GetAllPreparationDocument, {
      alias: 'getAllPreparation',
      ...operationOptions
    });
};

/**
 * __useGetAllPreparationQuery__
 *
 * To run a query within a React component, call `useGetAllPreparationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPreparationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPreparationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllPreparationQuery(baseOptions: Apollo.QueryHookOptions<GetAllPreparationQuery, GetAllPreparationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPreparationQuery, GetAllPreparationQueryVariables>(GetAllPreparationDocument, options);
      }
export function useGetAllPreparationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPreparationQuery, GetAllPreparationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPreparationQuery, GetAllPreparationQueryVariables>(GetAllPreparationDocument, options);
        }
export type GetAllPreparationQueryHookResult = ReturnType<typeof useGetAllPreparationQuery>;
export type GetAllPreparationLazyQueryHookResult = ReturnType<typeof useGetAllPreparationLazyQuery>;
export type GetAllPreparationQueryResult = Apollo.QueryResult<GetAllPreparationQuery, GetAllPreparationQueryVariables>;
export const GetPaginatedPreparationDocument = gql`
    query getPaginatedPreparation($input: GetPaginatedPreparationInput!) {
  getPaginatedPreparation(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...PreparationFragment
    }
  }
}
    ${PreparationFragmentFragmentDoc}`;
export type GetPaginatedPreparationProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedPreparationQuery, GetPaginatedPreparationQueryVariables>
    } & TChildProps;
export function withGetPaginatedPreparation<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedPreparationQuery,
  GetPaginatedPreparationQueryVariables,
  GetPaginatedPreparationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedPreparationQuery, GetPaginatedPreparationQueryVariables, GetPaginatedPreparationProps<TChildProps, TDataName>>(GetPaginatedPreparationDocument, {
      alias: 'getPaginatedPreparation',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedPreparationQuery__
 *
 * To run a query within a React component, call `useGetPaginatedPreparationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedPreparationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedPreparationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedPreparationQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedPreparationQuery, GetPaginatedPreparationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedPreparationQuery, GetPaginatedPreparationQueryVariables>(GetPaginatedPreparationDocument, options);
      }
export function useGetPaginatedPreparationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedPreparationQuery, GetPaginatedPreparationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedPreparationQuery, GetPaginatedPreparationQueryVariables>(GetPaginatedPreparationDocument, options);
        }
export type GetPaginatedPreparationQueryHookResult = ReturnType<typeof useGetPaginatedPreparationQuery>;
export type GetPaginatedPreparationLazyQueryHookResult = ReturnType<typeof useGetPaginatedPreparationLazyQuery>;
export type GetPaginatedPreparationQueryResult = Apollo.QueryResult<GetPaginatedPreparationQuery, GetPaginatedPreparationQueryVariables>;
export const GetOnePreparationDocument = gql`
    query getOnePreparation($input: GetOnePreparationInput!) {
  getOnePreparation(input: $input) {
    ...PreparationFragment
  }
}
    ${PreparationFragmentFragmentDoc}`;
export type GetOnePreparationProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOnePreparationQuery, GetOnePreparationQueryVariables>
    } & TChildProps;
export function withGetOnePreparation<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOnePreparationQuery,
  GetOnePreparationQueryVariables,
  GetOnePreparationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOnePreparationQuery, GetOnePreparationQueryVariables, GetOnePreparationProps<TChildProps, TDataName>>(GetOnePreparationDocument, {
      alias: 'getOnePreparation',
      ...operationOptions
    });
};

/**
 * __useGetOnePreparationQuery__
 *
 * To run a query within a React component, call `useGetOnePreparationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOnePreparationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOnePreparationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOnePreparationQuery(baseOptions: Apollo.QueryHookOptions<GetOnePreparationQuery, GetOnePreparationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOnePreparationQuery, GetOnePreparationQueryVariables>(GetOnePreparationDocument, options);
      }
export function useGetOnePreparationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOnePreparationQuery, GetOnePreparationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOnePreparationQuery, GetOnePreparationQueryVariables>(GetOnePreparationDocument, options);
        }
export type GetOnePreparationQueryHookResult = ReturnType<typeof useGetOnePreparationQuery>;
export type GetOnePreparationLazyQueryHookResult = ReturnType<typeof useGetOnePreparationLazyQuery>;
export type GetOnePreparationQueryResult = Apollo.QueryResult<GetOnePreparationQuery, GetOnePreparationQueryVariables>;
export type GetAllPreparationQueryVariables = Types.Exact<{
  input: Types.GetAllPreparationInput;
}>;


export type GetAllPreparationQuery = { getAllPreparation: Array<PreparationFragmentFragment> };

export type GetPaginatedPreparationQueryVariables = Types.Exact<{
  input: Types.GetPaginatedPreparationInput;
}>;


export type GetPaginatedPreparationQuery = { getPaginatedPreparation?: Types.Maybe<(
    Pick<Types.PaginatedPreparationResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<PreparationFragmentFragment> }
  )> };

export type GetOnePreparationQueryVariables = Types.Exact<{
  input: Types.GetOnePreparationInput;
}>;


export type GetOnePreparationQuery = { getOnePreparation?: Types.Maybe<PreparationFragmentFragment> };
