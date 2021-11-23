import * as Types from '../../types';

import { PreparationTypeFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { PreparationTypeFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllPreparationTypeDocument = gql`
    query getAllPreparationType($input: GetAllPreparationTypeInput!) {
  getAllPreparationType(input: $input) {
    ...PreparationTypeFragment
  }
}
    ${PreparationTypeFragmentFragmentDoc}`;
export type GetAllPreparationTypeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllPreparationTypeQuery, GetAllPreparationTypeQueryVariables>
    } & TChildProps;
export function withGetAllPreparationType<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllPreparationTypeQuery,
  GetAllPreparationTypeQueryVariables,
  GetAllPreparationTypeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllPreparationTypeQuery, GetAllPreparationTypeQueryVariables, GetAllPreparationTypeProps<TChildProps, TDataName>>(GetAllPreparationTypeDocument, {
      alias: 'getAllPreparationType',
      ...operationOptions
    });
};

/**
 * __useGetAllPreparationTypeQuery__
 *
 * To run a query within a React component, call `useGetAllPreparationTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPreparationTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPreparationTypeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllPreparationTypeQuery(baseOptions: Apollo.QueryHookOptions<GetAllPreparationTypeQuery, GetAllPreparationTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPreparationTypeQuery, GetAllPreparationTypeQueryVariables>(GetAllPreparationTypeDocument, options);
      }
export function useGetAllPreparationTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPreparationTypeQuery, GetAllPreparationTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPreparationTypeQuery, GetAllPreparationTypeQueryVariables>(GetAllPreparationTypeDocument, options);
        }
export type GetAllPreparationTypeQueryHookResult = ReturnType<typeof useGetAllPreparationTypeQuery>;
export type GetAllPreparationTypeLazyQueryHookResult = ReturnType<typeof useGetAllPreparationTypeLazyQuery>;
export type GetAllPreparationTypeQueryResult = Apollo.QueryResult<GetAllPreparationTypeQuery, GetAllPreparationTypeQueryVariables>;
export const GetPaginatedPreparationTypeDocument = gql`
    query getPaginatedPreparationType($input: GetPaginatedPreparationTypeInput!) {
  getPaginatedPreparationType(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...PreparationTypeFragment
    }
  }
}
    ${PreparationTypeFragmentFragmentDoc}`;
export type GetPaginatedPreparationTypeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedPreparationTypeQuery, GetPaginatedPreparationTypeQueryVariables>
    } & TChildProps;
export function withGetPaginatedPreparationType<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedPreparationTypeQuery,
  GetPaginatedPreparationTypeQueryVariables,
  GetPaginatedPreparationTypeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedPreparationTypeQuery, GetPaginatedPreparationTypeQueryVariables, GetPaginatedPreparationTypeProps<TChildProps, TDataName>>(GetPaginatedPreparationTypeDocument, {
      alias: 'getPaginatedPreparationType',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedPreparationTypeQuery__
 *
 * To run a query within a React component, call `useGetPaginatedPreparationTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedPreparationTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedPreparationTypeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedPreparationTypeQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedPreparationTypeQuery, GetPaginatedPreparationTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedPreparationTypeQuery, GetPaginatedPreparationTypeQueryVariables>(GetPaginatedPreparationTypeDocument, options);
      }
export function useGetPaginatedPreparationTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedPreparationTypeQuery, GetPaginatedPreparationTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedPreparationTypeQuery, GetPaginatedPreparationTypeQueryVariables>(GetPaginatedPreparationTypeDocument, options);
        }
export type GetPaginatedPreparationTypeQueryHookResult = ReturnType<typeof useGetPaginatedPreparationTypeQuery>;
export type GetPaginatedPreparationTypeLazyQueryHookResult = ReturnType<typeof useGetPaginatedPreparationTypeLazyQuery>;
export type GetPaginatedPreparationTypeQueryResult = Apollo.QueryResult<GetPaginatedPreparationTypeQuery, GetPaginatedPreparationTypeQueryVariables>;
export const GetOnePreparationTypeDocument = gql`
    query getOnePreparationType($input: GetOnePreparationTypeInput!) {
  getOnePreparationType(input: $input) {
    ...PreparationTypeFragment
  }
}
    ${PreparationTypeFragmentFragmentDoc}`;
export type GetOnePreparationTypeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOnePreparationTypeQuery, GetOnePreparationTypeQueryVariables>
    } & TChildProps;
export function withGetOnePreparationType<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOnePreparationTypeQuery,
  GetOnePreparationTypeQueryVariables,
  GetOnePreparationTypeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOnePreparationTypeQuery, GetOnePreparationTypeQueryVariables, GetOnePreparationTypeProps<TChildProps, TDataName>>(GetOnePreparationTypeDocument, {
      alias: 'getOnePreparationType',
      ...operationOptions
    });
};

/**
 * __useGetOnePreparationTypeQuery__
 *
 * To run a query within a React component, call `useGetOnePreparationTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOnePreparationTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOnePreparationTypeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOnePreparationTypeQuery(baseOptions: Apollo.QueryHookOptions<GetOnePreparationTypeQuery, GetOnePreparationTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOnePreparationTypeQuery, GetOnePreparationTypeQueryVariables>(GetOnePreparationTypeDocument, options);
      }
export function useGetOnePreparationTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOnePreparationTypeQuery, GetOnePreparationTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOnePreparationTypeQuery, GetOnePreparationTypeQueryVariables>(GetOnePreparationTypeDocument, options);
        }
export type GetOnePreparationTypeQueryHookResult = ReturnType<typeof useGetOnePreparationTypeQuery>;
export type GetOnePreparationTypeLazyQueryHookResult = ReturnType<typeof useGetOnePreparationTypeLazyQuery>;
export type GetOnePreparationTypeQueryResult = Apollo.QueryResult<GetOnePreparationTypeQuery, GetOnePreparationTypeQueryVariables>;
export type GetAllPreparationTypeQueryVariables = Types.Exact<{
  input: Types.GetAllPreparationTypeInput;
}>;


export type GetAllPreparationTypeQuery = { getAllPreparationType: Array<PreparationTypeFragmentFragment> };

export type GetPaginatedPreparationTypeQueryVariables = Types.Exact<{
  input: Types.GetPaginatedPreparationTypeInput;
}>;


export type GetPaginatedPreparationTypeQuery = { getPaginatedPreparationType?: Types.Maybe<(
    Pick<Types.PaginatedPreparationTypeResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<PreparationTypeFragmentFragment> }
  )> };

export type GetOnePreparationTypeQueryVariables = Types.Exact<{
  input: Types.GetOnePreparationTypeInput;
}>;


export type GetOnePreparationTypeQuery = { getOnePreparationType?: Types.Maybe<PreparationTypeFragmentFragment> };
