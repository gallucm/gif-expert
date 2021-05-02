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
            setInputValue("");
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Busca algo..."
            />
            &nbsp;
            <button type="submit" class="btn btn-success btn-search" title="Buscar..." onSubmit={handleSubmit}>Buscar</button>            
        </form>
        <br/>
        </>
    );
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
