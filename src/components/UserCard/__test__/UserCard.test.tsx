import { render, screen } from "@testing-library/react";
import UserCard from "../index";

describe("UserCard", () => {
  it("UserCard should be rendered with required information", () => {
    const user = {
      name: "Leanne Graham",
      phone: "1-770-736-8031 x56442",
      email: "Sincere@april.biz",
      website: "hildegard.or",
      username: "Bret",
    };

    render(<UserCard {...user} />);

    const nameEl = screen.getByText(user.name);
    const phoneEl = screen.getByText(user.phone);
    const emailEl = screen.getByText(user.email);
    expect(nameEl).toBeVisible();
    expect(phoneEl).toBeVisible();
    expect(emailEl).toBeVisible();

    const websiteEl = screen.getByText("http://" + user.website);
    expect(websiteEl).toBeVisible();

    // img tests
    const coverImg = screen.getByAltText("User Avatar");
    expect(coverImg).toBeInTheDocument();
    expect(coverImg).toBeVisible();
    expect(coverImg).toHaveAttribute(
      "src",
      `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`
    );
  });
});
