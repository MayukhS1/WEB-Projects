// import {timesByTwo} from "./func1";
import Header from "./func1";
import {render} from "@testing-library/react";
import React from "react";
//using jest we're testing value

// test("Multiply by 2",()=>{
//     expect(timesByTwo(4)).toBe(8);
// });

test("renders header h1",()=>{
    const {getByText} = render(<Header />);
    const h1 = getByText(/Hello World/);
    expect(h1).toHaveTextContent("Hello World");
});