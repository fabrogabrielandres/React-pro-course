import { Routes } from "./Navigation";
import {
  RegisterPage,
  FormikAbstraction,
  FormikBasicPage,
  FormikComponent,
  FormikYupPage,
} from "../forms/pages";
import { RegisterFormikPage } from "../forms/pages/RegisterFormikPage";
import { DynamikForm } from "../forms/pages/DynamikForm";

export const routes: Array<Routes> = [
  {
    Component: RegisterPage,
    name: "basic-form",
    path: "basic-form",
    to: "basic-form",
  },
  {
    Component: FormikBasicPage,
    name: "FormikBasicPage",
    path: "FormikBasicPage",
    to: "FormikBasicPage",
  },
  {
    Component: FormikYupPage,
    name: "FormikYupPage",
    path: "FormikYupPage",
    to: "FormikYupPage",
  },
  {
    Component: FormikComponent,
    name: "FormikComponent",
    path: "FormikComponent",
    to: "FormikComponent",
  },
  {
    Component: FormikAbstraction,
    name: "FormikAbstraction",
    path: "FormikAbstraction",
    to: "FormikAbstraction",
  },
  {
    Component: RegisterFormikPage,
    name: "RegisterFormikPage",
    path: "RegisterFormikPage",
    to: "RegisterFormikPage",
  },
  {
    Component: DynamikForm,
    name: "DynamikForm",
    path: "DynamikForm",
    to: "DynamikForm",
  },
];
