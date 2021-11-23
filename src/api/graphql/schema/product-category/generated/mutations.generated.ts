import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateProductCategoryDocument = gql`
    mutation createProductCategory($input: CreateProductCategoryInput!) {
  createProductCategory(input: $input)
}
    `;
export type CreateProductCategoryMutationFn = Apollo.MutationFunction<CreateProductCategoryMutation, CreateProductCategoryMutationVariables>;
export type CreateProductCategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateProductCategoryMutation, CreateProductCategoryMutationVariables>
    } & TChildProps;
export function withCreateProductCategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateProductCategoryMutation,
  CreateProductCategoryMutationVariables,
  CreateProductCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateProductCategoryMutation, CreateProductCategoryMutationVariables, CreateProductCategoryProps<TChildProps, TDataName>>(CreateProductCategoryDocument, {
      alias: 'createProductCategory',
      ...operationOptions
    });
};

/**
 * __useCreateProductCategoryMutation__
 *
 * To run a mutation, you first call `useCreateProductCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductCategoryMutation, { data, loading, error }] = useCreateProductCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductCategoryMutation, CreateProductCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductCategoryMutation, CreateProductCategoryMutationVariables>(CreateProductCategoryDocument, options);
      }
export type CreateProductCategoryMutationHookResult = ReturnType<typeof useCreateProductCategoryMutation>;
export type CreateProductCategoryMutationResult = Apollo.MutationResult<CreateProductCategoryMutation>;
export type CreateProductCategoryMutationOptions = Apollo.BaseMutationOptions<CreateProductCategoryMutation, CreateProductCategoryMutationVariables>;
export const UpdateProductCategoryDocument = gql`
    mutation updateProductCategory($input: UpdateProductCategoryInput!) {
  updateProductCategory(input: $input)
}
    `;
export type UpdateProductCategoryMutationFn = Apollo.MutationFunction<UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables>;
export type UpdateProductCategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables>
    } & TChildProps;
export function withUpdateProductCategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateProductCategoryMutation,
  UpdateProductCategoryMutationVariables,
  UpdateProductCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables, UpdateProductCategoryProps<TChildProps, TDataName>>(UpdateProductCategoryDocument, {
      alias: 'updateProductCategory',
      ...operationOptions
    });
};

/**
 * __useUpdateProductCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateProductCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductCategoryMutation, { data, loading, error }] = useUpdateProductCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables>(UpdateProductCategoryDocument, options);
      }
export type UpdateProductCategoryMutationHookResult = ReturnType<typeof useUpdateProductCategoryMutation>;
export type UpdateProductCategoryMutationResult = Apollo.MutationResult<UpdateProductCategoryMutation>;
export type UpdateProductCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables>;
export const DeleteProductCategoryDocument = gql`
    mutation deleteProductCategory($input: DeleteProductCategoryInput!) {
  deleteProductCategory(input: $input)
}
    `;
export type DeleteProductCategoryMutationFn = Apollo.MutationFunction<DeleteProductCategoryMutation, DeleteProductCategoryMutationVariables>;
export type DeleteProductCategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteProductCategoryMutation, DeleteProductCategoryMutationVariables>
    } & TChildProps;
export function withDeleteProductCategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteProductCategoryMutation,
  DeleteProductCategoryMutationVariables,
  DeleteProductCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteProductCategoryMutation, DeleteProductCategoryMutationVariables, DeleteProductCategoryProps<TChildProps, TDataName>>(DeleteProductCategoryDocument, {
      alias: 'deleteProductCategory',
      ...operationOptions
    });
};

/**
 * __useDeleteProductCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteProductCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductCategoryMutation, { data, loading, error }] = useDeleteProductCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteProductCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductCategoryMutation, DeleteProductCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductCategoryMutation, DeleteProductCategoryMutationVariables>(DeleteProductCategoryDocument, options);
      }
export type DeleteProductCategoryMutationHookResult = ReturnType<typeof useDeleteProductCategoryMutation>;
export type DeleteProductCategoryMutationResult = Apollo.MutationResult<DeleteProductCategoryMutation>;
export type DeleteProductCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteProductCategoryMutation, DeleteProductCategoryMutationVariables>;
export const DeleteManyProductCategoryDocument = gql`
    mutation deleteManyProductCategory($input: DeleteManyProductCategoryInput!) {
  deleteManyProductCategory(input: $input)
}
    `;
export type DeleteManyProductCategoryMutationFn = Apollo.MutationFunction<DeleteManyProductCategoryMutation, DeleteManyProductCategoryMutationVariables>;
export type DeleteManyProductCategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyProductCategoryMutation, DeleteManyProductCategoryMutationVariables>
    } & TChildProps;
export function withDeleteManyProductCategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyProductCategoryMutation,
  DeleteManyProductCategoryMutationVariables,
  DeleteManyProductCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyProductCategoryMutation, DeleteManyProductCategoryMutationVariables, DeleteManyProductCategoryProps<TChildProps, TDataName>>(DeleteManyProductCategoryDocument, {
      alias: 'deleteManyProductCategory',
      ...operationOptions
    });
};

/**
 * __useDeleteManyProductCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteManyProductCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyProductCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyProductCategoryMutation, { data, loading, error }] = useDeleteManyProductCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyProductCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyProductCategoryMutation, DeleteManyProductCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyProductCategoryMutation, DeleteManyProductCategoryMutationVariables>(DeleteManyProductCategoryDocument, options);
      }
export type DeleteManyProductCategoryMutationHookResult = ReturnType<typeof useDeleteManyProductCategoryMutation>;
export type DeleteManyProductCategoryMutationResult = Apollo.MutationResult<DeleteManyProductCategoryMutation>;
export type DeleteManyProductCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteManyProductCategoryMutation, DeleteManyProductCategoryMutationVariables>;
export type CreateProductCategoryMutationVariables = Types.Exact<{
  input: Types.CreateProductCategoryInput;
}>;


export type CreateProductCategoryMutation = Pick<Types.Mutation, 'createProductCategory'>;

export type UpdateProductCategoryMutationVariables = Types.Exact<{
  input: Types.UpdateProductCategoryInput;
}>;


export type UpdateProductCategoryMutation = Pick<Types.Mutation, 'updateProductCategory'>;

export type DeleteProductCategoryMutationVariables = Types.Exact<{
  input: Types.DeleteProductCategoryInput;
}>;


export type DeleteProductCategoryMutation = Pick<Types.Mutation, 'deleteProductCategory'>;

export type DeleteManyProductCategoryMutationVariables = Types.Exact<{
  input: Types.DeleteManyProductCategoryInput;
}>;


export type DeleteManyProductCategoryMutation = Pick<Types.Mutation, 'deleteManyProductCategory'>;
