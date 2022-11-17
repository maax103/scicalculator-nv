import { UserContext } from "../../context/context";
import React, { useContext } from "react";
import { CardContainer } from "./style";

export const ClientCard = () => {
  const context = useContext(UserContext);
  const clientsDescription = [
    '4 a 7',
    '8 a 11',
    '12 a 15',
    '16 a 20',
    '21 a 25'
  ]

  function handleClient(client) {
    let clients = {
      "1": false,
      "2": false,
      "3": false,
      "4": false,
      "5": false
    };
    clients[client] = true;
    console.log(client);
    context.setClients(clients);
  }

  function ClientOption({ children, n }) {
    if (!children) return
    return (
      <label className="clientLabel">
        <input
          type="radio"
          name="client"
          onChange={() => {
            handleClient(n);
          }}
          value={context.clients[n]}
          checked={context.clients[n]}
        ></input>
        {children}
      </label>
    )
  }

  return (
    <CardContainer>
      <h1>Selecione a quantidade de terminais</h1>
      <div>
        {Object.keys(context.clients).map((_, index) => {
          return <ClientOption key={index} n={index}>{clientsDescription[index]}</ClientOption>
        })}
      </div>
    </CardContainer>
  );
};
