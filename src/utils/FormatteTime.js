import { format, isToday, isYesterday } from 'date-fns';

const formatTime = (dateString) => {
  const date = new Date(dateString);
  date.setHours(date.getHours() + 3);

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