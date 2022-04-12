import * as Types from '../../types';

import { PaymentMethodFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { PaymentMethodFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllPaymentMethodDocument = gql`
    query getAllPaymentMethod($input: GetAllPaymentMethodInput!) {
  getAllPaymentMethod(input: $input) {
    ...PaymentMethodFragment
  }
}
    ${PaymentMethodFragmentFragmentDoc}`;
export type GetAllPaymentMethodProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllPaymentMethodQuery, GetAllPaymentMethodQueryVariables>
    } & TChildProps;
export function withGetAllPaymentMethod<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllPaymentMethodQuery,
  GetAllPaymentMethodQueryVariables,
  GetAllPaymentMethodProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllPaymentMethodQuery, GetAllPaymentMethodQueryVariables, GetAllPaymentMethodProps<TChildProps, TDataName>>(GetAllPaymentMethodDocument, {
      alias: 'getAllPaymentMethod',
      ...operationOptions
    });
};

/**
 * __useGetAllPaymentMethodQuery__
 *
 * To run a query within a React component, call `useGetAllPaymentMethodQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPaymentMethodQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPaymentMethodQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllPaymentMethodQuery(baseOptions: Apollo.QueryHookOptions<GetAllPaymentMethodQuery, GetAllPaymentMethodQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPaymentMethodQuery, GetAllPaymentMethodQueryVariables>(GetAllPaymentMethodDocument, options);
      }
export function useGetAllPaymentMethodLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPaymentMethodQuery, GetAllPaymentMethodQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPaymentMethodQuery, GetAllPaymentMethodQueryVariables>(GetAllPaymentMethodDocument, options);
        }
export type GetAllPaymentMethodQueryHookResult = ReturnType<typeof useGetAllPaymentMethodQuery>;
export type GetAllPaymentMethodLazyQueryHookResult = ReturnType<typeof useGetAllPaymentMethodLazyQuery>;
export type GetAllPaymentMethodQueryResult = Apollo.QueryResult<GetAllPaymentMethodQuery, GetAllPaymentMethodQueryVariables>;
export const GetPaginatedPaymentMethodDocument = gql`
    query getPaginatedPaymentMethod($input: GetPaginatedPaymentMethodInput!) {
  getPaginatedPaymentMethod(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...PaymentMethodFragment
    }
  }
}
    ${PaymentMethodFragmentFragmentDoc}`;
export type GetPaginatedPaymentMethodProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedPaymentMethodQuery, GetPaginatedPaymentMethodQueryVariables>
    } & TChildProps;
export function withGetPaginatedPaymentMethod<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedPaymentMethodQuery,
  GetPaginatedPaymentMethodQueryVariables,
  GetPaginatedPaymentMethodProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedPaymentMethodQuery, GetPaginatedPaymentMethodQueryVariables, GetPaginatedPaymentMethodProps<TChildProps, TDataName>>(GetPaginatedPaymentMethodDocument, {
      alias: 'getPaginatedPaymentMethod',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedPaymentMethodQuery__
 *
 * To run a query within a React component, call `useGetPaginatedPaymentMethodQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedPaymentMethodQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedPaymentMethodQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedPaymentMethodQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedPaymentMethodQuery, GetPaginatedPaymentMethodQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedPaymentMethodQuery, GetPaginatedPaymentMethodQueryVariables>(GetPaginatedPaymentMethodDocument, options);
      }
export function useGetPaginatedPaymentMethodLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedPaymentMethodQuery, GetPaginatedPaymentMethodQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedPaymentMethodQuery, GetPaginatedPaymentMethodQueryVariables>(GetPaginatedPaymentMethodDocument, options);
        }
export type GetPaginatedPaymentMethodQueryHookResult = ReturnType<typeof useGetPaginatedPaymentMethodQuery>;
export type GetPaginatedPaymentMethodLazyQueryHookResult = ReturnType<typeof useGetPaginatedPaymentMethodLazyQuery>;
export type GetPaginatedPaymentMethodQueryResult = Apollo.QueryResult<GetPaginatedPaymentMethodQuery, GetPaginatedPaymentMethodQueryVariables>;
export const GetOnePaymentMethodDocument = gql`
    query getOnePaymentMethod($input: GetOnePaymentMethodInput!) {
  getOnePaymentMethod(input: $input) {
    ...PaymentMethodFragment
  }
}
    ${PaymentMethodFragmentFragmentDoc}`;
export type GetOnePaymentMethodProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOnePaymentMethodQuery, GetOnePaymentMethodQueryVariables>
    } & TChildProps;
export function withGetOnePaymentMethod<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOnePaymentMethodQuery,
  GetOnePaymentMethodQueryVariables,
  GetOnePaymentMethodProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOnePaymentMethodQuery, GetOnePaymentMethodQueryVariables, GetOnePaymentMethodProps<TChildProps, TDataName>>(GetOnePaymentMethodDocument, {
      alias: 'getOnePaymentMethod',
      ...operationOptions
    });
};

/**
 * __useGetOnePaymentMethodQuery__
 *
 * To run a query within a React component, call `useGetOnePaymentMethodQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOnePaymentMethodQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOnePaymentMethodQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOnePaymentMethodQuery(baseOptions: Apollo.QueryHookOptions<GetOnePaymentMethodQuery, GetOnePaymentMethodQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOnePaymentMethodQuery, GetOnePaymentMethodQueryVariables>(GetOnePaymentMethodDocument, options);
      }
export function useGetOnePaymentMethodLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOnePaymentMethodQuery, GetOnePaymentMethodQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOnePaymentMethodQuery, GetOnePaymentMethodQueryVariables>(GetOnePaymentMethodDocument, options);
        }
export type GetOnePaymentMethodQueryHookResult = ReturnType<typeof useGetOnePaymentMethodQuery>;
export type GetOnePaymentMethodLazyQueryHookResult = ReturnType<typeof useGetOnePaymentMethodLazyQuery>;
export type GetOnePaymentMethodQueryResult = Apollo.QueryResult<GetOnePaymentMethodQuery, GetOnePaymentMethodQueryVariables>;
export type GetAllPaymentMethodQueryVariables = Types.Exact<{
  input: Types.GetAllPaymentMethodInput;
}>;


export type GetAllPaymentMethodQuery = { getAllPaymentMethod: Array<PaymentMethodFragmentFragment> };

export type GetPaginatedPaymentMethodQueryVariables = Types.Exact<{
  input: Types.GetPaginatedPaymentMethodInput;
}>;


export type GetPaginatedPaymentMethodQuery = { getPaginatedPaymentMethod?: Types.Maybe<(
    Pick<Types.PaginatedPaymentMethodResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<PaymentMethodFragmentFragment> }
  )> };

export type GetOnePaymentMethodQueryVariables = Types.Exact<{
  input: Types.GetOnePaymentMethodInput;
}>;


export type GetOnePaymentMethodQuery = { getOnePaymentMethod?: Types.Maybe<PaymentMethodFragmentFragment> };
