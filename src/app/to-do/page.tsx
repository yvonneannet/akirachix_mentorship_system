import { useState } from 'react';
import Layout from '../components/layout';
import { Task, UserProfile } from '../utils/types';

const userProfile: UserProfile = {
  name: "Quella",
  email: "quella@example.com",
  location: "Nairobi, Kenya"
};

export default function ToDo() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      text: "Review 'Born A Crime' by Trevor Noah, focusing on chapters 1 and 2. Discuss how the issues emerging from these 2 chapters connect with your country.",
      completed: false
    }
  ]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Layout userProfile={userProfile}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl mb-6">To-Do List</h1>
        <div className="mb-4 flex">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow border rounded-l px-4 py-2"
            placeholder="Add new task"
          />
          <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded-r">
            Add Task
          </button>
        </div>
        <ul>
          {tasks.map(task => (
            <li key={task.id} className="mb-2 p-2 border rounded flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="mr-2"
              />
              <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
              <button onClick={() => deleteTask(task.id)} className="ml-auto text-red-500">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}