import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateSubgroupDocument = gql`
    mutation createSubgroup($input: CreateSubgroupInput!) {
  createSubgroup(input: $input)
}
    `;
export type CreateSubgroupMutationFn = Apollo.MutationFunction<CreateSubgroupMutation, CreateSubgroupMutationVariables>;
export type CreateSubgroupProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateSubgroupMutation, CreateSubgroupMutationVariables>
    } & TChildProps;
export function withCreateSubgroup<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateSubgroupMutation,
  CreateSubgroupMutationVariables,
  CreateSubgroupProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateSubgroupMutation, CreateSubgroupMutationVariables, CreateSubgroupProps<TChildProps, TDataName>>(CreateSubgroupDocument, {
      alias: 'createSubgroup',
      ...operationOptions
    });
};

/**
 * __useCreateSubgroupMutation__
 *
 * To run a mutation, you first call `useCreateSubgroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubgroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubgroupMutation, { data, loading, error }] = useCreateSubgroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSubgroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateSubgroupMutation, CreateSubgroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSubgroupMutation, CreateSubgroupMutationVariables>(CreateSubgroupDocument, options);
      }
export type CreateSubgroupMutationHookResult = ReturnType<typeof useCreateSubgroupMutation>;
export type CreateSubgroupMutationResult = Apollo.MutationResult<CreateSubgroupMutation>;
export type CreateSubgroupMutationOptions = Apollo.BaseMutationOptions<CreateSubgroupMutation, CreateSubgroupMutationVariables>;
export const UpdateSubgroupDocument = gql`
    mutation updateSubgroup($input: UpdateSubgroupInput!) {
  updateSubgroup(input: $input)
}
    `;
export type UpdateSubgroupMutationFn = Apollo.MutationFunction<UpdateSubgroupMutation, UpdateSubgroupMutationVariables>;
export type UpdateSubgroupProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateSubgroupMutation, UpdateSubgroupMutationVariables>
    } & TChildProps;
export function withUpdateSubgroup<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateSubgroupMutation,
  UpdateSubgroupMutationVariables,
  UpdateSubgroupProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateSubgroupMutation, UpdateSubgroupMutationVariables, UpdateSubgroupProps<TChildProps, TDataName>>(UpdateSubgroupDocument, {
      alias: 'updateSubgroup',
      ...operationOptions
    });
};

/**
 * __useUpdateSubgroupMutation__
 *
 * To run a mutation, you first call `useUpdateSubgroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSubgroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSubgroupMutation, { data, loading, error }] = useUpdateSubgroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSubgroupMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSubgroupMutation, UpdateSubgroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSubgroupMutation, UpdateSubgroupMutationVariables>(UpdateSubgroupDocument, options);
      }
export type UpdateSubgroupMutationHookResult = ReturnType<typeof useUpdateSubgroupMutation>;
export type UpdateSubgroupMutationResult = Apollo.MutationResult<UpdateSubgroupMutation>;
export type UpdateSubgroupMutationOptions = Apollo.BaseMutationOptions<UpdateSubgroupMutation, UpdateSubgroupMutationVariables>;
export const DeleteSubgroupDocument = gql`
    mutation deleteSubgroup($input: DeleteSubgroupInput!) {
  deleteSubgroup(input: $input)
}
    `;
export type DeleteSubgroupMutationFn = Apollo.MutationFunction<DeleteSubgroupMutation, DeleteSubgroupMutationVariables>;
export type DeleteSubgroupProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteSubgroupMutation, DeleteSubgroupMutationVariables>
    } & TChildProps;
export function withDeleteSubgroup<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteSubgroupMutation,
  DeleteSubgroupMutationVariables,
  DeleteSubgroupProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteSubgroupMutation, DeleteSubgroupMutationVariables, DeleteSubgroupProps<TChildProps, TDataName>>(DeleteSubgroupDocument, {
      alias: 'deleteSubgroup',
      ...operationOptions
    });
};

/**
 * __useDeleteSubgroupMutation__
 *
 * To run a mutation, you first call `useDeleteSubgroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSubgroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSubgroupMutation, { data, loading, error }] = useDeleteSubgroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteSubgroupMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSubgroupMutation, DeleteSubgroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSubgroupMutation, DeleteSubgroupMutationVariables>(DeleteSubgroupDocument, options);
      }
export type DeleteSubgroupMutationHookResult = ReturnType<typeof useDeleteSubgroupMutation>;
export type DeleteSubgroupMutationResult = Apollo.MutationResult<DeleteSubgroupMutation>;
export type DeleteSubgroupMutationOptions = Apollo.BaseMutationOptions<DeleteSubgroupMutation, DeleteSubgroupMutationVariables>;
export const DeleteManySubgroupDocument = gql`
    mutation deleteManySubgroup($input: DeleteManySubgroupInput!) {
  deleteManySubgroup(input: $input)
}
    `;
export type DeleteManySubgroupMutationFn = Apollo.MutationFunction<DeleteManySubgroupMutation, DeleteManySubgroupMutationVariables>;
export type DeleteManySubgroupProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManySubgroupMutation, DeleteManySubgroupMutationVariables>
    } & TChildProps;
export function withDeleteManySubgroup<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManySubgroupMutation,
  DeleteManySubgroupMutationVariables,
  DeleteManySubgroupProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManySubgroupMutation, DeleteManySubgroupMutationVariables, DeleteManySubgroupProps<TChildProps, TDataName>>(DeleteManySubgroupDocument, {
      alias: 'deleteManySubgroup',
      ...operationOptions
    });
};

/**
 * __useDeleteManySubgroupMutation__
 *
 * To run a mutation, you first call `useDeleteManySubgroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManySubgroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManySubgroupMutation, { data, loading, error }] = useDeleteManySubgroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManySubgroupMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManySubgroupMutation, DeleteManySubgroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManySubgroupMutation, DeleteManySubgroupMutationVariables>(DeleteManySubgroupDocument, options);
      }
export type DeleteManySubgroupMutationHookResult = ReturnType<typeof useDeleteManySubgroupMutation>;
export type DeleteManySubgroupMutationResult = Apollo.MutationResult<DeleteManySubgroupMutation>;
export type DeleteManySubgroupMutationOptions = Apollo.BaseMutationOptions<DeleteManySubgroupMutation, DeleteManySubgroupMutationVariables>;
export type CreateSubgroupMutationVariables = Types.Exact<{
  input: Types.CreateSubgroupInput;
}>;


export type CreateSubgroupMutation = Pick<Types.Mutation, 'createSubgroup'>;

export type UpdateSubgroupMutationVariables = Types.Exact<{
  input: Types.UpdateSubgroupInput;
}>;


export type UpdateSubgroupMutation = Pick<Types.Mutation, 'updateSubgroup'>;

export type DeleteSubgroupMutationVariables = Types.Exact<{
  input: Types.DeleteSubgroupInput;
}>;


export type DeleteSubgroupMutation = Pick<Types.Mutation, 'deleteSubgroup'>;

export type DeleteManySubgroupMutationVariables = Types.Exact<{
  input: Types.DeleteManySubgroupInput;
}>;


export type DeleteManySubgroupMutation = Pick<Types.Mutation, 'deleteManySubgroup'>;
