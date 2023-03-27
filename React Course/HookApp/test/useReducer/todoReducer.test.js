import { todoReducer } from "../../src/useReducer/todoReducer";

describe('Test on todoReducer.js', () => {

    const initialState = [{
        id: 1,
        description: 'demo todo',
        done: false,
    }];

    test('should return initial state', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'new todo',
                done: false
            }
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    })
})