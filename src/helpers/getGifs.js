const API_KEY = ''; // SETEAR LA API KEY

export const getGifs = async (category, limit=10) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${API_KEY}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return { id: img.id, title: img.title, url: img.images?.downsized_medium.url }
    })

    return gifs
}

export const downloadGif = async (url, title) => {
    const image = await fetch(url);
    const imageB = await image.blob();
    const imageURL = URL.createObjectURL(imageB); 
    const link = document.createElement('a');

    link.href = imageURL;
    link.download = splitTitle(title);
    document.body.appendChild(link);
    
    link.click();
    document.body.removeChild(link);
}

const splitTitle = (title) => {
    const fullTitle = title.split(' ');    
    return fullTitle[0];
};