import { ChakraProvider } from "@chakra-ui/react";
import SidenavProvider from "./sidenav.provider";

const Providers = (props: { children: any }) => {
  const { children } = props;
  return (
    <ChakraProvider>
      <SidenavProvider>{children}</SidenavProvider>
    </ChakraProvider>
  );
};

export default Providers;
