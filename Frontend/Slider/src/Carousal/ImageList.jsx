import React from 'react'

const ImageList = ({ imgURL }) => {
    return (
        <>
            <div className="item">
                <img src={imgURL} width="100%" alt="" />
                <div className="content">
                    <div className="author">
                        <h1>Supajit</h1>
                    </div>
                    <div className="title">
                        Practice Slider
                    </div>
                    <div className="topic">
                        Animal
                    </div>
                    <div className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis officiis fugit! Praesentium, voluptatibus error. Incidunt libero nesciunt id debitis exercitationem? Cupiditate dolor magnam explicabo exercitationem dicta nesciunt et a.
                    </div>
                    <div className="buttons">
                        <button> Explore</button>
                        <button> Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageList