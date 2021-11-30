import * as Types from '../../types';

import { ProductStructureFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { ProductStructureFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllProductStructureDocument = gql`
    query getAllProductStructure($input: GetAllProductStructureInput!) {
  getAllProductStructure(input: $input) {
    ...ProductStructureFragment
  }
}
    ${ProductStructureFragmentFragmentDoc}`;
export type GetAllProductStructureProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllProductStructureQuery, GetAllProductStructureQueryVariables>
    } & TChildProps;
export function withGetAllProductStructure<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllProductStructureQuery,
  GetAllProductStructureQueryVariables,
  GetAllProductStructureProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllProductStructureQuery, GetAllProductStructureQueryVariables, GetAllProductStructureProps<TChildProps, TDataName>>(GetAllProductStructureDocument, {
      alias: 'getAllProductStructure',
      ...operationOptions
    });
};

/**
 * __useGetAllProductStructureQuery__
 *
 * To run a query within a React component, call `useGetAllProductStructureQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductStructureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductStructureQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllProductStructureQuery(baseOptions: Apollo.QueryHookOptions<GetAllProductStructureQuery, GetAllProductStructureQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductStructureQuery, GetAllProductStructureQueryVariables>(GetAllProductStructureDocument, options);
      }
export function useGetAllProductStructureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductStructureQuery, GetAllProductStructureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductStructureQuery, GetAllProductStructureQueryVariables>(GetAllProductStructureDocument, options);
        }
export type GetAllProductStructureQueryHookResult = ReturnType<typeof useGetAllProductStructureQuery>;
export type GetAllProductStructureLazyQueryHookResult = ReturnType<typeof useGetAllProductStructureLazyQuery>;
export type GetAllProductStructureQueryResult = Apollo.QueryResult<GetAllProductStructureQuery, GetAllProductStructureQueryVariables>;
export const GetPaginatedProductStructureDocument = gql`
    query getPaginatedProductStructure($input: GetPaginatedProductStructureInput!) {
  getPaginatedProductStructure(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...ProductStructureFragment
    }
  }
}
    ${ProductStructureFragmentFragmentDoc}`;
export type GetPaginatedProductStructureProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedProductStructureQuery, GetPaginatedProductStructureQueryVariables>
    } & TChildProps;
export function withGetPaginatedProductStructure<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedProductStructureQuery,
  GetPaginatedProductStructureQueryVariables,
  GetPaginatedProductStructureProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedProductStructureQuery, GetPaginatedProductStructureQueryVariables, GetPaginatedProductStructureProps<TChildProps, TDataName>>(GetPaginatedProductStructureDocument, {
      alias: 'getPaginatedProductStructure',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedProductStructureQuery__
 *
 * To run a query within a React component, call `useGetPaginatedProductStructureQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedProductStructureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedProductStructureQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedProductStructureQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedProductStructureQuery, GetPaginatedProductStructureQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedProductStructureQuery, GetPaginatedProductStructureQueryVariables>(GetPaginatedProductStructureDocument, options);
      }
export function useGetPaginatedProductStructureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedProductStructureQuery, GetPaginatedProductStructureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedProductStructureQuery, GetPaginatedProductStructureQueryVariables>(GetPaginatedProductStructureDocument, options);
        }
export type GetPaginatedProductStructureQueryHookResult = ReturnType<typeof useGetPaginatedProductStructureQuery>;
export type GetPaginatedProductStructureLazyQueryHookResult = ReturnType<typeof useGetPaginatedProductStructureLazyQuery>;
export type GetPaginatedProductStructureQueryResult = Apollo.QueryResult<GetPaginatedProductStructureQuery, GetPaginatedProductStructureQueryVariables>;
export const GetOneProductStructureDocument = gql`
    query getOneProductStructure($input: GetOneProductStructureInput!) {
  getOneProductStructure(input: $input) {
    ...ProductStructureFragment
  }
}
    ${ProductStructureFragmentFragmentDoc}`;
export type GetOneProductStructureProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneProductStructureQuery, GetOneProductStructureQueryVariables>
    } & TChildProps;
export function withGetOneProductStructure<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneProductStructureQuery,
  GetOneProductStructureQueryVariables,
  GetOneProductStructureProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneProductStructureQuery, GetOneProductStructureQueryVariables, GetOneProductStructureProps<TChildProps, TDataName>>(GetOneProductStructureDocument, {
      alias: 'getOneProductStructure',
      ...operationOptions
    });
};

/**
 * __useGetOneProductStructureQuery__
 *
 * To run a query within a React component, call `useGetOneProductStructureQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneProductStructureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneProductStructureQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneProductStructureQuery(baseOptions: Apollo.QueryHookOptions<GetOneProductStructureQuery, GetOneProductStructureQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneProductStructureQuery, GetOneProductStructureQueryVariables>(GetOneProductStructureDocument, options);
      }
export function useGetOneProductStructureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneProductStructureQuery, GetOneProductStructureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneProductStructureQuery, GetOneProductStructureQueryVariables>(GetOneProductStructureDocument, options);
        }
export type GetOneProductStructureQueryHookResult = ReturnType<typeof useGetOneProductStructureQuery>;
export type GetOneProductStructureLazyQueryHookResult = ReturnType<typeof useGetOneProductStructureLazyQuery>;
export type GetOneProductStructureQueryResult = Apollo.QueryResult<GetOneProductStructureQuery, GetOneProductStructureQueryVariables>;
export type GetAllProductStructureQueryVariables = Types.Exact<{
  input: Types.GetAllProductStructureInput;
}>;


export type GetAllProductStructureQuery = { getAllProductStructure: Array<ProductStructureFragmentFragment> };

export type GetPaginatedProductStructureQueryVariables = Types.Exact<{
  input: Types.GetPaginatedProductStructureInput;
}>;


export type GetPaginatedProductStructureQuery = { getPaginatedProductStructure?: Types.Maybe<(
    Pick<Types.PaginatedProductStructureResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<ProductStructureFragmentFragment> }
  )> };

export type GetOneProductStructureQueryVariables = Types.Exact<{
  input: Types.GetOneProductStructureInput;
}>;


export type GetOneProductStructureQuery = { getOneProductStructure?: Types.Maybe<ProductStructureFragmentFragment> };
