import React from "react";
import SingleItem from "./SingleItems";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  // console.log(title);
  // console.log(useLocation());
  // const pathname = useLocation().pathname;
  const { pathname } = useLocation(); //conceito de desestruturação para pegar somente o valor necessário. (Mesma função da linha de cima).
  //console.log(pathname);
  const isHome = pathname === "/"; //Se pathname for igual a "/" (Home), guarda o valor na variável isHome

  const finalItems = isHome ? items : Infinity; //Se estiver na Home finallItems recebe items senão finalItems recebe infinity

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        {/* Condicional para mostrar o texto somente na Home */}
        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currantValue, index) => index < finalItems)
          .map((currantObj, index) => (
            <SingleItem
              // id={currantObj.id}
              // name={currantObj.name}
              // image={currantObj.banner}
              // key={`${title}-${index}`}
              {...currantObj} //spread operator - passa uma cópia do array para SingleItem
              idPath={idPath}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
