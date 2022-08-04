import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Users from "../index";
import Layout from "../../../components/Layout";

const queryClient = new QueryClient();

jest.mock("../../../apis/users", () => ({
  fetchUsers: () =>
    Promise.resolve([
      {
        id: 1,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
        email: "Sincere@april.biz",
        website: "hildegard.or",
        username: "Bret",
      },
      {
        id: 2,
        name: "Ervin Howell",
        phone: "010-692-6593 x09125",
        email: "Shanna@melissa.tv",
        website: "anastasia.net",
        username: "Antonette",
      },
    ]),
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

  it("Fetch users and display users' grid:", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Users />
        </Layout>
      </QueryClientProvider>
    );

    const items = await screen.findAllByAltText("User Avatar");
    expect(items.length).toBe(2);
  });
});
