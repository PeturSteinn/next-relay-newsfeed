"use client";

import * as React from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";

const { useEffect, useRef, useLayoutEffect } = React;

export const InfiniteScrollTrigger = ({
  onEndReached,
  isLoadingNext,
  hasNext,
}: {
  onEndReached: () => void;
  isLoadingNext: boolean;
  hasNext: boolean;
}) => {
  const onIntersect = useDynamicCallback_UNSAFE(() => {
    if (hasNext && !isLoadingNext) {
      onEndReached();
    }
  });

  const observer = useRef<IntersectionObserver | null>(null);
  if (observer.current === null) {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onIntersect();
      }
    }, {});
  }

  const targetRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const target = targetRef.current;
    if (observer.current !== null && target !== null) {
      observer.current.observe(target);
    }
    return () => {
      if (observer.current !== null && target !== null) {
        observer.current.unobserve(target);
      }
    };
  }, [targetRef]);

  return (
    <>
      <div ref={targetRef} />
      {isLoadingNext && <LoadingSpinner />}
    </>
  );
};

export default InfiniteScrollTrigger;

// This is an unsafe hack that you shouldn't copy. It works in this
// very specific situation because the callback is not passed to any
// children of this component. If it were, they could observe a stale
// version of the callback.
function useDynamicCallback_UNSAFE(callback: () => void) {
  const ref = useRef(callback);
  useLayoutEffect(() => {
    ref.current = callback;
  }, [callback]);
  return React.useCallback(() => ref.current(), []);
}
