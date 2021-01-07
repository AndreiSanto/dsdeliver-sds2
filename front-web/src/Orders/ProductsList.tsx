import ProductCard from "./ProductCard";
import { Product } from "./types";
type Props = {
    products: Product[]; // essa variavel é uma lista de produto
}


function ProductsList({ products }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} /> //obrigado a passar chave unica quando vvc esta interando sobre lista
                ))}
            </div>
        </div>
    )
}
export default ProductsList;