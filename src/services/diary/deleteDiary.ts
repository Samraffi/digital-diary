import { API_URL } from "../../constants/api";

export const deleteDiary = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/diary/${id}`, {
      method: 'DELETE'
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error deleting diary:', error);
  }
};