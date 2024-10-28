"use client";

import { StoryFragment$key } from "@/__generated__/StoryFragment.graphql";
import { Card } from "@/components/Card";
import { graphql, useFragment } from "react-relay";
import { Heading } from "@/components/Newsfeed/Story/Heading";
import { Timestamp } from "@/components/Newsfeed/Story/Timestamp";
import { StorySummary } from "@/components/Newsfeed/Story/StorySummary";
import { Image } from "@/components/Image";
import { PosterByline } from "@/components/Newsfeed/Story/PosterByline";
import { StoryLikeButton } from "@/components/Newsfeed/Story/StoryLikeButton";
import { StoryCommentsSection } from "@/components/Newsfeed/Story/Comment/StoryCommentsSection";
import { StoryLikeButton_updatable$key } from "@/__generated__/StoryLikeButton_updatable.graphql";
const StoryFragmentGQL = graphql`
  fragment StoryFragment on Story {
    title
    summary
    createdAt
    poster {
      ...PosterBylineFragment
    }
    thumbnail {
      ...ImageFragment @arguments(width: 400)
    }
    ...StoryCommentsSectionFragment
    ...StoryLikeButtonFragment
  }
`;

type StoryProps = {
  fragmentRef: StoryFragment$key;
  updateableStoryLikeButtonRef: StoryLikeButton_updatable$key;
};

export const Story = ({
  fragmentRef,
  updateableStoryLikeButtonRef,
}: StoryProps) => {
  const data = useFragment(StoryFragmentGQL, fragmentRef);

  return (
    <Card>
      <PosterByline fragmentRef={data.poster} />
      <Heading>{data.title}</Heading>
      <Timestamp time={data.createdAt} />
      {data.thumbnail ? (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image fragmentRef={data.thumbnail} width={400} height={400} />
      ) : null}
      <StorySummary summary={data.summary ?? ""} />
      <StoryLikeButton
        fragmentRef={data}
        updateableStoryLikeButtonRef={updateableStoryLikeButtonRef}
      />
      <StoryCommentsSection fragmentRef={data} />
    </Card>
  );
};
