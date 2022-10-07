import { Check, Trash } from 'phosphor-react';

interface Props {
  id: number;
  taskName: string;
  isDone: boolean;
  deleteTask: (id: number) => void;
  setTaskDone: (id: number) => void;
}

const Task = ({ id, taskName, isDone, deleteTask, setTaskDone }: Props) => {
  return (
    <div className="w-full flex justify-between items-center p-2 bg-white rounded">
      {isDone ? (
        <span className="font-medium line-through italic text-gray-500">{taskName}</span>
      ) : (
        <span className="font-medium">{taskName}</span>
      )}
      <div className="flex gap-2">
        <button
          className="p-2 rounded bg-red-500 text-white font-medium hover:bg-red-600"
          onClick={() => deleteTask(id)}
        >
          <Trash size={18} weight="fill" />
        </button>
        <button
          disabled={isDone}
          className="p-2 rounded bg-green-500 text-white font-medium hover:bg-green-600 disabled:opacity-50 disabled:hover:bg-green-500"
          onClick={() => setTaskDone(id)}
        >
          <Check size={18} weight="bold" />
        </button>
      </div>
    </div>
  );
};

export default Task;
