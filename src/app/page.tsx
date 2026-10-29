import Link from "next/link";

export default function Home() {
  return (
    <main className="page">
      <header className="topbar">
        <Link aria-label="Sitech, inicio" className="brand" href="/">
          <span className="brand-mark">S</span>
          <span>Sitech</span>
        </Link>
        <span className="topbar-label">ETEC Sales Gomes</span>
      </header>

      <section className="hero">
        <p className="eyebrow">Conhecimento que transforma</p>
        <h1>Seu proximo passo comeca aqui.</h1>
        <p className="hero-copy">
          Explore os cursos tecnicos, conheca as materias de cada formacao e
          acompanhe as novidades da comunidade escolar.
        </p>
        <a
          className="source-link"
          href="https://etecsalesgomes.cps.sp.gov.br/ensino-tecnico/"
          rel="noreferrer"
          target="_blank"
        >
          Conheca o ensino tecnico <span aria-hidden="true">↗</span>
        </a>
        <div aria-hidden="true" className="hero-decoration">
          <span className="decoration-circle" />
          <span className="decoration-line" />
          <span className="decoration-dot" />
        </div>
      </section>

      <section aria-labelledby="welcome-title" className="welcome">
        <div>
          <p className="eyebrow">Um novo jeito de descobrir</p>
          <h2 id="welcome-title">Formacao para construir o futuro.</h2>
        </div>
        <p>
          Estamos preparando um espaco para reunir informacoes sobre cursos,
          matrizes curriculares e noticias da escola.
        </p>
      </section>
      <footer className="footer">
        <span>Sitech</span>
        <span>ETEC Sales Gomes</span>
      </footer>
    </main>
  );
}
