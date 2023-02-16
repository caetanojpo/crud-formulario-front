import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import { Navbar } from './components/navbar';

import LocacaoListar from './pages/locacao/locacaoListar';
import LocacaoCriar from './pages/locacao/locacaoCriar';
import LocacaoAtualizar from './pages/locacao/locacaoAtualizar';

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

          <Route path="/locacoes" element={<LocacaoListar />} />
          <Route path="/locacao" element={<LocacaoCriar />} />
          <Route path="/locacao/:id" element={<LocacaoAtualizar />} />

          <Route path="/reunioes" element={<ReuniaoListar />} />
          <Route path="/reuniao" element={<ReuniaoCriar />} />
          <Route path="/reuniao/:id" element={<ReuniaoAtualizar />} />

          <Route path="/categorias" element={<CategoriaListar />} />
          <Route path="/categoria" element={<CategoriaCriar />} />
          <Route path="/categoria/:id" element={<CategoriaAtualizar />} />

          <Route path="/participantes" element={<ParticipanteListar />} />
          <Route path="/participante" element={<ParticipanteCriar />} />
          <Route path="/participante/:id" element={<ParticipanteAtualizar />} />

          <Route path="/planos" element={<PlanoListar />} />
          <Route path="/plano" element={<PlanoCriar />} />
          <Route path="/plano/:id" element={<PlanoAtualizar />} />

          <Route path="/*" element={<div>Página não encontrada</div>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
