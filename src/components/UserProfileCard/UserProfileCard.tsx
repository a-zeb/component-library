import type { UserProfileCardProps } from "../../types";

export default function UserProfileCard({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}: UserProfileCardProps) {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    padding: "0.25em",
    border: "0.2em solid green",
    color: "black",
    backgroundColor: "#b5c0b7ff",
    borderRadius: "0.5em",
    margin: "1em",
  };
  return (
    <div style={{ ...styles, flexDirection: "column" }}>
      {showEmail && <p>Email: {user.email}</p>}
      {showRole && <p>Role: {user.role}</p>}
      {onEdit && (
        <button
          style={{ maxHeight: "8em", maxWidth: "8em" }}
          onClick={() => onEdit(user.id)}
        >
          Edit
        </button>
      )}
      {children}
    </div>
  );
}
