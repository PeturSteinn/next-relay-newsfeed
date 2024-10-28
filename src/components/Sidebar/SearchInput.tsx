"use client";

import { SmallSpinner } from "@/components/SmallSpinner";

type SearchInputProps = {
  value: string;
  onChange: (newValue: string) => void;
  isPending?: boolean;
};

export const SearchInput = ({
  value,
  onChange,
  isPending,
}: SearchInputProps) => {
  return (
    <div className="searchInput">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
      />
      {isPending && <SmallSpinner />}
    </div>
  );
};
