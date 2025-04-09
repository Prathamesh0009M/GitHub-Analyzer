import toast from "react-hot-toast"

export async function fetchRepos(username: string) {

  const toastId = toast.loading("Fetching Info")
  try {

    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    // console.log("data is ", res.json());
    if (!res.ok) {
      throw new Error("User not found or API error")
    }
    // toast.success("Fetched")
    toast.dismiss(toastId);
    return res.json()
  } catch (e) {
    toast.error("Unable To Fetch Data")
  }
  
  toast.dismiss(toastId);
  
}

export async function fetchCommitEvents(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/events/public?per_page=100`);

  if (!res.ok) {
    throw new Error("Failed to fetch events")
  }

  return res.json()
}
