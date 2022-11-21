import React, { useContext, useEffect, useState } from "react";
import { ResultContainer } from "./style";
import { tasklist } from "../../const/tasklist";
import { UserContext } from "../../context/context";

export const Result = ({ activeItems }) => {
  const context = useContext(UserContext);
  const systems = Object.keys(activeItems).map((item) =>
    activeItems[item] ? item : ""
  );

  let list = {};
  if (systems.length) {
    systems.forEach((system) => {
      let sistemlist = activeItems[system];

      let newItem = [];
      Object.keys(sistemlist).forEach((item) => {
        if (sistemlist[item] && !newItem.includes(sistemlist[item])) {
          newItem.push(item);
        }
      });
      list = { ...list, [system]: newItem };
    });
  }

  let total = {};
  if (systems.length) {
    systems.forEach((system) => {
      total = {
        ...total,
        [system]: list[system].reduce(
          (acum, item) => acum + tasklist[system][item],
          0
        ),
      };
    });
  }
  const TRIBUTACAOFACTOR = {
    'MEI'               : 1,
    "Simples Nacional"  : 1,
    "Lucro Presumido"   : 1.75,
    "Lucro Real"        : 2,
    "Terceiro Setor"    : 1,
  }
  const clientFactorList = ["", 1, 1.12, 1.25, 1.37, 1.5];
  let clientFactor = 0;
  Object.keys(context.clients).forEach((clientKey)=>{
    if(context.clients[clientKey - 1] === true){
      clientFactor = clientFactorList[clientKey];
    }
  })

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [userFactor, setUserFactor] = useState(0);
  useEffect(()=>{
    Object.keys(TRIBUTACAOFACTOR).forEach((elem) =>{
      if(context.tributacao[elem] === true){
        setUserFactor(TRIBUTACAOFACTOR[elem]);
      }
    })
  },[context.tributacao]);

  return (
    <ResultContainer>
      {Object.values(context.systems).every((value) => value === false) ? (
        <h3 className="empty">Selecione um módulo para iniciar o cálculo</h3>
      ) : (
        <>
          <h3>Horas de treinamento</h3>
          <ul>
            {Object.keys(context.systems).map((system) => {
              return context.systems[system] ? (
                <li key={system}>
                  <p>{capitalizeFirstLetter(system)}</p>
                  <p>{(total[system] * clientFactor * userFactor).toFixed(1)}</p>
                </li>
              ) : (
                ""
              );
            })}
            <li>
              <p>Fator usuário</p>
              <p>{(userFactor * clientFactor).toFixed(2)}</p>
            </li>
          </ul>
          <div>
            <p>TOTAL</p>
            <p>
              {Math.ceil(
                Object.keys(total).reduce(
                  (acum, system) =>
                    acum + total[system] * context.systems[system],
                  0
                ) * clientFactor * userFactor
              )}
            </p>
          </div>
        </>
      )}
    </ResultContainer>
  );
};
