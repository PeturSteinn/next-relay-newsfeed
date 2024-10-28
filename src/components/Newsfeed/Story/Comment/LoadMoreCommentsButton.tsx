"use client";

import * as React from "react";

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

export const LoadMoreCommentsButton = ({ onClick, disabled }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="comments__loadMore"
    >
      Load more comments
    </button>
  );
};
