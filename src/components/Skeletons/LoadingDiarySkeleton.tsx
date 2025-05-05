import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingDiarySkeleton = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full gap-4">
        <Skeleton circle width={50} height={50} className="mb-4" />
        <Skeleton width={170} height={20} className="w-full mb-4" />
      </div>
      <Skeleton count={5} />
      <div className="flex justify-end gap-10 mt-8">
        <Skeleton width={100} height={36} />
        <Skeleton width={100} height={36} />
      </div>
    </>
  )
};

export default LoadingDiarySkeleton;
