import { X } from 'phosphor-react';

export default function PatientDetailsModal() {
    return (
        <div className="modal-bg">
            <div
                className="w-[600px] h-[500px] px-10 py-12 absolute flex flex-col items-center justify-between rounded-lg bg-white"
            >
                <X
                    className='absolute top-6 right-6'
                    size={30}
                />
                <h1
                    className="text-2xl font-semibold"
                >
                    Detalhes do Paciente
                </h1>
                <div
                    className="text-lg w-full flex items-center justify-between"
                >
                    <div>
                        <h2 className="font-semibold">Nome</h2>
                        <p className='text-base'>Daniel Pinheiro dos Santos Almeida Grilo</p>
                    </div>
                    <div className='w-32'>
                        <h2 className="font-semibold">CPF</h2>
                        <p className='text-base'>000.000.000-00</p>
                    </div>
                </div>
                <div
                    className="text-lg w-full flex items-center justify-between"
                >
                    <div>
                        <h2 className="font-semibold">Data de Nascimento</h2>
                        <p className='text-base'>00/00/0000</p>
                    </div>
                    <div className='w-32'>
                        <h2 className="font-semibold">Gênero</h2>
                        <p className='text-base'>Feminino</p>
                    </div>
                </div>
                <div
                    className="text-lg self-start"
                >
                    <h2 className="font-semibold">Endereço</h2>
                    <p className='text-base'>Rua Aurélio Pereira de Souza, 16, São Cristóvão, Salvador/BA, 41510-885</p>
                </div>
            </div>
        </div>
    )
}