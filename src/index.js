/**
 * Crie o ponto de entrada do React App. Este e os arquivos `public / index.html` não podem ser
 * alterado ou movido.
 */
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { mockAxios, setupAxios } from "./_metronic";
import store, { persistor } from "./app/store/store";
import App from "./App";
import "./index.scss"; // Standard version
// import "./sass/style.react.rtl.css"; // RTL version
import "socicon/css/socicon.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./_metronic/_assets/plugins/line-awesome/css/line-awesome.css";
import "./_metronic/_assets/plugins/flaticon/flaticon.css";
import "./_metronic/_assets/plugins/flaticon2/flaticon.css";
/**
 * URL base do site.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { PUBLIC_URL } = process.env;

/**
 * Cria a instância `axios-mock-adapter` para a instância fornecida` axios`, adicione
 * zomba básica do Metronic e o devolve.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/* const mock = */ mockAxios(axios);

/**
 * Injete interceptores metrônicos para axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios, store);

ReactDOM.render(
  <App
    store={store}
    persistor={persistor}
    basename={PUBLIC_URL}
  />,
  document.getElementById("root")
);

