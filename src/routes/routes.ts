import { lazy } from "react";
import { Routes } from "./Navigation";


const Lazy1 = lazy(() => import(/* webpackChunkName:"page1aaaaa" */ '../01-lazyload/pages/Lazypage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName:"page2aaaaa" */ '../01-lazyload/pages/Lazypage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName:"page3aaaaa" */ '../01-lazyload/pages/Lazypage3'));

export const routes: Array<Routes> = [
    {
        Component:Lazy1,
        name:"Lazypage1",
        path:"lazypage1",
        to:"lazypage1",
    },
    {
        Component:Lazy2,
        name:"Lazypage2",
        path:"lazypage2",
        to:"lazypage2",
    },
    {
        Component:Lazy3,
        name:"Lazypage3",
        path:"lazypage3",
        to:"lazypage3",
    },
] 


