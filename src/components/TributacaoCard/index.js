import { UserContext } from "../../context/context";
import React, { useContext } from "react";
import { TributacaoCardContainer } from "./style";

export const TributacaoCard = () => {
  const context = useContext(UserContext);
  const tributacaoDescription = [
    'MEI',
    'Simples Nacional',
    'Lucro Presumido',
    'Lucro Real',
    'Terceiro Setor'
  ]

  function handleTributacao(tributacaoIndex) {
    let tributacoes = {
      'MEI'               : false,
      'Simples Nacional'  : false,
      'Lucro Presumido'   : false,
      'Lucro Real'        : false,
      'Terceiro Setor'    : false
    };
    tributacoes[tributacaoDescription[tributacaoIndex]] = true;
    context.setTributacao(tributacoes);
  }

  function TributacaoOptions({ children, n }) {
    if (!children) return
    return (
      <label className="clientLabel">
        <input
          type="radio"
          name="tributacao"
          onChange={() => {
            handleTributacao(n);
          }}
          value={tributacaoDescription[n]}
          checked={context.tributacao[tributacaoDescription[n]]}
        ></input>
        {children}
      </label>
    )
  }

  return (
    <TributacaoCardContainer>
      <h1>Selecione o modelo de tributação</h1>
      <div>
        {Object.keys(tributacaoDescription).map((_, index) => {
          return <TributacaoOptions key={`${index}${index}`} n={index}>{tributacaoDescription[index]}</TributacaoOptions>
        })}
      </div>
    </TributacaoCardContainer>
  );
};
