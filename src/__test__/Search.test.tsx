import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Search from "../components/Search";

describe("Search", () => {
  it("render search component", () => {
    render(
      <Provider store={store}>
        <Search
          setResetSearch={(value: any): void => {
            throw new Error("Function not implemented.");
          }}
        />
      </Provider>
    );
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });
});
