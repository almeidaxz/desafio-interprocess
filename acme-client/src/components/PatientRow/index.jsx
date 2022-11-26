import { useEffect, useState } from 'react';
import { formatDateToBr } from '../../utils/formatDates';
import popup from '../../utils/toastify';
import api from '../../services/apiConnection';

export default function PatientRow({ patient, getAllPatients, selectedPatient, setSelectedPatient }) {

    const handleFormatData = () => {

        const formatCpf = (cpf) => {
            cpf = cpf.toString();
            return cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(9, 11);
        }
        const formatedCPF = formatCpf(patient.cpf);

        const birthDate = formatDateToBr(patient.birth_date);

        let rawZipCode = patient.zip_code?.split('');
        rawZipCode?.splice(5, 0, '-');
        const formatedZipCode = rawZipCode?.join('');
        const cityAndState = [patient.city, patient.state].join('/');

        let formatedAddress = [patient?.address_line, patient?.address_number, patient?.district, cityAndState, formatedZipCode].join(', ');
        if (formatedAddress === ', , , /, -') {
            formatedAddress = 'Não informado.';
        }

        setSelectedPatient({ cpf: formatedCPF, gender: patient.gender, name: patient.name, address: formatedAddress, birth_date: birthDate });
    }

    const handleInactivate = async () => {
        try {
            const { data } = await api.delete(`/patient/${patient?.id}/delete`);

            getAllPatients();
            popup.toastSuccess(data);
        } catch (error) {
            popup.toastError(error.response.data);
        }
    }

    const handleReactivate = async () => {
        try {
            const { data } = await api.put(`/patient/${patient?.id}/activate`);

            getAllPatients();
            popup.toastSuccess(data);
        } catch (error) {
            popup.toastError(error.response.data);
        }
    }

    const handleOpenPatientDetails = () => {
        console.log('teste');
        setSelectedPatient({ ...selectedPatient, open: true })
    }


    useEffect(() => {
        handleFormatData();
    }, []);

    return (
        <tr
            className='text-white'
        >
            <td
                onClick={handleOpenPatientDetails}
                style={patient.active === false ? { opacity: '0.5' } : null}
                className='max-w-[120px] truncate cursor-pointer pl-4'
            >
                {selectedPatient.name}
            </td>
            <td
                onClick={handleOpenPatientDetails}
                style={patient.active === false ? { opacity: '0.5' } : null}
                className='max-w-[90px] truncate cursor-pointer'
            >
                {selectedPatient.cpf}
            </td>
            <td
                onClick={handleOpenPatientDetails}
                style={patient.active === false ? { opacity: '0.5' } : null}
                className='max-w-[80px] truncate cursor-pointer'
            >
                {selectedPatient.birth_date}
            </td>
            <td
                onClick={handleOpenPatientDetails}
                style={patient.active === false ? { opacity: '0.5' } : null}
                className='max-w-[80px] truncate cursor-pointer'
            >
                {selectedPatient.gender}
            </td>
            <td
                onClick={handleOpenPatientDetails}
                style={patient.active === false ? { opacity: '0.5' } : null}
                className='max-w-[140px] truncate cursor-pointer'
            >
                {selectedPatient.address}
            </td>
            <td
                className='py-4 pr-4 flex justify-end gap-3'
            >
                <button
                    style={patient.active === false ? { display: 'none' } : { display: 'block' }}
                    className='py-1 px-2 bg-blue-300 hover:bg-blue-400 rounded-lg cursor-pointer shadow'
                >
                    Editar
                </button>
                <button
                    onClick={handleInactivate}
                    style={patient.active === false ? { display: 'none' } : { display: 'block' }}
                    className='py-1 px-2 bg-red-400 hover:bg-red-500 rounded-lg cursor-pointer shadow'
                >
                    Desativar
                </button>
                <button
                    onClick={handleReactivate}
                    style={patient.active === false ? { display: 'block' } : { display: 'none' }}
                    className='py-1 px-2 bg-sky-400 hover:bg-sky-500 rounded-lg cursor-pointer shadow'
                >
                    Ativar
                </button>
            </td>
        </tr>
    )
}