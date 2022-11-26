import _ from 'lodash';
import './styles.css';
import api from '../../services/apiConnection';
import fetchAddress from '../../services/cepConnection';
import popup from '../../utils/toastify';
import { XCircle } from 'phosphor-react';

export default function PatientsModal({ patientForm, setPatientForm, INITIAL_STATE }) {

    const handleChange = (e) => {
        console.log(e.target.value);
        setPatientForm({ ...patientForm, [e.target.name]: e.target.value });
    }

    const getAddress = _.debounce(async () => {
        if (patientForm.zip_code.length !== 8) return;

        const { data } = await fetchAddress.get(`/${patientForm.zip_code}/json/`);
        setPatientForm({ ...patientForm, district: data.bairro, address_line: data.logradouro, city: data.localidade, state: data.uf });
    }, 700);

    const handleGetAddress = async (e) => {
        getAddress();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { title: _, open: __, ...patientData } = patientForm;
            console.log(patientData);
            await api.post('/patients/register', patientData);

            setPatients(data);
        } catch (error) {
            console.log(error);
            popup.toastError(error.response.data);
        }
    }

    return (
        <div
            className='modal-bg'
        >
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-[500px] px-8 py-8 gap-4 absolute text-white bg-slate-600 rounded-lg"
            >
                <XCircle
                    onClick={(e) => setPatientForm({ ...INITIAL_STATE, open: false })}
                    className='absolute right-4 top-4 cursor-pointer hover:scale-[1.05]'
                    size={30}
                />
                <h1 className="font-bold text-xl text-center">Cadastrar paciente</h1>
                <label className="flex flex-col gap-2">
                    Nome*
                    <input
                        onChange={handleChange}
                        name='name'
                        value={patientForm.name}
                        className="py-2 px-3 rounded-lg text-black"
                        type="text"
                        placeholder="Nome completo"
                    />
                </label>
                <div className="flex items-center justify-between gap-6">
                    <label className="flex flex-col w-2/5 gap-2">
                        Data de nascimento*
                        <input
                            onChange={handleChange}
                            name='birth_date'
                            value={patientForm.birth_date}
                            className="py-2 px-3 rounded-lg text-black"
                            type="date"
                        />
                    </label>
                    <label className="flex flex-col w-3/5 gap-2">
                        Gênero*
                        <select
                            className="py-2 px-3 rounded-lg"
                            name='gender'
                            value={patientForm.gender}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Selecionar</option>
                            <option>Masculino</option>
                            <option>Feminino</option>
                            <option>Não informado</option>
                        </select>
                    </label>
                </div>
                <label className="flex flex-col gap-2">
                    CPF*
                    <input
                        onChange={handleChange}
                        name='cpf'
                        value={patientForm.cpf}
                        className="py-2 px-3 rounded-lg text-black"
                        type="number"
                        placeholder="000.000.000-00"
                    />
                </label>
                <label className="flex flex-col gap-2">
                    Rua
                    <input
                        onChange={handleChange}
                        name='address_line'
                        value={patientForm.address_line}
                        className="py-2 px-3 rounded-lg text-black"
                        type="text"
                        placeholder="Rua de Exemplo"
                    />
                </label>
                <div className="flex items-center justify-between gap-6">
                    <label className="flex flex-col w-3/5 gap-2">
                        CEP
                        <input
                            onChange={handleChange}
                            onKeyUp={handleGetAddress}
                            name='zip_code'
                            value={patientForm.zip_code}
                            className="py-2 px-3 rounded-lg text-black"
                            type="number"
                            placeholder="00.000-000"
                        />
                    </label>
                    <label className="flex flex-col w-2/5 gap-2">
                        Número
                        <input
                            onChange={handleChange}
                            name='address_number'
                            value={patientForm.address_number}
                            className="py-2 px-3 rounded-lg text-black"
                            type="number"
                            placeholder="00"
                        />
                    </label>

                </div>
                <div className="flex items-center justify-between gap-6">
                    <label className="flex flex-col w-3/5 gap-2">
                        Cidade
                        <input
                            onChange={handleChange}
                            name='city'
                            value={patientForm.city}
                            className="py-2 px-3 rounded-lg text-black"
                            type="text"
                            placeholder="Porto Alegre"
                        />
                    </label>
                    <label className="flex flex-col w-2/5 gap-2">
                        Estado
                        <input
                            onChange={handleChange}
                            name='state'
                            value={patientForm.state}
                            className="py-2 px-3 rounded-lg text-black"
                            type="text"
                            placeholder="RS"
                        />
                    </label>
                </div>
                <button
                    className="w-32 py-2 mb-4 mt-2 rounded-lg self-center text-white font-semibold bg-[#40c4ff] hover:bg-[#00a7ef]"
                >
                    Adicionar
                </button>
            </form>
        </div>
    )
}