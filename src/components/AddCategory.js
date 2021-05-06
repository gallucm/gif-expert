import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategory, setLimit }) => {

    const defaulLimitValue = 5;

    const [inputValue, setInputValue] = useState("");
    const [inputLimit, setInputLimit] = useState(defaulLimitValue);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleLimitChange = (e) => {
        setInputLimit(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 0 && inputLimit > 0) {
            setCategory(inputValue);
            setLimit(inputLimit);

            setInputLimit(defaulLimitValue);
            setInputValue('');
        }
    }

    return (
        <>            
            <form onSubmit={handleSubmit} >
                <input
                    type="text"                    
                    className="form-control w-25 m-auto mb-3 mt-3 mw-200 input-value"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Busca algo..."
                    />
                <input 
                    type="number"
                    max={50}
                    className="form-control m-auto mb-3 mt-3 mw-200 limit-value"
                    value={inputLimit}
                    onChange={handleLimitChange}
                    placeholder="Cantidad..."
                />

                <button type="submit" disabled={inputValue === '' || (inputLimit <= 0 || inputLimit === undefined)} className="btn btn-success btn-search" title="Buscar..." onSubmit={handleSubmit}>Buscar</button>                                           
            </form>
          
            <br/>
        </>
    );
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
