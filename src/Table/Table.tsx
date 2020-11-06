import * as React from "react";
import { renderTable } from "./renderTable";
import { Data } from "../App";

type Props = {
  data: ReadonlyArray<Data>;
};

export function Table(props: Props) {
  return (
    <>
      <h2>State Data</h2>
      <table>
        {renderTable<Data>(
          [
            [<th>Email</th>, (row) => <td>{row.email}</td>],
            [<th>Password</th>, (row) => <td>{row.password}</td>],
            [<th>PW Confirm</th>, (row) => <td>{row.confirmPassword}</td>],
            [
              <th>Age</th>,
              (row) => {
                return <td>{String(row.age)}</td>;
              },
            ],
          ],
          props.data
        )}
      </table>
    </>
  );
}
