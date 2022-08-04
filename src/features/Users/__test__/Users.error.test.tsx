import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Users from "../index";
import Layout from "../../../components/Layout";

const queryClient = new QueryClient();

jest.mock("../../../apis/users", () => ({
  fetchUsers: () => {
    throw { message: "Something went wrong!" };
  },
}));

describe("UserList Success:", () => {
  beforeAll(() => {
    global.matchMedia =
      global.matchMedia ||
      function () {
        return {
          addListener: jest.fn(),
          removeListener: jest.fn(),
        };
      };
  });

  it("Display error alert on fetch user error:", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Users />
        </Layout>
      </QueryClientProvider>
    );

    const errorAlert = await screen.findByText("Something went wrong!");
    expect(errorAlert).toBeVisible();
  });
});
