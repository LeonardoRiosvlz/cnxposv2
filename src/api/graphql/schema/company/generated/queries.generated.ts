import * as Types from '../../types';

import { CompanyFragmentFragment } from './fragments.generated';
import { gql } from '@apollo/client';
import { CompanyFragmentFragmentDoc } from './fragments.generated';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const GetAllCompanyDocument = gql`
    query getAllCompany($input: GetAllCompanyInput!) {
  getAllCompany(input: $input) {
    ...CompanyFragment
  }
}
    ${CompanyFragmentFragmentDoc}`;
export type GetAllCompanyProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllCompanyQuery, GetAllCompanyQueryVariables>
    } & TChildProps;
export function withGetAllCompany<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllCompanyQuery,
  GetAllCompanyQueryVariables,
  GetAllCompanyProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllCompanyQuery, GetAllCompanyQueryVariables, GetAllCompanyProps<TChildProps, TDataName>>(GetAllCompanyDocument, {
      alias: 'getAllCompany',
      ...operationOptions
    });
};

/**
 * __useGetAllCompanyQuery__
 *
 * To run a query within a React component, call `useGetAllCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCompanyQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllCompanyQuery(baseOptions: Apollo.QueryHookOptions<GetAllCompanyQuery, GetAllCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCompanyQuery, GetAllCompanyQueryVariables>(GetAllCompanyDocument, options);
      }
export function useGetAllCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCompanyQuery, GetAllCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCompanyQuery, GetAllCompanyQueryVariables>(GetAllCompanyDocument, options);
        }
export type GetAllCompanyQueryHookResult = ReturnType<typeof useGetAllCompanyQuery>;
export type GetAllCompanyLazyQueryHookResult = ReturnType<typeof useGetAllCompanyLazyQuery>;
export type GetAllCompanyQueryResult = Apollo.QueryResult<GetAllCompanyQuery, GetAllCompanyQueryVariables>;
export const GetPaginatedCompanyDocument = gql`
    query getPaginatedCompany($input: GetPaginatedCompanyInput!) {
  getPaginatedCompany(input: $input) {
    total
    totalPages
    currentPage
    items {
      ...CompanyFragment
    }
  }
}
    ${CompanyFragmentFragmentDoc}`;
export type GetPaginatedCompanyProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPaginatedCompanyQuery, GetPaginatedCompanyQueryVariables>
    } & TChildProps;
export function withGetPaginatedCompany<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPaginatedCompanyQuery,
  GetPaginatedCompanyQueryVariables,
  GetPaginatedCompanyProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPaginatedCompanyQuery, GetPaginatedCompanyQueryVariables, GetPaginatedCompanyProps<TChildProps, TDataName>>(GetPaginatedCompanyDocument, {
      alias: 'getPaginatedCompany',
      ...operationOptions
    });
};

/**
 * __useGetPaginatedCompanyQuery__
 *
 * To run a query within a React component, call `useGetPaginatedCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedCompanyQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedCompanyQuery(baseOptions: Apollo.QueryHookOptions<GetPaginatedCompanyQuery, GetPaginatedCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedCompanyQuery, GetPaginatedCompanyQueryVariables>(GetPaginatedCompanyDocument, options);
      }
export function useGetPaginatedCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedCompanyQuery, GetPaginatedCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedCompanyQuery, GetPaginatedCompanyQueryVariables>(GetPaginatedCompanyDocument, options);
        }
export type GetPaginatedCompanyQueryHookResult = ReturnType<typeof useGetPaginatedCompanyQuery>;
export type GetPaginatedCompanyLazyQueryHookResult = ReturnType<typeof useGetPaginatedCompanyLazyQuery>;
export type GetPaginatedCompanyQueryResult = Apollo.QueryResult<GetPaginatedCompanyQuery, GetPaginatedCompanyQueryVariables>;
export const GetOneCompanyDocument = gql`
    query getOneCompany($input: GetOneCompanyInput!) {
  getOneCompany(input: $input) {
    ...CompanyFragment
  }
}
    ${CompanyFragmentFragmentDoc}`;
export type GetOneCompanyProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneCompanyQuery, GetOneCompanyQueryVariables>
    } & TChildProps;
export function withGetOneCompany<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneCompanyQuery,
  GetOneCompanyQueryVariables,
  GetOneCompanyProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneCompanyQuery, GetOneCompanyQueryVariables, GetOneCompanyProps<TChildProps, TDataName>>(GetOneCompanyDocument, {
      alias: 'getOneCompany',
      ...operationOptions
    });
};

/**
 * __useGetOneCompanyQuery__
 *
 * To run a query within a React component, call `useGetOneCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneCompanyQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOneCompanyQuery(baseOptions: Apollo.QueryHookOptions<GetOneCompanyQuery, GetOneCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneCompanyQuery, GetOneCompanyQueryVariables>(GetOneCompanyDocument, options);
      }
export function useGetOneCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneCompanyQuery, GetOneCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneCompanyQuery, GetOneCompanyQueryVariables>(GetOneCompanyDocument, options);
        }
export type GetOneCompanyQueryHookResult = ReturnType<typeof useGetOneCompanyQuery>;
export type GetOneCompanyLazyQueryHookResult = ReturnType<typeof useGetOneCompanyLazyQuery>;
export type GetOneCompanyQueryResult = Apollo.QueryResult<GetOneCompanyQuery, GetOneCompanyQueryVariables>;
export type GetAllCompanyQueryVariables = Types.Exact<{
  input: Types.GetAllCompanyInput;
}>;


export type GetAllCompanyQuery = { getAllCompany: Array<CompanyFragmentFragment> };

export type GetPaginatedCompanyQueryVariables = Types.Exact<{
  input: Types.GetPaginatedCompanyInput;
}>;


export type GetPaginatedCompanyQuery = { getPaginatedCompany?: Types.Maybe<(
    Pick<Types.PaginatedCompanyResponse, 'total' | 'totalPages' | 'currentPage'>
    & { items: Array<CompanyFragmentFragment> }
  )> };

export type GetOneCompanyQueryVariables = Types.Exact<{
  input: Types.GetOneCompanyInput;
}>;


export type GetOneCompanyQuery = { getOneCompany?: Types.Maybe<CompanyFragmentFragment> };
