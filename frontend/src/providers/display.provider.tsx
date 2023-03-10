import { useMediaQuery } from '@chakra-ui/react';
import { DisplayCtx } from '../contexts';

const DisplayProvider = (props: { children: any }) => {
  const { children } = props;
  const [isLargerThan900] = useMediaQuery('(min-width: 48em)');

  return (
    <DisplayCtx.Provider value={{ isLargerThan900 }}>
      {children}
    </DisplayCtx.Provider>
  );
};

export default DisplayProvider;
