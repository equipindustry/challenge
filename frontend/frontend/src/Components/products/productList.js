import React from 'react';
import SingleProduct from './singleProduct'


function productList({ projects }) {
    return (
        <>
            <ul className="container-product">
                {projects && projects.map(project => {
                    return (
                        <SingleProduct project={project} key={project.id} />
                    )
                })
                }

            </ul>
        </>
    )
}
export default productList;