import { Trash, Pencil } from 'phosphor-react';

export default function PatientRow({ patient }) {
    return (
        <tr className='text-white'>
            <td className='max-w-[120px] truncate pl-4'>
                {patient.name}
            </td>
            <td className='max-w-[90px] truncate'>
                {patient.cpf}
            </td>
            <td className='max-w-[80px] truncate'>{patient.birth_date}</td>
            <td className='max-w-[80px] truncate'>{patient.gender}</td>
            <td className='max-w-[140px] truncate'>{patient.address}</td>
            <td className='py-4 pr-4 flex justify-end gap-3'>
                <Pencil className='cursor-pointer' size={20} color='blue' />
                <Trash className='cursor-pointer' size={20} color='red' />
            </td>
        </tr>
    )
}