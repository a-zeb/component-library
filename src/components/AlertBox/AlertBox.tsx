export type AlertType = "success" | "error" | "warning" | "info";

export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

// Create an AlertBox component that can display different types of alerts
// (success, error, warning, info) with customizable messages.
export default function AlertBox({
  type,
  message,
  onClose,
  children,
}: AlertBoxProps) {
  const alertStyle = setAlertStyles(type)

  return (
    <div style={alertStyle}>
      <div style={{ flex: "right" }}>
        <p>{message}</p>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

function setAlertStyles(type: AlertType) {
  let alertStyle;
  const alertStyleInit = { display: "flex", borderRadius: "0.5rem", padding: "1rem", margin: "1rem" };
  switch (type) {
    case "success":
      alertStyle = { ...alertStyleInit, border: "0.2rem solid green", backgroundColor: "#878784" }
      return alertStyle;
    case "error":
      alertStyle = { ...alertStyleInit, border: "0.2rem solid red", backgroundColor: "#878784" }
      return alertStyle;
    case "warning":
      alertStyle = { ...alertStyleInit, border: "0.2rem solid yellow", backgroundColor: "#878784" }
      return alertStyle;
    case "info":
      alertStyle = { ...alertStyleInit, border: "0.2rem solid blue", backgroundColor: "#878784" }
      return alertStyle;
  }
}