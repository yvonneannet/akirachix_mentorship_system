import { useState } from 'react';
import Layout from '../components/layout';

export default function Achievements() {
  const [achievements, setAchievements] = useState([
    "Got an internship with Flix Health",
    "Did workouts for two weeks without slipping"
  ]);
  const [newAchievement, setNewAchievement] = useState('');

  const addAchievement = () => {
    if (newAchievement.trim() !== '') {
      setAchievements([...achievements, newAchievement]);
      setNewAchievement('');
    }
  };

  const deleteAchievement = (index: number) => {
    const updatedAchievements = [...achievements];
    updatedAchievements.splice(index, 1);
    setAchievements(updatedAchievements);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl mb-6">Document Your Achievements</h1>
        <div className="mb-4 flex">
          <input
            type="text"
            value={newAchievement}
            onChange={(e) => setNewAchievement(e.target.value)}
            className="flex-grow border rounded-l px-4 py-2"
            placeholder="Add new achievement"
          />
          <button onClick={addAchievement} className="bg-blue-500 text-white px-4 py-2 rounded-r">
            Add Achievement
          </button>
        </div>
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index} className="mb-2 p-2 border rounded flex items-center">
              <span>{achievement}</span>
              <button onClick={() => deleteAchievement(index)} className="ml-auto text-red-500">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}