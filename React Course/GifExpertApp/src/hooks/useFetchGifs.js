import { useEffect, useState } from "react";
import { fetchGifs } from "../helpers/HelperFunctions";


export const useFetchGifs = (category, limit) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGifs = async () => {
        const gifsList = await fetchGifs(category, limit);
        setGifs((g) => gifsList);
        setIsLoading(false);
    }

    useEffect(() => {
        getGifs();
    }, []);

    return {
        gifs,
        isLoading
    }
}
