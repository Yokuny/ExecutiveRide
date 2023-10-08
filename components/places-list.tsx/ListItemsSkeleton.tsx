import { Skeleton } from "@nextui-org/skeleton";

const ListItemsSkeleton = () => {
  return (
    <div className="flex flex-col gap-1 items-center w-full">
      <Skeleton className="rounded-md w-full h-9"></Skeleton>
      <Skeleton className="rounded-md w-full h-9"></Skeleton>
    </div>
  );
};
export default ListItemsSkeleton;
