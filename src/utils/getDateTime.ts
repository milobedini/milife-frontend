export const getDateTime = (isoString: string, locale: string) => {
  if (isoString === '') {
    return '';
  }

  const date = new Date(isoString);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return date.toLocaleString(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false // Use 24-hour format
  });
};
