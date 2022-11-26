import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export function formatDateToBr(date) {
    const newDate = new Date(date)
    const timeZone = 'America/Sao_Paulo'
    const zonedDate = utcToZonedTime(newDate, timeZone)

    return format(zonedDate, 'dd/MM/yyyy');
}

export function formatDateToUTC(date) {
    const newDate = new Date(date)
    const timeZone = 'Europe/Berlin'
    const zonedDate = utcToZonedTime(newDate, timeZone)

    return format(zonedDate, 'dd/MM/yy');
}

export function formatDateToInput(date) {
    const newDate = new Date(date)
    const timeZone = 'Europe/Berlin'
    const zonedDate = utcToZonedTime(newDate, timeZone)

    return format(zonedDate, 'yyyy-MM-dd');
}