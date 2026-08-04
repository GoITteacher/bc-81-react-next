import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import SongsClient from "./Songs.client";
import { getSongs } from "@/lib/songs";

const Page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["songs", ""],
    queryFn: () => getSongs(""),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SongsClient />
    </HydrationBoundary>
  );
};

export default Page;
