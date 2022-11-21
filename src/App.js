import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ClientCard } from "./components/ClientCard";
import { UserContext } from "./context/context.js";
import { useState } from "react";
import { SystemCard } from "./components/SystemCard";
import { SystemButton } from "./components/gerenics/Systembutton";
import { Window } from "./components/gerenics/Window";
import { Tasklist } from "./components/Takslist";
import { Result } from "./components/Result";
import { Footer } from "./components/Footer";
import { defaulttasklist } from "./const/defaulttasklist";
import { TributacaoCard } from "./components/TributacaoCard";

function App() {
  const [clients, setClients] = useState({
    "1": false,
    "2": true,
    "3": false,
    "4": false,
    "5": false
  });
  const [tributacao, setTributacao] = useState({
    'MEI'               : false,
    'Simples Nacional'  : true,
    'Lucro Presumido'   : false,
    'Lucro Real'        : false,
    'Terceiro Setor'    : false
  });
  const [systems, setSystems] = useState({
    folha: true,
    fiscal: true,
    contábil: true,
    financeiro: true,
    tarefas: false,
    protocolos: false,
    notificações: true,
    impostos: true,
    tecweb: false,
  });
  const [activeMenu, setActiveMenu] = useState("geral");
  const [activeItems, setActiveItems] = useState(defaulttasklist);

  return (
    <>
      <Header />
      <div className="mainContainer">
        <div className="content">
          <UserContext.Provider
            value={{
              clients,
              setClients,
              tributacao,
              setTributacao,
              systems,
              setSystems,
              activeMenu,
              setActiveMenu,
            }}
          >
            <ClientCard />
            <TributacaoCard />
            <SystemCard />
            <Window>
              <div id="buttons">
                {Object.keys(systems).map((system) =>
                  systems[system] ? (
                    <SystemButton name={system} key={system} />
                  ) : (
                    ""
                  )
                )}
              </div>
              <div
                id="options"
                className={activeMenu && systems[activeMenu] ? "active" : ""}
              >
                <Tasklist
                  activeItems={activeItems}
                  setActiveItems={setActiveItems}
                />
              </div>
              <div id="results">
                <Result activeItems={activeItems} />
              </div>
            </Window>
          </UserContext.Provider>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
