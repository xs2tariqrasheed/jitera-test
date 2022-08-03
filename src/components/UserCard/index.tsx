import React from "react";
import { Card, Typography, Space } from "antd";
import {
  EditOutlined,
  HeartTwoTone,
  DeleteFilled,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const { Text } = Typography;

interface UserCardProps {
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
}

function UserCard({
  name,
  email,
  phone,
  website,
  username,
}: UserCardProps): JSX.Element {
  return (
    <Card
      cover={
        <figure>
          <img
            alt="User Avatar"
            src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
          />
        </figure>
      }
      actions={[
        <HeartTwoTone key="heart" twoToneColor="#FF1B16" />,
        <EditOutlined key="edit" />,
        <DeleteFilled key="delete" />,
      ]}
    >
      <Meta
        title={name}
        description={
          <Space direction="vertical" size={1}>
            <Text type="secondary">
              <MailOutlined /> {email}
            </Text>
            <Text type="secondary">
              <PhoneOutlined /> {phone}
            </Text>
            <Text type="secondary">
              <GlobalOutlined /> http://{website}
            </Text>
          </Space>
        }
      />
    </Card>
  );
}

export const UserCardSkeleton = (): JSX.Element => (
  <Card
    loading
    actions={[
      <HeartTwoTone key="heart" twoToneColor="#FF1B16" />,
      <EditOutlined key="edit" />,
      <DeleteFilled key="delete" />,
    ]}
  />
);

export default UserCard;
