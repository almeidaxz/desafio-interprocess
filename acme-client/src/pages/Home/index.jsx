import { useEffect, useState } from "react";
import PatientRow from "../../components/PatientRow";
import popup from '../../utils/toastify';
import api from '../../services/apiConnection';
import PatientsModal from "../../components/PatientsModal";

export default function Home() {
  const INITIAL_STATE = {
    title: '',
    open: false,
    name: '',
    birth_date: '',
    gender: '',
    cpf: '',
    address_line: '',
    address_number: '',
    zip_code: '',
    city: '',
    state: ''
  }
  const [patients, setPatients] = useState();
  const [patientForm, setPatientForm] = useState(INITIAL_STATE);

  const getAllPatients = async () => {
    try {
      const { data } = await api.get('patients/list');

      setPatients(data);
    } catch (error) {
      popup.toastError('Erro ao buscar pacientes. Tente novamente.');
    }
  }

  useEffect(() => {
    getAllPatients();
  }, []);

  return (
    <main className="w-[1024px] my-0 mx-auto flex flex-col items-center justify-center">
      {patientForm.open &&
        <PatientsModal
          patientForm={patientForm}
          setPatientForm={setPatientForm}
          INITIAL_STATE={INITIAL_STATE}
        />
      }
      <h1 className="font-bold text-2xl">Pacientes</h1>
      <button
        className="w-32 py-2 mb-8 rounded-lg self-end text-white font-semibold bg-[#40c4ff] hover:bg-[#00a7ef]"
        onClick={(e) => setPatientForm({ ...patientForm, open: true })}
      >
        Adicionar
      </button>
      <table className="py-4 w-[1024px] bg-slate-500 rounded-lg">
        <thead className="text-white font-semibold">
          <tr>
            <td className="w-[120px] px-4 py-4">Nome</td>
            <td className="w-[90px]">CPF</td>
            <td className="w-[80px]">Nascimento</td>
            <td className="w-[80px]">Gênero</td>
            <td className="w-[140px]">Endereço</td>
            <td className="w-[100px]"></td>
          </tr>
        </thead>
        <tbody>
          {patients?.map((patient) => {
            return <PatientRow key={patient?.id} patient={patient} />
          })}
        </tbody>
      </table>
    </main>
  )
}