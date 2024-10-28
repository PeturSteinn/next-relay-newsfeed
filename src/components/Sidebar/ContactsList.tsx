"use client";

import { ContactsListFragment$key } from "@/__generated__/ContactsListFragment.graphql";
import { useState, useTransition } from "react";
import { graphql, useRefetchableFragment } from "react-relay";
import { Card } from "@/components/Card";
import { SearchInput } from "@/components/Sidebar/SearchInput";
import { ContactRow } from "@/components/Sidebar/ContactRow";

const ContactsListFragmentGQL = graphql`
  fragment ContactsListFragment on Viewer
  @refetchable(queryName: "ContactsListRefetchQuery")
  @argumentDefinitions(search: { type: "String", defaultValue: null }) {
    contacts(search: $search) {
      id
      ...ContactRowFragment
    }
  }
`;

type ContactsListProps = {
  fragmentRef: ContactsListFragment$key;
};

export const ContactsList = ({ fragmentRef }: ContactsListProps) => {
  const [data, refetch] = useRefetchableFragment(
    ContactsListFragmentGQL,
    fragmentRef
  );
  const [searchString, setSearchString] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSearchStringChange = (value: string) => {
    setSearchString(value);
    startTransition(() => {
      refetch({ search: value });
    });
  };

  return (
    <Card dim={true}>
      <h3>Contacts</h3>
      <SearchInput
        value={searchString}
        onChange={handleSearchStringChange}
        isPending={isPending}
      />
      {data?.contacts?.map((contact) =>
        contact ? <ContactRow key={contact.id} fragmentRef={contact} /> : null
      )}
    </Card>
  );
};
