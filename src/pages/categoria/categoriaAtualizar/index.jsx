import FormCategoria from '../../../components/forms/formCategorias';

export default function CategoriaAtualizar() {
  return (
    <FormCategoria
      titulo="Detalhes Categoria"
      podeAlterar
      desabilitar
      labelUpdate
      confirmaAlteracao
    />
  );
}
