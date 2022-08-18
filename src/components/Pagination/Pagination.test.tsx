import { describe, it } from "vitest";
import PaginationView from "./PaginationView";
import { render, screen } from "@testing-library/react";

const paginate = () => ({});

describe("Testing the PaginationView component", () => {
  it("Render PaginationView", () => {
    render(<PaginationView itemsPerPage={1} totalItems={1} paginate={paginate} page={1} />);

    //const searchField: any = screen.getByTestId("searchFieldTest").querySelector("input");

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3)

  });
});
