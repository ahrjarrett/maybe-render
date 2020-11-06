import * as React from "react";
import { Predicate } from "fp-ts/function";
import * as t from "io-ts";
export type ValidateProps<T extends {}, U extends React.Props<{}>> = {
  data: T;
  predicate: (a: T) => boolean | T;
  fallback: ((data: T) => React.ReactElement) | null;
  children: (data: T, props: U) => React.FC<T & U>;
  props: U;
};

export const Validate = <T, U>({
  data,
  predicate = t.identity,
  fallback,
  children,
  props,
}: ValidateProps<T, U>) =>
  predicate(data)
    ? children(data, props)
    : typeof fallback === "function"
    ? fallback(data)
    : fallback;
