import React from "react";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <div className="flex items-center gap-2">
      Search
      <Input
        type="text"
        placeholder="Search guitar by name"
        className="max-w-xs"
      />
    </div>
  );
};

export default Search;
