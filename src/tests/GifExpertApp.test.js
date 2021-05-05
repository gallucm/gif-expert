const { shallow } = require("enzyme");
const { default: GifExpertApp } = require("../GifExpertApp");

describe('Pruebas en <GifExpertApp>', () => {
    
    const wrapper = shallow(<GifExpertApp/>);   

    test('Debe poder cargarse la snapshot correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar una categoria', () => {
        const category = 'Dragon Ball';

        let wrapper = shallow(<GifExpertApp defaultCategory={category}/>);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('GifGrid').length).toEqual(1);
    })
    
    
})
