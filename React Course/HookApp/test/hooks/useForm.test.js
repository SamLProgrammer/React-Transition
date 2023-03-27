import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";

describe('Testing useForm.js', () => {

    const initialForm = {
        name: 'samuel',
        email: 'ragedprogrammer@gmail.com'
    }

    test('should return the default values', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onResetPressed: expect.any(Function),
            onInputChange: expect.any(Function),
        });
    });

    test('should change name property', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const {onInputChange} = result.current;
        act(() => {
            onInputChange({ target: {
                name: 'name',
                value: 'Felipe'
            }});
        });

        const currentForm = {...initialForm, name: 'Felipe'}

        expect(result.current).toEqual({
            name: 'Felipe',
            email: initialForm.email,
            formState: currentForm,
            onResetPressed: expect.any(Function),
            onInputChange: expect.any(Function),
        });
    });

    test('should reset properties after changed', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const {onInputChange, onResetPressed} = result.current;
        act(() => {
            onInputChange({ target: {
                name: 'name',
                value: 'Felipe'
            }});
            onResetPressed();
        });

        const currentForm = {...initialForm, name: 'Felipe'}

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onResetPressed: expect.any(Function),
            onInputChange: expect.any(Function),
        });
    });

});
