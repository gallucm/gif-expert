const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");

describe('Pruebas en <AddCategory/>', () => {

    const setCategory = jest.fn();
    let wrapper = shallow(<AddCategory setCategory={setCategory} /> );
    const value = 'Hola Mundo';
    
    beforeEach( () =>{
        jest.clearAllMocks(); // Limpiar mocks o simulaciones anteriores.
        wrapper = shallow(<AddCategory setCategory={setCategory} /> );
    })

    test('Debe mostrarse el componente correctamente', () => {
       expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar los valores del input text', () => {
        const input = wrapper.find('input');        
        input.simulate('change', { target: {value} });

        const p = wrapper.find('p').text().trim();

        expect(p).toBe(value);
    });

    test('No debe ejecutar la información con onSubmit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});        

        expect(setCategory).not.toHaveBeenCalled();
    });

    test('Debe llamar "SetCategory" y limpiar el inputText', () => {
        const wrapper = shallow(<AddCategory setCategory={setCategory} /> );

        wrapper.find('input').simulate('change', {target: {value} });

        let p = wrapper.find('p').text().trim();

        expect(p).toBe(value);

        wrapper.find('form').simulate('submit', {preventDefault(){} });

        expect(setCategory).toHaveBeenCalled();

        const empty = '';

        wrapper.find('input').simulate('change', {target: {empty} });

        p = wrapper.find('p').text().trim();

        expect(p).toBe(empty);        
    });
    
    
})
