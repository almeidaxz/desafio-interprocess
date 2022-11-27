import { Eye, EyeClosed } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/apiConnection";
import popup from '../../utils/toastify';
import { setItem } from "../../utils/storage";

export default function LoginForm() {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
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
            const { data } = await api.post('/user/login', loginForm);

            setItem('email', data.email);
            setItem('token', data.token);
            setItem('name', data.name);
            setItem('id', data.id);

            popup.toastSuccess(data.message);
            setTimeout(() => {
                navigate('/home');
            }, 1000);
        } catch (error) {
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
                    type={showPass ? 'text' : 'password'}
                    placeholder="Sua senha"
                />
                {showPass ?
                    <Eye
                        onClick={(e) => setShowPass(!showPass)}
                        className="absolute top-[43px] right-3 cursor-pointer"
                        color="black"
                        size={20}
                    />
                    :
                    <EyeClosed
                        onClick={(e) => setShowPass(!showPass)}
                        className="absolute top-[43px] right-3 cursor-pointer"
                        color="black"
                        size={20}
                    />
                }
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