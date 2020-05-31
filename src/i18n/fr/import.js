import * as general from './general/general';
import * as connexion from './connexion/connexion';
import * as inscription from './inscription/inscription';
import * as tableauDeBord from './tableau-de-bord/tableauDeBord';
import * as enfant from './enfant/enfant';
import * as profil from './profil/profil';
import * as messagerie from './messagerie/messagerie';

export const PAGES = {
  general: general.GENERAL,
  connexion: connexion.CONNEXION,
  inscription: inscription.INSCRIPTION,
  smsConfimation: inscription.SMS_CONFIRMATION,
  sildebar: tableauDeBord.SILDEBAR,
  pgAcceuil: tableauDeBord.ACCEUIL,
  enfant: enfant.ENFANT,
  profil: profil.PROFIL,
  messagerie: messagerie.MESSAGERIE,
};

export const NOTHING = '';
