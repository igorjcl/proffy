import React from "react";

import "./styles.css";

import { PageHeader } from "../../components/PageHeader";
import { LeftAnimation } from "../../utils/animations";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";

import warningIcon from "../../assets/images/icons/warning.svg";
import { Select } from "../../components/Select";

export const TeacherForm = () => {
  return (
    <LeftAnimation>
      <div id="page-teacher-form" className="container">
        <PageHeader
          title="Que incrível que você quer dar aulas."
          description="O primeiro passo é preencher esse formulário de inscrição"
        />

        <main>
          <fieldset>
            <legend>Seus dados</legend>

            <Input name="name" label="Nome completo" />
            <Input name="avatar" label="Avatar" />
            <Input name="whatsapp" label="Nome completo" />
            <Textarea name="bio" label="Biografia" />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subjet"
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
            <Input name="cost" label="Custo da sua hora por aula" />
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preecha todos os dados
            </p>
            <button type="button">Salvar cadastro</button>
          </footer>
        </main>
      </div>
    </LeftAnimation>
  );
};
