import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/UserForm.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export default function UserForm({ onSubmit }) {
    const [username, setUsername] = useState("");
    return (_jsxs("div", { className: "flex gap-2", children: [_jsx(Input, { placeholder: "Enter GitHub username", value: username, onChange: (e) => setUsername(e.target.value), className: "text-black" }), _jsx(Button, { onClick: () => onSubmit(username), className: "border border-white text-white", children: "Search" })] }));
}
