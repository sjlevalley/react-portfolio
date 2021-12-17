import React from 'react'

function Card(props) {
    return (
        <div className='col-4 d-flex justify-content-center'>
            <div className="item reverse" id={props.id}>
                <div className="img-container">
                    <a target="_blank" href={props.url} rel="noopener noreferrer">
                        <img
                            className="item-image"
                            alt={props.alt}
                            src={props.src} /></a>
                </div>
                <div className="item-text">
                    <a target="_blank" href={props.url} rel="noopener noreferrer"><h3 className="item-title">{props.label}</h3></a>
                    <p className="item-description">{props.description}</p>
                </div>
            </div>
        </div>)

}

export default Card
