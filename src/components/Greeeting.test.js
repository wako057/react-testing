import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('<Greeting/> Component', () => {
    test('renders Hello World as a test', () => {
        render(<Greeting />);
        const h2Element = screen.getByText('Hello World', { exact: false });
        expect(h2Element).toBeInTheDocument();
    });

    test('Looking for initial text', () => {
        render(<Greeting />);
        const h2Element = screen.getByText('it\'s good to see you!', { exact: true });
        expect(h2Element).toBeInTheDocument();
    });

    test('Looking for changed text', () => {
        render(<Greeting />);

        const button = screen.getByRole('button');
        const clickButton = userEvent.click(button);

        const pElement = screen.getByText('Text Changed!', { exact: true });
        expect(pElement).toBeInTheDocument();
    });

    test('Not rendering initial text after clicking button', () => {
        render(<Greeting />);

        const button = screen.getByRole('button');
        const clickButton = userEvent.click(button);

        const pElement = screen.queryByText('it\'s good to see you!', { exact: true });
        expect(pElement).toBeNull();
    });
});
