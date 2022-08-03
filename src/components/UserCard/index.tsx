import React from "react";
import { Card, Typography } from "antd";
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
        <img
          alt="Cover"
          src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
        />
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
          <>
            <Text type="secondary">
              <MailOutlined /> {email}
            </Text>
            <br />
            <Text type="secondary">
              <PhoneOutlined /> {phone}
            </Text>
            <br />
            <Text type="secondary">
              <GlobalOutlined /> http://{website}
            </Text>
          </>
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
