import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 0) {
            setCategory(inputValue);
            setInputValue('');
        }
    }

    return (
        <>            
            <form onSubmit={handleSubmit}>
                <input
                    type="text"                    
                    className="form-control w-25 m-auto mb-3 mt-3 mw-200 input-value"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Busca algo..."
                />
                <button type="submit" disabled={inputValue === ''} className="btn btn-success btn-search" title="Buscar..." onSubmit={handleSubmit}>Buscar</button>                                           
            </form>
          
            <br/>
        </>
    );
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
