import { API_URL } from "../../constants/api";

// Fetch all diaries
export const getDiaries = async () => {
  try {
    const response = await fetch(`${API_URL}/diaries`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching diaries:', error);
  }
};
