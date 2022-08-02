import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  EditOutlined,
  HeartTwoTone,
  DeleteFilled,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";

const { Meta } = Card;

function Users(): JSX.Element {
  const { isFetching, error, data } = useQuery(
    ["userData"],
    () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
    { staleTime: 0 }
  );

  if (isFetching) return <>"Loading..."</>;

  if (error) return <>"An error has occurred: " + error.message</>;

  return (
    <div>
      {/* <pre>{JSON.stringify(data[1], null, 2)}</pre> */}
      <Row gutter={[20, 20]}>
        {data.map((user: any) => (
          <Col lg={6} sm={12} xs={24}>
            <Card
              cover={
                <img
                  alt="Cover"
                  src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
                />
              }
              actions={[
                <HeartTwoTone key="heart" twoToneColor="#FF1B16" />,
                <EditOutlined key="edit" />,
                <DeleteFilled key="delete" />,
              ]}
            >
              <Meta
                title={user.name}
                description={
                  <p>
                    <MailOutlined /> {user.email}
                  </p>
                }
              />
              <Meta
                description={
                  <p>
                    <PhoneOutlined /> {user.phone}
                  </p>
                }
              />
              <Meta
                description={
                  <p>
                    <GlobalOutlined /> http://{user.website}
                  </p>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Users;
