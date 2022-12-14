import Navbar from "../../components/Navbar";
import SignUpForm from "../../components/SignUpForm";
import './styles.css';

export default function SignUp() {
    return (
        <>
            <Navbar />
            <main className="w-full min-h-screen flex">
                <div className="bg-nurse w-[50%]" />
                <div className="w-[50%] pt-8 flex flex-col items-center justify-center">
                    <SignUpForm />
                </div>
            </main>
        </>
    )
}