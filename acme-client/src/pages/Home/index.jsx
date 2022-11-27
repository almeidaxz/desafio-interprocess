import { useEffect, useState } from "react";
import PatientRow from "../../components/PatientRow";
import popup from '../../utils/toastify';
import api from '../../services/apiConnection';
import PatientsModal from "../../components/PatientsFormModal";
import PatientDetailsModal from "../../components/PatientDetailsModal";
import _ from 'lodash';
import { MagnifyingGlass } from 'phosphor-react';
import Navbar from "../../components/Navbar";

export default function Home() {
  const INITIAL_STATE = {
    id: '',
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
    state: '',
    district: ''
  }
  const [patients, setPatients] = useState([]);
  const [initialPatients, setInitialPatients] = useState([]);
  const [patientForm, setPatientForm] = useState(INITIAL_STATE);
  const [selectedPatient, setSelectedPatient] = useState({
    open: false,
    name: '',
    address: '',
    cpf: '',
    birth_date: '',
    gender: ''
  });

  const getAllPatients = async () => {
    try {
      const { data } = await api.get('patients/list');

      const activePatients = data.filter((patient) => {
        return patient.active === true;
      });
      const inactivePatients = data.filter((patient) => {
        return patient.active === false;
      });
      const patientsList = [...activePatients, ...inactivePatients];

      console.log(patientsList);
      setPatients(patientsList);
      setInitialPatients(patientsList);
    } catch (error) {
      popup.toastError('Erro ao buscar pacientes. Tente novamente.');
    }
  }

  const filterByName = _.debounce((value) => {
    const filteredByName = initialPatients.filter((patient) => {
      return patient.name.toLowerCase().includes(value.toLowerCase())
    });

    setPatients(filteredByName);

    if (value === '' || value.trim() === '') {
      setPatients(initialPatients);
    }
  }, 700);

  const handleFilterByName = (e) => {
    filterByName(e.target.value);
  }

  useEffect(() => {
    getAllPatients();
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-[1024px] my-0 mx-auto pt-32 flex flex-col items-center justify-center">
        {patientForm.open &&
          <PatientsModal
            patientForm={patientForm}
            setPatientForm={setPatientForm}
            INITIAL_STATE={INITIAL_STATE}
            getAllPatients={getAllPatients}
          />
        }
        {selectedPatient.open &&
          <PatientDetailsModal
            selectedPatient={selectedPatient}
            setSelectedPatient={setSelectedPatient}
          />
        }

        <h1 className="mb-8 font-bold text-2xl">Pacientes</h1>
        <section className="mb-4 flex items-center self-end gap-6">
          <button
            className="w-32 py-1 rounded-lg self-end text-white font-semibold bg-[#40c4ff] hover:bg-[#00a7ef] shadow"
            onClick={(e) => setPatientForm({ ...patientForm, open: true, title: 'Cadastrar Paciente' })}
          >
            Adicionar
          </button>
          <div className="relative">
            <MagnifyingGlass
              className="absolute top-[25%] right-[5%]"
              weight="bold"
            />
            <input
              onChange={handleFilterByName}
              className="w-64 px-3 py-1 rounded-lg shadow"
              type="text"
              placeholder="Pesquisar"
            />
          </div>
        </section>
        <table className="py-4 w-[1024px] bg-slate-500 rounded-lg shadow">
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
              return <PatientRow
                key={patient?.id}
                patient={patient}
                setPatientForm={setPatientForm}
                getAllPatients={getAllPatients}
                selectedPatient={selectedPatient}
                setSelectedPatient={setSelectedPatient}
              />
            })}
          </tbody>
        </table>
      </main>
    </>
  )
}
