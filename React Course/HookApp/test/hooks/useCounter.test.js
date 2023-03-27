import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter";



describe('Test on useConter.jsx', () => {
    test('should return default values', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;
        expect(counter).toBe(0);
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
    });
    test('should return given value', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment, decrement, reset } = result.current;
        expect(counter).toBe(100);
    })

    test('should increment counter value', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;
        act(() => {
            increment(2);
            increment(2);
        })
        expect(result.current.counter).toBe(4);
    })

    test('should increment counter value', () => {
        const { result } = renderHook(() => useCounter(4));
        const { counter, increment, decrement, reset } = result.current;
        act(() => {
            decrement(2);
            decrement(2);
        })
        expect(result.current.counter).toBe(0);
    })

    test('should increment counter value', () => {
        const { result } = renderHook(() => useCounter(9));
        const { counter, increment, decrement, reset } = result.current;
        act(() => {
            decrement(2);
            reset();
        })
        expect(result.current.counter).toBe(9);
    })
});