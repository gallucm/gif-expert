const { shallow } = require("enzyme");
const { GifGridItem } = require("../../components/GifGridItem");

describe("Pruebas en <GifGridfItem />", () => {
    
    const title = "Titulo";
    const url = "https://localhost:/algo.jpeg";
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    const classDiv = 'animate__bounce';

    test("Se debe cargar el componente <GigGridItem/> correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un <p> con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe( title );
    });

    test('Debe tener un img con la url y el alt con el title', () => {
        const img = wrapper.find('img');
        const src = img.prop('src');
        const alt = img.prop('alt');

        expect(src).toBe(url);
        expect(alt).toBe(title);       
    });

    test('El div padre debe tener la clase "animate__bounce', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes(classDiv)).toBe(true);
    });        
    
});
