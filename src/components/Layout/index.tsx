import React from "react";

import "./style.css";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

function Layout(props: LayoutProps): JSX.Element {
  return <div className="layout">{props.children}</div>;
}

export default Layout;
