import { Card, CardHeader } from "@nextui-org/card";
import UserData from "./UserData";

const UserCard = () => {
  return (
    <Card className="w-full flex max-w-4xl p-3" radius="sm">
      <CardHeader className="p-2">
        <UserData />
      </CardHeader>
    </Card>
  );
};

export default UserCard;
