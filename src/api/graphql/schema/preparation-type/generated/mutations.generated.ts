import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreatePreparationTypeDocument = gql`
    mutation createPreparationType($input: CreatePreparationTypeInput!) {
  createPreparationType(input: $input)
}
    `;
export type CreatePreparationTypeMutationFn = Apollo.MutationFunction<CreatePreparationTypeMutation, CreatePreparationTypeMutationVariables>;
export type CreatePreparationTypeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreatePreparationTypeMutation, CreatePreparationTypeMutationVariables>
    } & TChildProps;
export function withCreatePreparationType<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreatePreparationTypeMutation,
  CreatePreparationTypeMutationVariables,
  CreatePreparationTypeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreatePreparationTypeMutation, CreatePreparationTypeMutationVariables, CreatePreparationTypeProps<TChildProps, TDataName>>(CreatePreparationTypeDocument, {
      alias: 'createPreparationType',
      ...operationOptions
    });
};

/**
 * __useCreatePreparationTypeMutation__
 *
 * To run a mutation, you first call `useCreatePreparationTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePreparationTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPreparationTypeMutation, { data, loading, error }] = useCreatePreparationTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePreparationTypeMutation(baseOptions?: Apollo.MutationHookOptions<CreatePreparationTypeMutation, CreatePreparationTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePreparationTypeMutation, CreatePreparationTypeMutationVariables>(CreatePreparationTypeDocument, options);
      }
export type CreatePreparationTypeMutationHookResult = ReturnType<typeof useCreatePreparationTypeMutation>;
export type CreatePreparationTypeMutationResult = Apollo.MutationResult<CreatePreparationTypeMutation>;
export type CreatePreparationTypeMutationOptions = Apollo.BaseMutationOptions<CreatePreparationTypeMutation, CreatePreparationTypeMutationVariables>;
export const UpdatePreparationTypeDocument = gql`
    mutation updatePreparationType($input: UpdatePreparationTypeInput!) {
  updatePreparationType(input: $input)
}
    `;
export type UpdatePreparationTypeMutationFn = Apollo.MutationFunction<UpdatePreparationTypeMutation, UpdatePreparationTypeMutationVariables>;
export type UpdatePreparationTypeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdatePreparationTypeMutation, UpdatePreparationTypeMutationVariables>
    } & TChildProps;
export function withUpdatePreparationType<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdatePreparationTypeMutation,
  UpdatePreparationTypeMutationVariables,
  UpdatePreparationTypeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdatePreparationTypeMutation, UpdatePreparationTypeMutationVariables, UpdatePreparationTypeProps<TChildProps, TDataName>>(UpdatePreparationTypeDocument, {
      alias: 'updatePreparationType',
      ...operationOptions
    });
};

/**
 * __useUpdatePreparationTypeMutation__
 *
 * To run a mutation, you first call `useUpdatePreparationTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePreparationTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePreparationTypeMutation, { data, loading, error }] = useUpdatePreparationTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePreparationTypeMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePreparationTypeMutation, UpdatePreparationTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePreparationTypeMutation, UpdatePreparationTypeMutationVariables>(UpdatePreparationTypeDocument, options);
      }
export type UpdatePreparationTypeMutationHookResult = ReturnType<typeof useUpdatePreparationTypeMutation>;
export type UpdatePreparationTypeMutationResult = Apollo.MutationResult<UpdatePreparationTypeMutation>;
export type UpdatePreparationTypeMutationOptions = Apollo.BaseMutationOptions<UpdatePreparationTypeMutation, UpdatePreparationTypeMutationVariables>;
export const DeletePreparationTypeDocument = gql`
    mutation deletePreparationType($input: DeletePreparationTypeInput!) {
  deletePreparationType(input: $input)
}
    `;
export type DeletePreparationTypeMutationFn = Apollo.MutationFunction<DeletePreparationTypeMutation, DeletePreparationTypeMutationVariables>;
export type DeletePreparationTypeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeletePreparationTypeMutation, DeletePreparationTypeMutationVariables>
    } & TChildProps;
export function withDeletePreparationType<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeletePreparationTypeMutation,
  DeletePreparationTypeMutationVariables,
  DeletePreparationTypeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeletePreparationTypeMutation, DeletePreparationTypeMutationVariables, DeletePreparationTypeProps<TChildProps, TDataName>>(DeletePreparationTypeDocument, {
      alias: 'deletePreparationType',
      ...operationOptions
    });
};

/**
 * __useDeletePreparationTypeMutation__
 *
 * To run a mutation, you first call `useDeletePreparationTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePreparationTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePreparationTypeMutation, { data, loading, error }] = useDeletePreparationTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePreparationTypeMutation(baseOptions?: Apollo.MutationHookOptions<DeletePreparationTypeMutation, DeletePreparationTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePreparationTypeMutation, DeletePreparationTypeMutationVariables>(DeletePreparationTypeDocument, options);
      }
export type DeletePreparationTypeMutationHookResult = ReturnType<typeof useDeletePreparationTypeMutation>;
export type DeletePreparationTypeMutationResult = Apollo.MutationResult<DeletePreparationTypeMutation>;
export type DeletePreparationTypeMutationOptions = Apollo.BaseMutationOptions<DeletePreparationTypeMutation, DeletePreparationTypeMutationVariables>;
export const DeleteManyPreparationTypeDocument = gql`
    mutation deleteManyPreparationType($input: DeleteManyPreparationTypeInput!) {
  deleteManyPreparationType(input: $input)
}
    `;
export type DeleteManyPreparationTypeMutationFn = Apollo.MutationFunction<DeleteManyPreparationTypeMutation, DeleteManyPreparationTypeMutationVariables>;
export type DeleteManyPreparationTypeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyPreparationTypeMutation, DeleteManyPreparationTypeMutationVariables>
    } & TChildProps;
export function withDeleteManyPreparationType<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyPreparationTypeMutation,
  DeleteManyPreparationTypeMutationVariables,
  DeleteManyPreparationTypeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyPreparationTypeMutation, DeleteManyPreparationTypeMutationVariables, DeleteManyPreparationTypeProps<TChildProps, TDataName>>(DeleteManyPreparationTypeDocument, {
      alias: 'deleteManyPreparationType',
      ...operationOptions
    });
};

/**
 * __useDeleteManyPreparationTypeMutation__
 *
 * To run a mutation, you first call `useDeleteManyPreparationTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyPreparationTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyPreparationTypeMutation, { data, loading, error }] = useDeleteManyPreparationTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyPreparationTypeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyPreparationTypeMutation, DeleteManyPreparationTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyPreparationTypeMutation, DeleteManyPreparationTypeMutationVariables>(DeleteManyPreparationTypeDocument, options);
      }
export type DeleteManyPreparationTypeMutationHookResult = ReturnType<typeof useDeleteManyPreparationTypeMutation>;
export type DeleteManyPreparationTypeMutationResult = Apollo.MutationResult<DeleteManyPreparationTypeMutation>;
export type DeleteManyPreparationTypeMutationOptions = Apollo.BaseMutationOptions<DeleteManyPreparationTypeMutation, DeleteManyPreparationTypeMutationVariables>;
export type CreatePreparationTypeMutationVariables = Types.Exact<{
  input: Types.CreatePreparationTypeInput;
}>;


export type CreatePreparationTypeMutation = Pick<Types.Mutation, 'createPreparationType'>;

export type UpdatePreparationTypeMutationVariables = Types.Exact<{
  input: Types.UpdatePreparationTypeInput;
}>;


export type UpdatePreparationTypeMutation = Pick<Types.Mutation, 'updatePreparationType'>;

export type DeletePreparationTypeMutationVariables = Types.Exact<{
  input: Types.DeletePreparationTypeInput;
}>;


export type DeletePreparationTypeMutation = Pick<Types.Mutation, 'deletePreparationType'>;

export type DeleteManyPreparationTypeMutationVariables = Types.Exact<{
  input: Types.DeleteManyPreparationTypeInput;
}>;


export type DeleteManyPreparationTypeMutation = Pick<Types.Mutation, 'deleteManyPreparationType'>;
