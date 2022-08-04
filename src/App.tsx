import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Users from "./features/Users";

import "./App.css";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Users />
        </Layout>
      </QueryClientProvider>
    </>
  );
}

export default App;

// TODO: CI & CD Pipelines
// TODO: craco with ts-import-plugin
// TODO: craco with modifyVars
