"use client";

import { StoryCommentsSectionFragment$key } from "@/__generated__/StoryCommentsSectionFragment.graphql";
import { SmallSpinner } from "@/components/SmallSpinner";
import { useTransition } from "react";
import { graphql, usePaginationFragment } from "react-relay";
import { StoryCommentsComposer } from "@/components/Newsfeed/Story/Comment/StoryCommentsComposer";
import { Comment } from "@/components/Newsfeed/Story/Comment/Comment";
import { LoadMoreCommentsButton } from "@/components/Newsfeed/Story/Comment/LoadMoreCommentsButton";

const StoryCommentsSectionFragmentGQL = graphql`
  fragment StoryCommentsSectionFragment on Story
  @refetchable(queryName: "StoryCommentsSectionPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  ) {
    comments(after: $cursor, first: $count)
      @connection(key: "StoryCommentsSectionFragment_comments") {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          id
          ...CommentFragment
        }
      }
    }
    ...StoryCommentsComposerFragment
  }
`;

type StoryCommentsSectionProps = {
  fragmentRef: StoryCommentsSectionFragment$key;
};

export const StoryCommentsSection = ({
  fragmentRef,
}: StoryCommentsSectionProps) => {
  const [isPending, startTransition] = useTransition();
  const { data, loadNext } = usePaginationFragment(
    StoryCommentsSectionFragmentGQL,
    fragmentRef
  );
  const onLoadMore = () => {
    // see https://github.com/facebook/relay/issues/4531#issuecomment-1867831999 for an alternative solution with isLoadingNext...
    return startTransition(() => {
      loadNext(3);
    });
  };
  return (
    <div>
      <StoryCommentsComposer fragmentRef={data} />

      {data?.comments?.edges?.map((edge) =>
        edge?.node ? (
          <Comment key={edge.node.id} fragmentRef={edge.node} />
        ) : null
      )}
      {data?.comments?.pageInfo?.hasNextPage && (
        <LoadMoreCommentsButton onClick={onLoadMore} disabled={isPending} />
      )}
      {isPending && <SmallSpinner />}
    </div>
  );
};
