import React from "react";

import "./styles.css";

import { PageHeader } from "../../components/PageHeader";
import { TeacherItem } from "../../components/TeacherItem";
import { LeftAnimation } from "../../utils/animations";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";

export const TeacherList = () => {
  return (
    <LeftAnimation>
      <div id="page-teacher-list" className="container">
        <PageHeader
          title="Estes são os proffys disponíveis."
          description="O primeiro passo é preencher esse formulário de inscrição"
        >
          <form id="search-teachers">
            <Select
              name="subject"
              label="Matéria"
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
            <Input type="time" name="time" label="Hora" />
          </form>
        </PageHeader>

        <main>
          <TeacherItem />
        </main>
      </div>
    </LeftAnimation>
  );
};
