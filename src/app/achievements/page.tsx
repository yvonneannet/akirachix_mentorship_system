// "use client"
// import { useState } from 'react';
// import Layout from '../components/layout';

// export default function Achievements() {
//   const [achievements, setAchievements] = useState([
//     "Got an internship with Flix Health",
//     "Did workouts for two weeks without slipping"
//   ]);
//   const [newAchievement, setNewAchievement] = useState('');

//   const addAchievement = () => {
//     if (newAchievement.trim() !== '') {
//       setAchievements([...achievements, newAchievement]);
//       setNewAchievement('');
//     }
//   };

//   const deleteAchievement = (index: number) => {
//     const updatedAchievements = [...achievements];
//     updatedAchievements.splice(index, 1);
//     setAchievements(updatedAchievements);
//   };

//   return (
//     <Layout>
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-2xl mb-6">Document Your Achievements</h1>
//         <div className="mb-4 flex">
//           <input
//             type="text"
//             value={newAchievement}
//             onChange={(e) => setNewAchievement(e.target.value)}
//             className="flex-grow border rounded-l px-4 py-2"
//             placeholder="Add new achievement"
//           />
//           <button onClick={addAchievement} className="bg-blue-500 text-white px-4 py-2 rounded-r">
//             Add Achievement
//           </button>
//         </div>
//         <ul>
//           {achievements.map((achievement, index) => (
//             <li key={index} className="mb-2 p-2 border rounded flex items-center">
//               <span>{achievement}</span>
//               <button onClick={() => deleteAchievement(index)} className="ml-auto text-red-500">
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </Layout>
//   );
// }






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
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl mb-6  text-center mt-20">Document Your Achievements</h1>

                
                <div className="mb-4 flex">
                    <input
                        type="text"
                        value={newAchievement}
                        onChange={(e) => setNewAchievement(e.target.value)}
                        className="flex-grow border rounded-l px-4 py-2"
                        placeholder="Add new achievement"
                    />
                    <button
                        onClick={addAchievement}
                        className="bg-blue-500 text-white px-4 py-2 rounded-r"
                    >
                        Add Achievement
                    </button>
                </div>

               
                <ul>
                    {achievements.map((achievement, index) => (
                        <li key={index} className="mb-2 p-2 border rounded flex items-center">
                            {isEditing === index ? (
                                <input
                                    type="text"
                                    value={editedAchievement}
                                    onChange={(e) => setEditedAchievement(e.target.value)}
                                    className="flex-grow border px-2 py-1"
                                />
                            ) : (
                                <span>{achievement}</span>
                            )}

                            
                            {isEditing === index ? (
                                <button
                                    onClick={() => saveEditedAchievement(index)}
                                    className="ml-2 text-blue-500"
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={() => startEditing(index)}
                                    className="ml-auto text-blue-500"
                                >
                                    <span role="img" aria-label="Edit">✏️</span> Edit
                                </button>
                            )}

                            {/* Delete Button */}
                            <button
                                onClick={() => deleteAchievement(index)}
                                className="ml-4 text-red-500"
                            >
                                <span role="img" aria-label="Delete">❌</span> Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
}
