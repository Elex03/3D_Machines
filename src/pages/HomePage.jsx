import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import teamPhoto from '../assets/team.jpg'

import {AnimatedModel} from '../components/AnimatedModel'
import { ModelAnimatedViewer } from "../components/ModelAnimatedViewer";

gsap.registerPlugin(ScrollTrigger);

export const HomePage = () => {
  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        section1Ref.current.querySelector("h2"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section1Ref.current,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        section2Ref.current.querySelectorAll("p, ul"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        section3Ref.current.querySelector("p"),
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section3Ref.current,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        section3Ref.current.querySelector(".image-placeholder"),
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section3Ref.current,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "white",
        minHeight: "300vh",
        padding: 0,
        margin: 0,
      }}
    >
      {/* Sección 1 */}
      <section
        ref={section1Ref}
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            maxWidth: "800px",
            lineHeight: 1.3,
            fontWeight: "700", // bold pero sin neón
          }}
        >
          Transformamos tu mundo digital, de adentro hacia afuera.
        </h2>

        <ModelAnimatedViewer modelName={"bmo.glb"} dimesions={{width: '200px', height: '400px'}} />
      </section>

      {/* Sección 2 */}
      <section
        ref={section2Ref}
        style={{
          height: "100vh",
          padding: "60px 40px",
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: 1.6,
          fontSize: "1.2rem",
          fontWeight: "300", // texto lighter
          color: "white",
        }}
      >
        <h3 style={{ fontSize: "2rem", marginBottom: "20px", fontWeight: "700" }}>
          ¿Qué es insideOut PC?
        </h3>
        <p>
          insideOut PC es una plataforma educativa e interactiva diseñada para ayudarte a comprender el
          funcionamiento interno de una computadora, desde sus componentes hasta su uso eficiente en el día a día.
          Nuestro propósito es brindar conocimientos prácticos y visuales que te permitan mejorar tu experiencia
          tecnológica, ya seas principiante o estudiante de informática, arquitectura de computadoras o carreras afines.
        </p>
        <p>En esta página podrás:</p>
        <ul style={{ marginLeft: 20, fontWeight: "300" }}>
          <li>Explorar modelos 3D e información detallada sobre los componentes internos de una PC.</li>
          <li>Aprender a optimizar y cuidar tu equipo con guías prácticas y tutoriales.</li>
          <li>Recibir recomendaciones de computadoras según tus necesidades o tipo de trabajo.</li>
          <li>Conocer al equipo detrás del proyecto y su propósito.</li>
        </ul>
      </section>

      {/* Sección 3 */}
      <section
        ref={section3Ref}
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "40px 60px",
          maxWidth: "1100px",
          margin: "0 auto",
          gap: "40px",
          color: "white",
          fontWeight: "300",
          fontSize: "1.2rem",
        }}
      >
        <div style={{ flex: 1, maxWidth: "50%" }}>
          <h3 style={{ fontSize: "2rem", marginBottom: "20px", fontWeight: "700" }}>
            Detrás de insideOut PC
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div
          className="image-placeholder"
          style={{
            flex: 1,
            height: "300px",
            background: "#333",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#aaa",
            fontWeight: "700",
            borderRadius: "15px",
          }}
        >
         <img 
        style={{
            height: '100%', 
            width: '100%', 
            objectFit: 'cover'
        }}
         src={teamPhoto}/>
        </div>
      </section>
    </div>
  );
};
