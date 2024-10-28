"use client";

import { StoryLikeButton_updatable$key } from "@/__generated__/StoryLikeButton_updatable.graphql";
import { StoryLikeButtonFragment$key } from "@/__generated__/StoryLikeButtonFragment.graphql";
import { StoryLikeButtonLikeMutation } from "@/__generated__/StoryLikeButtonLikeMutation.graphql";
import { graphql, useFragment, useMutation } from "react-relay";

const StoryLikeButtonFragmentGQL = graphql`
  fragment StoryLikeButtonFragment on Story {
    id
    likeCount
    doesViewerLike
  }
`;

// TODO: Move into its own hook
const StoryLikeButtonLikeMutationGQL = graphql`
  mutation StoryLikeButtonLikeMutation($id: ID!, $doesLike: Boolean!) {
    likeStory(id: $id, doesLike: $doesLike) {
      story {
        ...StoryFragment
      }
    }
  }
`;

type StoryLikeButtonProps = {
  fragmentRef: StoryLikeButtonFragment$key;
  updateableStoryLikeButtonRef: StoryLikeButton_updatable$key;
};

export const StoryLikeButton = ({
  fragmentRef,
  updateableStoryLikeButtonRef,
}: StoryLikeButtonProps) => {
  const data = useFragment(StoryLikeButtonFragmentGQL, fragmentRef);

  const [commitMutation, isMutationInFlight] =
    useMutation<StoryLikeButtonLikeMutation>(StoryLikeButtonLikeMutationGQL);

  const onLikeButtonClicked = () => {
    commitMutation({
      // Ensure `doesLike` is a boolean by converting `data.doesViewerLike` (which may be undefined, null, or boolean) to a true boolean and negating it.
      variables: { id: data.id, doesLike: !!!data.doesViewerLike },

      optimisticUpdater: (store) => {
        const fragment = graphql`
          fragment StoryLikeButton_updatable on Story @updatable {
            likeCount
            doesViewerLike
          }
        `;

        const { updatableData } = store.readUpdatableFragment(
          fragment,
          updateableStoryLikeButtonRef
        );

        const alreadyLikes = updatableData.doesViewerLike;
        updatableData.doesViewerLike = !alreadyLikes;
        if (
          updatableData.likeCount !== null &&
          updatableData.likeCount !== undefined
        ) {
          updatableData.likeCount += alreadyLikes ? -1 : 1;
        }
      },
    });
  };
  return (
    <div className="likeButton">
      <LikeCount count={data.likeCount ?? 0} />
      <LikeButton
        doesViewerLike={!!data.doesViewerLike}
        onClick={onLikeButtonClicked}
        disabled={isMutationInFlight}
      />
    </div>
  );
};

const LikeCount = ({ count }: { count: number }) => (
  <div className="likeButton__count">{count} likes</div>
);

const LikeButton = ({
  doesViewerLike,
  onClick,
  disabled,
}: {
  doesViewerLike: boolean;
  onClick: () => void;
  disabled?: boolean;
}) => (
  <button className="likeButton__button" onClick={onClick} disabled={disabled}>
    <span
      className={
        doesViewerLike
          ? "likeButton__thumb__viewerLikes"
          : "likeButton__thumb__viewerDoesNotLike"
      }
    >
      👍
    </span>
    <span
      className={
        doesViewerLike
          ? "likeButton__label__viewerLikes"
          : "likeButton__label__viewerDoesNotLike"
      }
    >
      Like
    </span>
  </button>
);
