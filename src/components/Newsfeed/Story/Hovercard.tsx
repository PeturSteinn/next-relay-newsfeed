"use client";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ReactNode, useEffect, useState } from "react";

export type Props = {
  children: ReactNode;
  targetRef: { current: HTMLDivElement | null };
  onBeginHover?: () => void;
};

export const Hovercard = ({ children, targetRef, onBeginHover }: Props) => {
  const [hoverState, setHoverState] = useState<{ x: number; y: number } | null>(
    null
  );

  useEffect(() => {
    const target = targetRef.current;
    const enterCallback = (event: MouseEvent) => {
      onBeginHover?.();
      setHoverState({
        x: event.clientX,
        y: event.clientY,
      });
    };
    const leaveCallback = () => {
      setHoverState(null);
    };
    target?.addEventListener("mouseenter", enterCallback);
    target?.addEventListener("mouseleave", leaveCallback);
    return () => {
      target?.removeEventListener("mouseenter", enterCallback);
      target?.removeEventListener("mouseleave", leaveCallback);
    };
  });

  if (!hoverState) {
    return null;
  }
  return ReactDOM.createPortal(
    <React.Suspense fallback={null}>
      <div
        className="hovercard"
        style={{
          top: hoverState.y + "px",
          left: hoverState.x + "px",
        }}
      >
        {children}
      </div>
    </React.Suspense>,
    document.body
  );
};
