import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateProductGroupDocument = gql`
    mutation createProductGroup($input: CreateProductGroupInput!) {
  createProductGroup(input: $input)
}
    `;
export type CreateProductGroupMutationFn = Apollo.MutationFunction<CreateProductGroupMutation, CreateProductGroupMutationVariables>;
export type CreateProductGroupProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateProductGroupMutation, CreateProductGroupMutationVariables>
    } & TChildProps;
export function withCreateProductGroup<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateProductGroupMutation,
  CreateProductGroupMutationVariables,
  CreateProductGroupProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateProductGroupMutation, CreateProductGroupMutationVariables, CreateProductGroupProps<TChildProps, TDataName>>(CreateProductGroupDocument, {
      alias: 'createProductGroup',
      ...operationOptions
    });
};

/**
 * __useCreateProductGroupMutation__
 *
 * To run a mutation, you first call `useCreateProductGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductGroupMutation, { data, loading, error }] = useCreateProductGroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductGroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductGroupMutation, CreateProductGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductGroupMutation, CreateProductGroupMutationVariables>(CreateProductGroupDocument, options);
      }
export type CreateProductGroupMutationHookResult = ReturnType<typeof useCreateProductGroupMutation>;
export type CreateProductGroupMutationResult = Apollo.MutationResult<CreateProductGroupMutation>;
export type CreateProductGroupMutationOptions = Apollo.BaseMutationOptions<CreateProductGroupMutation, CreateProductGroupMutationVariables>;
export const UpdateProductGroupDocument = gql`
    mutation updateProductGroup($input: UpdateProductGroupInput!) {
  updateProductGroup(input: $input)
}
    `;
export type UpdateProductGroupMutationFn = Apollo.MutationFunction<UpdateProductGroupMutation, UpdateProductGroupMutationVariables>;
export type UpdateProductGroupProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateProductGroupMutation, UpdateProductGroupMutationVariables>
    } & TChildProps;
export function withUpdateProductGroup<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateProductGroupMutation,
  UpdateProductGroupMutationVariables,
  UpdateProductGroupProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateProductGroupMutation, UpdateProductGroupMutationVariables, UpdateProductGroupProps<TChildProps, TDataName>>(UpdateProductGroupDocument, {
      alias: 'updateProductGroup',
      ...operationOptions
    });
};

/**
 * __useUpdateProductGroupMutation__
 *
 * To run a mutation, you first call `useUpdateProductGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductGroupMutation, { data, loading, error }] = useUpdateProductGroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductGroupMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductGroupMutation, UpdateProductGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductGroupMutation, UpdateProductGroupMutationVariables>(UpdateProductGroupDocument, options);
      }
export type UpdateProductGroupMutationHookResult = ReturnType<typeof useUpdateProductGroupMutation>;
export type UpdateProductGroupMutationResult = Apollo.MutationResult<UpdateProductGroupMutation>;
export type UpdateProductGroupMutationOptions = Apollo.BaseMutationOptions<UpdateProductGroupMutation, UpdateProductGroupMutationVariables>;
export const DeleteProductGroupDocument = gql`
    mutation deleteProductGroup($input: DeleteProductGroupInput!) {
  deleteProductGroup(input: $input)
}
    `;
export type DeleteProductGroupMutationFn = Apollo.MutationFunction<DeleteProductGroupMutation, DeleteProductGroupMutationVariables>;
export type DeleteProductGroupProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteProductGroupMutation, DeleteProductGroupMutationVariables>
    } & TChildProps;
export function withDeleteProductGroup<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteProductGroupMutation,
  DeleteProductGroupMutationVariables,
  DeleteProductGroupProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteProductGroupMutation, DeleteProductGroupMutationVariables, DeleteProductGroupProps<TChildProps, TDataName>>(DeleteProductGroupDocument, {
      alias: 'deleteProductGroup',
      ...operationOptions
    });
};

/**
 * __useDeleteProductGroupMutation__
 *
 * To run a mutation, you first call `useDeleteProductGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductGroupMutation, { data, loading, error }] = useDeleteProductGroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteProductGroupMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductGroupMutation, DeleteProductGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductGroupMutation, DeleteProductGroupMutationVariables>(DeleteProductGroupDocument, options);
      }
export type DeleteProductGroupMutationHookResult = ReturnType<typeof useDeleteProductGroupMutation>;
export type DeleteProductGroupMutationResult = Apollo.MutationResult<DeleteProductGroupMutation>;
export type DeleteProductGroupMutationOptions = Apollo.BaseMutationOptions<DeleteProductGroupMutation, DeleteProductGroupMutationVariables>;
export const DeleteManyProductGroupDocument = gql`
    mutation deleteManyProductGroup($input: DeleteManyProductGroupInput!) {
  deleteManyProductGroup(input: $input)
}
    `;
export type DeleteManyProductGroupMutationFn = Apollo.MutationFunction<DeleteManyProductGroupMutation, DeleteManyProductGroupMutationVariables>;
export type DeleteManyProductGroupProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyProductGroupMutation, DeleteManyProductGroupMutationVariables>
    } & TChildProps;
export function withDeleteManyProductGroup<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyProductGroupMutation,
  DeleteManyProductGroupMutationVariables,
  DeleteManyProductGroupProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyProductGroupMutation, DeleteManyProductGroupMutationVariables, DeleteManyProductGroupProps<TChildProps, TDataName>>(DeleteManyProductGroupDocument, {
      alias: 'deleteManyProductGroup',
      ...operationOptions
    });
};

/**
 * __useDeleteManyProductGroupMutation__
 *
 * To run a mutation, you first call `useDeleteManyProductGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyProductGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyProductGroupMutation, { data, loading, error }] = useDeleteManyProductGroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyProductGroupMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyProductGroupMutation, DeleteManyProductGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyProductGroupMutation, DeleteManyProductGroupMutationVariables>(DeleteManyProductGroupDocument, options);
      }
export type DeleteManyProductGroupMutationHookResult = ReturnType<typeof useDeleteManyProductGroupMutation>;
export type DeleteManyProductGroupMutationResult = Apollo.MutationResult<DeleteManyProductGroupMutation>;
export type DeleteManyProductGroupMutationOptions = Apollo.BaseMutationOptions<DeleteManyProductGroupMutation, DeleteManyProductGroupMutationVariables>;
export type CreateProductGroupMutationVariables = Types.Exact<{
  input: Types.CreateProductGroupInput;
}>;


export type CreateProductGroupMutation = Pick<Types.Mutation, 'createProductGroup'>;

export type UpdateProductGroupMutationVariables = Types.Exact<{
  input: Types.UpdateProductGroupInput;
}>;


export type UpdateProductGroupMutation = Pick<Types.Mutation, 'updateProductGroup'>;

export type DeleteProductGroupMutationVariables = Types.Exact<{
  input: Types.DeleteProductGroupInput;
}>;


export type DeleteProductGroupMutation = Pick<Types.Mutation, 'deleteProductGroup'>;

export type DeleteManyProductGroupMutationVariables = Types.Exact<{
  input: Types.DeleteManyProductGroupInput;
}>;


export type DeleteManyProductGroupMutation = Pick<Types.Mutation, 'deleteManyProductGroup'>;
