// import MainViewQueryNode, {
//   MainViewQuery,
// } from "__generated__/MainViewQuery.graphql";
// import MainViewClientComponent from "./MainViewClientComponent";

import NewsfeedQueryNode, {
  NewsfeedQuery,
} from "@/__generated__/NewsfeedQuery.graphql";
import { Newsfeed } from "@/components/Newsfeed/Newsfeed";
import loadSerializableQuery from "@/relay/loadSerializableQuery";

// import loadSerializableQuery from "@/relay/loadSerializableQuery";

const Page = async () => {
  const preloadedQuery = await loadSerializableQuery<
    typeof NewsfeedQueryNode,
    NewsfeedQuery
  >(NewsfeedQueryNode.params, {});

  // return <MainViewClientComponent preloadedQuery={preloadedQuery} />;
  return <Newsfeed preloadedQuery={preloadedQuery} />;
};

export default Page;

export const revalidate = 0;
