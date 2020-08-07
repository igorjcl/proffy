import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

import { PageHeader } from "../../components/PageHeader";
import { LeftAnimation } from "../../utils/animations";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";

import warningIcon from "../../assets/images/icons/warning.svg";
import { Select } from "../../components/Select";
import { api } from "../../services/api";

export const TeacherForm = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItem = scheduleItems.map((scheduleItem, index) =>
      index === position ? { ...scheduleItem, [field]: value } : scheduleItem
    );

    setScheduleItems(updatedScheduleItem);
  }

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post("classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        history.push("/");
      });
  }

  return (
    <LeftAnimation>
      <div id="page-teacher-form" className="container">
        <PageHeader
          title="Que incrível que você quer dar aulas."
          description="O primeiro passo é preencher esse formulário de inscrição"
        />

        <main>
          <form onSubmit={handleCreateClass}>
            <fieldset>
              <legend>Seus dados</legend>

              <Input
                name="name"
                label="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                name="avatar"
                label="Avatar"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
              <Input
                name="whatsapp"
                label="Nome completo"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
              <Textarea
                name="bio"
                label="Biografia"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <legend>Sobre a aula</legend>

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
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <Input
                name="cost"
                label="Custo da sua hora por aula"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <legend>
                Horários disponíveis
                <button type="button" onClick={addNewScheduleItem}>
                  + Novo horário
                </button>
              </legend>
              {scheduleItems.map(({ week_day, from, to }, index) => {
                return (
                  <div key={index} className="schedule-item">
                    <Select
                      name="week_day"
                      label="Dia da semana"
                      value={week_day}
                      onChange={(e) =>
                        setScheduleItemValue(index, "week_day", e.target.value)
                      }
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
                      value={from}
                      onChange={(e) =>
                        setScheduleItemValue(index, "from", e.target.value)
                      }
                      name="from"
                      label="Das"
                      type="time"
                    />
                    <Input
                      value={to}
                      onChange={(e) =>
                        setScheduleItemValue(index, "to", e.target.value)
                      }
                      name="to"
                      label="Até"
                      type="time"
                    />
                  </div>
                );
              })}
            </fieldset>

            <footer>
              <p>
                <img src={warningIcon} alt="Aviso importante" />
                Importante! <br />
                Preecha todos os dados
              </p>
              <button type="submit">Salvar cadastro</button>
            </footer>
          </form>
        </main>
      </div>
    </LeftAnimation>
  );
};
