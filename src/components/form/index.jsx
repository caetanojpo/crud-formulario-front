import Button from "../button";
import style from "./Form.module.scss";

function Form() {

    return (
        <section className={style.forms}>
        <form  type="submit">
            <div className={style.text}>
            <h1>Texto</h1>
            </div>
            <div className={style.inputData}>
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            <div className={style.inputData}>
                <label htmlFor=""></label>
                <input type="tel" />
            </div>
            <div className={style.inputData}>
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            <div className={style.inputData}>
                <label htmlFor=""></label>
                <input type="date" />
            </div>
            <div className={style.inputData}>
                <select name="select">
                    <option value="valor1">Valor 1</option>
                    <option value="valor2" selected>Valor 2</option>
                    <option value="valor3">Valor 3</option>
                </select>
            </div>
            <Button></Button>
        </form>
        </section>
    )
}

export default Form;