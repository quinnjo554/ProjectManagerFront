import React, { ReactElement, ReactNode } from "react";

const InputDropdown = ({
  children,
}: {
  children: ReactNode;
}): ReactElement | null => {
  return <div>{children}</div>;
};

export default InputDropdown;
