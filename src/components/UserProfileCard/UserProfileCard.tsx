import type { UserProfileCardProps } from "../../types";
import { Button, Card } from "react-bootstrap";

export default function UserProfileCard({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <Card className="m-2 p-4">
      <Card.Header as="h4">User Profile</Card.Header>
      <Card body>
        {user.avatarUrl && (
          <Card.Img className="p-4" variant="top" src={user.avatarUrl} />
        )}
        {showEmail && <Card.Text>Email: {user.email}</Card.Text>}
        {showRole && <Card.Text>Role: {user.role}</Card.Text>}
        {onEdit && (
          <Button variant="primary" onClick={() => onEdit(user.id)}>
            Edit
          </Button>
        )}
      </Card>
      {children}
    </Card>
  );
}
