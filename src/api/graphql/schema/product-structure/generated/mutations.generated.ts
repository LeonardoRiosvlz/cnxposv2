import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateProductStructureDocument = gql`
    mutation createProductStructure($input: CreateProductStructureInput!) {
  createProductStructure(input: $input)
}
    `;
export type CreateProductStructureMutationFn = Apollo.MutationFunction<CreateProductStructureMutation, CreateProductStructureMutationVariables>;
export type CreateProductStructureProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateProductStructureMutation, CreateProductStructureMutationVariables>
    } & TChildProps;
export function withCreateProductStructure<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateProductStructureMutation,
  CreateProductStructureMutationVariables,
  CreateProductStructureProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateProductStructureMutation, CreateProductStructureMutationVariables, CreateProductStructureProps<TChildProps, TDataName>>(CreateProductStructureDocument, {
      alias: 'createProductStructure',
      ...operationOptions
    });
};

/**
 * __useCreateProductStructureMutation__
 *
 * To run a mutation, you first call `useCreateProductStructureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductStructureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductStructureMutation, { data, loading, error }] = useCreateProductStructureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductStructureMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductStructureMutation, CreateProductStructureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductStructureMutation, CreateProductStructureMutationVariables>(CreateProductStructureDocument, options);
      }
export type CreateProductStructureMutationHookResult = ReturnType<typeof useCreateProductStructureMutation>;
export type CreateProductStructureMutationResult = Apollo.MutationResult<CreateProductStructureMutation>;
export type CreateProductStructureMutationOptions = Apollo.BaseMutationOptions<CreateProductStructureMutation, CreateProductStructureMutationVariables>;
export const UpdateProductStructureDocument = gql`
    mutation updateProductStructure($input: UpdateProductStructureInput!) {
  updateProductStructure(input: $input)
}
    `;
export type UpdateProductStructureMutationFn = Apollo.MutationFunction<UpdateProductStructureMutation, UpdateProductStructureMutationVariables>;
export type UpdateProductStructureProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateProductStructureMutation, UpdateProductStructureMutationVariables>
    } & TChildProps;
export function withUpdateProductStructure<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateProductStructureMutation,
  UpdateProductStructureMutationVariables,
  UpdateProductStructureProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateProductStructureMutation, UpdateProductStructureMutationVariables, UpdateProductStructureProps<TChildProps, TDataName>>(UpdateProductStructureDocument, {
      alias: 'updateProductStructure',
      ...operationOptions
    });
};

/**
 * __useUpdateProductStructureMutation__
 *
 * To run a mutation, you first call `useUpdateProductStructureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductStructureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductStructureMutation, { data, loading, error }] = useUpdateProductStructureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductStructureMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductStructureMutation, UpdateProductStructureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductStructureMutation, UpdateProductStructureMutationVariables>(UpdateProductStructureDocument, options);
      }
export type UpdateProductStructureMutationHookResult = ReturnType<typeof useUpdateProductStructureMutation>;
export type UpdateProductStructureMutationResult = Apollo.MutationResult<UpdateProductStructureMutation>;
export type UpdateProductStructureMutationOptions = Apollo.BaseMutationOptions<UpdateProductStructureMutation, UpdateProductStructureMutationVariables>;
export const DeleteProductStructureDocument = gql`
    mutation deleteProductStructure($input: DeleteProductStructureInput!) {
  deleteProductStructure(input: $input)
}
    `;
export type DeleteProductStructureMutationFn = Apollo.MutationFunction<DeleteProductStructureMutation, DeleteProductStructureMutationVariables>;
export type DeleteProductStructureProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteProductStructureMutation, DeleteProductStructureMutationVariables>
    } & TChildProps;
export function withDeleteProductStructure<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteProductStructureMutation,
  DeleteProductStructureMutationVariables,
  DeleteProductStructureProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteProductStructureMutation, DeleteProductStructureMutationVariables, DeleteProductStructureProps<TChildProps, TDataName>>(DeleteProductStructureDocument, {
      alias: 'deleteProductStructure',
      ...operationOptions
    });
};

/**
 * __useDeleteProductStructureMutation__
 *
 * To run a mutation, you first call `useDeleteProductStructureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductStructureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductStructureMutation, { data, loading, error }] = useDeleteProductStructureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteProductStructureMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductStructureMutation, DeleteProductStructureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductStructureMutation, DeleteProductStructureMutationVariables>(DeleteProductStructureDocument, options);
      }
export type DeleteProductStructureMutationHookResult = ReturnType<typeof useDeleteProductStructureMutation>;
export type DeleteProductStructureMutationResult = Apollo.MutationResult<DeleteProductStructureMutation>;
export type DeleteProductStructureMutationOptions = Apollo.BaseMutationOptions<DeleteProductStructureMutation, DeleteProductStructureMutationVariables>;
export const DeleteManyProductStructureDocument = gql`
    mutation deleteManyProductStructure($input: DeleteManyProductStructureInput!) {
  deleteManyProductStructure(input: $input)
}
    `;
export type DeleteManyProductStructureMutationFn = Apollo.MutationFunction<DeleteManyProductStructureMutation, DeleteManyProductStructureMutationVariables>;
export type DeleteManyProductStructureProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyProductStructureMutation, DeleteManyProductStructureMutationVariables>
    } & TChildProps;
export function withDeleteManyProductStructure<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyProductStructureMutation,
  DeleteManyProductStructureMutationVariables,
  DeleteManyProductStructureProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyProductStructureMutation, DeleteManyProductStructureMutationVariables, DeleteManyProductStructureProps<TChildProps, TDataName>>(DeleteManyProductStructureDocument, {
      alias: 'deleteManyProductStructure',
      ...operationOptions
    });
};

/**
 * __useDeleteManyProductStructureMutation__
 *
 * To run a mutation, you first call `useDeleteManyProductStructureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyProductStructureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyProductStructureMutation, { data, loading, error }] = useDeleteManyProductStructureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyProductStructureMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyProductStructureMutation, DeleteManyProductStructureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyProductStructureMutation, DeleteManyProductStructureMutationVariables>(DeleteManyProductStructureDocument, options);
      }
export type DeleteManyProductStructureMutationHookResult = ReturnType<typeof useDeleteManyProductStructureMutation>;
export type DeleteManyProductStructureMutationResult = Apollo.MutationResult<DeleteManyProductStructureMutation>;
export type DeleteManyProductStructureMutationOptions = Apollo.BaseMutationOptions<DeleteManyProductStructureMutation, DeleteManyProductStructureMutationVariables>;
export type CreateProductStructureMutationVariables = Types.Exact<{
  input: Types.CreateProductStructureInput;
}>;


export type CreateProductStructureMutation = Pick<Types.Mutation, 'createProductStructure'>;

export type UpdateProductStructureMutationVariables = Types.Exact<{
  input: Types.UpdateProductStructureInput;
}>;


export type UpdateProductStructureMutation = Pick<Types.Mutation, 'updateProductStructure'>;

export type DeleteProductStructureMutationVariables = Types.Exact<{
  input: Types.DeleteProductStructureInput;
}>;


export type DeleteProductStructureMutation = Pick<Types.Mutation, 'deleteProductStructure'>;

export type DeleteManyProductStructureMutationVariables = Types.Exact<{
  input: Types.DeleteManyProductStructureInput;
}>;


export type DeleteManyProductStructureMutation = Pick<Types.Mutation, 'deleteManyProductStructure'>;
