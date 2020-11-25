// standard boilerplate code react creating component

// import React from 'react';

// function ProductCard () {
//     return (
//         <div></div>
//     )
// }

// export default ProductCard


import React from 'react';

function ProductCard (props) {
    return (
        <article className="m-2 md:m-8 rounded-lg shadow-md overflow-hidden">

            <a target="_blank" rel="noopener noreferrer" href={props.product.guid}>
                <img className="block h-350 w-full border object-cover" src={props.product.thumbnail} alt={props.product.title}/>
            </a>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-2xl font-bold mb-3">
                    <a target="_blank" rel="noopener noreferrer" href={props.product.guid}>
                        {props.product.title}
                    </a>
                </h1>
                <p className="text-base">
                    {props.product.pubDate}
                </p>
            </header>
            <a target="_blank" rel="noopener noreferrer" href={props.product.guid} 
                className="bg-blue-500 text-white p-2 flex justify-center">
                View
            </a>

        </article>
    )
}

export default ProductCard