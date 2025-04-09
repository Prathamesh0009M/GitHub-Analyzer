import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import UserForm from "./components/UserForm";
import RepoList from "./components/RepoList";
import { fetchCommitEvents, fetchRepos } from "./lib/api";
import CommitStats from "./components/CommitStats";
function App() {
    const [repos, setRepos] = useState([]);
    const [allCommit, setAllCommit] = useState([]);
    const [error, setError] = useState("");
    const handleSearch = async (username) => {
        try {
            setError("");
            const data = await fetchRepos(username);
            const commitdata = await fetchCommitEvents(username);
            setAllCommit(commitdata);
            setRepos(data);
        }
        catch (err) {
            setError("User not found or error fetching data");
            setRepos([]);
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-black text-white overflow-y-auto", children: [_jsxs("div", { className: "max-w-7xl mx-auto p-4", children: [_jsx("h1", { className: "text-2xl font-bold mb-4", children: "GitHub Profile Analyzer" }), _jsx(UserForm, { onSubmit: handleSearch }), allCommit.length > 0 && _jsx(CommitStats, { events: allCommit }), error && _jsx("p", { className: "text-red-500 mt-4", children: error }), _jsx(RepoList, { repos: repos })] }), _jsxs("footer", { className: "mt-10 pb-5 border-t border-gray-700 pt-4 text-center text-sm text-gray-400", children: [_jsxs("h3", { children: ["Built by ", _jsx("span", { className: "text-white", children: "Prathamesh Jadhav" }), " "] }), _jsxs("p", { children: [_jsx("a", { href: "https://github.com/Prathamesh0009M/", target: "_blank", rel: "noopener noreferrer", className: "text-blue-400 hover:underline", children: "GitHub" }), " ", "|", " ", _jsx("a", { href: "https://www.linkedin.com/in/prathamesh0009m/", target: "_blank", rel: "noopener noreferrer", className: "text-blue-400 hover:underline", children: "LinkedIn" }), "|", " ", _jsx("a", { href: "https://x.com/Prathamesh0009m", target: "_blank", rel: "noopener noreferrer", className: "text-blue-400 hover:underline", children: "Twitter" })] })] })] }));
}
export default App;
