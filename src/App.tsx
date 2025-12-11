import "./App.css";
import AlertBox from "./components/AlertBox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import { useState } from "react";
import type { AlertType } from "./types";

// importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    avatarUrl: "https://example.com/avatar.jpg",
  };

  const product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: "https://example.com/headphones.jpg",
    inStock: true,
  };

  return (
    // Test different prop combinations.

    // Create example usage of components working together.
    // Demonstrate prop passing between components.
    // Show how to handle component nesting.
    <>
      <Container>
        <Row>
          <Col>
            {showAlert && (
              <AlertBox
                type={alertType}
                message={alertMessage}
                onClose={() => setShowAlert(false)}
              />
            )}
          </Col>
        </Row>

        <div>
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
        </div>
      </Container>
    </>
  );
}

export default App;
