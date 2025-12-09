export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}

export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}

// Create a ProductDisplay component that shows
// product information with configurable display options.
export default function ProductDisplay({
  product,
  showDescription,
  showStockStatus,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  return (
    <div style={{border:"0.5em solid", content: "0.5em"}}>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      {product.imageUrl && <p>{product.imageUrl}</p>}
      <p>{product.inStock}</p>

      <p>{showDescription}</p>
      <p>{showStockStatus}</p>

      {onAddToCart && <button onClick={() => onAddToCart(product.id)}>+</button>}
      {children}
    </div>
  );
}
