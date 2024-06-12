import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Profile</h1>
      <div>{children}</div>
    </div>
  );
};

export default layout;
