import { useEffect, useState } from 'react';
import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";
import './styles.css';
import { OrderLocationData, Product } from "./types";
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders() { //usar o axios
    const [product, setProducts] = useState<Product[]>([]);
    const [ordersLocation,setOrderLocation] = useState<OrderLocationData>();
    useEffect(() => {
        fetchProducts().then(response =>setProducts(response.data)
            ).catch(error =>console.log(error))
    }, []);


    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products ={product}/>
            <OrderLocation onChangeLocation= {location => setOrderLocation{location}}/>
        </div>
    )
}
export default Orders;