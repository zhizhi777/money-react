import day from 'dayjs'

// import calendar from 'dayjs/plugin/calendar'
//
// const sayRule = {
//     sameDay: '[今天]',
//     nextDay: '[明天]',
//     lastDay: '[昨天]',
//     sameElse: 'YYYY年MM月DD日',
//     nextWeek: 'YYYY年MM月DD日',
//     lastWeek: 'YYYY年MM月DD日'
// }
// day.extend(calendar)

const timeRule = (string: string) => {
    const now = day();
    if (day(string).isSame(now, 'day')) {
        return '今天';
    } else if (day(string).isSame(now.subtract(1, 'day'), 'day')) {
        return '昨天';
    } else if (day(string).isSame(now.subtract(2, 'day'), 'day')) {
        return '前天';
    } else if (day(string).isSame(now, 'year')) {
        return day(string).format('M月D日');
    } else {
        return day(string).format('YYYY年M月D日');
    }
}


export {day, timeRule}