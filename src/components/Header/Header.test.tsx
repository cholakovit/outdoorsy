import { describe, it } from "vitest";
import HeaderView from "./HeaderView";

import { render } from "@testing-library/react";

describe("Testing the HeaderView Component", () => {
  it("Render HeaderView", () => {
    render(<HeaderView />);
  });
});
