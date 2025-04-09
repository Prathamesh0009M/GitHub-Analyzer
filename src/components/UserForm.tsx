// src/components/UserForm.tsx

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

type Props = {
  onSubmit: (username: string) => void
}

export default function UserForm({ onSubmit }: Props) {

    const [username, setUsername] = useState("")
    
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={() => onSubmit(username)}>Search</Button>
    </div>
  )
}
