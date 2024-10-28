"use client";

import { PosterBylineFragment$key } from "@/__generated__/PosterBylineFragment.graphql";
import { useRef } from "react";
import { graphql, useFragment, useQueryLoader } from "react-relay";
import { Image } from "@/components/Image";
import { Hovercard } from "@/components/Newsfeed/Story/Hovercard";
import {
  PosterDetailsHovercardContents,
  PosterDetailsHovercardContentsQueryGQL,
} from "./PosterDetailsHovercardContents";
import { PosterDetailsHovercardContentsQuery } from "@/__generated__/PosterDetailsHovercardContentsQuery.graphql";

const PosterBylineFragmentGQL = graphql`
  fragment PosterBylineFragment on Actor {
    id
    name
    profilePicture {
      ...ImageFragment @arguments(width: 60, height: 60)
    }
  }
`;

type PosterBylineProps = {
  fragmentRef: PosterBylineFragment$key;
};

export const PosterByline = ({ fragmentRef }: PosterBylineProps) => {
  const data = useFragment(PosterBylineFragmentGQL, fragmentRef);
  const hoverRef = useRef<HTMLDivElement>(null);

  const [hovercardQueryRef, loadHovercardQuery] =
    useQueryLoader<PosterDetailsHovercardContentsQuery>(
      PosterDetailsHovercardContentsQueryGQL
    );

  const onBeginHover = () => {
    loadHovercardQuery({ posterID: data.id });
  };

  if (fragmentRef == null || !data.profilePicture) {
    return null;
  }

  return (
    <div className="byline" ref={hoverRef}>
      <Image
        fragmentRef={data.profilePicture}
        width={60}
        height={60}
        className="byline__image"
      />
      <div className="byline__name">{data.name}</div>
      <Hovercard targetRef={hoverRef} onBeginHover={onBeginHover}>
        {hovercardQueryRef ? (
          <PosterDetailsHovercardContents queryRef={hovercardQueryRef} />
        ) : null}
      </Hovercard>
    </div>
  );
};
