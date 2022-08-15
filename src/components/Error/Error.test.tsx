import { describe, it } from "vitest";
import Error from "./Error";

import { render } from "@testing-library/react";

describe("Testing the Error Component", () => {
    it("render Error", () => {
      render(<Error error="Network Problem" />);
    });
  });