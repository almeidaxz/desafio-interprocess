import { toast } from 'react-toastify';

function toastSuccess(message) {
    toast.info(message, {
        position: 'bottom-right',
        autoClose: 5000,
        theme: 'colored',
        closeOnClick: true,
        pauseOnHover: false
    });
}

function toastError(message) {
    toast.error(message, {
        position: 'bottom-right',
        autoClose: 3000,
        theme: 'colored',
        closeOnClick: true,
        pauseOnHover: false
    });
}

export default { toastSuccess, toastError };