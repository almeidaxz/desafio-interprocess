import { useEffect } from 'react';
import { formatDateToBr } from '../../utils/formatDates';
import { useState } from 'react';

export default function PatientRow({ patient }) {
    const [patientData, setPatientData] = useState({
        name: '',
        address: '',
        cpf: '',
        birth_date: '',
        gender: ''
    });

    const handleFormatData = () => {
        let rawZipCode = patient.zip_code?.split('');
        rawZipCode?.splice(5, 0, '-');
        const formatedZipCode = rawZipCode?.join('');
        const cityAndState = [patient.city, patient.state].join('/');

        let formatedAddress = [patient?.address_line, patient?.address_number, patient?.district, cityAndState, formatedZipCode].join(', ');
        if (formatedAddress === ', , , /, ') {
            formatedAddress = 'Não informado.';
        }

        const birthDate = formatDateToBr(patient.birth_date);

        setPatientData({ gender: patient.gender, name: patient.name, cpf: patient.cpf, address: formatedAddress, birth_date: birthDate });
    }


    useEffect(() => {
        handleFormatData();
    }, []);

    return (
        <tr
            style={patient.active === false ? { opacity: '0.5' } : null}
            className='text-white'
        >
            <td className='max-w-[120px] truncate pl-4 cursor-pointer'>
                {patientData.name}
            </td>
            <td className='max-w-[90px] truncate cursor-pointer'>
                {patientData.cpf}
            </td>
            <td className='max-w-[80px] truncate cursor-pointer'>
                {patientData.birth_date}
            </td>
            <td className='max-w-[80px] truncate cursor-pointer'>
                {patientData.gender}
            </td>
            <td className='max-w-[140px] truncate cursor-pointer'>
                {patientData.address}
            </td>
            <td
                className='py-4 pr-4 flex justify-end gap-3'
            >
                <button
                    style={patient.active === false ? { display: 'none' } : { display: 'block' }}
                    className='py-1 px-2 bg-blue-300 hover:bg-blue-400 rounded-lg cursor-pointer'
                >
                    Editar
                </button>
                <button
                    style={patient.active === false ? { display: 'none' } : { display: 'block' }}
                    className='py-1 px-2 bg-red-400 hover:bg-red-500 rounded-lg cursor-pointer'
                >
                    Desativar
                </button>
                <button
                    style={patient.active === false ? { display: 'block' } : { display: 'none' }}
                    className='py-1 px-2 bg-sky-400 hover:bg-sky-500 rounded-lg cursor-pointer'
                >
                    Ativar
                </button>
            </td>
        </tr>
    )
}