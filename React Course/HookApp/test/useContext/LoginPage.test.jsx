import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/useContext/context/UserContext"
import { LoginPage } from "../../src/useContext/LoginPage"

describe('Test on LoginPage.jsx', () => { 
    const user = {
        name: 'panza',
        id: 1
    };

    const mockFunction = jest.fn();

    test('should first', () => { 
        render(
        <UserContext.Provider value={{user, setUser: mockFunction}}>
            <LoginPage></LoginPage>
        </UserContext.Provider>
        );

        const xButton = screen.getByRole('button');
        fireEvent.click(xButton);
        expect(mockFunction).toHaveBeenCalled();
     })
 })