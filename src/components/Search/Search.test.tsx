import { describe, it } from "vitest";
import SearchView from "./SearchView";

import { fireEvent, render, screen } from "@testing-library/react";

import { store } from "../../store/store";
import { Provider } from "react-redux";

describe("Testing the SearchView Component", () => {
  it("Test search field accepting value", () => {
    render(
      <Provider store={store}>
        <SearchView />
      </Provider>
    );
    const searchField: any = screen
      .getByTestId("searchFieldTest")
      .querySelector("input");

    expect(searchField).toHaveValue("");
    fireEvent.change(searchField, { target: { value: "trailer" } });
    expect(searchField).toHaveValue("trailer");
  });
});
