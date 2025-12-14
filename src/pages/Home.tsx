
import React from "react";
import { Link } from "react-router-dom"; // استيراد Link للتنقل بين الصفحات
import "./Home.css";
import logo from "../assets/logo.png";
import teacherImg from "../assets/teacher.png";

const Home: React.FC = () => {
  return (
    <div className="home-root">
      {/* الشريط العلوي */}
      <header className="topbar">
        <img src={logo} alt="logo" className="logo" />

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/Univ">Univ</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
      </header>

      {/* القسم الرئيسي Hero */}
      <main className="hero">
        <div className="hero-left">
          <h1 className="headline">
            Découvrez une plateforme innovante qui transforme <br />
            l'apprentissage à Tindouf.
          </h1>
          <p className="subheadline">
            Nous mettons les étudiants en relation avec les ressources <br />
            et les enseignants qui façonneront leur avenir.
          </p>

          <div className="cta-wrap">
            <Link to="/login">
              <button className="cta">Accéder à votre compte</button>
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img src={teacherImg} alt="illustration" className="illustration" />
        </div>

        <div className="blob"></div>
      </main>
    </div>
  );
};

export default Home;