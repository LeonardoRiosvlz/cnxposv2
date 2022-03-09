import * as Types from '../../types';

import { PriceByVolumeFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { PriceByVolumeFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllPriceByVolumeDocument = gql`
    query getAllPriceByVolume($input: GetAllPriceByVolumeInput!) {
  getAllPriceByVolume(input: $input) {
    ...PriceByVolumeFragment
  }
}
    ${PriceByVolumeFragmentFragmentDoc}`;
export type GetAllPriceByVolumeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllPriceByVolumeQuery, GetAllPriceByVolumeQueryVariables>
    } & TChildProps;
export function withGetAllPriceByVolume<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllPriceByVolumeQuery,
  GetAllPriceByVolumeQueryVariables,
  GetAllPriceByVolumeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllPriceByVolumeQuery, GetAllPriceByVolumeQueryVariables, GetAllPriceByVolumeProps<TChildProps, TDataName>>(GetAllPriceByVolumeDocument, {
      alias: 'getAllPriceByVolume',
      ...operationOptions
    });
};

/**
 * __useGetAllPriceByVolumeQuery__
 *
 * To run a query within a React component, call `useGetAllPriceByVolumeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPriceByVolumeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPriceByVolumeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllPriceByVolumeQuery(baseOptions: Apollo.QueryHookOptions<GetAllPriceByVolumeQuery, GetAllPriceByVolumeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPriceByVolumeQuery, GetAllPriceByVolumeQueryVariables>(GetAllPriceByVolumeDocument, options);
      }
export function useGetAllPriceByVolumeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPriceByVolumeQuery, GetAllPriceByVolumeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPriceByVolumeQuery, GetAllPriceByVolumeQueryVariables>(GetAllPriceByVolumeDocument, options);
        }
export type GetAllPriceByVolumeQueryHookResult = ReturnType<typeof useGetAllPriceByVolumeQuery>;
export type GetAllPriceByVolumeLazyQueryHookResult = ReturnType<typeof useGetAllPriceByVolumeLazyQuery>;
export type GetAllPriceByVolumeQueryResult = Apollo.QueryResult<GetAllPriceByVolumeQuery, GetAllPriceByVolumeQueryVariables>;
export const GetPaginatedPriceByVolumeDocument = gql`
    query getPaginatedPriceByVolume($input: GetPaginatedPriceByVolumeInput!) {
  getPaginatedPriceByVolume(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...PriceByVolumeFragment
    }
  }
}
    ${PriceByVolumeFragmentFragmentDoc}`;
export type GetPaginatedPriceByVolumeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedPriceByVolumeQuery, GetPaginatedPriceByVolumeQueryVariables>
    } & TChildProps;
export function withGetPaginatedPriceByVolume<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedPriceByVolumeQuery,
  GetPaginatedPriceByVolumeQueryVariables,
  GetPaginatedPriceByVolumeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedPriceByVolumeQuery, GetPaginatedPriceByVolumeQueryVariables, GetPaginatedPriceByVolumeProps<TChildProps, TDataName>>(GetPaginatedPriceByVolumeDocument, {
      alias: 'getPaginatedPriceByVolume',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedPriceByVolumeQuery__
 *
 * To run a query within a React component, call `useGetPaginatedPriceByVolumeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedPriceByVolumeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedPriceByVolumeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedPriceByVolumeQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedPriceByVolumeQuery, GetPaginatedPriceByVolumeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedPriceByVolumeQuery, GetPaginatedPriceByVolumeQueryVariables>(GetPaginatedPriceByVolumeDocument, options);
      }
export function useGetPaginatedPriceByVolumeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedPriceByVolumeQuery, GetPaginatedPriceByVolumeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedPriceByVolumeQuery, GetPaginatedPriceByVolumeQueryVariables>(GetPaginatedPriceByVolumeDocument, options);
        }
export type GetPaginatedPriceByVolumeQueryHookResult = ReturnType<typeof useGetPaginatedPriceByVolumeQuery>;
export type GetPaginatedPriceByVolumeLazyQueryHookResult = ReturnType<typeof useGetPaginatedPriceByVolumeLazyQuery>;
export type GetPaginatedPriceByVolumeQueryResult = Apollo.QueryResult<GetPaginatedPriceByVolumeQuery, GetPaginatedPriceByVolumeQueryVariables>;
export const GetOnePriceByVolumeDocument = gql`
    query getOnePriceByVolume($input: GetOnePriceByVolumeInput!) {
  getOnePriceByVolume(input: $input) {
    ...PriceByVolumeFragment
  }
}
    ${PriceByVolumeFragmentFragmentDoc}`;
export type GetOnePriceByVolumeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOnePriceByVolumeQuery, GetOnePriceByVolumeQueryVariables>
    } & TChildProps;
export function withGetOnePriceByVolume<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOnePriceByVolumeQuery,
  GetOnePriceByVolumeQueryVariables,
  GetOnePriceByVolumeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOnePriceByVolumeQuery, GetOnePriceByVolumeQueryVariables, GetOnePriceByVolumeProps<TChildProps, TDataName>>(GetOnePriceByVolumeDocument, {
      alias: 'getOnePriceByVolume',
      ...operationOptions
    });
};

/**
 * __useGetOnePriceByVolumeQuery__
 *
 * To run a query within a React component, call `useGetOnePriceByVolumeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOnePriceByVolumeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOnePriceByVolumeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOnePriceByVolumeQuery(baseOptions: Apollo.QueryHookOptions<GetOnePriceByVolumeQuery, GetOnePriceByVolumeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOnePriceByVolumeQuery, GetOnePriceByVolumeQueryVariables>(GetOnePriceByVolumeDocument, options);
      }
export function useGetOnePriceByVolumeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOnePriceByVolumeQuery, GetOnePriceByVolumeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOnePriceByVolumeQuery, GetOnePriceByVolumeQueryVariables>(GetOnePriceByVolumeDocument, options);
        }
export type GetOnePriceByVolumeQueryHookResult = ReturnType<typeof useGetOnePriceByVolumeQuery>;
export type GetOnePriceByVolumeLazyQueryHookResult = ReturnType<typeof useGetOnePriceByVolumeLazyQuery>;
export type GetOnePriceByVolumeQueryResult = Apollo.QueryResult<GetOnePriceByVolumeQuery, GetOnePriceByVolumeQueryVariables>;
export type GetAllPriceByVolumeQueryVariables = Types.Exact<{
  input: Types.GetAllPriceByVolumeInput;
}>;


export type GetAllPriceByVolumeQuery = { getAllPriceByVolume: Array<PriceByVolumeFragmentFragment> };

export type GetPaginatedPriceByVolumeQueryVariables = Types.Exact<{
  input: Types.GetPaginatedPriceByVolumeInput;
}>;


export type GetPaginatedPriceByVolumeQuery = { getPaginatedPriceByVolume?: Types.Maybe<(
    Pick<Types.PaginatedPriceByVolumeResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<PriceByVolumeFragmentFragment> }
  )> };

export type GetOnePriceByVolumeQueryVariables = Types.Exact<{
  input: Types.GetOnePriceByVolumeInput;
}>;


export type GetOnePriceByVolumeQuery = { getOnePriceByVolume?: Types.Maybe<PriceByVolumeFragmentFragment> };
