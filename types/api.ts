import type { paths } from './scheme'

type HTTPMethod = 'get' | 'put' | 'post' | 'delete'

type ExtraMethod<T extends keyof paths> = keyof {
  [K in keyof paths[T] as K extends HTTPMethod ?
    paths[T][K] extends never
      ? never
      : K
    : never]: K
}

type PrettyMerge<T> = {
  [K in keyof T]: T[K];
}

export type PathResponse<T extends keyof paths, M extends ExtraMethod<T>> =
paths[T] extends Record<M, paths[T][HTTPMethod]>
  ? paths[T][M] extends Record<'responses', any>
    ? paths[T][M]['responses'][200]['content']['application/json']['data']
    : never
  : never

type RequestBody<T extends keyof paths, M extends ExtraMethod<T>> =
  paths[T] extends Record<M, paths[T][HTTPMethod]>
    ? paths[T][M] extends { requestBody: { content: { 'application/json': object } } }
      ? paths[T][M]['requestBody']['content']['application/json']
      : object
    : object

type ParameterPath<T extends keyof paths, M extends ExtraMethod<T>> =
  paths[T] extends Record<M, paths[T][HTTPMethod]>
    ? paths[T][M] extends { parameters: any }
      ? paths[T][M]['parameters']['path']
      : object
    : object

type ParameterQuery<T extends keyof paths, M extends ExtraMethod<T>> =
  paths[T] extends Record<M, paths[T][HTTPMethod]>
    ? paths[T][M] extends { parameters: any }
      ? paths[T][M]['parameters']['query']
      : object
    : object

export type PathRequest<T extends keyof paths, M extends ExtraMethod<T>> =
  PrettyMerge<
    RequestBody<T, M>
    & ParameterPath<T, M>
    & ParameterQuery<T, M>
  >
