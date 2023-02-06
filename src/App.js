import Coworking from './pages/Coworking';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {  MultiSelectTheme } from 'chakra-multiselect'
import Home from './pages/Home';

const theme = extendTheme({
  components: {
    MultiSelect: MultiSelectTheme
  }
})


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home/>
      
      </ChakraProvider>
  );
}

export default App;
