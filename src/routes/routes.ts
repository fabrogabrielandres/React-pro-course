import { lazy } from "react";
import { Routes } from "./Navigation";
import { RegisterPage } from "../forms/pages/RegisterPage";
import { FormikBasicPage } from "../forms/pages/FormikBasicPage";


export const routes: Array<Routes> = [
    {
        Component:RegisterPage,
        name:"basic-form",
        path:"basic-form",
        to:"basic-form",
    },
    {
        Component:FormikBasicPage,
        name:"FormikBasicPage",
        path:"FormikBasicPage",
        to:"FormikBasicPage",
    }
] 


