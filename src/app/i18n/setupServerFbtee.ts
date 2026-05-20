import { IntlVariations, setupFbtee } from 'fbtee';
import translations from '../../translations/ja_JP.json';

export default function setupServerFbtee(locale: string) {
  setupFbtee({
    hooks: {
      getViewerContext: () => ({
        GENDER: IntlVariations.GENDER_UNKNOWN,
        locale,
      }),
    },
    translations,
  });
}
