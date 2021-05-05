import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategory = '' }) => {

    const [category, setCategory] = useState(defaultCategory);

    return (
        <>
            <div>
                {/* <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>   
                </div>   */}
                <h2 className="the-title">Buscador de GIFS</h2>
            </div>
            

            <AddCategory setCategory={setCategory} />
            <hr />

            <ul>
                {
                    <GifGrid category={category} />
                }
            </ul>     
        </>
    );
}

export default GifExpertApp;