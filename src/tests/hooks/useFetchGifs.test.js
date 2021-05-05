import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en <useFetchGifs/>', () => {
    
    test('Debe retornar el estado inicial', async() => {
        const { result, waitForNextUpdate} = renderHook( () => useFetchGifs('Goku'));
        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });

    test('Debe devolver una lista de img y loading en false', async() => {
        const { result,  waitForNextUpdate } = renderHook( () => useFetchGifs('Goku'));
        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });    
    
})