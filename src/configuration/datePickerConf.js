import moment from 'moment';

moment.locale('fr');

export const LISTE_JOURS = moment.weekdaysShort(false);
export const LISTE_JOURS_LONG = moment.weekdays(false);
export const LISTE_MOIS = moment.months(true);
export const JOUR_DEBUT_SEMAINE = moment.localeData().firstDayOfWeek();


export function dateParser(date) {
  const m = moment(date, 'DD-MM-YYYY');
  return m.isValid() ? m.toDate() : null;
}
