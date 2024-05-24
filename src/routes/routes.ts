import { Routes } from "./Navigation";
import { RegisterPage , FormikAbstraction, FormikBasicPage, FormikComponent, FormikYupPage } from "../forms/pages";


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
    },
    {
        Component:FormikYupPage,
        name:"FormikYupPage",
        path:"FormikYupPage",
        to:"FormikYupPage",
    },
    {
        Component:FormikComponent,
        name:"FormikComponent",
        path:"FormikComponent",
        to:"FormikComponent",
    },
    {
        Component:FormikAbstraction,
        name:"FormikAbstraction",
        path:"FormikAbstraction",
        to:"FormikAbstraction",
    },
] 


