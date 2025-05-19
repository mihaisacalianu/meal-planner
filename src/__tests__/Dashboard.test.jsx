import { render,screen} from "@testing-library/react";
import { expect, test } from "vitest";
import Dashboard from "../pages/Dashboard.jsx";


test("Title to be present",()=>{
  // arrange
 render(<Dashboard/>)
  // act
  // assert
  const mainText = screen.getByRole('heading');
  expect(mainText.textContent).toBe('Dashboard Page');
});
