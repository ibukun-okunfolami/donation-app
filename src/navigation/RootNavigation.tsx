import React from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import { Authenticated, NonAuthenticated } from './MainNavigation';

const RootNavigation = () => {
  const user = useAppSelector(state => state.user);
  return <>{user.isLoggedIn ? <Authenticated /> : <NonAuthenticated />}</>;
};

export default RootNavigation;
