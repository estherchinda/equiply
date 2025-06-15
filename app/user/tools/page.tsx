"use client";

import { useState, ChangeEvent } from "react";
import SearchInput from "@/app/ui/forms/SearchInput"
import Dropdown from "@/app/ui/forms/Dropdown";
import {categories, makes, models, distances} from "@/app/lib/dropdown-options";
import { tools } from "@/app/lib/tools";
import Link from "next/link";
// import Image from "next/image";

export default function Dashboard() {
    const [query, setQuery] = useState("");
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedMake, setSelectedMake] = useState(makes[0]);
    const [selectedModel, setSelectedModel] = useState(models[0]);
    const [selectedDistance, setSelectedDistance] = useState(distances[0]);

    const results = 123; //placeholder for results

    return (
        <section className="py-3 md:mx-10 space-y-5 h-full">
            <SearchInput placeholder="Search for tools" value={query} onChange={handleSearch} />
            <div className="flex flex-col md:flex-row gap-2.5 items-start md:items-center">
                <Dropdown options={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
                <Dropdown options={makes} selected={selectedMake} onSelect={setSelectedMake} />
                <Dropdown options={models} selected={selectedModel} onSelect={setSelectedModel} />
                <Dropdown options={distances} selected={selectedDistance} onSelect={setSelectedDistance} />
            </div>
            <div>
                <h2 className="leading-7 text-2xl font-bold">{results} results</h2>
            </div>

            {/* tools grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {tools.map(tool => (
                    <div key={tool.id} className="space-y-2 hover:cursor-pointer relative group">
                        {/* image */}
                        <div className="h-[100px] w-full md:w-[170px] rounded-[12px] bg-[#264533]">
                            {/* <Image src={tool.image} alt={tool.toolType} height={100} width={170} style={{height: "auto", width: "auto"}} /> */}
                            {/* link to details */}
                            <Link
                            href={`/user/tools/${tool.id}`}
                            className="absolute top-0 hidden group-hover:block h-[100px] w-full md:w-[170px] rounded-[12px] text-center justify-center"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                            >
                                <p className="flex justify-center items-center h-full w-full text-sm">See more</p>
                            </Link>

                        </div>
                        <h3 className="text-base font-medium leading-6">{tool.toolType}</h3>
                        <p className="text-sm text-[#94C7A8] leading-5">Available in {tool.distance} miles</p>
                    </div>
                ))}
            </div>
        </section>
    )
}