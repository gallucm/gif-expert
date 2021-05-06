import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
import PropTypes from 'prop-types';

export const GifGrid = ({ category, limit }) => {

    const {data:images} = useFetchGifs(category, limit);

    return (
        <>
            <br/>
            <br/>
            
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired
}
