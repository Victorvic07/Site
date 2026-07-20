const infrastructureSkills = [
  "Suporte N1/N2",
  "Help desk",
  "Windows",
  "Linux",
  "Hardware",
  "TCP/IP",
  "VPN",
  "Acesso remoto",
];

const developmentSkills = [
  "Python",
  "FastAPI",
  "SQLAlchemy",
  "APIs REST",
  "JWT",
  "Angular",
  "TypeScript",
  "PostgreSQL",
];

const experiences = [
  {
    period: "2025 — 2026",
    role: "Analista de Infraestrutura de TI",
    company: "Nauany Consultoria",
    summary:
      "Suporte técnico N1 e N2, presencial e remoto, com foco na continuidade da operação e na resolução eficiente de incidentes.",
    highlights: [
      "Administração de usuários, acessos e permissões.",
      "Diagnóstico de hardware, software, redes, VPN e conectividade.",
      "Monitoramento, segurança da informação e documentação técnica.",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Desenvolvedor de Software",
    company: "Flow Sistemas",
    summary:
      "Desenvolvimento de um sistema interno de chamados, do backend às interfaces usadas por solicitantes, técnicos e administradores.",
    highlights: [
      "Backend com Python, FastAPI, SQLAlchemy e PostgreSQL.",
      "APIs REST com autenticação JWT e autorização por perfis.",
      "Frontend em Angular, TypeScript, SCSS e RxJS.",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Técnico de Informática",
    company: "JV Consultoria",
    summary:
      "Atendimento técnico presencial e remoto para pessoas físicas e jurídicas, com manutenção preventiva e corretiva.",
    highlights: [
      "Montagem, upgrades e substituição de componentes.",
      "Instalação de sistemas, drivers e softwares.",
      "Formatação, recuperação de dados e otimização.",
    ],
  },
];

const courses = [
  "Redes de Computadores",
  "Banco de Dados e SQL",
  "Administração de Servidores e Serviços de Rede",
  "Cabeamento Estruturado e Infraestrutura Física de Redes",
  "Sistemas Computacionais e Segurança",
  "Python 3 do Básico ao Avançado",
  "Linux Completo",
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <nav className="site-nav" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="João Victor, início">
          <span className="brand-dot" aria-hidden="true" />
          JOÃO VICTOR
        </a>
        <div className="nav-links">
          <a href="#experiencia">Experiência</a>
          <a href="#projeto">Projeto</a>
          <a href="#competencias">Competências</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      <main id="conteudo">
        <header className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Infraestrutura + Software
            </p>
            <h1 aria-label="Transformo problemas técnicos em soluções confiáveis">
              Transformo problemas técnicos em{" "}
              <span>soluções confiáveis.</span>
            </h1>
            <p className="hero-description">
              Analista de Infraestrutura de TI e Desenvolvedor de Software com
              experiência prática em suporte, redes, hardware, APIs e aplicações
              web. Atuo do diagnóstico à entrega, sempre com foco em continuidade,
              documentação e melhoria.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experiencia">
                Ver trajetória <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/Victorvic07"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="location">Salvador, Bahia · Disponível para oportunidades</p>
          </div>

          <aside className="hero-panel" aria-label="Resumo técnico">
            <div className="terminal-bar">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <small>perfil.json</small>
            </div>
            <div className="terminal-content" aria-hidden="true">
              <p><em>“nome”</em>: “João Victor”,</p>
              <p><em>“perfil”</em>: [</p>
              <p className="indent">“infraestrutura_ti”,</p>
              <p className="indent">“desenvolvimento_software”</p>
              <p>],</p>
              <p><em>“foco”</em>: “resolver e evoluir”,</p>
              <p><em>“status”</em>: <strong>“online”</strong></p>
            </div>
            <div className="panel-footer">
              <span>Python</span><span>FastAPI</span><span>Angular</span><span>Linux</span>
            </div>
          </aside>
        </header>

        <section className="section" id="competencias" aria-labelledby="competencias-title">
          <div className="section-heading">
            <p className="section-number">01 / ÁREAS DE ATUAÇÃO</p>
            <h2 id="competencias-title">Um perfil, duas frentes que se complementam.</h2>
          </div>

          <div className="skills-grid">
            <article className="skill-card">
              <div className="card-index">INFRA / 01</div>
              <h3>Infraestrutura de TI</h3>
              <p>
                Suporte à operação, administração de acessos, diagnóstico e
                resolução de incidentes em ambientes presenciais e remotos.
              </p>
              <div className="tag-list" aria-label="Competências em infraestrutura">
                {infrastructureSkills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>

            <article className="skill-card">
              <div className="card-index">DEV / 02</div>
              <h3>Desenvolvimento de Software</h3>
              <p>
                APIs, integrações e interfaces web estruturadas para transformar
                processos reais em experiências claras e confiáveis.
              </p>
              <div className="tag-list" aria-label="Competências em desenvolvimento">
                {developmentSkills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          </div>
        </section>

        <section className="section project-section" id="projeto" aria-labelledby="projeto-title">
          <div className="project-label">
            <p className="section-number">02 / PROJETO EM DESTAQUE</p>
            <span className="project-year">2024 — 2025</span>
          </div>
          <div className="project-layout">
            <div>
              <p className="project-kicker">FLOW SISTEMAS</p>
              <h2 id="projeto-title">Sistema interno de chamados</h2>
              <p className="project-summary">
                Uma aplicação completa para organizar solicitações, atribuições e
                histórico de atendimento entre diferentes perfis de usuário.
              </p>
            </div>
            <div className="project-details">
              <div className="project-stat">
                <span>01</span>
                <p><strong>Backend</strong> Python, FastAPI, SQLAlchemy e PostgreSQL.</p>
              </div>
              <div className="project-stat">
                <span>02</span>
                <p><strong>Segurança</strong> JWT, autorização por perfis e regras de acesso.</p>
              </div>
              <div className="project-stat">
                <span>03</span>
                <p><strong>Frontend</strong> Angular, TypeScript, SCSS, Router e RxJS.</p>
              </div>
              <div className="project-stat">
                <span>04</span>
                <p><strong>Fluxo</strong> Filtros, atribuição, status e histórico de alterações.</p>
              </div>
            </div>
          </div>
          <div className="architecture-line" aria-label="Arquitetura do projeto">
            <span>ANGULAR</span><b aria-hidden="true">→</b><span>REST API</span><b aria-hidden="true">→</b><span>FASTAPI</span><b aria-hidden="true">→</b><span>POSTGRESQL</span>
          </div>
        </section>

        <section className="section" id="experiencia" aria-labelledby="experiencia-title">
          <div className="section-heading split-heading">
            <div>
              <p className="section-number">03 / EXPERIÊNCIA</p>
              <h2 id="experiencia-title">Trajetória profissional</h2>
            </div>
            <p>Experiência construída entre atendimento técnico, operação de infraestrutura e desenvolvimento de produtos internos.</p>
          </div>

          <div className="timeline">
            {experiences.map((experience, index) => (
              <article className="timeline-item" key={experience.company}>
                <div className="timeline-marker" aria-hidden="true">0{index + 1}</div>
                <p className="timeline-period">{experience.period}</p>
                <div className="timeline-content">
                  <h3>{experience.role}</h3>
                  <p className="company">{experience.company}</p>
                  <p className="timeline-summary">{experience.summary}</p>
                  <ul>
                    {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" aria-labelledby="formacao-title">
          <div className="section-heading">
            <p className="section-number">04 / FORMAÇÃO</p>
            <h2 id="formacao-title">Base acadêmica e aprendizado contínuo.</h2>
          </div>
          <div className="education-grid">
            <article>
              <span>2022 — 2026 · CURSANDO</span>
              <h3>Bacharelado em Ciência da Computação</h3>
              <p>UNIFACS</p>
            </article>
            <article>
              <span>2020 — 2022 · CONCLUÍDO</span>
              <h3>Desenvolvimento Web Full Stack</h3>
              <p>Programador BR</p>
            </article>
          </div>
          <div className="courses">
            <p>CURSOS COMPLEMENTARES</p>
            <div className="course-list">
              {courses.map((course) => <span key={course}>{course}</span>)}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato" aria-labelledby="contato-title">
          <p className="section-number">05 / CONTATO</p>
          <div className="contact-layout">
            <div>
              <h2 id="contato-title">Vamos construir uma solução confiável?</h2>
              <p>Estou disponível para conversar sobre oportunidades em infraestrutura, suporte e desenvolvimento.</p>
            </div>
            <div className="contact-links">
              <a href="mailto:jvictor198913@gmail.com"><span>E-mail</span>jvictor198913@gmail.com <b aria-hidden="true">↗</b></a>
              <a href="tel:+5571999720309"><span>Telefone</span>(71) 99972-0309 <b aria-hidden="true">↗</b></a>
              <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-060441346/" target="_blank" rel="noreferrer"><span>LinkedIn</span>Conectar <b aria-hidden="true">↗</b></a>
              <a href="https://github.com/Victorvic07" target="_blank" rel="noreferrer"><span>GitHub</span>Ver perfil <b aria-hidden="true">↗</b></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>João Victor Silva Santos</p>
        <p>Infraestrutura de TI + Desenvolvimento de Software</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </>
  );
}
