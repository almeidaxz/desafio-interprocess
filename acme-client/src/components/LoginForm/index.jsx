import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/apiConnection";
import popup from '../../utils/toastify';

export default function LoginForm() {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            await api.post('/user/login', loginForm);

            navigate('/home');
        } catch (error) {
            console.log(error);
            popup.toastError(error.response.data);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-[500px] pt-8 pb-14 px-8 flex flex-col gap-8 text-white bg-slate-600 rounded-lg"
        >
            <h1 className="text-center font-bold text-xl">Acessar</h1>
            <label className="flex flex-col gap-2 relative">
                E-mail
                <input
                    className="py-2 px-3 rounded-lg text-black"
                    name="email"
                    onChange={handleChange}
                    value={loginForm.email}
                    type="text"
                    placeholder="Seu e-mail"
                />
            </label>
            <label className="flex flex-col gap-2 relative">
                Senha
                <input
                    className="py-2 px-3 rounded-lg text-black"
                    name="password"
                    onChange={handleChange}
                    value={loginForm.password}
                    type="password"
                    placeholder="Sua senha"
                />
            </label>
            <button
                className="w-32 py-2 rounded-lg self-center bg-[#40c4ff] hover:bg-[#00a7ef] font-semibold text-white"
            >
                Acessar
            </button>
            <p className="text-center">
                Usuário não cadastrado? <span
                    className="underline opacity-80 hover:opacity-100 text-green-200 cursor-pointer"
                    onClick={(e) => navigate('/signup')}
                >
                    Clique aqui
                </span>
            </p>
        </form>
    )
}