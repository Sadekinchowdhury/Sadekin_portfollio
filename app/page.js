import React from "react";
import Navbar from './../component/navbar';
import Banner from "@/component/banner";
import Project from "@/component/project";
import Projects from "@/component/projects";
import style from './page.module.css'
export default function page() {
  return <div>
    <Navbar />
    <Banner />
    <h1 className={style.title}>project</h1>
    <Projects />
  </div>;
}
