import { User } from "@nextui-org/user";

const UserCard = () => {
  return (
    <div className="flex justify-start container mx-auto max-w-4xl">
      <User
        name="Nome do motorista"
        description="Motorista particular"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        }}
      />
    </div>
  );
};

export default UserCard;
