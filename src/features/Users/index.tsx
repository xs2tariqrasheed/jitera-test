import React from "react";
import { Alert, Col, Row } from "antd";
import { useQuery } from "@tanstack/react-query";

import { fetchUsers } from "../../apis/users";
import UserCard, { UserCardSkeleton } from "../../components/UserCard";

function Users(): JSX.Element {
  const { isLoading, error, data } = useQuery(["userData"], fetchUsers);

  if (isLoading) {
    return (
      <Row gutter={[20, 20]}>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <Col lg={6} sm={12} xs={24} key={i}>
              <UserCardSkeleton />
            </Col>
          ))}
      </Row>
    );
  }

  if (error) {
    return (
      <Alert
        message="Error"
        description={(error as any).message}
        type="error"
        showIcon
      />
    );
  }

  return (
    <Row gutter={[20, 20]}>
      {data?.map((user: any) => (
        <Col lg={6} sm={12} xs={24} key={user.id}>
          <UserCard
            name={user.name}
            phone={user.phone}
            email={user.email}
            website={user.website}
            username={user.username}
          />
        </Col>
      ))}
    </Row>
  );
}

export default Users;
