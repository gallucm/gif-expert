import React from 'react'
import Proptypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {

    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title} />
        </div>
    )
}

GifGridItem.propTypes = {
    title: Proptypes.string.isRequired,
    url: Proptypes.string.isRequired
}