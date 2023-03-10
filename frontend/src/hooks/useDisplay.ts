import { useContext } from 'react';
import { DisplayCtx } from '../contexts';

const useDisplay = () => {
  const ctx = useContext(DisplayCtx);
  return ctx;
};

export default useDisplay;
