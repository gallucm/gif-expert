export const getGifs = async (category, limit=10) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=5fcjMhpIDMMGEGMPXB37bREwCBtiJREF`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return { id: img.id, title: img.title, url: img.images?.downsized_medium.url }
    })

    return gifs
}

// TODO agregar cantidad de elementos a buscar en el metodo