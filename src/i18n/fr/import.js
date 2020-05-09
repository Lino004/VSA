import * as general from './general/general';
import * as connexion from './connexion/connexion';
import * as inscription from './inscription/inscription';
import * as tableauDeBord from './tableau-de-bord/tableauDeBord';

export const PAGES = {
  general: general.GENERAL,
  connexion: connexion.CONNEXION,
  inscription: inscription.INSCRIPTION,
  smsConfimation: inscription.SMS_CONFIRMATION,
  sildebar: tableauDeBord.SILDEBAR,
  pgAcceuil: tableauDeBord.ACCEUIL,
};

export const NOTHING = '';
