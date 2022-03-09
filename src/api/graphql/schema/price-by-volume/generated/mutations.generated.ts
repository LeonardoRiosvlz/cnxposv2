import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreatePriceByVolumeDocument = gql`
    mutation createPriceByVolume($input: CreatePriceByVolumeInput!) {
  createPriceByVolume(input: $input)
}
    `;
export type CreatePriceByVolumeMutationFn = Apollo.MutationFunction<CreatePriceByVolumeMutation, CreatePriceByVolumeMutationVariables>;
export type CreatePriceByVolumeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreatePriceByVolumeMutation, CreatePriceByVolumeMutationVariables>
    } & TChildProps;
export function withCreatePriceByVolume<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreatePriceByVolumeMutation,
  CreatePriceByVolumeMutationVariables,
  CreatePriceByVolumeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreatePriceByVolumeMutation, CreatePriceByVolumeMutationVariables, CreatePriceByVolumeProps<TChildProps, TDataName>>(CreatePriceByVolumeDocument, {
      alias: 'createPriceByVolume',
      ...operationOptions
    });
};

/**
 * __useCreatePriceByVolumeMutation__
 *
 * To run a mutation, you first call `useCreatePriceByVolumeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePriceByVolumeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPriceByVolumeMutation, { data, loading, error }] = useCreatePriceByVolumeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePriceByVolumeMutation(baseOptions?: Apollo.MutationHookOptions<CreatePriceByVolumeMutation, CreatePriceByVolumeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePriceByVolumeMutation, CreatePriceByVolumeMutationVariables>(CreatePriceByVolumeDocument, options);
      }
export type CreatePriceByVolumeMutationHookResult = ReturnType<typeof useCreatePriceByVolumeMutation>;
export type CreatePriceByVolumeMutationResult = Apollo.MutationResult<CreatePriceByVolumeMutation>;
export type CreatePriceByVolumeMutationOptions = Apollo.BaseMutationOptions<CreatePriceByVolumeMutation, CreatePriceByVolumeMutationVariables>;
export const UpdatePriceByVolumeDocument = gql`
    mutation updatePriceByVolume($input: UpdatePriceByVolumeInput!) {
  updatePriceByVolume(input: $input)
}
    `;
export type UpdatePriceByVolumeMutationFn = Apollo.MutationFunction<UpdatePriceByVolumeMutation, UpdatePriceByVolumeMutationVariables>;
export type UpdatePriceByVolumeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdatePriceByVolumeMutation, UpdatePriceByVolumeMutationVariables>
    } & TChildProps;
export function withUpdatePriceByVolume<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdatePriceByVolumeMutation,
  UpdatePriceByVolumeMutationVariables,
  UpdatePriceByVolumeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdatePriceByVolumeMutation, UpdatePriceByVolumeMutationVariables, UpdatePriceByVolumeProps<TChildProps, TDataName>>(UpdatePriceByVolumeDocument, {
      alias: 'updatePriceByVolume',
      ...operationOptions
    });
};

/**
 * __useUpdatePriceByVolumeMutation__
 *
 * To run a mutation, you first call `useUpdatePriceByVolumeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePriceByVolumeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePriceByVolumeMutation, { data, loading, error }] = useUpdatePriceByVolumeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePriceByVolumeMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePriceByVolumeMutation, UpdatePriceByVolumeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePriceByVolumeMutation, UpdatePriceByVolumeMutationVariables>(UpdatePriceByVolumeDocument, options);
      }
export type UpdatePriceByVolumeMutationHookResult = ReturnType<typeof useUpdatePriceByVolumeMutation>;
export type UpdatePriceByVolumeMutationResult = Apollo.MutationResult<UpdatePriceByVolumeMutation>;
export type UpdatePriceByVolumeMutationOptions = Apollo.BaseMutationOptions<UpdatePriceByVolumeMutation, UpdatePriceByVolumeMutationVariables>;
export const DeletePriceByVolumeDocument = gql`
    mutation deletePriceByVolume($input: DeletePriceByVolumeInput!) {
  deletePriceByVolume(input: $input)
}
    `;
export type DeletePriceByVolumeMutationFn = Apollo.MutationFunction<DeletePriceByVolumeMutation, DeletePriceByVolumeMutationVariables>;
export type DeletePriceByVolumeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeletePriceByVolumeMutation, DeletePriceByVolumeMutationVariables>
    } & TChildProps;
export function withDeletePriceByVolume<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeletePriceByVolumeMutation,
  DeletePriceByVolumeMutationVariables,
  DeletePriceByVolumeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeletePriceByVolumeMutation, DeletePriceByVolumeMutationVariables, DeletePriceByVolumeProps<TChildProps, TDataName>>(DeletePriceByVolumeDocument, {
      alias: 'deletePriceByVolume',
      ...operationOptions
    });
};

/**
 * __useDeletePriceByVolumeMutation__
 *
 * To run a mutation, you first call `useDeletePriceByVolumeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePriceByVolumeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePriceByVolumeMutation, { data, loading, error }] = useDeletePriceByVolumeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePriceByVolumeMutation(baseOptions?: Apollo.MutationHookOptions<DeletePriceByVolumeMutation, DeletePriceByVolumeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePriceByVolumeMutation, DeletePriceByVolumeMutationVariables>(DeletePriceByVolumeDocument, options);
      }
export type DeletePriceByVolumeMutationHookResult = ReturnType<typeof useDeletePriceByVolumeMutation>;
export type DeletePriceByVolumeMutationResult = Apollo.MutationResult<DeletePriceByVolumeMutation>;
export type DeletePriceByVolumeMutationOptions = Apollo.BaseMutationOptions<DeletePriceByVolumeMutation, DeletePriceByVolumeMutationVariables>;
export const DeleteManyPriceByVolumeDocument = gql`
    mutation deleteManyPriceByVolume($input: DeleteManyPriceByVolumeInput!) {
  deleteManyPriceByVolume(input: $input)
}
    `;
export type DeleteManyPriceByVolumeMutationFn = Apollo.MutationFunction<DeleteManyPriceByVolumeMutation, DeleteManyPriceByVolumeMutationVariables>;
export type DeleteManyPriceByVolumeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyPriceByVolumeMutation, DeleteManyPriceByVolumeMutationVariables>
    } & TChildProps;
export function withDeleteManyPriceByVolume<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyPriceByVolumeMutation,
  DeleteManyPriceByVolumeMutationVariables,
  DeleteManyPriceByVolumeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyPriceByVolumeMutation, DeleteManyPriceByVolumeMutationVariables, DeleteManyPriceByVolumeProps<TChildProps, TDataName>>(DeleteManyPriceByVolumeDocument, {
      alias: 'deleteManyPriceByVolume',
      ...operationOptions
    });
};

/**
 * __useDeleteManyPriceByVolumeMutation__
 *
 * To run a mutation, you first call `useDeleteManyPriceByVolumeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyPriceByVolumeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyPriceByVolumeMutation, { data, loading, error }] = useDeleteManyPriceByVolumeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyPriceByVolumeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyPriceByVolumeMutation, DeleteManyPriceByVolumeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyPriceByVolumeMutation, DeleteManyPriceByVolumeMutationVariables>(DeleteManyPriceByVolumeDocument, options);
      }
export type DeleteManyPriceByVolumeMutationHookResult = ReturnType<typeof useDeleteManyPriceByVolumeMutation>;
export type DeleteManyPriceByVolumeMutationResult = Apollo.MutationResult<DeleteManyPriceByVolumeMutation>;
export type DeleteManyPriceByVolumeMutationOptions = Apollo.BaseMutationOptions<DeleteManyPriceByVolumeMutation, DeleteManyPriceByVolumeMutationVariables>;
export type CreatePriceByVolumeMutationVariables = Types.Exact<{
  input: Types.CreatePriceByVolumeInput;
}>;


export type CreatePriceByVolumeMutation = Pick<Types.Mutation, 'createPriceByVolume'>;

export type UpdatePriceByVolumeMutationVariables = Types.Exact<{
  input: Types.UpdatePriceByVolumeInput;
}>;


export type UpdatePriceByVolumeMutation = Pick<Types.Mutation, 'updatePriceByVolume'>;

export type DeletePriceByVolumeMutationVariables = Types.Exact<{
  input: Types.DeletePriceByVolumeInput;
}>;


export type DeletePriceByVolumeMutation = Pick<Types.Mutation, 'deletePriceByVolume'>;

export type DeleteManyPriceByVolumeMutationVariables = Types.Exact<{
  input: Types.DeleteManyPriceByVolumeInput;
}>;


export type DeleteManyPriceByVolumeMutation = Pick<Types.Mutation, 'deleteManyPriceByVolume'>;
