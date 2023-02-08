import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import { Navbar } from './components/navbar';

import CoworkingList from './pages/coworking/coworkingList';
import CoworkingCreate from './pages/coworking/coworkingCreate';
import CoworkingUpdate from './pages/coworking/coworkingUpdate';

import ReuniaoList from './pages/reuniao/reuniaoList';
import ReuniaoCreate from './pages/reuniao/reuniaoCreate';
import ReuniaoUpdate from './pages/reuniao/reuniaoUpdate';

import CategoriaList from './pages/categoria/categoriaList';
import CategoriaCreate from './pages/categoria/categoriaCreate';
import CategoriaUpdate from './pages/categoria/categoriaUpdate';

import ParticipanteList from './pages/participante/participanteList';
import ParticipanteCreate from './pages/participante/participanteCreate';
import ParticipanteUpdate from './pages/participante/participanteUpdate';

import PlanoList from './pages/plano/planoList';
import PlanoCreate from './pages/plano/planoCreate';
import PlanoUpdate from './pages/plano/planoUpdate';

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/coworking" element={<CoworkingList />} />
          <Route path="/coworking/criar" element={<CoworkingCreate />} />
          <Route path="/coworking/atualizar" element={<CoworkingUpdate />} />

          <Route path="/reuniao" element={<ReuniaoList />} />
          <Route path="/reuniao/criar" element={<ReuniaoCreate />} />
          <Route path="/reuniao/atualizar" element={<ReuniaoUpdate />} />

          <Route path="/categoria" element={<CategoriaList />} />
          <Route path="/categoria/criar" element={<CategoriaCreate />} />
          <Route path="/categoria/atualizar" element={<CategoriaUpdate />} />

          <Route path="/participante" element={<ParticipanteList />} />
          <Route path="/participante/criar" element={<ParticipanteCreate />} />
          <Route
            path="/participante/atualizar"
            element={<ParticipanteUpdate />}
          />

          <Route path="/plano" element={<PlanoList />} />
          <Route path="/plano/criar" element={<PlanoCreate />} />
          <Route path="/plano/atualizar" element={<PlanoUpdate />} />

          <Route path="/*" element={<div>Página não encontrada</div>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
