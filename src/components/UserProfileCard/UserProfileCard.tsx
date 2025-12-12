import type { UserProfileCardProps } from "../../types";
import { Container, Button, Card, Row, Col } from "react-bootstrap";

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
        <Container className="d-grid gap-3">
          <Row>
            <Col>
              <Card.Text>Name: {user.name}</Card.Text>
            </Col>
            <Col md={8}>
              {onEdit && (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() =>
                    onEdit(
                      "warning",
                      "You can only change your name once every 39.5 years."
                    )
                  }
                >
                  Edit
                </Button>
              )}
            </Col>
          </Row>
          <Row>
            {showEmail && <Card.Text>Email: {user.email}</Card.Text>}
          </Row>
          <Row>
            {showRole && <Card.Text>Role: {user.role}</Card.Text>}
          </Row>
          <Row>
            <Col>
              <Card.Text>Last login: 2 hours ago</Card.Text>
            </Col>
            <Col md={8}>
              {onEdit && (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() =>
                    onEdit(
                      "error",
                      "You can not refresh last login at this time."
                    )
                  }
                >
                  Refresh
                </Button>
              )}
            </Col>
          </Row>
          <Row className="m-3">
            <Col>
              {onEdit && (
                <Button
                  variant="primary"
                  onClick={() =>
                    onEdit("info", "Your info has been submitted.")
                  }
                >
                  Submit
                </Button>
              )}
            </Col>
          </Row>
          {children}
        </Container>
      </Card>
    </Card>
  );
}
