import { API_URL } from "../../constants/api";
import { DiaryEntry } from "../../types/diary";

const updateDiary = async (diary: DiaryEntry) => {
  try {
    const response = await fetch(`${API_URL}/diaries/${diary.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(diary)
    });

    const updatedDiary = await response.json();
    return updatedDiary;
  } catch (error) {
    console.error('Error updating diary:', error);
    throw error;
  }
};

export { updateDiary };
