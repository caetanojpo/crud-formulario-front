import FormAtualizarCP from '../../../components/forms/formAtualizarCP';

export default function CategoriaAtualizar() {
  return (
    <FormAtualizarCP
      titulo="Detalhes da Categoria"
      labelInput="Descrição da Categoria: "
      voltar="/categorias"
    />
  );
}
