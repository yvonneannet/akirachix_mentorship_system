
"use client";

import React, { useState, useEffect } from 'react';
import { Trash2, Edit, Save } from 'lucide-react';
import * as AlertDialog from '@radix-ui/react-alert-dialog'; 
import Layout from '../components/layout'; 

const ToDo = () => {
  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [newTask, setNewTask] = useState('');
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editTaskText, setEditTaskText] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = { id: Date.now(), text: newTask, completed: false };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = () => {
    if (taskToDelete) {
      setTasks(tasks.filter(task => task.id !== taskToDelete));
      setTaskToDelete(null);
    }
  };

  const startEditingTask = (id: number, currentText: string) => {
    setEditingTaskId(id);
    setEditTaskText(currentText);
  };

  const saveTaskEdit = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: editTaskText } : task
    ));
    setEditingTaskId(null);
    setEditTaskText('');
  };

  return (
    <Layout> 
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-12 text-center">To-Do List</h1>
        <div className="mb-4 flex flex-col sm:flex-row">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow border border-r-0 rounded-l px-4 py-2 mb-2 sm:mb-0 sm:mr-2"
            placeholder="Add new task"
          />
          <button onClick={addTask} className="bg-green-500 text-white px-4 py-2 rounded sm:rounded-l-none border border-green-500">
            Add Task
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map(task => (
            <li key={task.id} className="p-3 bg-white shadow rounded-lg flex flex-col sm:flex-row sm:items-center">
              <div className="flex items-center mb-2 sm:mb-0 sm:flex-grow">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="mr-3 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                {editingTaskId === task.id ? (
                  <input
                    type="text"
                    value={editTaskText}
                    onChange={(e) => setEditTaskText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') saveTaskEdit(task.id);
                    }}
                    className="flex-grow border border-gray-300 rounded px-2 py-1"
                  />
                ) : (
                  <span className={`flex-grow ${task.completed ? 'line-through text-gray-500' : ''}`}>
                    {task.text}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2 sm:ml-auto">
                {editingTaskId === task.id ? (
                  <button onClick={() => saveTaskEdit(task.id)} className="text-green-500">
                    <Save size={18} />
                  </button>
                ) : (
                  <button onClick={() => startEditingTask(task.id, task.text)} className="text-blue-500">
                    <Edit size={18} />
                  </button>
                )}
                <AlertDialog.Root>
                  <AlertDialog.Trigger asChild>
                    <button className="text-red-500" onClick={() => setTaskToDelete(task.id)}>
                      <Trash2 size={18} />
                    </button>
                  </AlertDialog.Trigger>
                  <AlertDialog.Portal>
                    <AlertDialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                    <AlertDialog.Content className="fixed top-1/2 left-1/2 w-96 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
                      <div>
                        <h2 className="font-bold text-lg">Are you sure you want to delete this task?</h2>
                        <p className="mt-2 text-gray-500">
                          This action cannot be undone. This will permanently delete the task.
                        </p>
                      </div>
                      <div className="mt-4 flex justify-end space-x-4">
                        <AlertDialog.Cancel asChild>
                          <button className="px-4 py-2 bg-gray-200 rounded-md">
                            Cancel
                          </button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action asChild>
                          <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={deleteTask}>
                            Delete
                          </button>
                        </AlertDialog.Action>
                      </div>
                    </AlertDialog.Content>
                  </AlertDialog.Portal>
                </AlertDialog.Root>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default ToDo;

