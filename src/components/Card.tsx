import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  dim?: boolean;
};

export const Card = ({ children, dim }: CardProps) => {
  return <div className={"card" + (dim ? " dim" : "")}>{children}</div>;
};
