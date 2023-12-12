import { format, isThisYear } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formatOptions = isThisYear(date) ? "MMMM y" : "MMMM y";
  return `Продает товары с ${format(date, formatOptions, { locale: ruLocale })}`;
};

export { formatDate };