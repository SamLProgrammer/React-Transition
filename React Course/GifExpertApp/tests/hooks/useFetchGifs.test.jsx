import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { render, renderHook, waitFor } from "@testing-library/react";

describe('useFetchGifs Hook Test', () => { 
    test('testing initial state', () => { 
        const {result} = renderHook(() => useFetchGifs('Broly', 2));
        const {gifs, isLoading} = result.current;
        expect(gifs).toEqual([]);
        expect(isLoading).toBeTruthy();
     })

    test('Should return a list of images and isLoading false', async() => { 
        const {result} = renderHook(() => useFetchGifs('Broly', 2));
        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        )
        const {gifs, isLoading} = result.current;
        console.log(gifs);
        expect(gifs.length).toBe(2);
        expect(isLoading).toBeFalsy();
     })
 })
