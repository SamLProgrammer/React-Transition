export const fetchGifs = async (category, limit) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=LOf0Tvq0G5bJgcqQkuaHhD47pMZgrhpD&q=${category}&limit=${limit}&offset=0&rating=g&lang=en`
    const response = await fetch(url);
    const {data} = await response.json();
    const images = data.map((img) => ({
        title: img.title,
        key: img.id,
        url: img.images.downsized_medium.url,
    }));
    return images;
}