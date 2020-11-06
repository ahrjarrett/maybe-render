import * as React from "react";
export const Emoji: React.FC<React.PropsWithChildren<{ label?: string }>> = ({
  label = "Emoji",
  children,
}) => (
  <span role="img" aria-label={label}>
    {children}
  </span>
);
