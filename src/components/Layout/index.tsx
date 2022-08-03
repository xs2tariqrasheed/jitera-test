import React from "react";

import { Layout as LayoutAntd } from "antd";

import "./style.css";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const { Content } = LayoutAntd;

function Layout(props: LayoutProps): JSX.Element {
  return (
    <LayoutAntd>
      <Content className="content">{props.children}</Content>
    </LayoutAntd>
  );
}

export default Layout;
