// standard boilerplate code react creating component

// import React from 'react';

// function ProductCard () {
//     return (
//         <div></div>
//     )
// }

// export default ProductCard


import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard (props) {
    return (
        <div className="border mb-4 p-4 rounded overflow-hidden">
            <Link to={`/products/${props.product.id}`}>
                <div style={{
                    'backgroundImage': `url('${props.product.images[0].imageUrl}')`
                }} className="w-full h-64 bg-blue bg-cover">

                </div>
            </Link>
            <div className="p-3"></div>
            <h1 className="text-xl font-bold mb-3">
                <Link to={`/products/${props.product.id}`}>
                    {props.product.name}
                </Link>
            </h1>
            <div className="mb-3">
                {props.product.price}
            </div>
            <Link to={`/products/${props.product.id}`} 
                className="bg-blue-500 text-white p-2 flex justify-center">
                View
            </Link>
        </div>
    )
}

export default ProductCard