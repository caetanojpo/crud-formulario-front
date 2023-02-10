import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import { Navbar } from './components/navbar';

import CoworkingListar from './pages/coworking/coworkingListar';
import CoworkingCriar from './pages/coworking/coworkingCriar';
import CoworkingAtualizar from './pages/coworking/coworkingAtualizar';

import ReuniaoListar from './pages/reuniao/reuniaoListar';
import ReuniaoCriar from './pages/reuniao/reuniaoCriar';
import ReuniaoAtualizar from './pages/reuniao/reuniaoAtualizar';

import CategoriaListar from './pages/categoria/categoriaListar';
import CategoriaCriar from './pages/categoria/categoriaCriar';
import CategoriaAtualizar from './pages/categoria/categoriaAtualizar';

import ParticipanteListar from './pages/participante/participanteListar';
import ParticipanteCriar from './pages/participante/participanteCriar';
import ParticipanteAtualizar from './pages/participante/participanteAtualizar';

import PlanoListar from './pages/plano/planoListar';
import PlanoCriar from './pages/plano/planoCriar';
import PlanoAtualizar from './pages/plano/planoAtualizar';

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/coworking" element={<CoworkingListar />} />
          <Route path="/coworking/criar" element={<CoworkingCriar />} />
          <Route path="/coworking/atualizar" element={<CoworkingAtualizar />} />

          <Route path="/reuniao" element={<ReuniaoListar />} />
          <Route path="/reuniao/criar" element={<ReuniaoCriar />} />
          <Route path="/reuniao/atualizar" element={<ReuniaoAtualizar />} />

          <Route path="/categoria" element={<CategoriaListar />} />
          <Route path="/categoria/criar" element={<CategoriaCriar />} />
          <Route path="/categoria/atualizar" element={<CategoriaAtualizar />} />

          <Route path="/participante" element={<ParticipanteListar />} />
          <Route path="/participante/criar" element={<ParticipanteCriar />} />
          <Route
            path="/participante/atualizar"
            element={<ParticipanteAtualizar />}
          />

          <Route path="/plano" element={<PlanoListar />} />
          <Route path="/plano/criar" element={<PlanoCriar />} />
          <Route path="/plano/atualizar" element={<PlanoAtualizar />} />

          <Route path="/*" element={<div>Página não encontrada</div>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
