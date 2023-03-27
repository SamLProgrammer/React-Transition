import { HomePage } from "../../src/useContext/HomePage"
import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/useContext/context/UserContext"

describe('Testing HomePage.jsx', () => {
    
    const user = {
        name: 'panza',
        id: 1
    };

    test('Render homepage', () => {
        render(
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>
        )
        expect(JSON.parse(screen.getByLabelText('pre').innerHTML)).toEqual(user);
    })
})