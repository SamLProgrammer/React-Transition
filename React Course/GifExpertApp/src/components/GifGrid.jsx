import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import PropTypes from 'prop-types'

export const GifGrid = ({ category, limit }) => {

    const {gifs, isLoading} = useFetchGifs(category, limit);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<p>Loading...</p>)
            }
            <div className="card-grid">
                {
                    gifs.map(( img ) => <GifItem key={img.key} {...img} />)
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
}
