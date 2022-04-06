import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateProductCurveDocument = gql`
    mutation createProductCurve($input: CreateProductCurveInput!) {
  createProductCurve(input: $input)
}
    `;
export type CreateProductCurveMutationFn = Apollo.MutationFunction<CreateProductCurveMutation, CreateProductCurveMutationVariables>;
export type CreateProductCurveProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateProductCurveMutation, CreateProductCurveMutationVariables>
    } & TChildProps;
export function withCreateProductCurve<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateProductCurveMutation,
  CreateProductCurveMutationVariables,
  CreateProductCurveProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateProductCurveMutation, CreateProductCurveMutationVariables, CreateProductCurveProps<TChildProps, TDataName>>(CreateProductCurveDocument, {
      alias: 'createProductCurve',
      ...operationOptions
    });
};

/**
 * __useCreateProductCurveMutation__
 *
 * To run a mutation, you first call `useCreateProductCurveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductCurveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductCurveMutation, { data, loading, error }] = useCreateProductCurveMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductCurveMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductCurveMutation, CreateProductCurveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductCurveMutation, CreateProductCurveMutationVariables>(CreateProductCurveDocument, options);
      }
export type CreateProductCurveMutationHookResult = ReturnType<typeof useCreateProductCurveMutation>;
export type CreateProductCurveMutationResult = Apollo.MutationResult<CreateProductCurveMutation>;
export type CreateProductCurveMutationOptions = Apollo.BaseMutationOptions<CreateProductCurveMutation, CreateProductCurveMutationVariables>;
export const UpdateProductCurveDocument = gql`
    mutation updateProductCurve($input: UpdateProductCurveInput!) {
  updateProductCurve(input: $input)
}
    `;
export type UpdateProductCurveMutationFn = Apollo.MutationFunction<UpdateProductCurveMutation, UpdateProductCurveMutationVariables>;
export type UpdateProductCurveProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateProductCurveMutation, UpdateProductCurveMutationVariables>
    } & TChildProps;
export function withUpdateProductCurve<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateProductCurveMutation,
  UpdateProductCurveMutationVariables,
  UpdateProductCurveProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateProductCurveMutation, UpdateProductCurveMutationVariables, UpdateProductCurveProps<TChildProps, TDataName>>(UpdateProductCurveDocument, {
      alias: 'updateProductCurve',
      ...operationOptions
    });
};

/**
 * __useUpdateProductCurveMutation__
 *
 * To run a mutation, you first call `useUpdateProductCurveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductCurveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductCurveMutation, { data, loading, error }] = useUpdateProductCurveMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductCurveMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductCurveMutation, UpdateProductCurveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductCurveMutation, UpdateProductCurveMutationVariables>(UpdateProductCurveDocument, options);
      }
export type UpdateProductCurveMutationHookResult = ReturnType<typeof useUpdateProductCurveMutation>;
export type UpdateProductCurveMutationResult = Apollo.MutationResult<UpdateProductCurveMutation>;
export type UpdateProductCurveMutationOptions = Apollo.BaseMutationOptions<UpdateProductCurveMutation, UpdateProductCurveMutationVariables>;
export const DeleteProductCurveDocument = gql`
    mutation deleteProductCurve($input: DeleteProductCurveInput!) {
  deleteProductCurve(input: $input)
}
    `;
export type DeleteProductCurveMutationFn = Apollo.MutationFunction<DeleteProductCurveMutation, DeleteProductCurveMutationVariables>;
export type DeleteProductCurveProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteProductCurveMutation, DeleteProductCurveMutationVariables>
    } & TChildProps;
export function withDeleteProductCurve<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteProductCurveMutation,
  DeleteProductCurveMutationVariables,
  DeleteProductCurveProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteProductCurveMutation, DeleteProductCurveMutationVariables, DeleteProductCurveProps<TChildProps, TDataName>>(DeleteProductCurveDocument, {
      alias: 'deleteProductCurve',
      ...operationOptions
    });
};

/**
 * __useDeleteProductCurveMutation__
 *
 * To run a mutation, you first call `useDeleteProductCurveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductCurveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductCurveMutation, { data, loading, error }] = useDeleteProductCurveMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteProductCurveMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductCurveMutation, DeleteProductCurveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductCurveMutation, DeleteProductCurveMutationVariables>(DeleteProductCurveDocument, options);
      }
export type DeleteProductCurveMutationHookResult = ReturnType<typeof useDeleteProductCurveMutation>;
export type DeleteProductCurveMutationResult = Apollo.MutationResult<DeleteProductCurveMutation>;
export type DeleteProductCurveMutationOptions = Apollo.BaseMutationOptions<DeleteProductCurveMutation, DeleteProductCurveMutationVariables>;
export const DeleteManyProductCurveDocument = gql`
    mutation deleteManyProductCurve($input: DeleteManyProductCurveInput!) {
  deleteManyProductCurve(input: $input)
}
    `;
export type DeleteManyProductCurveMutationFn = Apollo.MutationFunction<DeleteManyProductCurveMutation, DeleteManyProductCurveMutationVariables>;
export type DeleteManyProductCurveProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyProductCurveMutation, DeleteManyProductCurveMutationVariables>
    } & TChildProps;
export function withDeleteManyProductCurve<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyProductCurveMutation,
  DeleteManyProductCurveMutationVariables,
  DeleteManyProductCurveProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyProductCurveMutation, DeleteManyProductCurveMutationVariables, DeleteManyProductCurveProps<TChildProps, TDataName>>(DeleteManyProductCurveDocument, {
      alias: 'deleteManyProductCurve',
      ...operationOptions
    });
};

/**
 * __useDeleteManyProductCurveMutation__
 *
 * To run a mutation, you first call `useDeleteManyProductCurveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyProductCurveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyProductCurveMutation, { data, loading, error }] = useDeleteManyProductCurveMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyProductCurveMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyProductCurveMutation, DeleteManyProductCurveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyProductCurveMutation, DeleteManyProductCurveMutationVariables>(DeleteManyProductCurveDocument, options);
      }
export type DeleteManyProductCurveMutationHookResult = ReturnType<typeof useDeleteManyProductCurveMutation>;
export type DeleteManyProductCurveMutationResult = Apollo.MutationResult<DeleteManyProductCurveMutation>;
export type DeleteManyProductCurveMutationOptions = Apollo.BaseMutationOptions<DeleteManyProductCurveMutation, DeleteManyProductCurveMutationVariables>;
export type CreateProductCurveMutationVariables = Types.Exact<{
  input: Types.CreateProductCurveInput;
}>;


export type CreateProductCurveMutation = Pick<Types.Mutation, 'createProductCurve'>;

export type UpdateProductCurveMutationVariables = Types.Exact<{
  input: Types.UpdateProductCurveInput;
}>;


export type UpdateProductCurveMutation = Pick<Types.Mutation, 'updateProductCurve'>;

export type DeleteProductCurveMutationVariables = Types.Exact<{
  input: Types.DeleteProductCurveInput;
}>;


export type DeleteProductCurveMutation = Pick<Types.Mutation, 'deleteProductCurve'>;

export type DeleteManyProductCurveMutationVariables = Types.Exact<{
  input: Types.DeleteManyProductCurveInput;
}>;


export type DeleteManyProductCurveMutation = Pick<Types.Mutation, 'deleteManyProductCurve'>;
