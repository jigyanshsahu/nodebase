import { getQueryClient, trpc } from "@/trpc/server";
import {Client} from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
const page = async () => {
  const queryclient = getQueryClient();
  void queryclient.prefetchQuery(trpc.getUsers.queryOptions());
  
  return <div className=" flex h-screen justify-center items-center">
      
            <HydrationBoundary state={dehydrate(queryclient)}>
              <Suspense fallback={<div>Loading...</div>}>
          <Client />
          </Suspense>
            </HydrationBoundary>
  

  </div>;
};

export default page;
