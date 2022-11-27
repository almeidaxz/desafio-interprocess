import { X } from 'phosphor-react';

export default function PatientDetailsModal({ selectedPatient, setSelectedPatient }) {
    const INITIAL_STATE = {
        open: false,
        name: '',
        address: '',
        cpf: '',
        birth_date: '',
        gender: ''
    }

    const handleClose = () => {
        setSelectedPatient(INITIAL_STATE);
    }

    return (
        <div className="modal-bg z-10">
            <div
                className="w-[600px] h-[500px] px-10 pt-12 pb-16 absolute flex flex-col items-center justify-between rounded-lg bg-white z-20"
            >
                <X
                    onClick={handleClose}
                    className='absolute top-6 right-6 cursor-pointer hover:scale-[1.05]'
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
                        <p className='text-base'>
                            {selectedPatient.name}
                        </p>
                    </div>
                    <div className='w-32'>
                        <h2 className="font-semibold">CPF</h2>
                        <p className='text-base'>
                            {selectedPatient.cpf}
                        </p>
                    </div>
                </div>
                <div
                    className="text-lg w-full flex items-center justify-between"
                >
                    <div>
                        <h2 className="font-semibold">Data de Nascimento</h2>
                        <p className='text-base'>
                            {selectedPatient.birth_date}
                        </p>
                    </div>
                    <div className='w-32'>
                        <h2 className="font-semibold">Gênero</h2>
                        <p className='text-base'>
                            {selectedPatient.gender}
                        </p>
                    </div>
                </div>
                <div
                    className="text-lg self-start"
                >
                    <h2 className="font-semibold">Endereço</h2>
                    <p className='text-base'>
                        {selectedPatient.address}
                    </p>
                </div>
            </div>
        </div >
    )
}