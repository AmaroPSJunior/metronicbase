import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { LastLocationProvider } from "react-router-last-location";
import { Routes } from "./app/router/Routes";
import { I18nProvider, LayoutSplashScreen, ThemeProvider } from "./_metronic";

export default function App({ store, persistor, basename }) {
  return (
    /* Fornecer loja Redux */
    <Provider store={store}>
      {/* Persistir assincronamente armazena o redux e mostra `SplashScreen` enquanto está carregando.*/}
      <PersistGate persistor={persistor} loading={<LayoutSplashScreen />}>
        {/* Adicione alto nível de "Suspense", caso não tenha sido manuseado dentro da árvore do React. */}
        <React.Suspense fallback={<LayoutSplashScreen />}>
          {/* Substitua `basename` (e.g: `homepage` in `package.json`) */}
          <BrowserRouter basename={basename}>
            {/* Essa biblioteca retorna apenas o local que estava ativo antes da alteração recente do local no tempo de vida da janela atual. */}
            <LastLocationProvider>
              {/* Forneça substituições de temas Metronic. */}
              <ThemeProvider>
                {/* Forneça o contexto `react-intl` sincronizado com o estado Redux.  */}
                <I18nProvider>
                  {/* Renderize rotas com o `Layout 'fornecido. */}
                  <Routes />
                </I18nProvider>
              </ThemeProvider>
            </LastLocationProvider>
          </BrowserRouter>
        </React.Suspense>
      </PersistGate>
    </Provider>
    
  );
}

