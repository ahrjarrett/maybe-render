import * as React from "react";

export const renderTable = <A extends unknown>(
  cols: ReadonlyArray<[React.ReactElement, (a: A) => React.ReactElement]>,
  rows: ReadonlyArray<A>
): React.ReactElement => (
  <>
    <thead>
      <tr>
        {cols.map(([heading, _], i) =>
          React.cloneElement(heading, { key: `heading-${i}` })
        )}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, i) => (
        <tr key={`row-${i}`}>
          {cols.map(([_, renderRow], j) =>
            React.cloneElement(renderRow(row), { key: `cell-${j}-${i}` })
          )}
        </tr>
      ))}
    </tbody>
  </>
);
