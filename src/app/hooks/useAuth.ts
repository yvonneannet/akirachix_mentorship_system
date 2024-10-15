import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in on initial load
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (email: any, password: any) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: { email: any; password: any; }) => u.email === email && u.password === password);
    
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      setUser(user);
      return true;
    }
    return false;
  }, []);

  const signup = useCallback(async (userData: { email: any; }) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some((u: { email: any; }) => u.email === userData.email)) {
      throw new Error('Email already registered');
    }
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('currentUser');
    setUser(null);
    router.push('/login');
  }, [router]);

  return { user, loading, login, signup, logout };
}