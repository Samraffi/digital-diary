import { API_URL } from "../../constants/api";

// Fetch all diaries
export const getDiary = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/diaries/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching diary:', error);
    throw error;
  }
};
