export type AlertType = "success" | "error" | "warning" | "info";

export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

// Create an AlertBox component that can display different types of alerts
// (success, error, warning, info) with customizable messages.
