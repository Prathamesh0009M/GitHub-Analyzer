import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
export default function RepoList({ repos }) {
    const [allRepos, setAllRepos] = useState([]);
    const [query, setQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        setAllRepos(repos);
        setFilteredData(repos);
    }, [repos]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const filtered = allRepos.filter((repo) => repo.name.toLowerCase().includes(query.toLowerCase()) ||
            repo.description?.toLowerCase().includes(query.toLowerCase()));
        setFilteredData(filtered);
    };
    return (_jsxs("div", { className: "mt-6 space-y-6", children: [allRepos.length != 0 ? (_jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col sm:flex-row gap-3 items-center border border-white p-4 rounded-md", children: [_jsx(Input, { type: "text", placeholder: "Search repositories...", value: query, onChange: (e) => setQuery(e.target.value), className: "w-full sm:max-w-md text-black bg-gray-300" }), _jsx(Button, { type: "submit", className: "border border-white text-white", children: "Find Repo" })] })) : (_jsx(_Fragment, {})), filteredData.length === 0 ? (_jsx("p", { className: "text-muted-foreground text-sm text-center", children: "No repositories found." })) : (_jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: filteredData.map((repo) => (_jsxs("div", { className: "p-5 border rounded-xl shadow-sm  bg-black dark:bg-gray-900 hover:shadow-md transition duration-300", children: [_jsx("h2", { className: "text-xl text-white font-bold text-primary mb-1", children: repo.name }), _jsx("p", { className: "text-sm text-blue-400 text-muted-foreground mb-2", children: repo.description || "No description available." }), _jsxs("p", { className: "text-xs text-white", children: ["Created:", " ", new Date(repo.created_at).toLocaleDateString("en-IN", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })] })] }, repo.id))) }))] }));
}
