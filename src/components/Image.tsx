"use client";

import { ImageFragment$key } from "@/__generated__/ImageFragment.graphql";
import { graphql, useFragment } from "react-relay";
import NextImage from "next/image";

const ImageFragmentGQL = graphql`
  fragment ImageFragment on Image
  @argumentDefinitions(
    width: { type: "Int", defaultValue: null }
    height: { type: "Int", defaultValue: null }
  ) {
    url(width: $width, height: $height)
    altText
  }
`;

type ImageProps = {
  fragmentRef: ImageFragment$key;
  width?: number;
  height?: number;
  className?: string;
};

export const Image = ({
  fragmentRef,
  width,
  height,
  className,
}: ImageProps) => {
  const data = useFragment(ImageFragmentGQL, fragmentRef);

  // TODO: Does this do something?
  if (fragmentRef === null) {
    debugger;
    return null;
  }

  return (
    <NextImage
      key={data?.url}
      src={data?.url}
      width={width}
      height={height}
      className={className}
      alt={data?.altText ?? ""}
    />
  );
};
