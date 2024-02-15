const { merge }  = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

/*
 * @MICROFRONTEND
 *
 * Šiuo metu kompiliuojant single-spa aplikaciją galima naudoti
 * išskirtinai tik Webpack, ties Vite palaikymu pagal naujausią
 * informaciją vis dar yra dirbama iš single-spa kūrėjų pusės.
 *
 * Webpack konfigūracija kuriamą išplečiant single-spa pateikiamą
 * bazinę konfigūraciją. Žemiau esantis `merge` metodas leidžia
 * praplėsti bazinę konfigūraciją pagal poreikius.
 *
 * `externals` yra nurodomas projekto priklausomybių prefix'as,
 * kurios neturi būti įtraukiamos į sukompiliuotą kodą.
 * Visos priklausomybės su `@rc-ses` prefix'u, kurios yra
 * `src/@types` kataloge apibrėžia atitinkamų single-spa modulių
 * viešą eksportuojamą funkcionalumą, kurį galima "kviesti" bet
 * kur šioje aplikacijoje norint gauti arba pateikti informaciją
 * atitinkamiems moduliams.
 */
module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "rc-ses",
    projectName: "self-service-provider-demo-react-ui",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: /^@rc-ses\/.+/,
  });
};
