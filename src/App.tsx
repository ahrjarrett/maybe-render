import * as React from "react";
import { Predicate } from "fp-ts/function";
import { Validate } from "./Validate";
import { Table } from "./Table";
import seedData from "./data";

const show = (x: object) => JSON.stringify(x, null, 2);

export const predicate: Predicate<Data> = (data) =>
  Boolean(data.password) &&
  Boolean(data.confirmPassword) &&
  Boolean(data.password === data.confirmPassword) &&
  Boolean(data.password.length < 10) &&
  // Boolean(data.email.match(/\.+@.+/g)) &&
  Boolean(data.age >= 18);

// const fallback = (data: Data) => (
//   <>
//     <h3>invalid data provided:</h3>
//     <pre>{show(data)}</pre>
//   </>
// );
const fallback = (data: Data) => (
  <>
    Kazoops! <pre>{show(data)}</pre>
  </>
);

export interface Data {
  password: string;
  confirmPassword: string;
  email: string;
  age: number;
}

const data = seedData.map((seed) => ({
  data: { ...seed },
  predicate,
  fallback,
}));

interface ValidatedComponentProps {
  data: Data;
  successMessage: string;
}

export const ValidatedComponent: React.FC<ValidatedComponentProps> = ({
  data,
  successMessage = "yay",
}) => (
  <>
    <h1>{successMessage}</h1>
    <pre>{show(data)}</pre>
  </>
);

export const App: React.FC<{}> = () => {
  return (
    <Validate data={data}>
      {({ data, ...props }) => <Table data={data} />}
    </Validate>
  );
};
