// src/lib/api.ts

export async function fetchRepos(username: string) {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    // console.log("data is ", res.json());
    if (!res.ok) {
      throw new Error("User not found or API error")
    }
    return res.json()
  }
  
  export async function fetchCommitEvents(username: string) {
      const res = await fetch(`https://api.github.com/users/${username}/events/public`)
    if (!res.ok) {
      throw new Error("Failed to fetch events")
      }
      
    return res.json()
  }
  