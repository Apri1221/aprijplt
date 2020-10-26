import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Loader from '../components/Loader'

function Product() {
    const {id} = useParams();
    const url = 'https://5f674a3e38ce8700163984ae.mockapi.io/products/' + id;
    let initialState, content = null;
    // const [product, setProduct] = useState(initialState);

    const [product, setProduct] = useState({
        loading: true,
        data: null,
        error: false,
    });

    useEffect(() => {
        axios.get(url).then(
            response => setProduct({
                loading: false,
                data: response.data,
                error: false,
            })
        ).catch(() => {
            setProduct({
                loading: false,
                data: null,
                error: true,
            })
        });
    }, [url])

    if(product.loading) {
        content = <Loader></Loader>
    }

    if(product.error) {
        content = <div>
            <h1 className="text-2xl font-bold mb-3">
                There was an error, refresh or try again.
            </h1>
        </div> 
    }
    
    if(product.data) {
        content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div>
                <img
                    src={product.data.images[0].imageUrl}
                    alt={product.data.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                ${product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
        </div>
    }

    console.log(product)
    return(
        <div>
            {content}
        </div>
    )
}

export default Product;