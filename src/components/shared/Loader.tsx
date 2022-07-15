import React, { useState } from 'react'

type Props = {}

const Loader: React.FC<Props> = (props) => {
    return (
        <div className="container loader">
            <div className="row">
                <div className="d-flex justify-content-center mt-5 pt-5">
                    <h4>Loading Pokemons &nbsp;
                        <img src="https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Pic-Background.png"
                            width="18" height="18" />&nbsp;
                        <img src="https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Pic-Background.png"
                            width="18" height="18" />&nbsp;
                        <img src="https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Pic-Background.png"
                            width="18" height="18" />
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Loader