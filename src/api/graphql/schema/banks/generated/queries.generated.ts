import * as Types from '../../types';

import { BanksFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { BanksFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllBanksDocument = gql`
    query getAllBanks($input: GetAllBanksInput!) {
  getAllBanks(input: $input) {
    ...BanksFragment
  }
}
    ${BanksFragmentFragmentDoc}`;
export type GetAllBanksProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllBanksQuery, GetAllBanksQueryVariables>
    } & TChildProps;
export function withGetAllBanks<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllBanksQuery,
  GetAllBanksQueryVariables,
  GetAllBanksProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllBanksQuery, GetAllBanksQueryVariables, GetAllBanksProps<TChildProps, TDataName>>(GetAllBanksDocument, {
      alias: 'getAllBanks',
      ...operationOptions
    });
};

/**
 * __useGetAllBanksQuery__
 *
 * To run a query within a React component, call `useGetAllBanksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBanksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBanksQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllBanksQuery(baseOptions: Apollo.QueryHookOptions<GetAllBanksQuery, GetAllBanksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBanksQuery, GetAllBanksQueryVariables>(GetAllBanksDocument, options);
      }
export function useGetAllBanksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBanksQuery, GetAllBanksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBanksQuery, GetAllBanksQueryVariables>(GetAllBanksDocument, options);
        }
export type GetAllBanksQueryHookResult = ReturnType<typeof useGetAllBanksQuery>;
export type GetAllBanksLazyQueryHookResult = ReturnType<typeof useGetAllBanksLazyQuery>;
export type GetAllBanksQueryResult = Apollo.QueryResult<GetAllBanksQuery, GetAllBanksQueryVariables>;
export const GetPaginatedBanksDocument = gql`
    query getPaginatedBanks($input: GetPaginatedBanksInput!) {
  getPaginatedBanks(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...BanksFragment
    }
  }
}
    ${BanksFragmentFragmentDoc}`;
export type GetPaginatedBanksProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedBanksQuery, GetPaginatedBanksQueryVariables>
    } & TChildProps;
export function withGetPaginatedBanks<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedBanksQuery,
  GetPaginatedBanksQueryVariables,
  GetPaginatedBanksProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedBanksQuery, GetPaginatedBanksQueryVariables, GetPaginatedBanksProps<TChildProps, TDataName>>(GetPaginatedBanksDocument, {
      alias: 'getPaginatedBanks',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedBanksQuery__
 *
 * To run a query within a React component, call `useGetPaginatedBanksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedBanksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedBanksQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedBanksQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedBanksQuery, GetPaginatedBanksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedBanksQuery, GetPaginatedBanksQueryVariables>(GetPaginatedBanksDocument, options);
      }
export function useGetPaginatedBanksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedBanksQuery, GetPaginatedBanksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedBanksQuery, GetPaginatedBanksQueryVariables>(GetPaginatedBanksDocument, options);
        }
export type GetPaginatedBanksQueryHookResult = ReturnType<typeof useGetPaginatedBanksQuery>;
export type GetPaginatedBanksLazyQueryHookResult = ReturnType<typeof useGetPaginatedBanksLazyQuery>;
export type GetPaginatedBanksQueryResult = Apollo.QueryResult<GetPaginatedBanksQuery, GetPaginatedBanksQueryVariables>;
export const GetOneBanksDocument = gql`
    query getOneBanks($input: GetOneBanksInput!) {
  getOneBanks(input: $input) {
    ...BanksFragment
  }
}
    ${BanksFragmentFragmentDoc}`;
export type GetOneBanksProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneBanksQuery, GetOneBanksQueryVariables>
    } & TChildProps;
export function withGetOneBanks<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneBanksQuery,
  GetOneBanksQueryVariables,
  GetOneBanksProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneBanksQuery, GetOneBanksQueryVariables, GetOneBanksProps<TChildProps, TDataName>>(GetOneBanksDocument, {
      alias: 'getOneBanks',
      ...operationOptions
    });
};

/**
 * __useGetOneBanksQuery__
 *
 * To run a query within a React component, call `useGetOneBanksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneBanksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneBanksQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneBanksQuery(baseOptions: Apollo.QueryHookOptions<GetOneBanksQuery, GetOneBanksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneBanksQuery, GetOneBanksQueryVariables>(GetOneBanksDocument, options);
      }
export function useGetOneBanksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneBanksQuery, GetOneBanksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneBanksQuery, GetOneBanksQueryVariables>(GetOneBanksDocument, options);
        }
export type GetOneBanksQueryHookResult = ReturnType<typeof useGetOneBanksQuery>;
export type GetOneBanksLazyQueryHookResult = ReturnType<typeof useGetOneBanksLazyQuery>;
export type GetOneBanksQueryResult = Apollo.QueryResult<GetOneBanksQuery, GetOneBanksQueryVariables>;
export type GetAllBanksQueryVariables = Types.Exact<{
  input: Types.GetAllBanksInput;
}>;


export type GetAllBanksQuery = { getAllBanks: Array<BanksFragmentFragment> };

export type GetPaginatedBanksQueryVariables = Types.Exact<{
  input: Types.GetPaginatedBanksInput;
}>;


export type GetPaginatedBanksQuery = { getPaginatedBanks?: Types.Maybe<(
    Pick<Types.PaginatedBanksResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<BanksFragmentFragment> }
  )> };

export type GetOneBanksQueryVariables = Types.Exact<{
  input: Types.GetOneBanksInput;
}>;


export type GetOneBanksQuery = { getOneBanks?: Types.Maybe<BanksFragmentFragment> };
