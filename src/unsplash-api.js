import axios from "axios";

export default async function fetchImages(query, page = 1) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      orientation: "landscape",
    },
    headers: {
      Authorization: "Client-ID l4AhjHh-h1tWWsnPzSyl7a0eTIPkuZZWPqRad2IDm60",
    },
  });
  return response;
}
