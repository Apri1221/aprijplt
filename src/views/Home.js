import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard';

function Home() {
    const url = 'https://5f674a3e38ce8700163984ae.mockapi.io/products';

    const [products, setProducts] = useState({
       loading: true,
       data: null,
       error: false, 
    });
    
    let content = null;

    useEffect(() => {
        axios.get(url).then(response => {
            setProducts({
                loading: false,
                data: response.data,
                error: false,
            })
        }).catch(() => {
            setProducts({
                loading: false,
                data: null,
                error: true,
            })
        });
    }, [url]);


    if(products.loading) {
        content = <Loader></Loader>
    }

    if(products.error) {
        content = <div>
            <h1 className="text-2xl font-bold mb-3">
                There was an error, refresh or try again.
            </h1>
        </div> 
    }

    if(products.data != null) {
        content = products.data.map((item, index) => {
            return (
                <div key={index}>
                    <h1 className="text-2xl font-bold mb-3">
                        <ProductCard product={item} />
                    </h1>
                </div>
            );
        })
    } 

    return(
        <div class="flex flex-col h-auto bg-white">
            <h1 className="font-bold text-2xl mb-3">For learning purpose, under development</h1>
            <br></br>
            {content}            
            
        </div>
    )
}


export default Home