"use client";
import { useState } from 'react';
import Layout from '../components/layout';

export default function Goals() {
  const [goals, setGoals] = useState({
    shortTerm: ['Hold a meeting with my mentor'],
    longTerm: ['Get a PhD in Literature'],
    career: ['Gain stability in my chosen career', 'Take on leadership roles at work']
  });
  const [newGoal, setNewGoal] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('shortTerm');

  const addGoal = () => {
    if (newGoal.trim() !== '') {
      setGoals({
        ...goals,
        [selectedCategory]: [...goals[selectedCategory], newGoal]
      });
      setNewGoal('');
    }
  };

  const deleteGoal = (category, index) => {
    const updatedGoals = {...goals};
    updatedGoals[category].splice(index, 1);
    setGoals(updatedGoals);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl mb-6">Set Your Goals Today</h1>
        <div className="mb-4 flex flex-wrap">
          <input
            type="text"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            className="flex-grow border rounded-l px-4 py-2 mb-2 sm:mb-0"
            placeholder="Add new goal"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-4 py-2 mb-2 sm:mb-0"
          >
            <option value="shortTerm">Short-Term</option>
            <option value="longTerm">Long-Term</option>
            <option value="career">Career</option>
          </select>
          <button onClick={addGoal} className="bg-blue-500 text-white px-4 py-2 rounded-r w-full sm:w-auto">
            Add Goal
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(goals).map(([category, categoryGoals]) => (
            <div key={category} className="border p-4 rounded">
              <h2 className="text-xl mb-2">{category === 'shortTerm' ? 'Short-Term Goals' : category === 'longTerm' ? 'Long-Term Goals' : 'Career Goals'}</h2>
              <ul>
                {categoryGoals.map((goal, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <span>{goal}</span>
                    <button onClick={() => deleteGoal(category, index)} className="ml-auto text-red-500">
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}