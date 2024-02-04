import React from 'react'

const ThumnailList = ({ imgURL }) => {
    return (

        <div className="item">
            <img src={imgURL} alt="Thumbnail" />
            <div className="content">
                <div className="title">
                    Name Slider
                </div>
                <div className="description">
                    Description....
                </div>

            </div>
        </div>

    )
}

export default ThumnailList