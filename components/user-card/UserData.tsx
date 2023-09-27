import { User } from "@nextui-org/user";

const UserData = () => {
  return (
    <div className="flex justify-start container mx-auto max-w-4xl mb-2">
      <User
        name="Jairo Camargo"
        description="Motorista particular"
        avatarProps={{
          src: "./jairo-profile.jpeg",
        }}
      />
    </div>
  );
};

export default UserData;
