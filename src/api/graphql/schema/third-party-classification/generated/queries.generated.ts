import * as Types from '../../types';

import { ThirdPartyClassificationFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { ThirdPartyClassificationFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllThirdPartyClassificationDocument = gql`
    query getAllThirdPartyClassification($input: GetAllThirdPartyClassificationInput!) {
  getAllThirdPartyClassification(input: $input) {
    ...ThirdPartyClassificationFragment
  }
}
    ${ThirdPartyClassificationFragmentFragmentDoc}`;
export type GetAllThirdPartyClassificationProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllThirdPartyClassificationQuery, GetAllThirdPartyClassificationQueryVariables>
    } & TChildProps;
export function withGetAllThirdPartyClassification<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllThirdPartyClassificationQuery,
  GetAllThirdPartyClassificationQueryVariables,
  GetAllThirdPartyClassificationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllThirdPartyClassificationQuery, GetAllThirdPartyClassificationQueryVariables, GetAllThirdPartyClassificationProps<TChildProps, TDataName>>(GetAllThirdPartyClassificationDocument, {
      alias: 'getAllThirdPartyClassification',
      ...operationOptions
    });
};

/**
 * __useGetAllThirdPartyClassificationQuery__
 *
 * To run a query within a React component, call `useGetAllThirdPartyClassificationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllThirdPartyClassificationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllThirdPartyClassificationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllThirdPartyClassificationQuery(baseOptions: Apollo.QueryHookOptions<GetAllThirdPartyClassificationQuery, GetAllThirdPartyClassificationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllThirdPartyClassificationQuery, GetAllThirdPartyClassificationQueryVariables>(GetAllThirdPartyClassificationDocument, options);
      }
export function useGetAllThirdPartyClassificationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllThirdPartyClassificationQuery, GetAllThirdPartyClassificationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllThirdPartyClassificationQuery, GetAllThirdPartyClassificationQueryVariables>(GetAllThirdPartyClassificationDocument, options);
        }
export type GetAllThirdPartyClassificationQueryHookResult = ReturnType<typeof useGetAllThirdPartyClassificationQuery>;
export type GetAllThirdPartyClassificationLazyQueryHookResult = ReturnType<typeof useGetAllThirdPartyClassificationLazyQuery>;
export type GetAllThirdPartyClassificationQueryResult = Apollo.QueryResult<GetAllThirdPartyClassificationQuery, GetAllThirdPartyClassificationQueryVariables>;
export const GetPaginatedThirdPartyClassificationDocument = gql`
    query getPaginatedThirdPartyClassification($input: GetPaginatedThirdPartyClassificationInput!) {
  getPaginatedThirdPartyClassification(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...ThirdPartyClassificationFragment
    }
  }
}
    ${ThirdPartyClassificationFragmentFragmentDoc}`;
export type GetPaginatedThirdPartyClassificationProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedThirdPartyClassificationQuery, GetPaginatedThirdPartyClassificationQueryVariables>
    } & TChildProps;
export function withGetPaginatedThirdPartyClassification<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedThirdPartyClassificationQuery,
  GetPaginatedThirdPartyClassificationQueryVariables,
  GetPaginatedThirdPartyClassificationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedThirdPartyClassificationQuery, GetPaginatedThirdPartyClassificationQueryVariables, GetPaginatedThirdPartyClassificationProps<TChildProps, TDataName>>(GetPaginatedThirdPartyClassificationDocument, {
      alias: 'getPaginatedThirdPartyClassification',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedThirdPartyClassificationQuery__
 *
 * To run a query within a React component, call `useGetPaginatedThirdPartyClassificationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedThirdPartyClassificationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedThirdPartyClassificationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedThirdPartyClassificationQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedThirdPartyClassificationQuery, GetPaginatedThirdPartyClassificationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedThirdPartyClassificationQuery, GetPaginatedThirdPartyClassificationQueryVariables>(GetPaginatedThirdPartyClassificationDocument, options);
      }
export function useGetPaginatedThirdPartyClassificationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedThirdPartyClassificationQuery, GetPaginatedThirdPartyClassificationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedThirdPartyClassificationQuery, GetPaginatedThirdPartyClassificationQueryVariables>(GetPaginatedThirdPartyClassificationDocument, options);
        }
export type GetPaginatedThirdPartyClassificationQueryHookResult = ReturnType<typeof useGetPaginatedThirdPartyClassificationQuery>;
export type GetPaginatedThirdPartyClassificationLazyQueryHookResult = ReturnType<typeof useGetPaginatedThirdPartyClassificationLazyQuery>;
export type GetPaginatedThirdPartyClassificationQueryResult = Apollo.QueryResult<GetPaginatedThirdPartyClassificationQuery, GetPaginatedThirdPartyClassificationQueryVariables>;
export const GetOneThirdPartyClassificationDocument = gql`
    query getOneThirdPartyClassification($input: GetOneThirdPartyClassificationInput!) {
  getOneThirdPartyClassification(input: $input) {
    ...ThirdPartyClassificationFragment
  }
}
    ${ThirdPartyClassificationFragmentFragmentDoc}`;
export type GetOneThirdPartyClassificationProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneThirdPartyClassificationQuery, GetOneThirdPartyClassificationQueryVariables>
    } & TChildProps;
export function withGetOneThirdPartyClassification<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneThirdPartyClassificationQuery,
  GetOneThirdPartyClassificationQueryVariables,
  GetOneThirdPartyClassificationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneThirdPartyClassificationQuery, GetOneThirdPartyClassificationQueryVariables, GetOneThirdPartyClassificationProps<TChildProps, TDataName>>(GetOneThirdPartyClassificationDocument, {
      alias: 'getOneThirdPartyClassification',
      ...operationOptions
    });
};

/**
 * __useGetOneThirdPartyClassificationQuery__
 *
 * To run a query within a React component, call `useGetOneThirdPartyClassificationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneThirdPartyClassificationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneThirdPartyClassificationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneThirdPartyClassificationQuery(baseOptions: Apollo.QueryHookOptions<GetOneThirdPartyClassificationQuery, GetOneThirdPartyClassificationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneThirdPartyClassificationQuery, GetOneThirdPartyClassificationQueryVariables>(GetOneThirdPartyClassificationDocument, options);
      }
export function useGetOneThirdPartyClassificationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneThirdPartyClassificationQuery, GetOneThirdPartyClassificationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneThirdPartyClassificationQuery, GetOneThirdPartyClassificationQueryVariables>(GetOneThirdPartyClassificationDocument, options);
        }
export type GetOneThirdPartyClassificationQueryHookResult = ReturnType<typeof useGetOneThirdPartyClassificationQuery>;
export type GetOneThirdPartyClassificationLazyQueryHookResult = ReturnType<typeof useGetOneThirdPartyClassificationLazyQuery>;
export type GetOneThirdPartyClassificationQueryResult = Apollo.QueryResult<GetOneThirdPartyClassificationQuery, GetOneThirdPartyClassificationQueryVariables>;
export type GetAllThirdPartyClassificationQueryVariables = Types.Exact<{
  input: Types.GetAllThirdPartyClassificationInput;
}>;


export type GetAllThirdPartyClassificationQuery = { getAllThirdPartyClassification: Array<ThirdPartyClassificationFragmentFragment> };

export type GetPaginatedThirdPartyClassificationQueryVariables = Types.Exact<{
  input: Types.GetPaginatedThirdPartyClassificationInput;
}>;


export type GetPaginatedThirdPartyClassificationQuery = { getPaginatedThirdPartyClassification?: Types.Maybe<(
    Pick<Types.PaginatedThirdPartyClassificationResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<ThirdPartyClassificationFragmentFragment> }
  )> };

export type GetOneThirdPartyClassificationQueryVariables = Types.Exact<{
  input: Types.GetOneThirdPartyClassificationInput;
}>;


export type GetOneThirdPartyClassificationQuery = { getOneThirdPartyClassification?: Types.Maybe<ThirdPartyClassificationFragmentFragment> };
