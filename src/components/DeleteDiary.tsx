import { DeleteDiaryProps } from '../types/diary';

const DeleteDiary = ({ isOpen, onConfirm, onCancel }: DeleteDiaryProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600/50 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Удалить запись?
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              Вы уверены, что хотите удалить эту запись? Это действие необратимо.
            </p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mr-2"
              onClick={onConfirm}
            >
              Удалить
            </button>
            <button
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={onCancel}
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDiary;
