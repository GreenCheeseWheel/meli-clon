import React from "react";
import Product from "./Product";
import "../css/main.css"

export default function Main()
{
    return (
        <section className="main">
            <div className="filter"> </div>
            <Product />
        </section>
    )
}