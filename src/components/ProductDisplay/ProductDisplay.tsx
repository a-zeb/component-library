import type { ProductDisplayProps } from "../../types";
import { Button } from "react-bootstrap";

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
    <div>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      {product.imageUrl && <p>{product.imageUrl}</p>}
      <p>{product.inStock}</p>

      <p>{showDescription}</p>
      <p>{showStockStatus}</p>

      {onAddToCart && (
        <Button onClick={() => onAddToCart(product.id)}>+</Button>
      )}
      {children}
    </div>
  );
}
