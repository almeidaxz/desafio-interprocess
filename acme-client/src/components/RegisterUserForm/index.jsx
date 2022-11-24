import { useState } from "react";
import { Eye, EyeClosed } from "phosphor-react";
import popup from "../../utils/toastify";
import api from "../../services/apiConnection.js";
import { useNavigate } from "react-router-dom";

export default function RegisterUserForm() {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
    const [registerUserForm, setRegisterUserForm] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: ''
    });

    const handleChange = (e) => {
        setRegisterUserForm({ ...registerUserForm, [e.target.name]: e.target.value });
    }

    const registerUser = async (e) => {
        e.preventDefault();

        if (registerUserForm.password !== registerUserForm.rePassword) {
            return popup.toastError('Senhas não conferem.');
        }

        try {
            const { rePassword: _, ...userData } = registerUserForm;
            await api.post('/user/register', userData);

            popup.toastSuccess('Cadastro realizado com sucesso.');
            // navigate('/login');
            setTimeout(() => {
            }, 1000);
        } catch (error) {
            console.log(error);
            popup.toastError(error.response.data);
        }
    }

    return (
        <form
            onSubmit={registerUser}
            className="w-[500px] p-8 flex flex-col gap-8 text-white bg-slate-600 rounded-lg"
        >
            <h1 className="text-center font-bold text-xl">Registrar-se</h1>
            <label className="flex flex-col gap-2 relative">
                Nome
                <input
                    className="py-2 px-3 rounded-lg text-black"
                    name="name"
                    onChange={handleChange}
                    value={registerUserForm.name}
                    type="text"
                    placeholder="Seu nome completo"
                />
            </label>
            <label className="flex flex-col gap-2 relative">
                E-mail
                <input
                    className="py-2 px-3 rounded-lg text-black"
                    name="email"
                    onChange={handleChange}
                    value={registerUserForm.email}
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
                    value={registerUserForm.password}
                    type={showPass ? 'text' : 'password'}
                    placeholder="Mínimo de 8 caracteres"
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
            <label className="flex flex-col gap-2 relative">
                Confirme a senha
                <input
                    className="py-2 px-3 rounded-lg text-black"
                    name="rePassword"
                    onChange={handleChange}
                    value={registerUserForm.rePassword}
                    type={showPass ? 'text' : 'password'}
                    placeholder="Confirme a senha anterior"
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
                className="w-32 py-2 rounded-lg self-center text-black bg-green-400 opacity-80 hover:opacity-100"
            >
                Cadastrar
            </button>
        </form>
    )
}