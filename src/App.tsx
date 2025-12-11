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

  const handleUserEdit = (userId: string) => {
    setShowAlert(true);
    setAlertType("info");
    setAlertMessage(`Editing user ${userId}`);
  };

  const user = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    avatarUrl: "./src/assets/react.svg",
  };

  const product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: "./src/assets/react.svg",
    inStock: true,
  };

  return (
    // Test different prop combinations.
    // Show how to handle component nesting.
    <>
      <Container>
        <Row>
          <Col />
          <Col>
            {showAlert && (
              <AlertBox
                type={alertType}
                message={alertMessage}
                onClose={() => setShowAlert(false)}
              />
            )}
          </Col>
          <Col />
        </Row>

        <Row>
          <UserProfileCard
            user={user}
            showEmail={true}
            showRole={true}
            onEdit={handleUserEdit}
          >
            <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
          </UserProfileCard>

          <ProductDisplay
            product={product}
            showDescription={true}
            showStockStatus={true}
            onAddToCart={handleAddToCart}
          />
        </Row>
      </Container>
    </>
  );
}

export default App;
