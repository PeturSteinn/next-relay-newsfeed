"use client";

import { StoryCommentsComposerFragment$key } from "@/__generated__/StoryCommentsComposerFragment.graphql";
import { StoryCommentsComposerPostMutation } from "@/__generated__/StoryCommentsComposerPostMutation.graphql";
import { useState } from "react";
import {
  ConnectionHandler,
  graphql,
  useFragment,
  useMutation,
} from "react-relay";

const StoryCommentsComposerFragmentGQL = graphql`
  fragment StoryCommentsComposerFragment on Story {
    id
  }
`;

const StoryCommentsComposerPostMutationGQL = graphql`
  mutation StoryCommentsComposerPostMutation(
    $id: ID!
    $text: String!
    $connections: [ID!]!
  ) {
    postStoryComment(id: $id, text: $text) {
      commentEdge @prependEdge(connections: $connections) {
        node {
          id
          text
        }
      }
    }
  }
`;

type StoryCommentsComposerProps = {
  fragmentRef: StoryCommentsComposerFragment$key;
};

export const StoryCommentsComposer = ({
  fragmentRef,
}: StoryCommentsComposerProps) => {
  const data = useFragment(StoryCommentsComposerFragmentGQL, fragmentRef);
  const [text, setText] = useState("");
  // TODO: Use isMutationInFlight ?
  const [commitMutation] = useMutation<StoryCommentsComposerPostMutation>(
    StoryCommentsComposerPostMutationGQL
  );

  const onPost = () => {
    setText("");
    const connectionID = ConnectionHandler.getConnectionID(
      data.id,
      "StoryCommentsSectionFragment_comments"
    );
    commitMutation({
      variables: { id: data.id, text, connections: [connectionID] },
    });
  };

  return (
    <div className="commentsComposer">
      <TextComposer text={text} onChange={setText} onReturn={onPost} />
      <PostButton onClick={onPost} />
    </div>
  );
};

const TextComposer = ({
  text,
  onChange,
  onReturn,
}: {
  text: string;
  onChange: (newValue: string) => void;
  onReturn: () => void;
}) => {
  return (
    <input
      value={text}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          onReturn();
        }
      }}
    />
  );
};

const PostButton = ({ onClick }: { onClick: () => void }) => {
  return <button onClick={onClick}>Post</button>;
};
