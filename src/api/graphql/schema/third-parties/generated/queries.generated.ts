import * as Types from '../../types';

import { ThirdPartiesFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { ThirdPartiesFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllThirdPartiesDocument = gql`
    query getAllThirdParties($input: GetAllThirdPartiesInput!) {
  getAllThirdParties(input: $input) {
    ...ThirdPartiesFragment
  }
}
    ${ThirdPartiesFragmentFragmentDoc}`;
export type GetAllThirdPartiesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllThirdPartiesQuery, GetAllThirdPartiesQueryVariables>
    } & TChildProps;
export function withGetAllThirdParties<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllThirdPartiesQuery,
  GetAllThirdPartiesQueryVariables,
  GetAllThirdPartiesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllThirdPartiesQuery, GetAllThirdPartiesQueryVariables, GetAllThirdPartiesProps<TChildProps, TDataName>>(GetAllThirdPartiesDocument, {
      alias: 'getAllThirdParties',
      ...operationOptions
    });
};

/**
 * __useGetAllThirdPartiesQuery__
 *
 * To run a query within a React component, call `useGetAllThirdPartiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllThirdPartiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllThirdPartiesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllThirdPartiesQuery(baseOptions: Apollo.QueryHookOptions<GetAllThirdPartiesQuery, GetAllThirdPartiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllThirdPartiesQuery, GetAllThirdPartiesQueryVariables>(GetAllThirdPartiesDocument, options);
      }
export function useGetAllThirdPartiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllThirdPartiesQuery, GetAllThirdPartiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllThirdPartiesQuery, GetAllThirdPartiesQueryVariables>(GetAllThirdPartiesDocument, options);
        }
export type GetAllThirdPartiesQueryHookResult = ReturnType<typeof useGetAllThirdPartiesQuery>;
export type GetAllThirdPartiesLazyQueryHookResult = ReturnType<typeof useGetAllThirdPartiesLazyQuery>;
export type GetAllThirdPartiesQueryResult = Apollo.QueryResult<GetAllThirdPartiesQuery, GetAllThirdPartiesQueryVariables>;
export const GetPaginatedThirdPartiesDocument = gql`
    query getPaginatedThirdParties($input: GetPaginatedThirdPartiesInput!) {
  getPaginatedThirdParties(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...ThirdPartiesFragment
    }
  }
}
    ${ThirdPartiesFragmentFragmentDoc}`;
export type GetPaginatedThirdPartiesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedThirdPartiesQuery, GetPaginatedThirdPartiesQueryVariables>
    } & TChildProps;
export function withGetPaginatedThirdParties<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedThirdPartiesQuery,
  GetPaginatedThirdPartiesQueryVariables,
  GetPaginatedThirdPartiesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedThirdPartiesQuery, GetPaginatedThirdPartiesQueryVariables, GetPaginatedThirdPartiesProps<TChildProps, TDataName>>(GetPaginatedThirdPartiesDocument, {
      alias: 'getPaginatedThirdParties',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedThirdPartiesQuery__
 *
 * To run a query within a React component, call `useGetPaginatedThirdPartiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedThirdPartiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedThirdPartiesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedThirdPartiesQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedThirdPartiesQuery, GetPaginatedThirdPartiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedThirdPartiesQuery, GetPaginatedThirdPartiesQueryVariables>(GetPaginatedThirdPartiesDocument, options);
      }
export function useGetPaginatedThirdPartiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedThirdPartiesQuery, GetPaginatedThirdPartiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedThirdPartiesQuery, GetPaginatedThirdPartiesQueryVariables>(GetPaginatedThirdPartiesDocument, options);
        }
export type GetPaginatedThirdPartiesQueryHookResult = ReturnType<typeof useGetPaginatedThirdPartiesQuery>;
export type GetPaginatedThirdPartiesLazyQueryHookResult = ReturnType<typeof useGetPaginatedThirdPartiesLazyQuery>;
export type GetPaginatedThirdPartiesQueryResult = Apollo.QueryResult<GetPaginatedThirdPartiesQuery, GetPaginatedThirdPartiesQueryVariables>;
export const GetOneThirdPartiesDocument = gql`
    query getOneThirdParties($input: GetOneThirdPartiesInput!) {
  getOneThirdParties(input: $input) {
    ...ThirdPartiesFragment
  }
}
    ${ThirdPartiesFragmentFragmentDoc}`;
export type GetOneThirdPartiesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneThirdPartiesQuery, GetOneThirdPartiesQueryVariables>
    } & TChildProps;
export function withGetOneThirdParties<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneThirdPartiesQuery,
  GetOneThirdPartiesQueryVariables,
  GetOneThirdPartiesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneThirdPartiesQuery, GetOneThirdPartiesQueryVariables, GetOneThirdPartiesProps<TChildProps, TDataName>>(GetOneThirdPartiesDocument, {
      alias: 'getOneThirdParties',
      ...operationOptions
    });
};

/**
 * __useGetOneThirdPartiesQuery__
 *
 * To run a query within a React component, call `useGetOneThirdPartiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneThirdPartiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneThirdPartiesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneThirdPartiesQuery(baseOptions: Apollo.QueryHookOptions<GetOneThirdPartiesQuery, GetOneThirdPartiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneThirdPartiesQuery, GetOneThirdPartiesQueryVariables>(GetOneThirdPartiesDocument, options);
      }
export function useGetOneThirdPartiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneThirdPartiesQuery, GetOneThirdPartiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneThirdPartiesQuery, GetOneThirdPartiesQueryVariables>(GetOneThirdPartiesDocument, options);
        }
export type GetOneThirdPartiesQueryHookResult = ReturnType<typeof useGetOneThirdPartiesQuery>;
export type GetOneThirdPartiesLazyQueryHookResult = ReturnType<typeof useGetOneThirdPartiesLazyQuery>;
export type GetOneThirdPartiesQueryResult = Apollo.QueryResult<GetOneThirdPartiesQuery, GetOneThirdPartiesQueryVariables>;
export type GetAllThirdPartiesQueryVariables = Types.Exact<{
  input: Types.GetAllThirdPartiesInput;
}>;


export type GetAllThirdPartiesQuery = { getAllThirdParties: Array<ThirdPartiesFragmentFragment> };

export type GetPaginatedThirdPartiesQueryVariables = Types.Exact<{
  input: Types.GetPaginatedThirdPartiesInput;
}>;


export type GetPaginatedThirdPartiesQuery = { getPaginatedThirdParties?: Types.Maybe<(
    Pick<Types.PaginatedThirdPartiesResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<ThirdPartiesFragmentFragment> }
  )> };

export type GetOneThirdPartiesQueryVariables = Types.Exact<{
  input: Types.GetOneThirdPartiesInput;
}>;


export type GetOneThirdPartiesQuery = { getOneThirdParties?: Types.Maybe<ThirdPartiesFragmentFragment> };
