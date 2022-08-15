import { describe, it } from "vitest";
import PaginationView from "./PaginationView";
import { render } from "@testing-library/react";

const paginate = () => ({});

describe("Testing the PaginationView component", () => {
  it("Render PaginationView", () => {
    render(<PaginationView itemsPerPage={1} totalItems={1} paginate={paginate} page={1} />);
  });
});
