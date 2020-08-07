import React, { useState, FormEvent } from "react";

import "./styles.css";

import { PageHeader } from "../../components/PageHeader";
import { TeacherItem } from "../../components/TeacherItem";
import { LeftAnimation } from "../../utils/animations";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

export const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const { data } = await api.get("classes", {
      params: {
        subject,
        weekDay,
        time,
      },
    });

    setTeachers(data);
  }

  return (
    <LeftAnimation>
      <div id="page-teacher-list" className="container">
        <PageHeader
          title="Estes são os proffys disponíveis."
          description="O primeiro passo é preencher esse formulário de inscrição"
        >
          <form id="search-teachers" onSubmit={searchTeachers}>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Biologia", label: "Biologia" },
                { value: "Português", label: "Português" },
                { value: "Matemática", label: "Matemática" },
                { value: "Ingês", label: "Ingês" },
                { value: "Química", label: "Química" },
              ]}
            />
            <Select
              name="week_day"
              label="Dia da semana"
              value={weekDay}
              onChange={(e) => setWeekDay(e.target.value)}
              options={[
                { value: "0", label: "Domingo" },
                { value: "1", label: "Segunda-feira" },
                { value: "2", label: "Terça-feira" },
                { value: "3", label: "Quarta-feira" },
                { value: "4", label: "Quinta-feira" },
                { value: "5", label: "Sexta-feira" },
                { value: "6", label: "Sábado" },
              ]}
            />
            <Input
              value={time}
              onChange={(e) => setTime(e.target.value)}
              type="time"
              name="time"
              label="Hora"
            />

            <button type="submit">Buscar</button>
          </form>
        </PageHeader>

        <main>
          {teachers.map((teacher, index) => {
            return <TeacherItem key={index} teacher={teacher} />;
          })}
        </main>
      </div>
    </LeftAnimation>
  );
};
