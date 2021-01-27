import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard';

function Home() {
    // const url = 'https://5f674a3e38ce8700163984ae.mockapi.io/products';
    const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@apriyantotobing';

    const [products, setProducts] = useState({
       loading: true,
       data: null,
       error: false, 
    });
    
    let content = null;

    useEffect(() => {
        axios.get(url).then(response => {
            let re = new RegExp('\\bimages\\b', 'g');
            const posts = response.data.items.filter(item => item.thumbnail.match(re)); // That's the main trick* !

            setProducts({
                loading: false,
                data: posts,
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
        <div className="flex flex-col h-auto m-1 md:m-3">
            <h1 className="font-bold text-2xl">For learning purpose, under development</h1>
            <br></br>
            {content}
            <br></br>         
        </div>
    )
}


export default Home