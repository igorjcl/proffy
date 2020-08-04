import React from "react";

import { PageHeader } from "../../components/PageHeader";

import "./styles.css";
import { LeftAnimation } from "../../utils/animations";

export const TeacherForm = () => {
  return (
    <LeftAnimation>
      <div id="page-teacher-list" className="container">
        <PageHeader title="Que incrível que você quer dar aulas." />
      </div>
    </LeftAnimation>
  );
};
