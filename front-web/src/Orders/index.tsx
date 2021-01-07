import { useEffect, useState } from 'react';
import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";
import './styles.css';
import { Product } from "./types";
import { fetchProducts } from '../api';

function Orders() { //usar o axios
    const [product, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetchProducts().then(response =>setProducts(response.data)
            ).catch(error =>console.log(error))
    }, []);


    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products ={product}/>
        </div>
    )
}
export default Orders;