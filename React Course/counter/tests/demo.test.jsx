import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";
import { fetchingCatFact } from "../src/data/FetchExample";
import { FirstApp } from "../src/FirstApp";

describe('First Test', () => { 
    test('Cat Facts', async() => { 
        render(<CounterApp value={0}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toBe('1');
     })
 })