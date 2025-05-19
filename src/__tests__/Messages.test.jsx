import { render,screen,cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Messages from "../pages/Messages.jsx";


afterEach(cleanup);

test("main text to be present",()=>{
  // arrange
render(<Messages />);
// Act
// Assert
const directions = screen.getByRole('heading');
expect(directions.textContent).toBe("Messages page")
})
