import * as Types from '../../types';

import { ProductCurveFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { ProductCurveFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllProductCurveDocument = gql`
    query getAllProductCurve($input: GetAllProductCurveInput!) {
  getAllProductCurve(input: $input) {
    ...ProductCurveFragment
  }
}
    ${ProductCurveFragmentFragmentDoc}`;
export type GetAllProductCurveProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllProductCurveQuery, GetAllProductCurveQueryVariables>
    } & TChildProps;
export function withGetAllProductCurve<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllProductCurveQuery,
  GetAllProductCurveQueryVariables,
  GetAllProductCurveProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllProductCurveQuery, GetAllProductCurveQueryVariables, GetAllProductCurveProps<TChildProps, TDataName>>(GetAllProductCurveDocument, {
      alias: 'getAllProductCurve',
      ...operationOptions
    });
};

/**
 * __useGetAllProductCurveQuery__
 *
 * To run a query within a React component, call `useGetAllProductCurveQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductCurveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductCurveQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllProductCurveQuery(baseOptions: Apollo.QueryHookOptions<GetAllProductCurveQuery, GetAllProductCurveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductCurveQuery, GetAllProductCurveQueryVariables>(GetAllProductCurveDocument, options);
      }
export function useGetAllProductCurveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductCurveQuery, GetAllProductCurveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductCurveQuery, GetAllProductCurveQueryVariables>(GetAllProductCurveDocument, options);
        }
export type GetAllProductCurveQueryHookResult = ReturnType<typeof useGetAllProductCurveQuery>;
export type GetAllProductCurveLazyQueryHookResult = ReturnType<typeof useGetAllProductCurveLazyQuery>;
export type GetAllProductCurveQueryResult = Apollo.QueryResult<GetAllProductCurveQuery, GetAllProductCurveQueryVariables>;
export const GetPaginatedProductCurveDocument = gql`
    query getPaginatedProductCurve($input: GetPaginatedProductCurveInput!) {
  getPaginatedProductCurve(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...ProductCurveFragment
    }
  }
}
    ${ProductCurveFragmentFragmentDoc}`;
export type GetPaginatedProductCurveProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedProductCurveQuery, GetPaginatedProductCurveQueryVariables>
    } & TChildProps;
export function withGetPaginatedProductCurve<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedProductCurveQuery,
  GetPaginatedProductCurveQueryVariables,
  GetPaginatedProductCurveProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedProductCurveQuery, GetPaginatedProductCurveQueryVariables, GetPaginatedProductCurveProps<TChildProps, TDataName>>(GetPaginatedProductCurveDocument, {
      alias: 'getPaginatedProductCurve',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedProductCurveQuery__
 *
 * To run a query within a React component, call `useGetPaginatedProductCurveQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedProductCurveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedProductCurveQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedProductCurveQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedProductCurveQuery, GetPaginatedProductCurveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedProductCurveQuery, GetPaginatedProductCurveQueryVariables>(GetPaginatedProductCurveDocument, options);
      }
export function useGetPaginatedProductCurveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedProductCurveQuery, GetPaginatedProductCurveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedProductCurveQuery, GetPaginatedProductCurveQueryVariables>(GetPaginatedProductCurveDocument, options);
        }
export type GetPaginatedProductCurveQueryHookResult = ReturnType<typeof useGetPaginatedProductCurveQuery>;
export type GetPaginatedProductCurveLazyQueryHookResult = ReturnType<typeof useGetPaginatedProductCurveLazyQuery>;
export type GetPaginatedProductCurveQueryResult = Apollo.QueryResult<GetPaginatedProductCurveQuery, GetPaginatedProductCurveQueryVariables>;
export const GetOneProductCurveDocument = gql`
    query getOneProductCurve($input: GetOneProductCurveInput!) {
  getOneProductCurve(input: $input) {
    ...ProductCurveFragment
  }
}
    ${ProductCurveFragmentFragmentDoc}`;
export type GetOneProductCurveProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneProductCurveQuery, GetOneProductCurveQueryVariables>
    } & TChildProps;
export function withGetOneProductCurve<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneProductCurveQuery,
  GetOneProductCurveQueryVariables,
  GetOneProductCurveProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneProductCurveQuery, GetOneProductCurveQueryVariables, GetOneProductCurveProps<TChildProps, TDataName>>(GetOneProductCurveDocument, {
      alias: 'getOneProductCurve',
      ...operationOptions
    });
};

/**
 * __useGetOneProductCurveQuery__
 *
 * To run a query within a React component, call `useGetOneProductCurveQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneProductCurveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneProductCurveQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneProductCurveQuery(baseOptions: Apollo.QueryHookOptions<GetOneProductCurveQuery, GetOneProductCurveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneProductCurveQuery, GetOneProductCurveQueryVariables>(GetOneProductCurveDocument, options);
      }
export function useGetOneProductCurveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneProductCurveQuery, GetOneProductCurveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneProductCurveQuery, GetOneProductCurveQueryVariables>(GetOneProductCurveDocument, options);
        }
export type GetOneProductCurveQueryHookResult = ReturnType<typeof useGetOneProductCurveQuery>;
export type GetOneProductCurveLazyQueryHookResult = ReturnType<typeof useGetOneProductCurveLazyQuery>;
export type GetOneProductCurveQueryResult = Apollo.QueryResult<GetOneProductCurveQuery, GetOneProductCurveQueryVariables>;
export type GetAllProductCurveQueryVariables = Types.Exact<{
  input: Types.GetAllProductCurveInput;
}>;


export type GetAllProductCurveQuery = { getAllProductCurve: Array<ProductCurveFragmentFragment> };

export type GetPaginatedProductCurveQueryVariables = Types.Exact<{
  input: Types.GetPaginatedProductCurveInput;
}>;


export type GetPaginatedProductCurveQuery = { getPaginatedProductCurve?: Types.Maybe<(
    Pick<Types.PaginatedProductCurveResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<ProductCurveFragmentFragment> }
  )> };

export type GetOneProductCurveQueryVariables = Types.Exact<{
  input: Types.GetOneProductCurveInput;
}>;


export type GetOneProductCurveQuery = { getOneProductCurve?: Types.Maybe<ProductCurveFragmentFragment> };
