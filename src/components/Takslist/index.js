import React, { useContext } from "react";
import { TaksklistContainer } from "./style";
import { tasklist } from "../../const/tasklist";
import { UserContext } from "../../context/context";
import { defaulttasklist } from "../../const/defaulttasklist"
import refreshIcon from "../../assets/refresh_icon.svg"

export const Tasklist = ({ activeItems, setActiveItems }) => {
  const context = useContext(UserContext);
  //   console.log(Object.keys(tasklist[context.activeMenu]));
  const activeMenu = context.activeMenu;

  function handleItem(name) {
    setActiveItems((array) => {
      return {
        ...array,
        [activeMenu]: {
          ...array[activeMenu],
          [name]: array[activeMenu] ? !array[activeMenu][name] : true,
        },
      };
    });
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function defaultValues(system){
    setActiveItems((array)=>{
      return {
        ...array,
        [activeMenu]: {...defaulttasklist[activeMenu]},
      };
    })
  }

  return (
    // <ul>
    <TaksklistContainer>
      {activeMenu && context.systems[activeMenu] ? (
        <>
          <div className='head'>
            <h3>NV {capitalizeFirstLetter(activeMenu)}</h3>
            <img src={refreshIcon} onClick={()=>{defaultValues(activeMenu)}} alt="reset icon"></img>
          </div>
          <ul>
            {Object.keys(tasklist[activeMenu]).map((item) => (
              <li key={item}>
                <label>
                  <input
                    type="checkbox"
                    name={item}
                    onChange={(event) => {
                      handleItem(event.target.name);
                    }}
                    value={true}
                    checked={
                      activeItems[activeMenu]
                        ? activeItems[activeMenu][item]
                        : false
                    }
                  ></input>
                  <p>{item}</p>
                  <p className={false ? "disabled" : ""}>
                    {tasklist[activeMenu][item]}
                  </p>
                </label>
              </li>
            ))}
          </ul>
        </>
      ) : (
        ""
      )}
    </TaksklistContainer>
  );
};
