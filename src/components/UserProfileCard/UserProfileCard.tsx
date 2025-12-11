import type { UserProfileCardProps } from "../../types";
import { Button } from "react-bootstrap";

export default function UserProfileCard({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <div>
      {showEmail && <p>Email: {user.email}</p>}
      {showRole && <p>Role: {user.role}</p>}
      {onEdit && (
        <Button variant="primary" onClick={() => onEdit(user.id)}>
          Edit
        </Button>
      )}
      {children}
    </div>
  );
}
