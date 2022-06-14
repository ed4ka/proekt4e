import moment from 'moment';

export function formatDate(dateString) {
    const parsed = moment(new Date(dateString));

    if (!parsed.isValid()) { //parse.isValid()==false
        //ако датата е невалидна, трябва да върнем сегашната дата и час
        return Date.now();
    }

    return parsed.format('DD/MM/YYYY');
}