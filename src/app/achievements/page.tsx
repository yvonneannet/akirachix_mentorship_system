

"use client";
import { useState } from 'react';
import Layout from '../components/layout';

export default function Achievements() {
    const [achievements, setAchievements] = useState([
        "Got an internship with Flo Health",
        "Did workouts for two weeks without skipping",
    ]);
    const [newAchievement, setNewAchievement] = useState('');
    const [isEditing, setIsEditing] = useState<number | null>(null);
    const [editedAchievement, setEditedAchievement] = useState('');

    const addAchievement = () => {
        if (newAchievement.trim() !== '') {
            setAchievements([...achievements, newAchievement]);
            setNewAchievement('');
        }
    };

    const deleteAchievement = (index: number) => {
        if (window.confirm("Are you sure you want to delete this achievement?")) {
            const updatedAchievements = [...achievements];
            updatedAchievements.splice(index, 1);
            setAchievements(updatedAchievements);
        }
    };

    const startEditing = (index: number) => {
        setIsEditing(index);
        setEditedAchievement(achievements[index]);
    };

    const saveEditedAchievement = (index: number) => {
        const updatedAchievements = [...achievements];
        if (editedAchievement.trim() !== '') {
            updatedAchievements[index] = editedAchievement;
            setAchievements(updatedAchievements);
        }
        setIsEditing(null);
    };

    return (
        <Layout>
            <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center mt-10 md:mt-20">
                    Document Your Achievements
                </h1>

                {/* Input and Button for New Achievement */}
                <div className="mb-4 flex flex-col sm:flex-row">
                    <input
                        type="text"
                        value={newAchievement}
                        onChange={(e) => setNewAchievement(e.target.value)}
                        className="flex-grow border rounded-l px-4 py-2 mb-2 sm:mb-0 sm:mr-2"
                        placeholder="Add new achievement"
                    />
                    <button
                        onClick={addAchievement}
                        className="bg-blue-500 text-white px-4 py-2 rounded-r"
                    >
                        Add Achievement
                    </button>
                </div>

                {/* List of Achievements */}
                <ul>
                    {achievements.map((achievement, index) => (
                        <li
                            key={index}
                            className="mb-2 p-2 border rounded flex flex-col sm:flex-row sm:items-center"
                        >
                            {isEditing === index ? (
                                <input
                                    type="text"
                                    value={editedAchievement}
                                    onChange={(e) => setEditedAchievement(e.target.value)}
                                    className="flex-grow border px-2 py-1 mb-2 sm:mb-0 sm:mr-2"
                                />
                            ) : (
                                <span className="flex-grow mb-2 sm:mb-0">{achievement}</span>
                            )}

                            {isEditing === index ? (
                                <button
                                    onClick={() => saveEditedAchievement(index)}
                                    className="text-blue-500 mb-2 sm:mb-0 sm:ml-2"
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={() => startEditing(index)}
                                    className="text-blue-500 mb-2 sm:mb-0 sm:ml-auto"
                                >
                                    ✏️ Edit
                                </button>
                            )}

                            <button
                                onClick={() => deleteAchievement(index)}
                                className="text-red-500 sm:ml-4"
                            >
                                ❌ Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
}
