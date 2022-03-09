import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateProductSalePriceDocument = gql`
    mutation createProductSalePrice($input: CreateProductSalePriceInput!) {
  createProductSalePrice(input: $input)
}
    `;
export type CreateProductSalePriceMutationFn = Apollo.MutationFunction<CreateProductSalePriceMutation, CreateProductSalePriceMutationVariables>;
export type CreateProductSalePriceProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateProductSalePriceMutation, CreateProductSalePriceMutationVariables>
    } & TChildProps;
export function withCreateProductSalePrice<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateProductSalePriceMutation,
  CreateProductSalePriceMutationVariables,
  CreateProductSalePriceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateProductSalePriceMutation, CreateProductSalePriceMutationVariables, CreateProductSalePriceProps<TChildProps, TDataName>>(CreateProductSalePriceDocument, {
      alias: 'createProductSalePrice',
      ...operationOptions
    });
};

/**
 * __useCreateProductSalePriceMutation__
 *
 * To run a mutation, you first call `useCreateProductSalePriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductSalePriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductSalePriceMutation, { data, loading, error }] = useCreateProductSalePriceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductSalePriceMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductSalePriceMutation, CreateProductSalePriceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductSalePriceMutation, CreateProductSalePriceMutationVariables>(CreateProductSalePriceDocument, options);
      }
export type CreateProductSalePriceMutationHookResult = ReturnType<typeof useCreateProductSalePriceMutation>;
export type CreateProductSalePriceMutationResult = Apollo.MutationResult<CreateProductSalePriceMutation>;
export type CreateProductSalePriceMutationOptions = Apollo.BaseMutationOptions<CreateProductSalePriceMutation, CreateProductSalePriceMutationVariables>;
export const UpdateProductSalePriceDocument = gql`
    mutation updateProductSalePrice($input: UpdateProductSalePriceInput!) {
  updateProductSalePrice(input: $input)
}
    `;
export type UpdateProductSalePriceMutationFn = Apollo.MutationFunction<UpdateProductSalePriceMutation, UpdateProductSalePriceMutationVariables>;
export type UpdateProductSalePriceProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateProductSalePriceMutation, UpdateProductSalePriceMutationVariables>
    } & TChildProps;
export function withUpdateProductSalePrice<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateProductSalePriceMutation,
  UpdateProductSalePriceMutationVariables,
  UpdateProductSalePriceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateProductSalePriceMutation, UpdateProductSalePriceMutationVariables, UpdateProductSalePriceProps<TChildProps, TDataName>>(UpdateProductSalePriceDocument, {
      alias: 'updateProductSalePrice',
      ...operationOptions
    });
};

/**
 * __useUpdateProductSalePriceMutation__
 *
 * To run a mutation, you first call `useUpdateProductSalePriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductSalePriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductSalePriceMutation, { data, loading, error }] = useUpdateProductSalePriceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductSalePriceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductSalePriceMutation, UpdateProductSalePriceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductSalePriceMutation, UpdateProductSalePriceMutationVariables>(UpdateProductSalePriceDocument, options);
      }
export type UpdateProductSalePriceMutationHookResult = ReturnType<typeof useUpdateProductSalePriceMutation>;
export type UpdateProductSalePriceMutationResult = Apollo.MutationResult<UpdateProductSalePriceMutation>;
export type UpdateProductSalePriceMutationOptions = Apollo.BaseMutationOptions<UpdateProductSalePriceMutation, UpdateProductSalePriceMutationVariables>;
export const DeleteProductSalePriceDocument = gql`
    mutation deleteProductSalePrice($input: DeleteProductSalePriceInput!) {
  deleteProductSalePrice(input: $input)
}
    `;
export type DeleteProductSalePriceMutationFn = Apollo.MutationFunction<DeleteProductSalePriceMutation, DeleteProductSalePriceMutationVariables>;
export type DeleteProductSalePriceProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteProductSalePriceMutation, DeleteProductSalePriceMutationVariables>
    } & TChildProps;
export function withDeleteProductSalePrice<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteProductSalePriceMutation,
  DeleteProductSalePriceMutationVariables,
  DeleteProductSalePriceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteProductSalePriceMutation, DeleteProductSalePriceMutationVariables, DeleteProductSalePriceProps<TChildProps, TDataName>>(DeleteProductSalePriceDocument, {
      alias: 'deleteProductSalePrice',
      ...operationOptions
    });
};

/**
 * __useDeleteProductSalePriceMutation__
 *
 * To run a mutation, you first call `useDeleteProductSalePriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductSalePriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductSalePriceMutation, { data, loading, error }] = useDeleteProductSalePriceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteProductSalePriceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductSalePriceMutation, DeleteProductSalePriceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductSalePriceMutation, DeleteProductSalePriceMutationVariables>(DeleteProductSalePriceDocument, options);
      }
export type DeleteProductSalePriceMutationHookResult = ReturnType<typeof useDeleteProductSalePriceMutation>;
export type DeleteProductSalePriceMutationResult = Apollo.MutationResult<DeleteProductSalePriceMutation>;
export type DeleteProductSalePriceMutationOptions = Apollo.BaseMutationOptions<DeleteProductSalePriceMutation, DeleteProductSalePriceMutationVariables>;
export const DeleteManyProductSalePriceDocument = gql`
    mutation deleteManyProductSalePrice($input: DeleteManyProductSalePriceInput!) {
  deleteManyProductSalePrice(input: $input)
}
    `;
export type DeleteManyProductSalePriceMutationFn = Apollo.MutationFunction<DeleteManyProductSalePriceMutation, DeleteManyProductSalePriceMutationVariables>;
export type DeleteManyProductSalePriceProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyProductSalePriceMutation, DeleteManyProductSalePriceMutationVariables>
    } & TChildProps;
export function withDeleteManyProductSalePrice<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyProductSalePriceMutation,
  DeleteManyProductSalePriceMutationVariables,
  DeleteManyProductSalePriceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyProductSalePriceMutation, DeleteManyProductSalePriceMutationVariables, DeleteManyProductSalePriceProps<TChildProps, TDataName>>(DeleteManyProductSalePriceDocument, {
      alias: 'deleteManyProductSalePrice',
      ...operationOptions
    });
};

/**
 * __useDeleteManyProductSalePriceMutation__
 *
 * To run a mutation, you first call `useDeleteManyProductSalePriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyProductSalePriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyProductSalePriceMutation, { data, loading, error }] = useDeleteManyProductSalePriceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyProductSalePriceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyProductSalePriceMutation, DeleteManyProductSalePriceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyProductSalePriceMutation, DeleteManyProductSalePriceMutationVariables>(DeleteManyProductSalePriceDocument, options);
      }
export type DeleteManyProductSalePriceMutationHookResult = ReturnType<typeof useDeleteManyProductSalePriceMutation>;
export type DeleteManyProductSalePriceMutationResult = Apollo.MutationResult<DeleteManyProductSalePriceMutation>;
export type DeleteManyProductSalePriceMutationOptions = Apollo.BaseMutationOptions<DeleteManyProductSalePriceMutation, DeleteManyProductSalePriceMutationVariables>;
export type CreateProductSalePriceMutationVariables = Types.Exact<{
  input: Types.CreateProductSalePriceInput;
}>;


export type CreateProductSalePriceMutation = Pick<Types.Mutation, 'createProductSalePrice'>;

export type UpdateProductSalePriceMutationVariables = Types.Exact<{
  input: Types.UpdateProductSalePriceInput;
}>;


export type UpdateProductSalePriceMutation = Pick<Types.Mutation, 'updateProductSalePrice'>;

export type DeleteProductSalePriceMutationVariables = Types.Exact<{
  input: Types.DeleteProductSalePriceInput;
}>;


export type DeleteProductSalePriceMutation = Pick<Types.Mutation, 'deleteProductSalePrice'>;

export type DeleteManyProductSalePriceMutationVariables = Types.Exact<{
  input: Types.DeleteManyProductSalePriceInput;
}>;


export type DeleteManyProductSalePriceMutation = Pick<Types.Mutation, 'deleteManyProductSalePrice'>;
