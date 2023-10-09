import { Skeleton } from "@nextui-org/skeleton";
const MenuItemSkeleton = () => {
  return (
    <>
      <Skeleton className="sm:h-12 h-10 sm:px-5 px-2 md:w-1/5 w-2/6 min-w-fit rounded-lg" />
      <Skeleton className="sm:h-12 h-10 sm:px-5 px-2 md:w-1/5 w-2/6 min-w-fit rounded-lg" />
      <Skeleton className="sm:h-12 h-10 sm:px-5 px-2 md:w-1/5 w-2/6 min-w-fit rounded-lg" />
      <Skeleton className="sm:h-12 h-10 sm:px-5 px-2 md:w-1/5 w-2/6 min-w-fit rounded-lg" />
    </>
  );
};

export default MenuItemSkeleton;
