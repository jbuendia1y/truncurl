import { ChakraProvider } from '@chakra-ui/react';
import AuthProvider from './auth.provider';
import SidenavProvider from './sidenav.provider';

const Providers = (props: { children: any }) => {
  const { children } = props;

  return (
    <AuthProvider>
      <ChakraProvider>
        <SidenavProvider>{children}</SidenavProvider>
      </ChakraProvider>
    </AuthProvider>
  );
};

export default Providers;
