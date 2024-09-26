import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test('renders Hello World as a test', () => {
    render(<Greeting />);
    const h2Element = screen.getByText('Hello World', { exact: false });
    expect(h2Element).toBeInTheDocument();
});