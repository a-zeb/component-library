import type { AlertBoxProps } from "../../types";
import { Alert } from "react-bootstrap";

// Create an AlertBox component that can display different types of alerts
// (success, error, warning, info) with customizable messages.
export default function AlertBox({
  type,
  message,
  onClose,
  children,
}: AlertBoxProps) {
  const alertVariant = type == "error" ? "danger" : type;
  return (
    <Alert variant={alertVariant} onClose={onClose} dismissible>
      <p>{message}</p>
      {children}
    </Alert>
  );
}
