import * as allPageFr from './fr/import';
import * as allPageEn from './en/import';

const generalTraductionFr = [];

function allTraductionFR(allTraduction) {
  Object.keys(allTraduction).forEach((key) => {
    generalTraductionFr[key] = allTraduction[key];
  });
}
// Pour les futurs modules il faut créer le fichier de translate import, l'import et
// appeller la fonction en dessous avec en parametre la liste de toutes les translate
allTraductionFR(allPageFr.PAGES);

export const TRANSLATE = {
  fr: generalTraductionFr,
  en: allPageEn.PAGES,
};

export const NOTHING = '';
