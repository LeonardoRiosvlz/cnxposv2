import * as Types from '../../types';

import { SubgroupFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { SubgroupFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllSubgroupDocument = gql`
    query getAllSubgroup($input: GetAllSubgroupInput!) {
  getAllSubgroup(input: $input) {
    ...SubgroupFragment
  }
}
    ${SubgroupFragmentFragmentDoc}`;
export type GetAllSubgroupProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllSubgroupQuery, GetAllSubgroupQueryVariables>
    } & TChildProps;
export function withGetAllSubgroup<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllSubgroupQuery,
  GetAllSubgroupQueryVariables,
  GetAllSubgroupProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllSubgroupQuery, GetAllSubgroupQueryVariables, GetAllSubgroupProps<TChildProps, TDataName>>(GetAllSubgroupDocument, {
      alias: 'getAllSubgroup',
      ...operationOptions
    });
};

/**
 * __useGetAllSubgroupQuery__
 *
 * To run a query within a React component, call `useGetAllSubgroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSubgroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSubgroupQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllSubgroupQuery(baseOptions: Apollo.QueryHookOptions<GetAllSubgroupQuery, GetAllSubgroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSubgroupQuery, GetAllSubgroupQueryVariables>(GetAllSubgroupDocument, options);
      }
export function useGetAllSubgroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSubgroupQuery, GetAllSubgroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSubgroupQuery, GetAllSubgroupQueryVariables>(GetAllSubgroupDocument, options);
        }
export type GetAllSubgroupQueryHookResult = ReturnType<typeof useGetAllSubgroupQuery>;
export type GetAllSubgroupLazyQueryHookResult = ReturnType<typeof useGetAllSubgroupLazyQuery>;
export type GetAllSubgroupQueryResult = Apollo.QueryResult<GetAllSubgroupQuery, GetAllSubgroupQueryVariables>;
export const GetPaginatedSubgroupDocument = gql`
    query getPaginatedSubgroup($input: GetPaginatedSubgroupInput!) {
  getPaginatedSubgroup(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...SubgroupFragment
    }
  }
}
    ${SubgroupFragmentFragmentDoc}`;
export type GetPaginatedSubgroupProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedSubgroupQuery, GetPaginatedSubgroupQueryVariables>
    } & TChildProps;
export function withGetPaginatedSubgroup<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedSubgroupQuery,
  GetPaginatedSubgroupQueryVariables,
  GetPaginatedSubgroupProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedSubgroupQuery, GetPaginatedSubgroupQueryVariables, GetPaginatedSubgroupProps<TChildProps, TDataName>>(GetPaginatedSubgroupDocument, {
      alias: 'getPaginatedSubgroup',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedSubgroupQuery__
 *
 * To run a query within a React component, call `useGetPaginatedSubgroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedSubgroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedSubgroupQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedSubgroupQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedSubgroupQuery, GetPaginatedSubgroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedSubgroupQuery, GetPaginatedSubgroupQueryVariables>(GetPaginatedSubgroupDocument, options);
      }
export function useGetPaginatedSubgroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedSubgroupQuery, GetPaginatedSubgroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedSubgroupQuery, GetPaginatedSubgroupQueryVariables>(GetPaginatedSubgroupDocument, options);
        }
export type GetPaginatedSubgroupQueryHookResult = ReturnType<typeof useGetPaginatedSubgroupQuery>;
export type GetPaginatedSubgroupLazyQueryHookResult = ReturnType<typeof useGetPaginatedSubgroupLazyQuery>;
export type GetPaginatedSubgroupQueryResult = Apollo.QueryResult<GetPaginatedSubgroupQuery, GetPaginatedSubgroupQueryVariables>;
export const GetOneSubgroupDocument = gql`
    query getOneSubgroup($input: GetOneSubgroupInput!) {
  getOneSubgroup(input: $input) {
    ...SubgroupFragment
  }
}
    ${SubgroupFragmentFragmentDoc}`;
export type GetOneSubgroupProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneSubgroupQuery, GetOneSubgroupQueryVariables>
    } & TChildProps;
export function withGetOneSubgroup<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneSubgroupQuery,
  GetOneSubgroupQueryVariables,
  GetOneSubgroupProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneSubgroupQuery, GetOneSubgroupQueryVariables, GetOneSubgroupProps<TChildProps, TDataName>>(GetOneSubgroupDocument, {
      alias: 'getOneSubgroup',
      ...operationOptions
    });
};

/**
 * __useGetOneSubgroupQuery__
 *
 * To run a query within a React component, call `useGetOneSubgroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneSubgroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneSubgroupQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneSubgroupQuery(baseOptions: Apollo.QueryHookOptions<GetOneSubgroupQuery, GetOneSubgroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneSubgroupQuery, GetOneSubgroupQueryVariables>(GetOneSubgroupDocument, options);
      }
export function useGetOneSubgroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneSubgroupQuery, GetOneSubgroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneSubgroupQuery, GetOneSubgroupQueryVariables>(GetOneSubgroupDocument, options);
        }
export type GetOneSubgroupQueryHookResult = ReturnType<typeof useGetOneSubgroupQuery>;
export type GetOneSubgroupLazyQueryHookResult = ReturnType<typeof useGetOneSubgroupLazyQuery>;
export type GetOneSubgroupQueryResult = Apollo.QueryResult<GetOneSubgroupQuery, GetOneSubgroupQueryVariables>;
export type GetAllSubgroupQueryVariables = Types.Exact<{
  input: Types.GetAllSubgroupInput;
}>;


export type GetAllSubgroupQuery = { getAllSubgroup: Array<SubgroupFragmentFragment> };

export type GetPaginatedSubgroupQueryVariables = Types.Exact<{
  input: Types.GetPaginatedSubgroupInput;
}>;


export type GetPaginatedSubgroupQuery = { getPaginatedSubgroup?: Types.Maybe<(
    Pick<Types.PaginatedSubgroupResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<SubgroupFragmentFragment> }
  )> };

export type GetOneSubgroupQueryVariables = Types.Exact<{
  input: Types.GetOneSubgroupInput;
}>;


export type GetOneSubgroupQuery = { getOneSubgroup?: Types.Maybe<SubgroupFragmentFragment> };
