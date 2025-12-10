import type { AlertType } from "../../types";
import type { AlertBoxProps } from "../../types";

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
        <p style={{ padding: "0.25em", justifySelf: "flex-start" }}>
          {message}
        </p>
        {onClose && (
          <button
            style={{ maxHeight: "2.5em", maxWidth: "3em" }}
            onClick={onClose}
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
  const alertStyleInit = {
    borderRadius: "0.5em",
    padding: "1em",
    margin: "1em",
  };
  switch (type) {
    case "success":
      alertStyle = {
        ...alertStyleInit,
        border: "0.2em solid green",
        backgroundColor: "#97b79bff",
      };
      return alertStyle;
    case "error":
      alertStyle = {
        ...alertStyleInit,
        border: "0.2em solid red",
        backgroundColor: "#d68c8cff",
      };
      return alertStyle;
    case "warning":
      alertStyle = {
        ...alertStyleInit,
        border: "0.2em solid yellow",
        backgroundColor: "#fffa77ff",
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
