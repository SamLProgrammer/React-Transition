import { heroes } from "../data/Heroes";

export const getHeroesByPublisher = (publisherFilter) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];
    if(!validPublisher.includes(publisherFilter)) {
        throw new Error(`${publisherFilter} is not a valid Publisher`);
    }

    return heroes.filter(({publisher}) => publisher == publisherFilter);
}