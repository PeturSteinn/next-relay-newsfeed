"use client";

import { graphql, useFragment } from "react-relay";
import { Image } from "@/components/Image";
import { ContactRowFragment$key } from "@/__generated__/ContactRowFragment.graphql";

const ContactRowFragmentGQL = graphql`
  fragment ContactRowFragment on Actor {
    name
    profilePicture {
      ...ImageFragment
    }
  }
`;

type ContactRowProps = {
  fragmentRef: ContactRowFragment$key;
};

export const ContactRow = ({ fragmentRef }: ContactRowProps) => {
  const data = useFragment(ContactRowFragmentGQL, fragmentRef);

  if (!data?.profilePicture) {
    debugger;
    return null;
  }

  return (
    <div className="contactRow">
      <Image
        fragmentRef={data.profilePicture}
        width={60}
        height={60}
        className="contactRow__image"
      />
      <div className="contactRow__name">{data.name}</div>
    </div>
  );
};
