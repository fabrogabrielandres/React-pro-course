import { lazy } from "react";
import { Routes } from "./Navigation";
import Nolazy from "../01-lazyload/pages/Nolazy";


const LazyLayout = lazy(() => import(/* webpackChunkName:"page1aaaaa" */ '../01-lazyload/layout/LazyLayout'));

export const routes: Array<Routes> = [
    {
        path:"/lazyload/*",
        to:"/lazyload/",
        Component:LazyLayout,
        name:"/Lazyload",
    },
    {
        path:"/no-lazy",
        to:"no-lazy",
        Component:Nolazy,
        name:"Nolazy",
    }
] 


