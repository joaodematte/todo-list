import { NextPage } from 'next';
import { useState } from 'react';
import InputTask from '../components/InputTask';
import Task from '../components/Task';

interface Task {
  id: number;
  taskName: string;
  isDone: boolean;
}

const Home: NextPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTodo = (taskName: string) => {
    const lastTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;

    setTasks([...tasks, { id: lastTaskId + 1, taskName, isDone: false }]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const setTaskDone = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, isDone: true } : task)));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <main className="w-full max-w-md rounded p-4">
        <InputTask addTodo={addTodo} />

        <div className="mt-4 w-full flex flex-col gap-2">
          {tasks.map(({ id, taskName, isDone }) => (
            <Task
              key={id}
              id={id}
              taskName={taskName}
              isDone={isDone}
              deleteTask={deleteTask}
              setTaskDone={setTaskDone}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
