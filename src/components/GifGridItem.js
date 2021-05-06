import React from 'react'
import Proptypes from 'prop-types';
import { downloadGif } from '../helpers/getGifs';

export const GifGridItem = ({ title, url }) => {
    
    const handleDownload = () => {
        downloadGif(url, title);
    }   

    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title} id="img-gif"/>
            <button className="btn" title="Descargar GIF" onClick={handleDownload}><i className="fa fa-download btn-download"></i></button>
        </div>
    )
}

GifGridItem.propTypes = {
    title: Proptypes.string.isRequired,
    url: Proptypes.string.isRequired
}