const { shallow } = require("enzyme");
const { getGifs } = require("../../helpers/getGifs");

describe('Pruebas en getGifs Fetch', () => {

    test('Debe obtener 10 elementos', async() => {
        const gifs = await getGifs('Goku');

        expect(gifs.length).toEqual(10);
    });

    test('Debe devolver una lista vacia porque no tiene categoria', async() => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    })
    
    
})
