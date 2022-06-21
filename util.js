import moment from 'moment';

export function formatDate(dateString) {
    let parsed = moment(new Date(dateString));

    if (!parsed.isValid()) { //parse.isValid()==false
        //ако датата е невалидна, трябва да върнем сегашната дата и час
        return dateString;
    }

    return parsed.format('DD/MM/YYYY');
}