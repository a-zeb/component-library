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
  const alertStyle = setAlertStyles(type);

  return (
    <div style={alertStyle}>
      <div style={{ display: "flex" }}>
        <p style={{ padding: "0.25em" }}>{message}</p>
        {onClose && <button onClick={onClose}>X</button>}
      </div>
      {children}
    </div>
  );
}

function setAlertStyles(type: AlertType) {
  let alertStyle;
  const alertStyleInit = {
    display: "flex",
    borderRadius: "0.5em",
    padding: "1em",
    margin: "1em",
  };
  switch (type) {
    case "success":
      alertStyle = {
        ...alertStyleInit,
        border: "0.2em solid green",
        backgroundColor: "#878784",
      };
      return alertStyle;
    case "error":
      alertStyle = {
        ...alertStyleInit,
        border: "0.2em solid red",
        backgroundColor: "#878784",
      };
      return alertStyle;
    case "warning":
      alertStyle = {
        ...alertStyleInit,
        border: "0.2em solid yellow",
        backgroundColor: "#878784",
      };
      return alertStyle;
    case "info":
      alertStyle = {
        ...alertStyleInit,
        border: "0.2em solid blue",
        backgroundColor: "#878784",
      };
      return alertStyle;
  }
}
