import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
import { api } from "../../services/api";

interface TeacherItemProps {
  teacher: {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
  };
}

export const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  async function createNewConnection() {
    await api.post("connections", {
      user_id: teacher.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
          type="button"
        >
          <img src={whatsappIcon} alt="Entrar em contato" />
          Whatsapp
        </a>
      </footer>
    </article>
  );
};
