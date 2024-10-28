"use client";

import { ViewerProfileFragment$key } from "@/__generated__/ViewerProfileFragment.graphql";
import { graphql, useFragment } from "react-relay";
import { Card } from "@/components/Card";

const ViewerProfileFragmentGQL = graphql`
  fragment ViewerProfileFragment on Viewer {
    actor {
      name
      profilePicture {
        url
      }
    }
  }
`;

type ViewerProfileProps = {
  fragmentRef: ViewerProfileFragment$key;
};

export const ViewerProfile = ({ fragmentRef }: ViewerProfileProps) => {
  const data = useFragment(ViewerProfileFragmentGQL, fragmentRef);

  if (!data) {
    debugger;
    return null;
  }

  return (
    <Card dim={true}>
      <div className="viewerProfile">
        <img src={data.actor?.profilePicture?.url} height="60" width="60" />
        <div className="viewerProfile__name">{data.actor?.name}</div>
        <div className="viewerProfile__menu">⋯</div>
      </div>
    </Card>
  );
};
