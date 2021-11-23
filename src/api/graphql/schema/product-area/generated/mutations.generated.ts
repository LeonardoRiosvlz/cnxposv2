import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateProductAreaDocument = gql`
    mutation createProductArea($input: CreateProductAreaInput!) {
  createProductArea(input: $input)
}
    `;
export type CreateProductAreaMutationFn = Apollo.MutationFunction<CreateProductAreaMutation, CreateProductAreaMutationVariables>;
export type CreateProductAreaProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateProductAreaMutation, CreateProductAreaMutationVariables>
    } & TChildProps;
export function withCreateProductArea<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateProductAreaMutation,
  CreateProductAreaMutationVariables,
  CreateProductAreaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateProductAreaMutation, CreateProductAreaMutationVariables, CreateProductAreaProps<TChildProps, TDataName>>(CreateProductAreaDocument, {
      alias: 'createProductArea',
      ...operationOptions
    });
};

/**
 * __useCreateProductAreaMutation__
 *
 * To run a mutation, you first call `useCreateProductAreaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductAreaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductAreaMutation, { data, loading, error }] = useCreateProductAreaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductAreaMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductAreaMutation, CreateProductAreaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductAreaMutation, CreateProductAreaMutationVariables>(CreateProductAreaDocument, options);
      }
export type CreateProductAreaMutationHookResult = ReturnType<typeof useCreateProductAreaMutation>;
export type CreateProductAreaMutationResult = Apollo.MutationResult<CreateProductAreaMutation>;
export type CreateProductAreaMutationOptions = Apollo.BaseMutationOptions<CreateProductAreaMutation, CreateProductAreaMutationVariables>;
export const UpdateProductAreaDocument = gql`
    mutation updateProductArea($input: UpdateProductAreaInput!) {
  updateProductArea(input: $input)
}
    `;
export type UpdateProductAreaMutationFn = Apollo.MutationFunction<UpdateProductAreaMutation, UpdateProductAreaMutationVariables>;
export type UpdateProductAreaProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateProductAreaMutation, UpdateProductAreaMutationVariables>
    } & TChildProps;
export function withUpdateProductArea<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateProductAreaMutation,
  UpdateProductAreaMutationVariables,
  UpdateProductAreaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateProductAreaMutation, UpdateProductAreaMutationVariables, UpdateProductAreaProps<TChildProps, TDataName>>(UpdateProductAreaDocument, {
      alias: 'updateProductArea',
      ...operationOptions
    });
};

/**
 * __useUpdateProductAreaMutation__
 *
 * To run a mutation, you first call `useUpdateProductAreaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductAreaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductAreaMutation, { data, loading, error }] = useUpdateProductAreaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductAreaMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductAreaMutation, UpdateProductAreaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductAreaMutation, UpdateProductAreaMutationVariables>(UpdateProductAreaDocument, options);
      }
export type UpdateProductAreaMutationHookResult = ReturnType<typeof useUpdateProductAreaMutation>;
export type UpdateProductAreaMutationResult = Apollo.MutationResult<UpdateProductAreaMutation>;
export type UpdateProductAreaMutationOptions = Apollo.BaseMutationOptions<UpdateProductAreaMutation, UpdateProductAreaMutationVariables>;
export const DeleteProductAreaDocument = gql`
    mutation deleteProductArea($input: DeleteProductAreaInput!) {
  deleteProductArea(input: $input)
}
    `;
export type DeleteProductAreaMutationFn = Apollo.MutationFunction<DeleteProductAreaMutation, DeleteProductAreaMutationVariables>;
export type DeleteProductAreaProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteProductAreaMutation, DeleteProductAreaMutationVariables>
    } & TChildProps;
export function withDeleteProductArea<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteProductAreaMutation,
  DeleteProductAreaMutationVariables,
  DeleteProductAreaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteProductAreaMutation, DeleteProductAreaMutationVariables, DeleteProductAreaProps<TChildProps, TDataName>>(DeleteProductAreaDocument, {
      alias: 'deleteProductArea',
      ...operationOptions
    });
};

/**
 * __useDeleteProductAreaMutation__
 *
 * To run a mutation, you first call `useDeleteProductAreaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductAreaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductAreaMutation, { data, loading, error }] = useDeleteProductAreaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteProductAreaMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductAreaMutation, DeleteProductAreaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductAreaMutation, DeleteProductAreaMutationVariables>(DeleteProductAreaDocument, options);
      }
export type DeleteProductAreaMutationHookResult = ReturnType<typeof useDeleteProductAreaMutation>;
export type DeleteProductAreaMutationResult = Apollo.MutationResult<DeleteProductAreaMutation>;
export type DeleteProductAreaMutationOptions = Apollo.BaseMutationOptions<DeleteProductAreaMutation, DeleteProductAreaMutationVariables>;
export const DeleteManyProductAreaDocument = gql`
    mutation deleteManyProductArea($input: DeleteManyProductAreaInput!) {
  deleteManyProductArea(input: $input)
}
    `;
export type DeleteManyProductAreaMutationFn = Apollo.MutationFunction<DeleteManyProductAreaMutation, DeleteManyProductAreaMutationVariables>;
export type DeleteManyProductAreaProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyProductAreaMutation, DeleteManyProductAreaMutationVariables>
    } & TChildProps;
export function withDeleteManyProductArea<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyProductAreaMutation,
  DeleteManyProductAreaMutationVariables,
  DeleteManyProductAreaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyProductAreaMutation, DeleteManyProductAreaMutationVariables, DeleteManyProductAreaProps<TChildProps, TDataName>>(DeleteManyProductAreaDocument, {
      alias: 'deleteManyProductArea',
      ...operationOptions
    });
};

/**
 * __useDeleteManyProductAreaMutation__
 *
 * To run a mutation, you first call `useDeleteManyProductAreaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyProductAreaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyProductAreaMutation, { data, loading, error }] = useDeleteManyProductAreaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyProductAreaMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyProductAreaMutation, DeleteManyProductAreaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyProductAreaMutation, DeleteManyProductAreaMutationVariables>(DeleteManyProductAreaDocument, options);
      }
export type DeleteManyProductAreaMutationHookResult = ReturnType<typeof useDeleteManyProductAreaMutation>;
export type DeleteManyProductAreaMutationResult = Apollo.MutationResult<DeleteManyProductAreaMutation>;
export type DeleteManyProductAreaMutationOptions = Apollo.BaseMutationOptions<DeleteManyProductAreaMutation, DeleteManyProductAreaMutationVariables>;
export type CreateProductAreaMutationVariables = Types.Exact<{
  input: Types.CreateProductAreaInput;
}>;


export type CreateProductAreaMutation = Pick<Types.Mutation, 'createProductArea'>;

export type UpdateProductAreaMutationVariables = Types.Exact<{
  input: Types.UpdateProductAreaInput;
}>;


export type UpdateProductAreaMutation = Pick<Types.Mutation, 'updateProductArea'>;

export type DeleteProductAreaMutationVariables = Types.Exact<{
  input: Types.DeleteProductAreaInput;
}>;


export type DeleteProductAreaMutation = Pick<Types.Mutation, 'deleteProductArea'>;

export type DeleteManyProductAreaMutationVariables = Types.Exact<{
  input: Types.DeleteManyProductAreaInput;
}>;


export type DeleteManyProductAreaMutation = Pick<Types.Mutation, 'deleteManyProductArea'>;
