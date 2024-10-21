
// "use client";
// import { useState } from 'react';
// import Layout from '../components/layout';
// import * as AlertDialog from '@radix-ui/react-alert-dialog'; 


// type Goals = {
//   shortTerm: string[];
//   longTerm: string[];
//   career: string[];
// };

// type GoalCategory = keyof Goals;

// export default function Goals() {
//   const [goals, setGoals] = useState<Goals>({
//     shortTerm: ['Hold a meeting with my mentor'],
//     longTerm: ['Get a PhD in Literature'],
//     career: ['Gain stability in my chosen career', 'Take on leadership roles at work']
//   });
//   const [newGoal, setNewGoal] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState<GoalCategory>('shortTerm');
//   const [goalToDelete, setGoalToDelete] = useState<{ category: GoalCategory; index: number } | null>(null);

//   const addGoal = () => {
//     if (newGoal.trim() !== '') {
//       setGoals(prevGoals => ({
//         ...prevGoals,
//         [selectedCategory]: [...prevGoals[selectedCategory], newGoal]
//       }));
//       setNewGoal('');
//     }
//   };

//   const deleteGoal = () => {
//     if (goalToDelete) {
//       const { category, index } = goalToDelete;
//       const updatedGoals = { ...goals };
//       updatedGoals[category].splice(index, 1);
//       setGoals(updatedGoals);
//       setGoalToDelete(null); 
//     }
//   };

//   return (
//     <Layout>
//       <div className="max-w-4xl mx-auto mt-10"> 
//         <h1 className="text-2xl mb-6 text-center">Set Your Goals Today</h1>
//         <div className="mb-4 flex flex-wrap">
//           <input
//             type="text"
//             value={newGoal}
//             onChange={(e) => setNewGoal(e.target.value)}
//             className="flex-grow border rounded-l px-4 py-2 mb-2 sm:mb-0"
//             placeholder="Add new goal"
//           />
//           <select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value as GoalCategory)} 
//             className="border px-4 py-2 mb-2 sm:mb-0"
//           >
//             <option value="shortTerm">Short-Term</option>
//             <option value="longTerm">Long-Term</option>
//             <option value="career">Career</option>
//           </select>
//           <button onClick={addGoal} className="bg-blue-500 text-white px-4 py-2 rounded-r w-full sm:w-auto">
//             Add Goal
//           </button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {Object.entries(goals).map(([category, categoryGoals]) => (
//             <div key={category} className="border p-4 rounded">
//               <h2 className="text-xl mb-2 font-bold">
//                 {category === 'shortTerm' ? 'Short-Term Goals' : category === 'longTerm' ? 'Long-Term Goals' : 'Career Goals'}
//               </h2>
//               <ul>
//                 {categoryGoals.map((goal, index) => (
//                   <li key={index} className="mb-2 flex items-center">
//                     <span>{goal}</span>
//                     <button
//                       onClick={() => setGoalToDelete({ category: category as GoalCategory, index })}
//                       className="ml-auto text-red-500"
//                     >
//                       Delete
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

        
//         <AlertDialog.Root open={!!goalToDelete} onOpenChange={(open) => { if (!open) setGoalToDelete(null); }}>
//           <AlertDialog.Portal>
//             <AlertDialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
//             <AlertDialog.Content className="fixed top-1/2 left-1/2 w-96 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
//               <AlertDialog.Title className="font-bold text-lg">Confirm Deletion</AlertDialog.Title>
//               <AlertDialog.Description className="mt-2 text-gray-500">
//                 Are you sure you want to delete this goal? This action cannot be undone.
//               </AlertDialog.Description>
//               <div className="mt-4 flex justify-end space-x-4">
//                 <AlertDialog.Cancel asChild>
//                   <button className="px-4 py-2 bg-gray-200 rounded-md">Cancel</button>
//                 </AlertDialog.Cancel>
//                 <AlertDialog.Action asChild>
//                   <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={deleteGoal}>
//                     Delete
//                   </button>
//                 </AlertDialog.Action>
//               </div>
//             </AlertDialog.Content>
//           </AlertDialog.Portal>
//         </AlertDialog.Root>
//       </div>
//     </Layout>
//   );
// }









"use client";
import { useState } from 'react';
import Layout from '../components/layout';
import * as AlertDialog from '@radix-ui/react-alert-dialog'; 

type Goals = {
  shortTerm: string[];
  longTerm: string[];
  career: string[];
};

type GoalCategory = keyof Goals;

export default function Goals() {
  const [goals, setGoals] = useState<Goals>({
    shortTerm: [],
    longTerm: [],
    career: []
  });
  const [newGoal, setNewGoal] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<GoalCategory>('shortTerm');
  const [goalToDelete, setGoalToDelete] = useState<{ category: GoalCategory; index: number } | null>(null);

  const addGoal = () => {
    if (newGoal.trim() !== '') {
      setGoals(prevGoals => ({
        ...prevGoals,
        [selectedCategory]: [...prevGoals[selectedCategory], newGoal]
      }));
      setNewGoal('');
    }
  };

  const deleteGoal = () => {
    if (goalToDelete) {
      const { category, index } = goalToDelete;
      const updatedGoals = { ...goals };
      updatedGoals[category].splice(index, 1);
      setGoals(updatedGoals);
      setGoalToDelete(null); 
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-10"> 
        <h1 className="text-2xl mb-6 text-center">Set Your Goals Today</h1>
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
            onChange={(e) => setSelectedCategory(e.target.value as GoalCategory)} 
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
              <h2 className="text-xl mb-2 font-bold">
                {category === 'shortTerm' ? 'Short-Term Goals' : category === 'longTerm' ? 'Long-Term Goals' : 'Career Goals'}
              </h2>
              <ul>
                {categoryGoals.map((goal, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <span>{goal}</span>
                    <button
                      onClick={() => setGoalToDelete({ category: category as GoalCategory, index })}
                      className="ml-auto text-red-500"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <AlertDialog.Root open={!!goalToDelete} onOpenChange={(open) => { if (!open) setGoalToDelete(null); }}>
          <AlertDialog.Portal>
            <AlertDialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            <AlertDialog.Content className="fixed top-1/2 left-1/2 w-96 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
              <AlertDialog.Title className="font-bold text-lg">Confirm Deletion</AlertDialog.Title>
              <AlertDialog.Description className="mt-2 text-gray-500">
                Are you sure you want to delete this goal? This action cannot be undone.
              </AlertDialog.Description>
              <div className="mt-4 flex justify-end space-x-4">
                <AlertDialog.Cancel asChild>
                  <button className="px-4 py-2 bg-gray-200 rounded-md">Cancel</button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={deleteGoal}>
                    Delete
                  </button>
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </div>
    </Layout>
  );
}
