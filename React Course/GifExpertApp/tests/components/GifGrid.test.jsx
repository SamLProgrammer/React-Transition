import { GifGrid } from "../../src/components";
import { screen, render } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid Test', () => { 
    test('Should show loading initially', () => { 
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        });
        const category ='Broly';
        render(<GifGrid category={category} limit={5}/>);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Broly'));
     })

     test('should contain images', () => { 
        const gifs = [
            {
                title: 'Broly',
                key: '32h4i24n',
                url: 'img.images.downsized_medium.url',
            },
            {
                title: 'Goku',
                key: '32h4124n',
                url: 'img.images.downsized_medium.url',
            },
        ]
        useFetchGifs.mockReturnValue({
            gifs,
            isLoading: false
        });

        const category ='Broly';

        render(<GifGrid category={category} limit={5}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
      })
 })