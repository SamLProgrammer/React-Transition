import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('GifItemTest', () => {
    test('Should Ask for Title and URl', () => {
        const title = 'Broly';
        const url = 'http://broly.com/broly.jpg';
        const {container} = render(<GifItem url={url} title={title} />);
        expect(container).toMatchSnapshot();
    });

    test('Should ahow image with given url and tilte', () => {
        const title = 'Broly';
        const url = 'http://broly.com/broly.jpg';
        render(<GifItem url={url} title={title} />);
        expect(screen.getByRole('img').src).toBe(url);
        expect(screen.getByRole('img').alt).toBe(title);
    });

    test('Component should display title', () => { 
        const title = 'Broly';
        const url = 'http://broly.com/broly.jpg';
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
     })
})