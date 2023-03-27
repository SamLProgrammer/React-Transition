import { string } from 'prop-types';
import {fetchGifs} from '../../src/helpers/HelperFunctions';
// import { screen, render } from '@testing-library/react';

describe('Helper Functions Test', () => {
    test('should return a list of gifs', async() => {
        const gifs = await fetchGifs('One Punch', 10);
        expect(gifs.length).toBeGreaterThan(9);
        expect(gifs[0]).toEqual({
            title: expect.any(String),
            url: expect.any(String),
            key: expect.any(String),
        })
    })
})