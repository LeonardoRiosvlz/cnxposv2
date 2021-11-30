import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateCompanyDocument = gql`
    mutation createCompany($input: CreateCompanyInput!) {
  createCompany(input: $input)
}
    `;
export type CreateCompanyMutationFn = Apollo.MutationFunction<CreateCompanyMutation, CreateCompanyMutationVariables>;
export type CreateCompanyProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateCompanyMutation, CreateCompanyMutationVariables>
    } & TChildProps;
export function withCreateCompany<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateCompanyMutation,
  CreateCompanyMutationVariables,
  CreateCompanyProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateCompanyMutation, CreateCompanyMutationVariables, CreateCompanyProps<TChildProps, TDataName>>(CreateCompanyDocument, {
      alias: 'createCompany',
      ...operationOptions
    });
};

/**
 * __useCreateCompanyMutation__
 *
 * To run a mutation, you first call `useCreateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyMutation, { data, loading, error }] = useCreateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCompanyMutation(baseOptions?: Apollo.MutationHookOptions<CreateCompanyMutation, CreateCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCompanyMutation, CreateCompanyMutationVariables>(CreateCompanyDocument, options);
      }
export type CreateCompanyMutationHookResult = ReturnType<typeof useCreateCompanyMutation>;
export type CreateCompanyMutationResult = Apollo.MutationResult<CreateCompanyMutation>;
export type CreateCompanyMutationOptions = Apollo.BaseMutationOptions<CreateCompanyMutation, CreateCompanyMutationVariables>;
export const UpdateCompanyDocument = gql`
    mutation updateCompany($input: UpdateCompanyInput!) {
  updateCompany(input: $input)
}
    `;
export type UpdateCompanyMutationFn = Apollo.MutationFunction<UpdateCompanyMutation, UpdateCompanyMutationVariables>;
export type UpdateCompanyProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateCompanyMutation, UpdateCompanyMutationVariables>
    } & TChildProps;
export function withUpdateCompany<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateCompanyMutation,
  UpdateCompanyMutationVariables,
  UpdateCompanyProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateCompanyMutation, UpdateCompanyMutationVariables, UpdateCompanyProps<TChildProps, TDataName>>(UpdateCompanyDocument, {
      alias: 'updateCompany',
      ...operationOptions
    });
};

/**
 * __useUpdateCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyMutation, { data, loading, error }] = useUpdateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCompanyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCompanyMutation, UpdateCompanyMutationVariables>(UpdateCompanyDocument, options);
      }
export type UpdateCompanyMutationHookResult = ReturnType<typeof useUpdateCompanyMutation>;
export type UpdateCompanyMutationResult = Apollo.MutationResult<UpdateCompanyMutation>;
export type UpdateCompanyMutationOptions = Apollo.BaseMutationOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>;
export const DeleteCompanyDocument = gql`
    mutation deleteCompany($input: DeleteCompanyInput!) {
  deleteCompany(input: $input)
}
    `;
export type DeleteCompanyMutationFn = Apollo.MutationFunction<DeleteCompanyMutation, DeleteCompanyMutationVariables>;
export type DeleteCompanyProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteCompanyMutation, DeleteCompanyMutationVariables>
    } & TChildProps;
export function withDeleteCompany<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteCompanyMutation,
  DeleteCompanyMutationVariables,
  DeleteCompanyProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteCompanyMutation, DeleteCompanyMutationVariables, DeleteCompanyProps<TChildProps, TDataName>>(DeleteCompanyDocument, {
      alias: 'deleteCompany',
      ...operationOptions
    });
};

/**
 * __useDeleteCompanyMutation__
 *
 * To run a mutation, you first call `useDeleteCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCompanyMutation, { data, loading, error }] = useDeleteCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCompanyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCompanyMutation, DeleteCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCompanyMutation, DeleteCompanyMutationVariables>(DeleteCompanyDocument, options);
      }
export type DeleteCompanyMutationHookResult = ReturnType<typeof useDeleteCompanyMutation>;
export type DeleteCompanyMutationResult = Apollo.MutationResult<DeleteCompanyMutation>;
export type DeleteCompanyMutationOptions = Apollo.BaseMutationOptions<DeleteCompanyMutation, DeleteCompanyMutationVariables>;
export const DeleteManyCompanyDocument = gql`
    mutation deleteManyCompany($input: DeleteManyCompanyInput!) {
  deleteManyCompany(input: $input)
}
    `;
export type DeleteManyCompanyMutationFn = Apollo.MutationFunction<DeleteManyCompanyMutation, DeleteManyCompanyMutationVariables>;
export type DeleteManyCompanyProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyCompanyMutation, DeleteManyCompanyMutationVariables>
    } & TChildProps;
export function withDeleteManyCompany<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyCompanyMutation,
  DeleteManyCompanyMutationVariables,
  DeleteManyCompanyProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyCompanyMutation, DeleteManyCompanyMutationVariables, DeleteManyCompanyProps<TChildProps, TDataName>>(DeleteManyCompanyDocument, {
      alias: 'deleteManyCompany',
      ...operationOptions
    });
};

/**
 * __useDeleteManyCompanyMutation__
 *
 * To run a mutation, you first call `useDeleteManyCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyCompanyMutation, { data, loading, error }] = useDeleteManyCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyCompanyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyCompanyMutation, DeleteManyCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyCompanyMutation, DeleteManyCompanyMutationVariables>(DeleteManyCompanyDocument, options);
      }
export type DeleteManyCompanyMutationHookResult = ReturnType<typeof useDeleteManyCompanyMutation>;
export type DeleteManyCompanyMutationResult = Apollo.MutationResult<DeleteManyCompanyMutation>;
export type DeleteManyCompanyMutationOptions = Apollo.BaseMutationOptions<DeleteManyCompanyMutation, DeleteManyCompanyMutationVariables>;
export type CreateCompanyMutationVariables = Types.Exact<{
  input: Types.CreateCompanyInput;
}>;


export type CreateCompanyMutation = Pick<Types.Mutation, 'createCompany'>;

export type UpdateCompanyMutationVariables = Types.Exact<{
  input: Types.UpdateCompanyInput;
}>;


export type UpdateCompanyMutation = Pick<Types.Mutation, 'updateCompany'>;

export type DeleteCompanyMutationVariables = Types.Exact<{
  input: Types.DeleteCompanyInput;
}>;


export type DeleteCompanyMutation = Pick<Types.Mutation, 'deleteCompany'>;

export type DeleteManyCompanyMutationVariables = Types.Exact<{
  input: Types.DeleteManyCompanyInput;
}>;


export type DeleteManyCompanyMutation = Pick<Types.Mutation, 'deleteManyCompany'>;
