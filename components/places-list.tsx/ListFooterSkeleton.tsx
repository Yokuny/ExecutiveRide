import { Skeleton } from "@nextui-org/skeleton";

const ListFooterSkeleton = () => {
  return (
    <>
      <Skeleton className="w-1/3 h-8 rounded-lg" />
      <Skeleton className="w-1/6 h-8 rounded-lg" />
    </>
  );
};

export default ListFooterSkeleton;
