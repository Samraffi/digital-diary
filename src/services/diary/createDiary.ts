import { API_URL } from "../../constants/api";
import { DiaryEntry } from "../../types/diary";

export const createDiary = async (diary: Omit<DiaryEntry, 'id'>) => {
  try {
    const response = await fetch(`${API_URL}/diaries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(diary)
    });

    const newDiary = await response.json();
    return newDiary;
  } catch (error) {
    console.error('Error creating diary:', error);
    throw error;
  }
};