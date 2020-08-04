import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

export const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/16910056?s=460&u=fd0aea797baf164fed2c3d0a75706286be63c34b&v=4"
          alt="Igor José"
        />
        <div>
          <strong>Igor José</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing.
        <br /> <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic commodi
        laborum impedit asperiores non placeat.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Entrar em contato" />
          Whatsapp
        </button>
      </footer>
    </article>
  );
};
