import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { Landing } from "./pages/Landing";
import { TeacherForm } from "./pages/TeacherForm";
import { TeacherList } from "./pages/TeacherList";

export const Routes = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/study" component={TeacherList} />
          <Route path="/give-classes" component={TeacherForm} />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
};
