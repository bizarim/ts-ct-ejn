

export function DateNow() {
    const d = new Date();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

export function getDDay(lastDate: string) {
    let rt = '';
    const diffDays = Math.ceil((new Date(lastDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24));

    if (diffDays === 0) {
        rt = 'D-Day';
    } else if (diffDays < 0) {
        rt = 'D+' + -diffDays;
    } else if (diffDays > 0) {
        rt = 'D-' + diffDays;
    }
    return rt;
}
