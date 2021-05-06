import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategory = '', defaultLimit = 5 }) => {

    const [category, setCategory] = useState(defaultCategory);
    const [limit, setLimit] = useState(defaultLimit);

    return (
        <>
            <div>
                {/* <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>   
                </div>   */}
                <h2 className="the-title">Buscador de GIFS</h2>
            </div>
            

            <AddCategory setCategory={setCategory} setLimit={setLimit} />
            <hr />

            <ul>
                {
                    <GifGrid category={category} limit={limit} />
                }
            </ul>     
        </>
    );
}

export default GifExpertApp;