import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');

    return (
        <>
            <h2>Buscador de GIFS</h2>
            <AddCategory setCategory={setCategory} />
            <hr />

            <ul>
                {
                    <GifGrid category={category}/>
                }
            </ul>
        </>
    );
}

export default GifExpertApp;