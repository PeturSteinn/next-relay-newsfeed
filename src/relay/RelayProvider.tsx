"use client";

import { ReactNode } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { getCurrentEnvironment } from "./environment";

type RelayProviderProps = {
  children: ReactNode;
};

export const RelayProvider = ({ children }: RelayProviderProps) => {
  const environment = getCurrentEnvironment();

  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  );
};
