import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateProductLineDocument = gql`
    mutation createProductLine($input: CreateProductLineInput!) {
  createProductLine(input: $input)
}
    `;
export type CreateProductLineMutationFn = Apollo.MutationFunction<CreateProductLineMutation, CreateProductLineMutationVariables>;
export type CreateProductLineProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateProductLineMutation, CreateProductLineMutationVariables>
    } & TChildProps;
export function withCreateProductLine<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateProductLineMutation,
  CreateProductLineMutationVariables,
  CreateProductLineProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateProductLineMutation, CreateProductLineMutationVariables, CreateProductLineProps<TChildProps, TDataName>>(CreateProductLineDocument, {
      alias: 'createProductLine',
      ...operationOptions
    });
};

/**
 * __useCreateProductLineMutation__
 *
 * To run a mutation, you first call `useCreateProductLineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductLineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductLineMutation, { data, loading, error }] = useCreateProductLineMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductLineMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductLineMutation, CreateProductLineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductLineMutation, CreateProductLineMutationVariables>(CreateProductLineDocument, options);
      }
export type CreateProductLineMutationHookResult = ReturnType<typeof useCreateProductLineMutation>;
export type CreateProductLineMutationResult = Apollo.MutationResult<CreateProductLineMutation>;
export type CreateProductLineMutationOptions = Apollo.BaseMutationOptions<CreateProductLineMutation, CreateProductLineMutationVariables>;
export const UpdateProductLineDocument = gql`
    mutation updateProductLine($input: UpdateProductLineInput!) {
  updateProductLine(input: $input)
}
    `;
export type UpdateProductLineMutationFn = Apollo.MutationFunction<UpdateProductLineMutation, UpdateProductLineMutationVariables>;
export type UpdateProductLineProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateProductLineMutation, UpdateProductLineMutationVariables>
    } & TChildProps;
export function withUpdateProductLine<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateProductLineMutation,
  UpdateProductLineMutationVariables,
  UpdateProductLineProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateProductLineMutation, UpdateProductLineMutationVariables, UpdateProductLineProps<TChildProps, TDataName>>(UpdateProductLineDocument, {
      alias: 'updateProductLine',
      ...operationOptions
    });
};

/**
 * __useUpdateProductLineMutation__
 *
 * To run a mutation, you first call `useUpdateProductLineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductLineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductLineMutation, { data, loading, error }] = useUpdateProductLineMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductLineMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductLineMutation, UpdateProductLineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductLineMutation, UpdateProductLineMutationVariables>(UpdateProductLineDocument, options);
      }
export type UpdateProductLineMutationHookResult = ReturnType<typeof useUpdateProductLineMutation>;
export type UpdateProductLineMutationResult = Apollo.MutationResult<UpdateProductLineMutation>;
export type UpdateProductLineMutationOptions = Apollo.BaseMutationOptions<UpdateProductLineMutation, UpdateProductLineMutationVariables>;
export const DeleteProductLineDocument = gql`
    mutation deleteProductLine($input: DeleteProductLineInput!) {
  deleteProductLine(input: $input)
}
    `;
export type DeleteProductLineMutationFn = Apollo.MutationFunction<DeleteProductLineMutation, DeleteProductLineMutationVariables>;
export type DeleteProductLineProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteProductLineMutation, DeleteProductLineMutationVariables>
    } & TChildProps;
export function withDeleteProductLine<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteProductLineMutation,
  DeleteProductLineMutationVariables,
  DeleteProductLineProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteProductLineMutation, DeleteProductLineMutationVariables, DeleteProductLineProps<TChildProps, TDataName>>(DeleteProductLineDocument, {
      alias: 'deleteProductLine',
      ...operationOptions
    });
};

/**
 * __useDeleteProductLineMutation__
 *
 * To run a mutation, you first call `useDeleteProductLineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductLineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductLineMutation, { data, loading, error }] = useDeleteProductLineMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteProductLineMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductLineMutation, DeleteProductLineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductLineMutation, DeleteProductLineMutationVariables>(DeleteProductLineDocument, options);
      }
export type DeleteProductLineMutationHookResult = ReturnType<typeof useDeleteProductLineMutation>;
export type DeleteProductLineMutationResult = Apollo.MutationResult<DeleteProductLineMutation>;
export type DeleteProductLineMutationOptions = Apollo.BaseMutationOptions<DeleteProductLineMutation, DeleteProductLineMutationVariables>;
export const DeleteManyProductLineDocument = gql`
    mutation deleteManyProductLine($input: DeleteManyProductLineInput!) {
  deleteManyProductLine(input: $input)
}
    `;
export type DeleteManyProductLineMutationFn = Apollo.MutationFunction<DeleteManyProductLineMutation, DeleteManyProductLineMutationVariables>;
export type DeleteManyProductLineProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyProductLineMutation, DeleteManyProductLineMutationVariables>
    } & TChildProps;
export function withDeleteManyProductLine<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyProductLineMutation,
  DeleteManyProductLineMutationVariables,
  DeleteManyProductLineProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyProductLineMutation, DeleteManyProductLineMutationVariables, DeleteManyProductLineProps<TChildProps, TDataName>>(DeleteManyProductLineDocument, {
      alias: 'deleteManyProductLine',
      ...operationOptions
    });
};

/**
 * __useDeleteManyProductLineMutation__
 *
 * To run a mutation, you first call `useDeleteManyProductLineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyProductLineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyProductLineMutation, { data, loading, error }] = useDeleteManyProductLineMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyProductLineMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyProductLineMutation, DeleteManyProductLineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyProductLineMutation, DeleteManyProductLineMutationVariables>(DeleteManyProductLineDocument, options);
      }
export type DeleteManyProductLineMutationHookResult = ReturnType<typeof useDeleteManyProductLineMutation>;
export type DeleteManyProductLineMutationResult = Apollo.MutationResult<DeleteManyProductLineMutation>;
export type DeleteManyProductLineMutationOptions = Apollo.BaseMutationOptions<DeleteManyProductLineMutation, DeleteManyProductLineMutationVariables>;
export type CreateProductLineMutationVariables = Types.Exact<{
  input: Types.CreateProductLineInput;
}>;


export type CreateProductLineMutation = Pick<Types.Mutation, 'createProductLine'>;

export type UpdateProductLineMutationVariables = Types.Exact<{
  input: Types.UpdateProductLineInput;
}>;


export type UpdateProductLineMutation = Pick<Types.Mutation, 'updateProductLine'>;

export type DeleteProductLineMutationVariables = Types.Exact<{
  input: Types.DeleteProductLineInput;
}>;


export type DeleteProductLineMutation = Pick<Types.Mutation, 'deleteProductLine'>;

export type DeleteManyProductLineMutationVariables = Types.Exact<{
  input: Types.DeleteManyProductLineInput;
}>;


export type DeleteManyProductLineMutation = Pick<Types.Mutation, 'deleteManyProductLine'>;
