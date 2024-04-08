import { FormEvent } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        navigate("/dashboard");
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} >
                <h2>Cadastre-se</h2>
                <input type="text" placeholder="Digite seu e-mail" />
                <input type="text" placeholder="Digite seu nome" />
                <input type="text" placeholder="Digite sua senha" />
                <button>Sign Up</button>
                <Link to="/">Já tem cadastro? Clique aqui!</Link>
            </form>
        </div>
    )
}