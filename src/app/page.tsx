import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

const page = async () => {
  await requireAuth();
  const data = await caller.getUsers();
  return (
    <div className="flex ">
      protected server component
      <div className="justify-center items-center ">{JSON.stringify(data)}</div>
    </div>
  );
};

export default page;
