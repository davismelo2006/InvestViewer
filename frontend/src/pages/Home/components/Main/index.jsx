import React from "react";
import Card from "../../../../components/Card/";
import "./style.css";

export default function Main() {
  return (
    <>
      <main>
        <h1 className="main_title">A better way to manage your stocks</h1>
        <h2 className="main_subtitle">simple, practical & fast</h2>

        <div className="card_container">
          <Card
            title={"Beneficio 1"}
            content={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, vero.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, vero."
            }
          />
          <Card
            title={"Beneficio 2"}
            content={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, vero.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, vero."
            }
          />
          <Card
            title={"Beneficio 3"}
            content={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, vero.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, vero."
            }
          />
        </div>
      </main>
    </>
  );
}
