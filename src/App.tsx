import "./App.css";
import AlertBox from "./components/AlertBox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import { useState } from "react";
import type { AlertType } from "./types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<AlertType>("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
    setAlertType("success");
    setAlertMessage("Product added to cart!");
  };

  const handleUserEdit = (alertType: AlertType, message: string) => {
    setShowAlert(true);
    setAlertType(alertType);
    setAlertMessage(message);
  };

  const user = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    avatarUrl: "./vite.svg",
  };

  const product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: "./react.svg",
    inStock: true,
  };

  const product2 = {
    id: "2",
    name: "Wireless Accessory",
    price: 1.99,
    description: "High-quality accessory.",
    inStock: false,
  };

  return (
    // Test different prop combinations.
    // Show how to handle component nesting.
    <>
      <Container>
        <Row>
          <UserProfileCard
            user={user}
            showEmail={true}
            showRole={true}
            onEdit={handleUserEdit}
          ></UserProfileCard>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            {showAlert && (
              <AlertBox
                type={alertType}
                message={alertMessage}
                onClose={() => setShowAlert(false)}
              />
            )}
          </Col>
        </Row>

        <Row>
          <ProductDisplay
            product={product}
            showDescription={true}
            showStockStatus={true}
            onAddToCart={handleAddToCart}
          >
            <Col md={{ span: 8, offset: 2 }}>
              <ProductDisplay
                product={product2}
                showDescription={false}
                showStockStatus={true}
                onAddToCart={handleAddToCart}
              ></ProductDisplay>
            </Col>
          </ProductDisplay>
        </Row>
      </Container>
    </>
  );
}

export default App;
