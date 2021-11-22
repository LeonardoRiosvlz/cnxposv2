import * as Types from '../../types';

import { WarehouseFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { WarehouseFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllWarehouseDocument = gql`
    query getAllWarehouse($input: GetAllWarehouseInput!) {
  getAllWarehouse(input: $input) {
    ...WarehouseFragment
  }
}
    ${WarehouseFragmentFragmentDoc}`;
export type GetAllWarehouseProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllWarehouseQuery, GetAllWarehouseQueryVariables>
    } & TChildProps;
export function withGetAllWarehouse<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllWarehouseQuery,
  GetAllWarehouseQueryVariables,
  GetAllWarehouseProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllWarehouseQuery, GetAllWarehouseQueryVariables, GetAllWarehouseProps<TChildProps, TDataName>>(GetAllWarehouseDocument, {
      alias: 'getAllWarehouse',
      ...operationOptions
    });
};

/**
 * __useGetAllWarehouseQuery__
 *
 * To run a query within a React component, call `useGetAllWarehouseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllWarehouseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllWarehouseQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllWarehouseQuery(baseOptions: Apollo.QueryHookOptions<GetAllWarehouseQuery, GetAllWarehouseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllWarehouseQuery, GetAllWarehouseQueryVariables>(GetAllWarehouseDocument, options);
      }
export function useGetAllWarehouseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllWarehouseQuery, GetAllWarehouseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllWarehouseQuery, GetAllWarehouseQueryVariables>(GetAllWarehouseDocument, options);
        }
export type GetAllWarehouseQueryHookResult = ReturnType<typeof useGetAllWarehouseQuery>;
export type GetAllWarehouseLazyQueryHookResult = ReturnType<typeof useGetAllWarehouseLazyQuery>;
export type GetAllWarehouseQueryResult = Apollo.QueryResult<GetAllWarehouseQuery, GetAllWarehouseQueryVariables>;
export const GetPaginatedWarehouseDocument = gql`
    query getPaginatedWarehouse($input: GetPaginatedWarehouseInput!) {
  getPaginatedWarehouse(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...WarehouseFragment
    }
  }
}
    ${WarehouseFragmentFragmentDoc}`;
export type GetPaginatedWarehouseProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedWarehouseQuery, GetPaginatedWarehouseQueryVariables>
    } & TChildProps;
export function withGetPaginatedWarehouse<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedWarehouseQuery,
  GetPaginatedWarehouseQueryVariables,
  GetPaginatedWarehouseProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedWarehouseQuery, GetPaginatedWarehouseQueryVariables, GetPaginatedWarehouseProps<TChildProps, TDataName>>(GetPaginatedWarehouseDocument, {
      alias: 'getPaginatedWarehouse',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedWarehouseQuery__
 *
 * To run a query within a React component, call `useGetPaginatedWarehouseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedWarehouseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedWarehouseQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedWarehouseQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedWarehouseQuery, GetPaginatedWarehouseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedWarehouseQuery, GetPaginatedWarehouseQueryVariables>(GetPaginatedWarehouseDocument, options);
      }
export function useGetPaginatedWarehouseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedWarehouseQuery, GetPaginatedWarehouseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedWarehouseQuery, GetPaginatedWarehouseQueryVariables>(GetPaginatedWarehouseDocument, options);
        }
export type GetPaginatedWarehouseQueryHookResult = ReturnType<typeof useGetPaginatedWarehouseQuery>;
export type GetPaginatedWarehouseLazyQueryHookResult = ReturnType<typeof useGetPaginatedWarehouseLazyQuery>;
export type GetPaginatedWarehouseQueryResult = Apollo.QueryResult<GetPaginatedWarehouseQuery, GetPaginatedWarehouseQueryVariables>;
export const GetOneWarehouseDocument = gql`
    query getOneWarehouse($input: GetOneWarehouseInput!) {
  getOneWarehouse(input: $input) {
    ...WarehouseFragment
  }
}
    ${WarehouseFragmentFragmentDoc}`;
export type GetOneWarehouseProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneWarehouseQuery, GetOneWarehouseQueryVariables>
    } & TChildProps;
export function withGetOneWarehouse<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneWarehouseQuery,
  GetOneWarehouseQueryVariables,
  GetOneWarehouseProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneWarehouseQuery, GetOneWarehouseQueryVariables, GetOneWarehouseProps<TChildProps, TDataName>>(GetOneWarehouseDocument, {
      alias: 'getOneWarehouse',
      ...operationOptions
    });
};

/**
 * __useGetOneWarehouseQuery__
 *
 * To run a query within a React component, call `useGetOneWarehouseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneWarehouseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneWarehouseQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneWarehouseQuery(baseOptions: Apollo.QueryHookOptions<GetOneWarehouseQuery, GetOneWarehouseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneWarehouseQuery, GetOneWarehouseQueryVariables>(GetOneWarehouseDocument, options);
      }
export function useGetOneWarehouseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneWarehouseQuery, GetOneWarehouseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneWarehouseQuery, GetOneWarehouseQueryVariables>(GetOneWarehouseDocument, options);
        }
export type GetOneWarehouseQueryHookResult = ReturnType<typeof useGetOneWarehouseQuery>;
export type GetOneWarehouseLazyQueryHookResult = ReturnType<typeof useGetOneWarehouseLazyQuery>;
export type GetOneWarehouseQueryResult = Apollo.QueryResult<GetOneWarehouseQuery, GetOneWarehouseQueryVariables>;
export type GetAllWarehouseQueryVariables = Types.Exact<{
  input: Types.GetAllWarehouseInput;
}>;


export type GetAllWarehouseQuery = { getAllWarehouse: Array<WarehouseFragmentFragment> };

export type GetPaginatedWarehouseQueryVariables = Types.Exact<{
  input: Types.GetPaginatedWarehouseInput;
}>;


export type GetPaginatedWarehouseQuery = { getPaginatedWarehouse?: Types.Maybe<(
    Pick<Types.PaginatedWarehouseResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<WarehouseFragmentFragment> }
  )> };

export type GetOneWarehouseQueryVariables = Types.Exact<{
  input: Types.GetOneWarehouseInput;
}>;


export type GetOneWarehouseQuery = { getOneWarehouse?: Types.Maybe<WarehouseFragmentFragment> };
