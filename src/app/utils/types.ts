

export interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export interface Goals {
    shortTerm: string[];
    longTerm: string[];
    career: string[];
  }
  
  export type GoalCategory = 'shortTerm' | 'longTerm' | 'career';
  
  export interface MentorProfile {
    name: string;
    profession: string;
    placeOfWork: string;
    nationality: string;
    interests: string[];
    bio: string;
    imageUrl: string;
  }
  
  export interface UserProfile {
    name: string;
    email: string;
    location: string;
  }