import { FormEvent } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        navigate("/dashboard");
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <input type="text" placeholder="Digite seu e-mail" />
                <input type="text" placeholder="Digite sua senha" />
                <button>Login</button>
                <button type="button">Limpar</button>
                <Link to="/sign-up">Não tem cadastro? Clique aqui!</Link>
            </form>
        </div>

    )
}