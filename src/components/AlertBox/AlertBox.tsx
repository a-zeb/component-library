import type { AlertBoxProps } from "../../types";
import { Alert } from "react-bootstrap";

export default function AlertBox({
  type,
  message,
  onClose,
  children,
}: AlertBoxProps) {
  const alertVariant = type == "error" ? "danger" : type;
  return (
    <Alert variant={alertVariant} onClose={onClose} dismissible>
      <Alert.Heading>{message}</Alert.Heading>
      {children}
    </Alert>
  );
}
