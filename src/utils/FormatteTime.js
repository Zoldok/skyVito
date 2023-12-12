import { format, isToday, isYesterday } from 'date-fns';
// import ruLocale from 'date-fns/locale/ru';

const formatTime = (dateString) => {
  const date = new Date(dateString);

  if (isToday(date)) {
    return `Сегодня в ${format(date, 'HH:mm')}`;
  } else if (isYesterday(date)) {
    return `Вчера в ${format(date, 'HH:mm')}`;
  } else {
    const options = { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' };
    const formattedDate = date.toLocaleDateString('ru-RU', options);
    return formattedDate.replace(' г.', '');
  }
};

export { formatTime };