"use client";

import { useRouter } from "next/navigation";

export default function WeddingInvitation() {
  const router = useRouter();

  const openInvitation = () => {
    router.push("/invitacion");
  };

  return (
    <main className="site">
      <section className="cover" id="inicio">

        {/* DESTELLOS ANIMADOS */}
        <div className="cover-sparkles" aria-hidden="true">
          {Array.from({ length: 75 }).map((_, i) => (
            <span
              key={i}
              className={`sparkle sparkle-${(i % 5) + 1}`}
              style={{
                left: `${3 + ((i * 37) % 94)}%`,
                top: `${2 + ((i * 61) % 94)}%`,
                animationDelay: `${(i % 17) * 0.28}s`,
                animationDuration: `${2.3 + (i % 6) * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="cover-shell">
          <div className="cover-inner">

            <div className="kicker">
              Save the date
            </div>

            <div className="cover-names script">
              <span>Ruth</span>

              <div className="amp">
                &amp;
              </div>

              <span>Jhonatan</span>
            </div>

            <div className="cover-date">
              23 · Octubre · 2026
            </div>

            <div className="cover-heart">
              ♡
            </div>

            <button
              className="open"
              onClick={openInvitation}
            >
              Toca el sobre

              <span className="tiny">
                para abrir nuestra invitación
              </span>
            </button>

          </div>
        </div>

      </section>
    </main>
  );
}