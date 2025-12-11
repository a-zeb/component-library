import type { ProductDisplayProps } from "../../types";
import { Button, Card } from "react-bootstrap";

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
    <Card className="m-2 p-4">
      <Card.Header as="h4">Product</Card.Header>
      <Card body>
        {product.imageUrl && (
          <Card.Img className="p-4" variant="top" src={product.imageUrl} />
        )}
        <Card.Text>Product ID: {product.id}</Card.Text>
        <Card.Text>Name: {product.name}</Card.Text>
        <Card.Text>Price: {product.price}</Card.Text>
        {showDescription && (
          <Card.Text>Description: {product.description}</Card.Text>
        )}
        {showStockStatus && (
          <Card.Text>In stock: {product.inStock ? "Yes" : "No"}</Card.Text>
        )}
        {onAddToCart && (
          <Button onClick={() => onAddToCart(product.id)}>Add to cart</Button>
        )}
      </Card>

      {children}
    </Card>
  );
}
