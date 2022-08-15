import { describe, it } from "vitest";
import ListView from './ListView';
import { render } from "@testing-library/react";


import { store } from "../../store/store"
import { Provider } from "react-redux"

describe("Testing the ListView Component", () => {
  it("Render ListView", () => {
    render(<Provider store={store}><ListView /></Provider>);
  });
});