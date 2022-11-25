import RegisterUserForm from "../../components/RegisterUserForm";
import './styles.css';

export default function RegisterUser() {
    return (
        <main className="w-full min-h-screen flex bg-[#f5f5f5]">
            <div className="bg-nurse w-[50%]" />
            <div className="w-[50%] flex flex-col items-center justify-center">
                <RegisterUserForm />
            </div>
        </main>
    )
}