import './style.css';

export default function SelectOptions(props) {
  return (
    <>
      <option value={props.value}>{props.opcao}</option>
    </>
  );
}
