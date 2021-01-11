import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";
type Props = {
    products: Product[]; // essa variavel é uma lista de produto
    onSelectProduct :(product:Product) => void;
    selectedProducts: Product[];


}


function ProductsList({ products,onSelectProduct,selectedProducts }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard
                     key={product.id} 
                     product={product} //obrigado a passar chave unica quando vvc esta interando sobre lista
                    onSelectProduct ={onSelectProduct}
                    isSelected={checkIsSelected(selectedProducts,product)}
                    />
                ))}
            </div>
        </div>
    )
}
export default ProductsList;