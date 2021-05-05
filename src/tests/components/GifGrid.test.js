const { shallow } = require("enzyme");
const { GifGrid } = require("../../components/GifGrid");
const { useFetchGifs } = require("../../hooks/useFetchGifs");
jest.mock('../../hooks/useFetchGifs'); // mock de llamada

describe('Pruebas para <GifGrid/>', () => {
    
    const category = 'Goku';

    const gifs = [{
        id: 'ABC',
        url: 'http://www.pruebascr.com/hola.jpeg',
        title: 'cualquieru titulo'
    }]

    useFetchGifs.mockReturnValue({
        data: gifs,
        loading: true
    });

    const wrapper = shallow(<GifGrid category={category} />);    
   
    test('Debe mostrar items cuando se cargan las imagenes con useFetchGifs', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    

})
