"use client";

import { Suspense } from "react";
import { SerializablePreloadedQuery } from "@/relay/loadSerializableQuery";
import useSerializablePreloadedQuery from "@/relay/useSerializablePreloadedQuery";
import {
  graphql,
  PreloadedQuery,
  // useLazyLoadQuery,
  usePreloadedQuery,
  useRelayEnvironment,
} from "react-relay";
import SidebarQueryNode, {
  SidebarQuery,
} from "@/__generated__/SidebarQuery.graphql";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ViewerProfile } from "@/components/Sidebar/ViewerProfile";
import { ContactsList } from "@/components/Sidebar/ContactsList";

const SidebarQueryGQL = graphql`
  query SidebarQuery {
    viewer {
      ...ViewerProfileFragment
      ...ContactsListFragment
    }
  }
`;

type SidebarProps = {
  preloadedQuery: SerializablePreloadedQuery<
    typeof SidebarQueryNode,
    SidebarQuery
  >;
};

export const Sidebar = ({ preloadedQuery }: SidebarProps) => {
  const environment = useRelayEnvironment();
  const queryRef = useSerializablePreloadedQuery(environment, preloadedQuery);

  return (
    <div className="sidebar">
      <Suspense fallback={<LoadingSpinner />}>
        <SidebarContents queryRef={queryRef} />
      </Suspense>
    </div>
  );
};

type SidebarContentsProps = {
  queryRef: PreloadedQuery<SidebarQuery>;
};

export const SidebarContents = ({ queryRef }: SidebarContentsProps) => {
  const data = usePreloadedQuery(SidebarQueryGQL, queryRef);

  if (!data?.viewer) {
    debugger;
    return null;
  }

  return (
    <Suspense>
      <ViewerProfile fragmentRef={data.viewer} />
      <ContactsList fragmentRef={data.viewer} />
    </Suspense>
  );
};
