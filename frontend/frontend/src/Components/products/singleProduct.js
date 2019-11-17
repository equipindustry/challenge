import React from 'react';

function SingleProduct({ project }) {
    return (
        <li className="single-product" key={project.id}>
            <div className="discount">{project.discount}</div>
            <div className="img"></div>
            <div className="inner">
                <h5>{project.name} N°{project.id}</h5>
                <p>{project.price}</p>
                <button className="btn">VIEW DETAILS</button>

            </div>
        </li>
    )
}
export default SingleProduct;