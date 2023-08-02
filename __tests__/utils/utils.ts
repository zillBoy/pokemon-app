// React Dependencies
import { ReactElement } from "react";

// External Dependencies
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export const setup = (
  jsx: ReactElement<any, string | React.JSXElementConstructor<any>>,
  props: object = {}
) => {
  return {
    user: userEvent.setup(),
    // Import `render` from the framework library of your choice.
    // See https://testing-library.com/docs/dom-testing-library/install#wrappers
    ...render(jsx, props),
  };
};
