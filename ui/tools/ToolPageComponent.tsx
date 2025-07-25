"use client";

import { useState, ChangeEvent } from "react";
import SearchInput from "@/ui/forms/SearchInput";
import Dropdown from "@/ui/forms/Dropdown";
import { categories, makes, models, distances } from "@/lib/dropdown-options";
import { tools } from "@/lib/tools";
import ToolTab from "@/ui/tools/ToolDisplayTab";
import { useSidebar } from "@/context/SidebarContext";

export default function ToolsPageComponent() {
  const [query, setQuery] = useState("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedMake, setSelectedMake] = useState(makes[0]);
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedDistance, setSelectedDistance] = useState(distances[0]);

  const activeTools = tools.length; //placeholder for results

  const { collapsed } = useSidebar();

  return (
    <section className="py-3 md:mx-10 space-y-5">
      <SearchInput
        placeholder="Search for tools"
        value={query}
        onChange={handleSearch}
      />
      <div className="flex flex-col lg:flex-row gap-2.5 items-start lg:items-center">
        <Dropdown
          options={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          width="[150px]"
        />
        <Dropdown
          options={makes}
          selected={selectedMake}
          onSelect={setSelectedMake}
          width="[180px]"
        />
        <Dropdown
          options={models}
          selected={selectedModel}
          onSelect={setSelectedModel}
          width="[200px]"
        />
        <Dropdown
          options={distances}
          selected={selectedDistance}
          onSelect={setSelectedDistance}
          width="[150px]"
        />
      </div>
      <div>
        <h2 className="leading-7 text-2xl font-bold">
          {activeTools} available tools
        </h2>
      </div>

      {/* tools grid */}
      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ${
          collapsed && "xl:grid-cols-6"
        } gap-4`}
      >
        {tools.map((tool) => (
          <ToolTab
            key={tool.id}
            href={`/user/tools/${tool.id}`}
            image={tool.images[0]}
            title={tool.toolType}
            subtitle={`Available in ${tool.distance} miles`}
          />
        ))}
      </div>
    </section>
  );
}
