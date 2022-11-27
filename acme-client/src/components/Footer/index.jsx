import InterprocessLogo from '../../assets/interprocess-logo.svg';

export default function Footer() {
    return (
        <footer className="w-full fixed bottom-0 flex flex-col items-center justify-center">
            <div className="w-full h-24 text-gray-600 bg-white flex items-center justify-center">
                <strong className="font-semibold">
                    Clínicas ACME - Todos os direitos reservados
                </strong>
            </div>
            <a
                className="w-full h-12 flex items-center justify-center gap-3 text-white bg-slate-600"
                href='https://www.interprocess.com.br/contato/'
                target='_blank'
            >
                <span>Desenvolvido por</span>
                <img
                    className='h-8'
                    src={InterprocessLogo}
                    alt="interprocess logo"
                />
            </a>
        </footer>
    )
}