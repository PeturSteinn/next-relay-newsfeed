"use client";

import { PosterDetailsHovercardContentsBodyFragment$key } from "@/__generated__/PosterDetailsHovercardContentsBodyFragment.graphql";
import { PosterDetailsHovercardContentsQuery } from "@/__generated__/PosterDetailsHovercardContentsQuery.graphql";
import {
  graphql,
  PreloadedQuery,
  useFragment,
  usePreloadedQuery,
} from "react-relay";
import { Image } from "@/components/Image";
import { OrganizationKind } from "@/components/Newsfeed/Story/OrganizationKind";
import { Timestamp } from "@/components/Newsfeed/Story/Timestamp";

export const PosterDetailsHovercardContentsQueryGQL = graphql`
  query PosterDetailsHovercardContentsQuery($posterID: ID!) {
    node(id: $posterID) {
      ... on Actor {
        ...PosterDetailsHovercardContentsBodyFragment
      }
    }
  }
`;

const PosterDetailsHovercardContentsBodyFragmentGQL = graphql`
  fragment PosterDetailsHovercardContentsBodyFragment on Actor {
    name
    joined
    profilePicture {
      ...ImageFragment
    }
    ... on Organization {
      organizationKind
    }
    ... on Person {
      location {
        name
      }
    }
  }
`;

type PosterDetailsHovercardContentsProps = {
  queryRef: PreloadedQuery<PosterDetailsHovercardContentsQuery>;
};

export const PosterDetailsHovercardContents = ({
  queryRef,
}: PosterDetailsHovercardContentsProps) => {
  const data = usePreloadedQuery(
    PosterDetailsHovercardContentsQueryGQL,
    queryRef
  );

  if (!data?.node) {
    return null;
  }

  return (
    <div className="posterHovercard">
      <PosterDetailsHovercardContentsBody fragmentRef={data.node} />
    </div>
  );
};

type PosterDetailsHovercardContentsBodyProps = {
  fragmentRef: PosterDetailsHovercardContentsBodyFragment$key;
};

export const PosterDetailsHovercardContentsBody = ({
  fragmentRef,
}: PosterDetailsHovercardContentsBodyProps) => {
  const data = useFragment(
    PosterDetailsHovercardContentsBodyFragmentGQL,
    fragmentRef
  );

  if (!data.profilePicture) {
    return null;
  }

  return (
    <>
      <Image
        fragmentRef={data.profilePicture}
        width={128}
        height={128}
        className="posterHovercard__image"
      />
      <div className="posterHovercard__name">{data.name}</div>
      <ul className="posterHovercard__details">
        <li>
          Joined <Timestamp time={data.joined ?? ""} />
        </li>
        {data.location != null && <li>{data.location.name}</li>}
        {data.organizationKind != null && (
          <li>
            <OrganizationKind kind={data.organizationKind} />
          </li>
        )}
      </ul>
      <div className="posterHovercard__buttons">
        <button>Friend</button>
        <button>Message</button>
      </div>
    </>
  );
};
