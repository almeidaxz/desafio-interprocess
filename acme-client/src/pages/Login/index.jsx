import LoginForm from "../../components/LoginForm";
import './styles.css';

export default function Login() {
    return (
        <main className="w-full min-h-screen flex">
            <div className="w-[50%] flex flex-col items-center justify-center">
                <LoginForm />
            </div>
            <div className="bg-doc w-[50%]" />
        </main>
    )
}