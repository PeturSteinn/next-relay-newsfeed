"use client";

import { CommentFragment$key } from "@/__generated__/CommentFragment.graphql";
import { graphql, useFragment } from "react-relay";

const CommentFragmentGQL = graphql`
  fragment CommentFragment on Comment {
    text
  }
`;

type CommentProps = {
  fragmentRef: CommentFragment$key;
};

export const Comment = ({ fragmentRef }: CommentProps) => {
  const data = useFragment(CommentFragmentGQL, fragmentRef);
  return <div className="comment">{data.text}</div>;
};
