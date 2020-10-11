// eslint-disable-next-line
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => <div>{children}</div>;

export default Layout;
