import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Search from "../components/Search";

// describe("Search", () => {
//   it("render search component", () => {
//     render(
//       <Provider store={store}>
//         <Search />
//       </Provider>
//     );
//     expect(screen.getByDisplayValue("")).toBeInTheDocument();
//     expect(screen.getByRole("textbox")).toBeInTheDocument();
//     expect(screen.getByRole("textbox")).not.toBeRequired();
//     expect(screen.getByRole("textbox")).toBeEmptyDOMElement();
//     expect(screen.getByPlaceholderText("Поиск")).toBeInTheDocument();

//     fireEvent.change(screen.getByRole("textbox"), {
//       target: { value: "Mac" },
//     });
//   });
// });


