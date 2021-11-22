import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateUnitMeasurementDocument = gql`
    mutation createUnitMeasurement($input: CreateUnitMeasurementInput!) {
  createUnitMeasurement(input: $input)
}
    `;
export type CreateUnitMeasurementMutationFn = Apollo.MutationFunction<CreateUnitMeasurementMutation, CreateUnitMeasurementMutationVariables>;
export type CreateUnitMeasurementProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateUnitMeasurementMutation, CreateUnitMeasurementMutationVariables>
    } & TChildProps;
export function withCreateUnitMeasurement<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateUnitMeasurementMutation,
  CreateUnitMeasurementMutationVariables,
  CreateUnitMeasurementProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateUnitMeasurementMutation, CreateUnitMeasurementMutationVariables, CreateUnitMeasurementProps<TChildProps, TDataName>>(CreateUnitMeasurementDocument, {
      alias: 'createUnitMeasurement',
      ...operationOptions
    });
};

/**
 * __useCreateUnitMeasurementMutation__
 *
 * To run a mutation, you first call `useCreateUnitMeasurementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUnitMeasurementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUnitMeasurementMutation, { data, loading, error }] = useCreateUnitMeasurementMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUnitMeasurementMutation(baseOptions?: Apollo.MutationHookOptions<CreateUnitMeasurementMutation, CreateUnitMeasurementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUnitMeasurementMutation, CreateUnitMeasurementMutationVariables>(CreateUnitMeasurementDocument, options);
      }
export type CreateUnitMeasurementMutationHookResult = ReturnType<typeof useCreateUnitMeasurementMutation>;
export type CreateUnitMeasurementMutationResult = Apollo.MutationResult<CreateUnitMeasurementMutation>;
export type CreateUnitMeasurementMutationOptions = Apollo.BaseMutationOptions<CreateUnitMeasurementMutation, CreateUnitMeasurementMutationVariables>;
export const UpdateUnitMeasurementDocument = gql`
    mutation updateUnitMeasurement($input: UpdateUnitMeasurementInput!) {
  updateUnitMeasurement(input: $input)
}
    `;
export type UpdateUnitMeasurementMutationFn = Apollo.MutationFunction<UpdateUnitMeasurementMutation, UpdateUnitMeasurementMutationVariables>;
export type UpdateUnitMeasurementProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateUnitMeasurementMutation, UpdateUnitMeasurementMutationVariables>
    } & TChildProps;
export function withUpdateUnitMeasurement<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateUnitMeasurementMutation,
  UpdateUnitMeasurementMutationVariables,
  UpdateUnitMeasurementProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateUnitMeasurementMutation, UpdateUnitMeasurementMutationVariables, UpdateUnitMeasurementProps<TChildProps, TDataName>>(UpdateUnitMeasurementDocument, {
      alias: 'updateUnitMeasurement',
      ...operationOptions
    });
};

/**
 * __useUpdateUnitMeasurementMutation__
 *
 * To run a mutation, you first call `useUpdateUnitMeasurementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUnitMeasurementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUnitMeasurementMutation, { data, loading, error }] = useUpdateUnitMeasurementMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUnitMeasurementMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUnitMeasurementMutation, UpdateUnitMeasurementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUnitMeasurementMutation, UpdateUnitMeasurementMutationVariables>(UpdateUnitMeasurementDocument, options);
      }
export type UpdateUnitMeasurementMutationHookResult = ReturnType<typeof useUpdateUnitMeasurementMutation>;
export type UpdateUnitMeasurementMutationResult = Apollo.MutationResult<UpdateUnitMeasurementMutation>;
export type UpdateUnitMeasurementMutationOptions = Apollo.BaseMutationOptions<UpdateUnitMeasurementMutation, UpdateUnitMeasurementMutationVariables>;
export const DeleteUnitMeasurementDocument = gql`
    mutation deleteUnitMeasurement($input: DeleteUnitMeasurementInput!) {
  deleteUnitMeasurement(input: $input)
}
    `;
export type DeleteUnitMeasurementMutationFn = Apollo.MutationFunction<DeleteUnitMeasurementMutation, DeleteUnitMeasurementMutationVariables>;
export type DeleteUnitMeasurementProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteUnitMeasurementMutation, DeleteUnitMeasurementMutationVariables>
    } & TChildProps;
export function withDeleteUnitMeasurement<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteUnitMeasurementMutation,
  DeleteUnitMeasurementMutationVariables,
  DeleteUnitMeasurementProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteUnitMeasurementMutation, DeleteUnitMeasurementMutationVariables, DeleteUnitMeasurementProps<TChildProps, TDataName>>(DeleteUnitMeasurementDocument, {
      alias: 'deleteUnitMeasurement',
      ...operationOptions
    });
};

/**
 * __useDeleteUnitMeasurementMutation__
 *
 * To run a mutation, you first call `useDeleteUnitMeasurementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUnitMeasurementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUnitMeasurementMutation, { data, loading, error }] = useDeleteUnitMeasurementMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUnitMeasurementMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUnitMeasurementMutation, DeleteUnitMeasurementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUnitMeasurementMutation, DeleteUnitMeasurementMutationVariables>(DeleteUnitMeasurementDocument, options);
      }
export type DeleteUnitMeasurementMutationHookResult = ReturnType<typeof useDeleteUnitMeasurementMutation>;
export type DeleteUnitMeasurementMutationResult = Apollo.MutationResult<DeleteUnitMeasurementMutation>;
export type DeleteUnitMeasurementMutationOptions = Apollo.BaseMutationOptions<DeleteUnitMeasurementMutation, DeleteUnitMeasurementMutationVariables>;
export const DeleteManyUnitMeasurementDocument = gql`
    mutation deleteManyUnitMeasurement($input: DeleteManyUnitMeasurementInput!) {
  deleteManyUnitMeasurement(input: $input)
}
    `;
export type DeleteManyUnitMeasurementMutationFn = Apollo.MutationFunction<DeleteManyUnitMeasurementMutation, DeleteManyUnitMeasurementMutationVariables>;
export type DeleteManyUnitMeasurementProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyUnitMeasurementMutation, DeleteManyUnitMeasurementMutationVariables>
    } & TChildProps;
export function withDeleteManyUnitMeasurement<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyUnitMeasurementMutation,
  DeleteManyUnitMeasurementMutationVariables,
  DeleteManyUnitMeasurementProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyUnitMeasurementMutation, DeleteManyUnitMeasurementMutationVariables, DeleteManyUnitMeasurementProps<TChildProps, TDataName>>(DeleteManyUnitMeasurementDocument, {
      alias: 'deleteManyUnitMeasurement',
      ...operationOptions
    });
};

/**
 * __useDeleteManyUnitMeasurementMutation__
 *
 * To run a mutation, you first call `useDeleteManyUnitMeasurementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyUnitMeasurementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyUnitMeasurementMutation, { data, loading, error }] = useDeleteManyUnitMeasurementMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyUnitMeasurementMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyUnitMeasurementMutation, DeleteManyUnitMeasurementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyUnitMeasurementMutation, DeleteManyUnitMeasurementMutationVariables>(DeleteManyUnitMeasurementDocument, options);
      }
export type DeleteManyUnitMeasurementMutationHookResult = ReturnType<typeof useDeleteManyUnitMeasurementMutation>;
export type DeleteManyUnitMeasurementMutationResult = Apollo.MutationResult<DeleteManyUnitMeasurementMutation>;
export type DeleteManyUnitMeasurementMutationOptions = Apollo.BaseMutationOptions<DeleteManyUnitMeasurementMutation, DeleteManyUnitMeasurementMutationVariables>;
export type CreateUnitMeasurementMutationVariables = Types.Exact<{
  input: Types.CreateUnitMeasurementInput;
}>;


export type CreateUnitMeasurementMutation = Pick<Types.Mutation, 'createUnitMeasurement'>;

export type UpdateUnitMeasurementMutationVariables = Types.Exact<{
  input: Types.UpdateUnitMeasurementInput;
}>;


export type UpdateUnitMeasurementMutation = Pick<Types.Mutation, 'updateUnitMeasurement'>;

export type DeleteUnitMeasurementMutationVariables = Types.Exact<{
  input: Types.DeleteUnitMeasurementInput;
}>;


export type DeleteUnitMeasurementMutation = Pick<Types.Mutation, 'deleteUnitMeasurement'>;

export type DeleteManyUnitMeasurementMutationVariables = Types.Exact<{
  input: Types.DeleteManyUnitMeasurementInput;
}>;


export type DeleteManyUnitMeasurementMutation = Pick<Types.Mutation, 'deleteManyUnitMeasurement'>;
