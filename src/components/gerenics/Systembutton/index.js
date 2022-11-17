import React, { useContext } from "react";
import { UserContext } from "../../../context/context";
import { SystemButtonContainer } from "./style";

export const SystemButton = ({ name }) => {

    const context = useContext(UserContext);
    const img = require('../../../assets/unico_' + name + ".png")
    const bgColor = {
        "geral": "#80B6C9",
        "folha": "#80B6C9",
        "fiscal": "#80B6C9",
        "contábil": "#80B6C9",
        "financeiro": "#80B6C9",
        "tarefas": "#80B6C9",
        "orcamentos": "#80B6C9",
        "protocolos": "#80B6C9",
        "notificações": "#80B6C9",
        "tecweb": "#80B6C9",
        "impostos": "#80B6C9",
    }

    return (
        <SystemButtonContainer onClick={() => {
            name === context.activeMenu ? context.setActiveMenu("") : context.setActiveMenu(name);
        }} bgColor={bgColor[name]}>
            <div className={name === context.activeMenu ? "selectedMenu" : "unselectedMenu"}>
                <img src={img} alt={`${name} logo`}></img>
            </div>
        </SystemButtonContainer>
    )
}