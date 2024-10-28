"use client";

import { NewsfeedContentsFragment$key } from "@/__generated__/NewsfeedContentsFragment.graphql";
import { NewsfeedContentsRefetchQuery } from "@/__generated__/NewsfeedContentsRefetchQuery.graphql";
import NewsfeedQueryNode, {
  NewsfeedQuery,
} from "@/__generated__/NewsfeedQuery.graphql";
import { SerializablePreloadedQuery } from "@/relay/loadSerializableQuery";
import useSerializablePreloadedQuery from "@/relay/useSerializablePreloadedQuery";
import {
  graphql,
  usePaginationFragment,
  usePreloadedQuery,
  useRelayEnvironment,
} from "react-relay";
import dynamic from "next/dynamic";

// Due to InfiniteScrollTrigger using browser-only APIs
const InfiniteScrollTrigger = dynamic(
  () => import("@/components/InfiniteScrollTrigger"),
  { ssr: false }
);

import { Story } from "@/components/Newsfeed/Story/Story";

const NewsfeedQueryGQL = graphql`
  query NewsfeedQuery {
    ...NewsfeedContentsFragment
  }
`;

const NewsfeedContentsFragmentGQL = graphql`
  fragment NewsfeedContentsFragment on Query
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  )
  @refetchable(queryName: "NewsfeedContentsRefetchQuery") {
    viewer {
      newsfeedStories(after: $cursor, first: $count)
        @connection(key: "NewsfeedContentsFragment_newsfeedStories") {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          node {
            id
            ...StoryFragment
            ...StoryLikeButton_updatable
          }
        }
      }
    }
  }
`;

type NewsfeedProps = {
  preloadedQuery: SerializablePreloadedQuery<
    typeof NewsfeedQueryNode,
    NewsfeedQuery
  >;
};

export const Newsfeed = ({ preloadedQuery }: NewsfeedProps) => {
  const environment = useRelayEnvironment();
  const queryRef = useSerializablePreloadedQuery(environment, preloadedQuery);
  const fragmentRef = usePreloadedQuery(NewsfeedQueryGQL, queryRef);

  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment<
    NewsfeedContentsRefetchQuery,
    NewsfeedContentsFragment$key
  >(NewsfeedContentsFragmentGQL, fragmentRef);

  const storyEdges = data.viewer?.newsfeedStories?.edges;

  const onEndReached = () => {
    loadNext(3);
  };

  return (
    <div className="newsfeed">
      {storyEdges?.map((storyEdge) =>
        storyEdge?.node ? (
          <Story
            key={storyEdge.node?.id}
            fragmentRef={storyEdge.node}
            updateableStoryLikeButtonRef={storyEdge.node}
          />
        ) : null
      )}
      <InfiniteScrollTrigger
        onEndReached={onEndReached}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
      />
    </div>
  );
};
