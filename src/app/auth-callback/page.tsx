import { Suspense } from "react";
import { SyncUser } from "./_components/SyncUser";

const Page = () => {
  return (
    <Suspense>
      <SyncUser />
    </Suspense>
  );
};

export default Page;
