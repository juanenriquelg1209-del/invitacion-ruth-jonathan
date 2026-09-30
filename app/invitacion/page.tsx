"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Terranova+Zocalo+de+Oaxaca+Salon+Tres+Marias+Portal+Av+Benito+Juarez+116+Oaxaca+de+Juarez+Oaxaca";

const whatsapp =
  "https://wa.me/529512295634?text=Hola%20Ruth%2C%20quiero%20confirmar%20mi%20asistencia%20a%20su%20boda.";

export default function InvitacionPage() {
  const router = useRouter();

  const [count, setCount] = useState({
    d: 0,
    h: 0,
    m: 0,
    s: 0,
  });

  useEffect(() => {
    const target = new Date("2026-10-23T16:30:00-06:00").getTime();

    const tick = () => {
      const seconds = Math.max(
        0,
        Math.floor((target - Date.now()) / 1000)
      );

      setCount({
        d: Math.floor(seconds / 86400),
        h: Math.floor((seconds % 86400) / 3600),
        m: Math.floor((seconds % 3600) / 60),
        s: seconds % 60,
      });
    };

    tick();

    const timer = window.setInterval(tick, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const backToCover = () => {
    router.push("/");
  };

  return (
    <main className="site">

      {/* =========================================
          REGRESAR
         ========================================= */}

      <button
        className="back-to-top"
        onClick={backToCover}
        aria-label="Regresar al inicio"
      >
        <span className="back-circle">
          ←
        </span>

        <span>
          REGRESAR AL INICIO
        </span>
      </button>


      {/* =========================================
          NUESTRA BODA
         ========================================= */}

      <section className="section paper">

        <div className="container">

          <div className="eyebrow">
            Con inmensa alegría
          </div>

          <div className="heading-script">
            Nuestra Boda
          </div>

          <p className="copy">
            Queremos invitarte a ser testigo de la unión de nuestras vidas
            en matrimonio, uniendo nuestros corazones bajo la bendición de Dios.
          </p>

          <div className="orn">
            ✦
          </div>

          <p className="copy">
            Nos llenaría de alegría compartir contigo este día tan especial.
          </p>

          <div className="music">

            <div className="title">
              Siempre Pude Ver
            </div>

            <div className="artist">
              Ana Victoria · Nuestra canción
            </div>

            <a
              className="music-btn"
              href="https://youtu.be/4qDevvC8aK0?si=JkeB6yiMv5Md8WwB"
              target="_blank"
              rel="noreferrer"
            >
              <span className="play-icon">▶</span>
              <span>Escuchar canción</span>
            </a>

          </div>

        </div>

      </section>


      {/* =========================================
          PADRES
         ========================================= */}

      <section className="section">

        <div className="container">

          <div className="eyebrow">
            Con cariño
          </div>

          <div className="heading-script">
            Nuestros padres
          </div>

          <div className="parents">

            <div>

              <h3>
                Padres de la novia
              </h3>

              <p>
                Liliana González Pineda
              </p>

              <p>
                Enrique López Gaytán
              </p>

            </div>

            <div>

              <h3>
                Padres del novio
              </h3>

              <p>
                Dólares Minerva Sanchez Crisanto
              </p>

              <p>
                Nemorio Carmona Montoya
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          VERSÍCULO
         ========================================= */}

      <section className="section taupe">

        <div className="container">

          <div
            className="eyebrow"
            style={{ color: "#e2ca95" }}
          >
            Una promesa para siempre
          </div>

          <div className="quote">

            <div className="quote-text">
              “No me pidas que te deje y me aparte de ti; porque a donde
              quiera que tú vayas, iré yo, y dondequiera que tú vivas,
              viviré. Tu pueblo será mi pueblo, y tu Dios mi Dios.
              Donde tú mueras, moriré yo, y allí seré sepultada.”
            </div>

            <div className="quote-ref">
              Ruth 1:16–17
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          EVENTO
         ========================================= */}

      <section
        className="section burgundy"
        id="evento"
      >

        <div className="container">

          <div className="heading-script">
            El gran día
          </div>

          <div className="event">

            <div className="event-day">
              Viernes
            </div>

            <div className="event-date">
              23 · 10 · 2026
            </div>

            <div className="event-place">
              Recepción y ceremonia
            </div>

            <div className="event-info">

              <strong>
                Terranova Zócalo de Oaxaca
              </strong>

              <br />

              Salón Tres Marías

              <br />
              <br />

              Portal, Av. Benito Juárez 116

              <br />

              Centro Histórico · 68000 Oaxaca de Juárez, Oaxaca

              <br />
              <br />

              <strong>
                4:30 PM
              </strong>

            </div>

            <a
              className="map-btn"
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ver ubicación
            </a>

          </div>

        </div>

      </section>


      {/* =========================================
          CUENTA REGRESIVA
         ========================================= */}

      <section className="section paper">

        <div className="container">

          <div className="eyebrow">
            Cuenta regresiva
          </div>

          <div className="heading-script">
            Faltan...
          </div>

          <div className="countdown">

            <div className="count">
              <b>
                {String(count.d).padStart(2, "0")}
              </b>
              <span>Días</span>
            </div>

            <div className="count">
              <b>
                {String(count.h).padStart(2, "0")}
              </b>
              <span>Horas</span>
            </div>

            <div className="count">
              <b>
                {String(count.m).padStart(2, "0")}
              </b>
              <span>Minutos</span>
            </div>

            <div className="count">
              <b>
                {String(count.s).padStart(2, "0")}
              </b>
              <span>Segundos</span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          GALERÍA
         ========================================= */}

      <section className="section">

        <div className="container">

          <div className="eyebrow">
            Un pedacito de nosotros
          </div>

          <div className="heading-script">
            Nuestra historia
          </div>

          <div className="gallery">

            <img
              className="tall"
              src="/fotos/foto1.jpeg"
              alt="Ruth y Jhonatan"
            />

            <img
              src="/fotos/foto2.jpeg"
              alt="Detalle de la celebración"
            />

            <img
              src="/fotos/foto3.jpeg"
              alt="Detalle floral"
            />

          </div>

        </div>

      </section>


      {/* =========================================
          CÓDIGO DE VESTIMENTA
         ========================================= */}

      <section
        className="section paper"
        id="vestimenta"
      >

        <div className="container">

          <div className="eyebrow">
            Dress code
          </div>

          <div className="heading-script">
            Código de vestimenta
          </div>

          <div className="dress-grid">

            {/* BLOQUE VISUAL FORMAL */}

            <div className="dress-photo">

              <div className="dress-photo-label">
                <span>
                  Formal
                </span>
              </div>

            </div>

            {/* TEXTO */}

            <div className="dress-copy">

              <p>
                Les pedimos asistir con{" "}
                <strong>
                  vestimenta formal
                </strong>.
              </p>

              <p>
                Por favor, evitar los colores{" "}
                <strong>
                  blanco, negro, rojo y dorado
                </strong>.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          REGALOS
         ========================================= */}

      <section className="section taupe">

        <div className="container">

          <div className="heading-script">
            Regalos
          </div>

          <div className="orn">
            ♡
          </div>

          <p className="copy">
            El mejor regalo es compartir con nosotros este momento tan
            importante. Si desean obsequiarnos algo, agradeceremos mucho
            su cariño y buenos deseos.
          </p>

        </div>

      </section>


      {/* =========================================
          CONFIRMACIÓN
         ========================================= */}

      <section className="section burgundy">

        <div className="container">

          <div className="heading-script">
            Confirma tu asistencia
          </div>

          <div className="confirm-box">

            <div className="eyebrow">
              Antes del 16 de octubre de 2026
            </div>

            <p
              className="copy"
              style={{ marginTop: 18 }}
            >
              Agradeceríamos enormemente que confirmes tu asistencia con Ruth.
            </p>

            <a
              className="confirm-btn"
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Confirmar por WhatsApp
            </a>

            <p className="small">
              Ruth · 951 229 5634
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          SOLO PARA ADULTOS
         ========================================= */}

      <section className="section paper">

        <div className="container adults">

          <div className="adults-title">
            Con todo nuestro cariño
          </div>

          <div className="heading-script">
            Una celebración solo para adultos
          </div>

          <p className="copy">
            Agradecemos enormemente su presencia y, con todo nuestro cariño,
            les informamos que este evento es exclusivamente para adultos.
            Les pedimos amablemente no asistir con niños.
            Agradecemos mucho su comprensión y apoyo para hacer de este día
            un momento muy especial.
          </p>

        </div>

      </section>


      {/* =========================================
          FOOTER
         ========================================= */}

      <footer className="footer">

        <div className="names">
          Ruth &amp; Jhonatan
        </div>

        <p>
          23 · Octubre · 2026 · Oaxaca de Juárez
        </p>

      </footer>

    </main>
  );
}