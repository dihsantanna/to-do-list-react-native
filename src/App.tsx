import { StatusBar } from 'react-native';

import { CustomToast } from '@components/CustomToast';

import { Routes } from './routes';

export function App() {
  return (
    <>
      <StatusBar />
      <Routes />
      <CustomToast />
    </>
  );
}
