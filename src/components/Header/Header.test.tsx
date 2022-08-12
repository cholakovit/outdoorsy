import { describe, it } from "vitest";
import HeaderView from "./HeaderView";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//import { userEvent } from '@testing-library/user-event'

describe("testing the header", async () => {
  it("render HeaderView", () => {
    render(<HeaderView />);
    //const button = screen.getByTestId('button')
    //expect(button.textContent).toBe('')
  });
});
