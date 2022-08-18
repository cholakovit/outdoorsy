import { describe, it } from "vitest";
import ItemView from "./ItemView";
import { render, screen } from "@testing-library/react";

const item = {
  name: "zzz",
  img: "zzz",
  keywords: "zzz",
  description: "zzz",
};

describe("Testing the ItemView component", () => {
  it("Render ItemView", () => {
    render(<ItemView item={item} />);

    const itemImg = screen.getByRole("img");

    const itemName = screen.getByTestId("itemName");
    const itemKeywords = screen.getByTestId("itemKeywords");
    const itemDescription = screen.getByTestId("itemDescription");

    expect(itemKeywords).toHaveTextContent("Keywords: " + item.keywords);
    expect(itemDescription).toHaveTextContent(item.description);
    expect(itemName).toHaveTextContent(item.name);
    expect(itemImg).toHaveAttribute("src", `../img/${item.img}`);
    expect(itemImg).toHaveAttribute("alt", `${item.name}`);
  });
});
