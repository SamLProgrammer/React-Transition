import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/useContext/MainApp";

describe('Test MainApp', () => {
    test('should show home page', () => {
        render(<MemoryRouter><MainApp/></MemoryRouter>);
        screen.debug();
        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('should show login page', () => {
        render(<MemoryRouter initialEntries={['/login']}>
            <MainApp/>
            </MemoryRouter>);
        screen.debug();
        expect(screen.getByText('LoginPage')).toBeTruthy();
    });
});
