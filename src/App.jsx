import React, { useEffect, useState } from "react";

const calendlyUrl =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0hDU1CkBIygf-Zz4CKrt-MHB01AwavDUmzU52R8XVaziJZ1_daBO5xs-gkCtNMjwI7yvuSBbxt?gv=true";
const agendaExternalUrl = "https://agenda-de-atendimento.netlify.app/";

const privacyUrl = "/privacidade";

const whatsappUrl = "https://wa.me/qr/W2TYKS3VMBLAL1";
const instagramUrl = "https://www.instagram.com/wellingtoncr_psi";
const portraitSrc = "/retrato-wellington.png";
const logoSrc = "/logo-wellington.png";
const siteTitle = "Francisco Wellington CR | Logoterapia e Clínica Existencial";
const siteDescription = "Atendimento online e presencial em Logoterapia e clínica existencial com Francisco Wellington CR. Uma escuta orientada por sentido, presença e responsabilidade diante da vida.";
const privacyTitle = "Ética, Sigilo, Privacidade e Proteção de Dados | Francisco Wellington CR";
const privacyDescription = "Informações sobre sigilo profissional, atendimento on-line, privacidade e proteção de dados no site de Francisco Wellington CR.";
const approachUrl = "/abordagem-e-pilares";
const approachTitle = "Abordagem e Pilares | Francisco Wellington CR";
const approachDescription = "Página dedicada à Logoterapia e à Psicologia Existencial, com apresentação da abordagem, pilares centrais e referências de aprofundamento.";

const sectionLinks = [
  ["sobre", "Sobre"],
  ["abordagem", "Abordagem"],
  ["pilares", "Pilares"],
  ["estrutura", "Estrutura"],
  ["agenda", "Agenda"],
  ["faq", "Perguntas"],
  ["contato", "Contato"],
];

const structureSteps = [
  {
    number: "01",
    title: "Primeiro contato",
    text: "O início do atendimento acolhe sua história, seu momento atual e as questões que hoje pedem maior atenção clínica.",
  },
  {
    number: "02",
    title: "Alinhamento prático",
    text: "Definimos formato, disponibilidade, frequência inicial e os combinados necessários para um processo organizado e sereno.",
  },
  {
    number: "03",
    title: "Caminho terapêutico",
    text: "O acompanhamento se sustenta em ética, constância e presença clínica, favorecendo elaboração, direção e aprofundamento.",
  },
];

const pillars = [
  {
    title: "Liberdade da vontade",
    text: "Mesmo diante de limites e sofrimento, a pessoa conserva a possibilidade de posicionar-se interiormente e responder de modo consciente à vida.",
  },
  {
    title: "Vontade de sentido",
    text: "A Logoterapia compreende que o ser humano é movido pela busca de significado, valor e direção existencial, e não apenas pela redução da dor.",
  },
  {
    title: "Sentido da vida",
    text: "Cada existência traz possibilidades concretas de sentido. A clínica favorece a percepção desses caminhos no cotidiano, nas relações e nas escolhas.",
  },
];

const faqs = [
  {
    q: "Como funciona o primeiro atendimento?",
    a: "O primeiro encontro é dedicado à escuta da sua história, à compreensão do momento vivido e ao alinhamento inicial do acompanhamento terapêutico.",
  },
  {
    q: "A Logoterapia serve apenas para momentos de crise?",
    a: "Não. Ela também favorece autoconhecimento, amadurecimento, reconexão com valores, responsabilidade e construção de sentido ao longo da vida.",
  },
  {
    q: "O atendimento pode ser online e presencial?",
    a: "Sim. O acompanhamento pode acontecer de forma online ou presencial, conforme a disponibilidade e aquilo que melhor se adequar ao seu contexto.",
  },
  {
    q: "Para quais públicos é voltado o atendimento?",
    a: "O atendimento é direcionado a jovens, adolescentes e adultos, considerando as singularidades de cada fase da vida e de cada percurso existencial.",
  },
  {
    q: "Como a frequência das sessões é definida?",
    a: "A frequência inicial é alinhada no começo do processo, considerando o momento vivido, a disponibilidade e a necessidade clínica de continuidade.",
  },
  {
    q: "O processo terapêutico é sigiloso?",
    a: "Sim. O atendimento é conduzido com compromisso ético, respeito à confidencialidade e responsabilidade clínica em relação ao que é compartilhado.",
  },
  {
    q: "Como faço para agendar um horário?",
    a: "Você pode iniciar pelo WhatsApp ou acessar diretamente a agenda online para visualizar horários disponíveis e dar início ao atendimento.",
  },
];

const faqHighlights = [
  "Atendimento online e presencial",
  "Criança, adolescentes e adultos",
  "Organização prática com clareza",
];

const privacyPrinciples = [
  {
    title: "Sigilo profissional",
    text: "O atendimento é orientado pelo dever ético de confidencialidade no exercício profissional, com proteção da intimidade e do conteúdo compartilhado ao longo do processo terapêutico.",
  },
  {
    title: "Uso responsável de dados pessoais",
    text: "Informações fornecidas em formulários, canais de contato e agendamento devem ser tratadas com finalidade legítima, acesso restrito e cuidado proporcional à natureza do serviço prestado.",
  },
  {
    title: "Atendimento mediado por tecnologias digitais",
    text: "Nos atendimentos realizados com apoio de tecnologias digitais, a condução do serviço observa critérios éticos, técnicos e de segurança compatíveis com a prática profissional responsável.",
  },
];

const privacySections = [
  {
    title: "1. Compromisso ético e profissional",
    text: "Esta página apresenta, de forma organizada, os compromissos relacionados à ética profissional, ao sigilo do atendimento, à privacidade das informações e ao tratamento responsável de dados pessoais vinculados ao uso deste site e aos canais de contato clínico.",
  },
  {
    title: "2. Informações que podem ser tratadas",
    text: "Podem ser tratados dados fornecidos voluntariamente pela pessoa usuária, como nome, telefone, e-mail, mensagens encaminhadas por canais digitais e informações estritamente necessárias à organização inicial do contato ou agendamento.",
  },
  {
    title: "3. Finalidades do tratamento",
    text: "As informações são utilizadas, quando necessário, para responder contatos, organizar solicitações de atendimento, realizar comunicações relacionadas à agenda, manter registros profissionais pertinentes e resguardar a continuidade adequada do serviço.",
  },
  {
    title: "4. Sigilo e confidencialidade",
    text: "As informações compartilhadas em contexto profissional devem ser tratadas com reserva, confidencialidade e responsabilidade ética. Situações excepcionais são apreciadas apenas nos limites éticos e legais aplicáveis ao exercício profissional.",
  },
  {
    title: "5. Atendimento on-line e recursos digitais",
    text: "Quando o serviço envolver tecnologias digitais, busca-se adotar medidas razoáveis de organização, segurança e orientação quanto ao uso dos recursos empregados, preservando a dignidade, a privacidade e a qualidade do atendimento.",
  },
  {
    title: "6. Armazenamento, acesso e proteção",
    text: "Dados e registros vinculados ao exercício profissional devem ser mantidos com acesso restrito, proteção compatível com sua sensibilidade e organização responsável, evitando exposição indevida, circulação desnecessária ou compartilhamentos incompatíveis com sua finalidade.",
  },
  {
    title: "7. Direitos da pessoa titular dos dados",
    text: "A pessoa titular poderá solicitar informações sobre dados pessoais tratados em canais digitais vinculados ao site, observados os limites éticos, legais e técnicos aplicáveis ao exercício profissional e à guarda responsável de registros.",
  },
  {
    title: "8. Canal de contato sobre privacidade",
    text: "Solicitações relacionadas a privacidade, uso de dados e informações gerais sobre sigilo podem ser encaminhadas pelo canal oficial de contato disponível neste site.",
  },
];

const officialReferences = [
  {
    title: "Código de Ética Profissional da/o Psicóloga/o",
    text: "Documento oficial do CFP com os princípios, responsabilidades, deveres e parâmetros éticos do exercício profissional.",
    href: "https://transparencia.cfp.org.br/wp-content/uploads/sites/29/2025/04/CodigoDeEtica_2025_Digital.pdf",
    label: "Ler documento oficial",
  },
  {
    title: "Atendimento psicológico on-line e Resolução CFP nº 09/2024",
    text: "Página oficial explicativa sobre atendimento mediado por tecnologias digitais, vigência da resolução e orientações gerais do Sistema Conselhos.",
    href: "https://transparencia.cfp.org.br/crp12/pergunta-frequente/atendimentopsicologicoonline/",
    label: "Acessar orientação oficial",
  },
  {
    title: "Lei Geral de Proteção de Dados Pessoais (LGPD)",
    text: "Texto oficial da legislação brasileira que disciplina o tratamento de dados pessoais, inclusive em meios digitais.",
    href: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
    label: "Consultar texto legal",
  },
];

const approachSections = [
  {
    title: "O que é a Logoterapia",
    text: "A Logoterapia pode ser apresentada como uma abordagem orientada pelo sentido, voltada à compreensão da pessoa para além do sintoma imediato. Em vez de reduzir a experiência humana a mecanismos fechados, ela considera liberdade interior, responsabilidade e abertura para valores concretos diante da vida.",
  },
  {
    title: "Psicologia Existencial e direção clínica",
    text: "Na prática clínica, essa perspectiva favorece uma escuta que acolhe sofrimento, conflito, vazio e desorientação sem reduzir a pessoa àquilo que a aflige. O cuidado passa a incluir o modo como cada sujeito se posiciona, responde e encontra direção diante do que vive.",
  },
];

const approachPillarsDetailed = [
  {
    title: "Liberdade da vontade",
    text: "Mesmo sob condicionamentos e limites reais, a pessoa conserva a possibilidade de assumir uma atitude diante do que vive. Esse princípio sustenta uma clínica que reconhece condicionamentos, mas não anula a dignidade de resposta do sujeito.",
  },
  {
    title: "Vontade de sentido",
    text: "A busca de sentido aparece como força orientadora da existência. Nessa perspectiva, a pessoa não se move apenas pela eliminação do sofrimento, mas também pela necessidade de encontrar significado, direção e valor em sua própria vida.",
  },
  {
    title: "Sentido da vida",
    text: "O sentido não é tratado como ideia abstrata e distante, mas como possibilidade concreta, situada e singular. Ele pode ser percebido nas escolhas, nos vínculos, no trabalho, na criação, no amor, na atitude diante da dor e na responsabilidade assumida frente à realidade.",
  },
];

const approachApplications = [
  {
    title: "Valores e direção existencial",
    text: "A clínica pode favorecer o reencontro com aquilo que tem valor, peso e verdade para a pessoa, ajudando-a a reorganizar sua direção interna diante de períodos de dispersão, estagnação ou sofrimento.",
  },
  {
    title: "Responsabilidade e posicionamento",
    text: "Mais do que oferecer respostas prontas, a abordagem convida ao amadurecimento do posicionamento pessoal, fortalecendo responsabilidade, consciência e decisão diante das circunstâncias concretas da vida.",
  },
  {
    title: "Sofrimento, atitude e sentido",
    text: "Quando determinadas situações não podem ser modificadas de imediato, o trabalho clínico também pode se voltar à maneira como a pessoa se coloca diante delas, reconhecendo a possibilidade de atitude, elaboração e reconstrução de sentido.",
  },
];

const approachReferences = [
  {
    title: "Viktor Frankl Institute — About Logotherapy",
    text: "Apresentação institucional da Logoterapia como filosofia da existência e modalidade terapêutica, com síntese de princípios fundamentais.",
    href: "https://www.viktorfranklinstitute.org/about-logotherapy/",
    label: "Acessar fonte oficial",
  },
  {
    title: "Viktor Frankl Institute Vienna — Logotherapy and Existential Analysis",
    text: "Página oficial com explicações complementares sobre conceitos, atitude, sentido e elementos do trabalho logoterapêutico.",
    href: "https://www.viktorfrankl.org/logotherapy.html",
    label: "Ler referência",
  },
  {
    title: "Books by Viktor Frankl",
    text: "Página oficial com obras centrais de Viktor Frankl, incluindo títulos fundamentais para aprofundamento da abordagem.",
    href: "https://www.viktorfrankl.org/books_by_vf.html",
    label: "Ver obras",
  },
  {
    title: "Springer — Logotherapy and Existential Analysis",
    text: "Série e volumes acadêmicos dedicados ao desenvolvimento contemporâneo da Logoterapia e da Análise Existencial.",
    href: "https://link.springer.com/series/13368/books",
    label: "Consultar série",
  },
];

const stars = [
  { left: "8%", top: "14%", delay: "0s", duration: "12s" },
  { left: "18%", top: "34%", delay: "1.2s", duration: "11s" },
  { left: "31%", top: "18%", delay: "2.3s", duration: "10s" },
  { left: "44%", top: "28%", delay: "0.8s", duration: "13s" },
  { left: "58%", top: "16%", delay: "1.6s", duration: "9.5s" },
  { left: "71%", top: "24%", delay: "2.6s", duration: "12.5s" },
  { left: "86%", top: "18%", delay: "0.4s", duration: "10.5s" },
  { left: "12%", top: "58%", delay: "1.1s", duration: "14s" },
  { left: "27%", top: "72%", delay: "2.1s", duration: "11.5s" },
  { left: "49%", top: "64%", delay: "0.7s", duration: "13.5s" },
  { left: "68%", top: "76%", delay: "1.9s", duration: "12s" },
  { left: "83%", top: "60%", delay: "2.8s", duration: "10.8s" },
];

const shootingStars = [
  {
    top: "9%",
    left: "101%",
    delay: "4s",
    duration: "42s",
    length: "180px",
    thickness: "2px",
    travelX: "-1450px",
    travelY: "820px",
    opacity: ".76",
    angle: "-22deg",
  },
  {
    top: "21%",
    left: "100%",
    delay: "18s",
    duration: "42s",
    length: "150px",
    thickness: "2px",
    travelX: "-1320px",
    travelY: "760px",
    opacity: ".62",
    angle: "-18deg",
  },
  {
    top: "31%",
    left: "102%",
    delay: "32s",
    duration: "42s",
    length: "205px",
    thickness: "2px",
    travelX: "-1580px",
    travelY: "900px",
    opacity: ".8",
    angle: "-25deg",
  },
];

function NavLinks({ onClick }) {
  return (
    <>
      {sectionLinks.map(([id, label]) => (
        <a key={id} href={`#${id}`} onClick={onClick}>
          {label}
        </a>
      ))}
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path
        fill="currentColor"
        d="M19.05 4.94A9.86 9.86 0 0 0 12.03 2C6.55 2 2.1 6.45 2.1 11.93c0 1.75.46 3.46 1.33 4.96L2 22l5.27-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.48 0 9.93-4.45 9.93-9.93a9.84 9.84 0 0 0-2.91-6.96Zm-7.02 15.2h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.13.82.84-3.05-.2-.31a8.17 8.17 0 0 1-1.25-4.35c0-4.51 3.68-8.19 8.21-8.19 2.19 0 4.24.85 5.79 2.39a8.12 8.12 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.17 8.2Zm4.49-6.13c-.25-.13-1.47-.73-1.7-.81-.23-.09-.39-.13-.56.12-.17.25-.64.81-.79.98-.15.17-.29.19-.54.06-.25-.13-1.05-.39-1.99-1.24-.74-.66-1.24-1.47-1.38-1.71-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07s.89 2.39 1.01 2.56c.13.17 1.76 2.69 4.27 3.78.6.26 1.06.41 1.42.52.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.67-1.17.21-.58.21-1.07.15-1.17-.07-.11-.23-.17-.48-.29Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.25 1.65a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path fill="currentColor" d="M12 2 4 5v6c0 5.25 3.4 10.74 8 12 4.6-1.26 8-6.75 8-12V5l-8-3Zm0 2.2 5.8 2.18V11c0 4.16-2.54 8.47-5.8 9.74C8.74 19.47 6.2 15.16 6.2 11V6.38L12 4.2Z" />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`chevron ${open ? "open" : ""}`}>
      <path fill="currentColor" d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
    </svg>
  );
}

function LogoMark({ className = "brand-logo" }) {
  return <img src={logoSrc} alt="" aria-hidden="true" className={className} />;
}

function PortraitPlaceholder() {
  return (
    <div className="portrait-illustration" aria-label="Retrato profissional de Wellington">
      <div className="portrait-halo" />
      <img src={portraitSrc} alt="Retrato profissional de Wellington" className="portrait-real-image" />
    </div>
  );
}

function AvailabilityPanel({ className = "" }) {
  return (
    <div className={`availability-inline ${className}`.trim()}>
      <div className="availability-inline-card">
        <span className="availability-inline-label">Disponibilidade</span>
        <strong className="availability-inline-value availability-inline-main">Segunda a sexta</strong>
      </div>
      <div className="availability-inline-card">
        <span className="availability-inline-label">Horário</span>
        <strong className="availability-inline-value availability-inline-main">14h às 22h</strong>
      </div>
      <div className="availability-inline-card">
        <span className="availability-inline-label">Formato</span>
        <strong className="availability-inline-value availability-inline-main availability-inline-format">Online e presencial</strong>
      </div>
    </div>
  );
}

function PrivacyPage() {
  return (
    <div className="site-shell privacy-shell">
      <div className="grid-bg" />
      <div className="edge-glow" />

      <header className="site-container header-wrap reveal">
        <div className="glass panel header-panel">
          <a href="/" className="brand-block" aria-label="Voltar ao início do site">
            <LogoMark className="brand-logo" />
            <div>
              <p className="eyebrow">Ética, sigilo e proteção de dados</p>
              <h1 className="brand-name">Francisco Wellington CR</h1>
            </div>
          </a>

          <nav className="nav-desktop" aria-label="Navegação da página de privacidade">
            <a href="#compromissos">Compromissos</a>
            <a href="#politica">Política</a>
            <a href="#contato-privacidade">Contato</a>
            <a href="/">Voltar ao site</a>
          </nav>
        </div>
      </header>

      <main className="site-container main-content privacy-main">
        <section className="glass panel privacy-hero reveal">
          <p className="eyebrow">Página dedicada</p>
          <h2 className="title-font section-title privacy-title">Ética, sigilo, privacidade e proteção de dados em uma página própria</h2>
          <p className="copy privacy-copy">
            Esta área reúne, de modo mais claro e organizado, informações sobre confidencialidade, responsabilidade profissional, uso de tecnologias digitais e tratamento responsável de dados pessoais vinculados ao site e aos canais de contato.
          </p>
          <div className="privacy-hero-actions">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Falar sobre privacidade
            </a>
            <a href="/" className="btn btn-secondary">
              Voltar ao site principal
            </a>
          </div>
        </section>

        <section id="compromissos" className="glass panel structure-panel reveal">
          <div className="section-head center-head">
            <p className="eyebrow">Compromissos centrais</p>
            <h3 className="title-font section-title center-title">Princípios apresentados de forma mais limpa, sem sobrecarregar a página principal</h3>
          </div>

          <div className="trust-grid">
            {privacyPrinciples.map((item) => (
              <article key={item.title} className="trust-card">
                <h4 className="title-font trust-title">{item.title}</h4>
                <p className="copy">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="politica" className="glass panel structure-panel reveal">
          <div className="section-head center-head">
            <p className="eyebrow">Política orientativa</p>
            <h3 className="title-font section-title center-title">Cada ponto disposto com mais direcionamento e melhor arquitetura de leitura</h3>
            <p className="copy section-copy center-copy long-copy">
              Abaixo, os tópicos principais aparecem em sequência organizada para facilitar consulta, transmitir segurança institucional e manter a página inicial mais leve visualmente.
            </p>
          </div>

          <div className="privacy-sections">
            {privacySections.map((item) => (
              <article key={item.title} className="privacy-card">
                <h4 className="title-font privacy-card-title">{item.title}</h4>
                <p className="copy">{item.text}</p>
              </article>
            ))}
          </div>

          <p className="copy trust-note long-copy" style={{ textAlign: "center" }}>
            Este conteúdo pode ser ampliado futuramente com detalhes adicionais sobre atualização da política, retenção de dados, bases legais específicas aplicáveis em cada fluxo e procedimentos internos de atendimento, conforme a estrutura final do site e da rotina profissional.
          </p>
        </section>

        <section className="glass panel structure-panel reveal">
          <div className="section-head center-head">
            <p className="eyebrow">Referências normativas oficiais</p>
            <h3 className="title-font section-title center-title">Fontes institucionais para consulta direta</h3>
            <p className="copy section-copy center-copy long-copy">
              Para reforçar transparência e credibilidade, abaixo estão reunidos links oficiais de referência sobre ética profissional, atendimento on-line e proteção de dados.
            </p>
          </div>

          <div className="references-grid">
            {officialReferences.map((item) => (
              <article key={item.title} className="reference-card">
                <h4 className="title-font reference-title">{item.title}</h4>
                <p className="copy">{item.text}</p>
                <div className="reference-actions">
                  <a href={item.href} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    {item.label}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contato-privacidade" className="glass panel contact-panel reveal">
          <div className="contact-centered">
            <p className="eyebrow">Canal de contato</p>
            <h3 className="title-font section-title center-title">Solicitações e esclarecimentos sobre privacidade</h3>
            <p className="copy centered-copy long-copy contact-centered-copy">
              Questões relacionadas a sigilo, privacidade, uso de dados em canais digitais e informações gerais sobre atendimento podem ser encaminhadas pelo canal oficial de contato disponível no site.
            </p>
            <div className="contact-actions contact-actions-centered">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Solicitar informações
              </a>
              <a href="/" className="btn btn-secondary">
                Retornar ao site principal
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ApproachPage() {
  return (
    <div className="site-shell privacy-shell">
      <div className="grid-bg" />
      <div className="edge-glow" />

      <header className="site-container header-wrap reveal">
        <div className="glass panel header-panel">
          <a href="/" className="brand-block" aria-label="Voltar ao início do site">
            <LogoMark className="brand-logo" />
            <div>
              <p className="eyebrow">Abordagem e pilares</p>
              <h1 className="brand-name">Francisco Wellington CR</h1>
            </div>
          </a>

          <nav className="nav-desktop" aria-label="Navegação da página de abordagem">
            <a href="#abordagem-visao">Abordagem</a>
            <a href="#pilares-centrais">Pilares</a>
            <a href="#referencias-abordagem">Referências</a>
            <a href="/">Voltar ao site</a>
          </nav>
        </div>
      </header>

      <main className="site-container main-content privacy-main">
        <section className="glass panel privacy-hero reveal">
          <p className="eyebrow">Página dedicada</p>
          <h2 className="title-font section-title privacy-title">Logoterapia e Psicologia Existencial em uma página própria de aprofundamento</h2>
          <p className="copy privacy-copy">
            Esta área reúne uma apresentação mais ampla da abordagem clínica, dos pilares centrais da Logoterapia e de referências de leitura que ajudam a compreender melhor sua base conceitual e seu horizonte de cuidado.
          </p>
          <div className="privacy-hero-actions">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Conversar sobre a abordagem
            </a>
            <a href="/" className="btn btn-secondary">
              Voltar ao site principal
            </a>
          </div>
        </section>

        <section id="abordagem-visao" className="glass panel structure-panel reveal">
          <div className="section-head center-head">
            <p className="eyebrow">Visão da abordagem</p>
            <h3 className="title-font section-title center-title">Uma explicação mais ampla, sem sobrecarregar a página inicial</h3>
          </div>

          <div className="privacy-sections">
            {approachSections.map((item) => (
              <article key={item.title} className="privacy-card">
                <h4 className="title-font privacy-card-title">{item.title}</h4>
                <p className="copy">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pilares-centrais" className="glass panel structure-panel reveal">
          <div className="section-head center-head">
            <p className="eyebrow">Pilares centrais</p>
            <h3 className="title-font section-title center-title">Os três eixos mais conhecidos da Logoterapia reunidos em uma leitura única</h3>
            <p className="copy section-copy center-copy long-copy">
              Estes pilares ajudam a compreender por que a abordagem se volta não apenas ao alívio do sofrimento, mas também à reconstrução de sentido, à responsabilidade e à dignidade da resposta humana diante da realidade.
            </p>
          </div>

          <div className="trust-grid">
            {approachPillarsDetailed.map((item) => (
              <article key={item.title} className="trust-card">
                <h4 className="title-font trust-title">{item.title}</h4>
                <p className="copy">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="glass panel structure-panel reveal">
          <div className="section-head center-head">
            <p className="eyebrow">Desdobramentos clínicos</p>
            <h3 className="title-font section-title center-title">Como esses fundamentos podem aparecer no acompanhamento terapêutico</h3>
          </div>

          <div className="trust-grid">
            {approachApplications.map((item) => (
              <article key={item.title} className="trust-card">
                <h4 className="title-font trust-title">{item.title}</h4>
                <p className="copy">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="referencias-abordagem" className="glass panel structure-panel reveal">
          <div className="section-head center-head">
            <p className="eyebrow">Referências de aprofundamento</p>
            <h3 className="title-font section-title center-title">Livros, páginas institucionais e fontes para leitura complementar</h3>
            <p className="copy section-copy center-copy long-copy">
              Abaixo estão reunidas referências introdutórias e complementares para quem deseja conhecer melhor a formulação de Viktor Frankl e o desenvolvimento posterior da Logoterapia e da Análise Existencial.
            </p>
          </div>

          <div className="references-grid approach-references-grid">
            {approachReferences.map((item) => (
              <article key={item.title} className="reference-card">
                <h4 className="title-font reference-title">{item.title}</h4>
                <p className="copy">{item.text}</p>
                <div className="reference-actions">
                  <a href={item.href} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    {item.label}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="glass panel contact-panel reveal">
          <div className="contact-centered">
            <p className="eyebrow">Contato</p>
            <h3 className="title-font section-title center-title">Caso queira, essa compreensão pode continuar no encontro clínico</h3>
            <p className="copy centered-copy long-copy contact-centered-copy">
              Se fizer sentido, o aprofundamento conceitual apresentado aqui pode se desdobrar em um cuidado concreto, atento e responsivo às singularidades da sua experiência.
            </p>
            <div className="contact-actions contact-actions-centered">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Falar sobre atendimento
              </a>
              <a href="/" className="btn btn-secondary">
                Retornar ao site principal
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&family=Forum&family=DM+Serif+Display:ital@0;1&display=swap');

:root {
  color-scheme: dark;
  --bg: #07141c;
  --bg-soft: #0b1a24;
  --text: #f6f0e3;
  --muted: rgba(214, 221, 228, 0.84);
  --gold: #dfbe6f;
  --gold-strong: #d6a64a;
  --line: rgba(255,255,255,.08);
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: 'Inter', sans-serif; background: var(--bg); color: var(--text); }
a { color: inherit; text-decoration: none; }
button { font: inherit; }
.site-shell {
  min-height: 100vh;
  color: var(--text);
  background:
    radial-gradient(circle at top, rgba(32, 67, 88, .35), transparent 32%),
    linear-gradient(180deg, #06121a 0%, #07141c 100%);
}
.site-container { width: min(1180px, calc(100% - 32px)); margin: 0 auto; }
.main-content { padding: 56px 0 108px; position: relative; z-index: 2; display: grid; gap: 52px; }
.header-wrap { position: sticky; top: 14px; z-index: 30; padding-top: 14px; }
.glass {
  position: relative;
  backdrop-filter: blur(16px);
  background: linear-gradient(180deg, rgba(8, 18, 26, 0.92), rgba(5, 13, 19, 0.88));
  border: 1px solid rgba(223, 190, 111, 0.11);
  box-shadow: 0 24px 68px rgba(0,0,0,.34), inset 0 1px 0 rgba(255,255,255,.035), inset 0 -16px 28px rgba(0,0,0,.14);
  transition: border-color .28s ease, box-shadow .28s ease, transform .28s ease;
}
.panel { border-radius: 28px; }
.glass:hover {
  border-color: rgba(223,190,111,.18);
  box-shadow: 0 24px 68px rgba(0,0,0,.34), inset 0 1px 0 rgba(255,255,255,.05), 0 0 0 1px rgba(223,190,111,.04), 0 0 32px rgba(223,190,111,.055);
}
.reveal { animation: fadeUp .7s ease both; }
.header-panel {
  background: linear-gradient(180deg, #091720 0%, #07141c 100%);
  backdrop-filter: none;
  border-radius: 24px;
  min-height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 24px;
}
.brand-block { display: flex; align-items: center; gap: 14px; min-width: 0; }
.brand-logo, .footer-logo { height: 48px; width: auto; }
.brand-logo { height: 52px; width: auto; flex: 0 0 auto; }
.brand-name {
  margin: 3px 0 0;
  font-family: 'Forum', serif;
  font-size: 27px;
  line-height: 1;
  letter-spacing: -.008em;
}
.eyebrow {
  margin: 0;
  font-size: 11px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--gold);
}
.nav-desktop { display: flex; gap: 22px; color: rgba(246,240,227,.78); font-size: 15px; }
.nav-desktop a:hover, .mobile-menu a:hover { color: var(--text); }
.menu-toggle {
  display: none;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
  color: var(--text);
  cursor: pointer;
  padding: 10px;
}
.menu-toggle span {
  display: block;
  height: 2px;
  border-radius: 999px;
  background: currentColor;
  margin: 5px 0;
}
.mobile-menu {
  background: linear-gradient(180deg, #091720 0%, #07141c 100%);
  backdrop-filter: none;
  margin-top: 10px;
  padding: 14px;
  display: grid;
  gap: 10px;
}
.mobile-menu a {
  padding: 10px 12px;
  border-radius: 12px;
  color: rgba(246,240,227,.82);
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.42fr .58fr;
  gap: 16px;
  align-items: stretch;
}
.hero-copy {
  padding: 50px 42px 30px;
  height: 100%;
}
.title-font { font-family: 'Cormorant Garamond', serif; font-weight: 600; }
.hero-title {
  margin: 16px 0 0;
  max-width: none;
  width: 100%;
  font-size: clamp(2.08rem, 3.3vw, 3rem);
  line-height: 1.02;
  letter-spacing: -.02em;
  text-shadow: 0 0 1px rgba(246,240,227,.18);
  text-align: left;
}
.hero-accent {
  color: var(--text);
  font-weight: 700;
  text-shadow: none;
}
.copy {
  margin: 0;
  color: var(--muted);
  line-height: 1.9;
  font-size: 15px;
}
.hero-text,
.hover-card .copy,
.pillar-card .copy,
.structure-card .copy,
.agenda-panel .section-copy,
.local-panel .section-copy,
.faq-answer {
  text-align: justify;
}
.centered-copy,
.section-copy.center-copy,
.contact-centered-copy,
.pillar-note {
  text-align: center;
}
.hero-text {
  margin-top: 30px;
  max-width: none;
  width: 100%;
  font-size: 15.3px;
  line-height: 1.92;
  text-wrap: pretty;
  text-align: justify;
}
.card-grid, .dual-grid { display: grid; gap: 22px; }
.card-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.dual-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.hover-card, .structure-panel, .agenda-panel, .local-panel, .faq-panel, .contact-panel { padding: 38px; }
.hover-card { transition: transform .24s ease, border-color .24s ease, box-shadow .24s ease; }
.hover-card:hover { transform: translateY(-3px); border-color: rgba(223,190,111,.2); }
.card-title, .block-title, .structure-title, .faq-question {
  margin: 0;
  letter-spacing: -.01em;
  line-height: 1.08;
  text-wrap: nowrap;
}
.card-title {
  font-size: clamp(1.24rem, 1.42vw, 1.48rem);
  max-width: none;
  margin-bottom: 14px;
}
.block-title {
  font-size: clamp(1.5rem, 1.76vw, 1.82rem);
  max-width: none;
  margin-top: 10px;
  margin-bottom: 14px;
}
.hero-photo {
  max-width: 304px;
  margin-left: auto;
  overflow: hidden;
  padding: 14px 8px 0;
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
}
.portrait-illustration {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: end;
  justify-content: center;
}
.portrait-halo {
  position: absolute;
  inset: auto 12% 4% 12%;
  height: 26%;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(223,190,111,.12), rgba(223,190,111,0) 72%);
  filter: blur(18px);
  animation: pulseGlow 7s ease-in-out infinite;
}
.portrait-real-image {
  position: relative;
  z-index: 2;
  width: auto;
  max-width: 108%;
  height: calc(100% + 2px);
  object-fit: contain;
  object-position: center bottom;
  filter: drop-shadow(0 18px 36px rgba(0,0,0,.30));
  animation: portraitFloat 7s ease-in-out infinite;
}
.centered-panel { padding: 56px 40px; text-align: center; }
.section-title {
  margin: 12px 0 0;
  font-size: clamp(1.82rem, 2.45vw, 2.4rem);
  line-height: 1.05;
  letter-spacing: -.012em;
  text-wrap: balance;
}
.left-title { text-align: left; max-width: 20ch; }
.center-title { text-align: center; max-width: 26ch; margin-left: auto; margin-right: auto; }
.wide-center-title { max-width: 34ch; }
.no-break-title { max-width: none; white-space: nowrap; }
.centered-copy { margin: 20px auto 0; max-width: 66ch; }
.section-copy { margin-top: 22px; max-width: 56ch; }
.section-copy.center-copy { margin-left: auto; margin-right: auto; text-align: center; }
.long-copy { max-width: 82ch; text-wrap: pretty; }
.logo-interval {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
  padding: 6px 0 4px;
}
.logo-interval-shell {
  position: relative;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-interval-shell::before {
  content: '';
  position: absolute;
  inset: 20% 24%;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(223,190,111,.12), rgba(223,190,111,0) 72%);
  filter: blur(20px);
  animation: pulseGlow 7.2s ease-in-out infinite;
}
.logo-interval-image {
  position: relative;
  height: 88px;
  width: auto;
  opacity: .94;
  filter: drop-shadow(0 0 18px rgba(223,190,111,.16));
  animation: intervalSymbolFloat 6.2s cubic-bezier(.42,0,.18,1) infinite;
}
.interval-line {
  width: 112px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(223,190,111,.75), transparent);
  transform-origin: center;
  animation: intervalGroundShift 6.2s cubic-bezier(.42,0,.18,1) infinite;
}
.interval-text {
  margin: 0;
  font-size: 12px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: rgba(246,240,227,.7);
}
.section-head { display: grid; gap: 6px; }
.center-head { justify-items: center; text-align: center; }
.pillars-grid {
  margin-top: 26px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}
.pillar-card {
  padding: 26px 24px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
}
.pillar-title { margin: 0 0 14px; font-size: 1.24rem; line-height: 1.06; }
.pillar-note {
  margin: 26px auto 0;
  max-width: 82ch;
  padding-top: 22px;
  border-top: 1px solid rgba(255,255,255,.08);
  text-align: center;
}
.structure-grid {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}
.structure-card { padding: 24px; }
.structure-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  background: rgba(223,190,111,.12);
  border: 1px solid rgba(223,190,111,.2);
  color: var(--gold);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .08em;
}
.structure-title { font-size: 1.32rem; margin-top: 18px; margin-bottom: 14px; }
.agenda-grid, .local-panel {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 30px;
  align-items: start;
}
.agenda-preview-panel { padding: 34px 28px; }
.agenda-preview-header { text-align: center; margin-bottom: 20px; }
.agenda-preview-copy { max-width: 50ch; margin: 12px auto 0; text-align: center; }
.agenda-simple-shell {
  max-width: 560px;
  margin: 0 auto;
  padding: 24px 24px;
  border-radius: 24px;
  border: 1px solid rgba(223,190,111,.12);
  background:
    radial-gradient(circle at top right, rgba(223,190,111,.07), transparent 30%),
    linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.018));
  display: grid;
  justify-items: center;
  text-align: center;
}
.agenda-simple-note {
  margin-top: 14px;
  max-width: 34ch;
  color: rgba(246,240,227,.64);
  font-size: 13px;
  line-height: 1.7;
}
.agenda-simple-actions { margin-top: 16px; }
.contact-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 320px;
}
.availability-panel {
  padding: 20px 22px;
  border-radius: 20px;
  border: 1px solid rgba(223,190,111,.16);
  background: linear-gradient(180deg, rgba(223,190,111,.08), rgba(255,255,255,.03));
  box-shadow: inset 0 1px 0 rgba(255,255,255,.03);
}
.availability-divider {
  width: 100%;
  height: 1px;
  margin: 16px 0 14px;
  background: linear-gradient(90deg, rgba(223,190,111,0), rgba(223,190,111,.46), rgba(223,190,111,0));
}
.availability-inline {
  width: 100%;
  display: grid;
  grid-template-columns: 1.18fr 1fr 1.68fr;
  gap: 12px;
}
.availability-inline-card {
  padding: 11px 18px 12px;
  border-radius: 14px;
  border: 1px solid rgba(223,190,111,.14);
  background: linear-gradient(180deg, rgba(223,190,111,.08), rgba(255,255,255,.025));
  text-align: center;
}
.availability-inline-label {
  display: block;
  font-size: 10px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: rgba(246,240,227,.66);
}
.availability-inline-value {
  display: block;
  margin-top: 5px;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  font-size: 1.28rem;
  line-height: 1.05;
  white-space: nowrap;
}
.availability-inline-main { font-size: 1.28rem; }
.availability-inline-format { font-size: 1.16rem; }
.agenda-availability { margin-top: 10px; max-width: 100%; }
.hours-font { font-family: 'DM Serif Display', serif; font-weight: 400; font-size: 1.78rem; }
.map-shell {
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
  width: 100%;
  max-width: none;
  aspect-ratio: 16 / 9;
  min-height: 0;
  margin-left: 0;
}
.map-shell iframe { width: 100%; height: 100%; display: block; border: 0; }
.faq-layout {
  display: grid;
  grid-template-columns: .78fr 1.22fr;
  gap: 28px;
  align-items: start;
  margin-top: 28px;
}
.faq-aside { display: grid; gap: 14px; }
.faq-aside-card {
  padding: 18px 18px;
  color: rgba(246,240,227,.82);
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.035);
  border-radius: 18px;
}
.faq-list { display: grid; gap: 12px; }
.faq-item {
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
  overflow: hidden;
}
.faq-item.active { border-color: rgba(223,190,111,.24); }
.faq-button {
  width: 100%;
  padding: 20px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border: 0;
  background: transparent;
  color: var(--text);
  cursor: pointer;
  text-align: left;
}
.faq-question { font-size: 1.24rem; }
.faq-answer { padding: 0 22px 22px; max-width: 78ch; }
.chevron { width: 22px; height: 22px; flex: 0 0 auto; transition: transform .2s ease; }
.chevron.open { transform: rotate(180deg); }
.contact-centered {
  width: min(760px, 100%);
  margin: 0 auto;
  display: grid;
  justify-items: center;
  text-align: center;
}
.contact-centered-copy { margin-top: 22px; max-width: 70ch; }
.contact-actions {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
.contact-actions-centered { justify-content: center; margin-top: 28px; }
.trust-grid {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}
.trust-card {
  padding: 24px 22px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
}
.trust-title { margin: 0 0 14px; font-size: 1.24rem; line-height: 1.06; }
.trust-note {
  margin: 26px auto 0;
  max-width: 82ch;
  padding-top: 22px;
  border-top: 1px solid rgba(255,255,255,.08);
  text-align: center;
}
.trust-links {
  margin-top: 18px;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}
.privacy-shell .main-content { padding-top: 40px; }
.privacy-hero { padding: 50px 42px 42px; text-align: center; }
.privacy-title { max-width: 30ch; margin-left: auto; margin-right: auto; }
.privacy-shell .center-title { max-width: 34ch; }
.privacy-copy { max-width: 72ch; margin: 22px auto 0; text-align: center; }
.privacy-hero-actions {
  margin-top: 28px;
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}
.privacy-sections {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
.privacy-card {
  padding: 24px 22px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
}
.privacy-card-title { margin: 0 0 14px; font-size: 1.18rem; line-height: 1.08; }
.privacy-teaser-final { padding-top: 30px; padding-bottom: 30px; }
.references-grid {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}
.approach-references-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.reference-card {
  padding: 24px 22px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
}
.reference-title { margin: 0 0 14px; font-size: 1.18rem; line-height: 1.08; }
.reference-actions { margin-top: 18px; display: flex; justify-content: flex-start; }
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 24px;
  border-radius: 16px;
  border: 1px solid transparent;
  font-weight: 600;
  transition: transform .22s ease, filter .22s ease, box-shadow .22s ease, border-color .22s ease, background .22s ease;
}
.btn:hover { transform: translateY(-2px); }
.btn-primary {
  color: #102332;
  background: linear-gradient(135deg, #f5e2ab 0%, #d6a64a 100%);
  box-shadow: 0 16px 32px rgba(214,166,74,.2);
}
.btn-secondary {
  color: var(--text);
  border-color: rgba(223,190,111,.22);
  background: rgba(223,190,111,.08);
}
.compact-btn { margin-top: 22px; }
.footer { padding: 0 0 28px; }
.footer-inner {
  border-top: 1px solid rgba(255,255,255,.07);
  padding-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  color: rgba(246,240,227,.68);
}
.footer-brand { display: flex; align-items: center; gap: 12px; }
.footer-logo { height: 58px; width: auto; }
.footer-name {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.06rem;
  line-height: 1;
  letter-spacing: -.01em;
}
.footer-copy { margin: 6px 0 0; font-size: 12px; }
.footer-meta { margin: 6px 0 0; font-size: 11px; color: rgba(246,240,227,.56); }
.footer-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.social-circle {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,255,255,.07);
  background: rgba(255,255,255,.025);
  color: rgba(246,240,227,.76);
}
.privacy-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 38px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.07);
  background: rgba(255,255,255,.025);
  color: rgba(246,240,227,.76);
  font-size: 12px;
}
.icon { width: 18px; height: 18px; display: block; }
.floating-whatsapp {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 35;
  width: 58px;
  height: 58px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: #102332;
  background: linear-gradient(135deg, #f5e2ab 0%, #d6a64a 100%);
  box-shadow: 0 14px 34px rgba(214,166,74,.24);
  border: 1px solid rgba(223,190,111,.3);
}
.grid-bg {
  position: fixed;
  inset: 0;
  background-image: linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(circle at center, black, transparent 78%);
  pointer-events: none;
  opacity: .42;
}
.edge-glow {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: .7;
  background:
    radial-gradient(circle at 0% 50%, rgba(223,190,111,.06), transparent 20%),
    radial-gradient(circle at 100% 30%, rgba(223,190,111,.05), transparent 22%),
    radial-gradient(circle at 50% 100%, rgba(42,89,116,.08), transparent 24%);
}
.orb {
  position: fixed;
  border-radius: 999px;
  filter: blur(90px);
  pointer-events: none;
  animation: pulseGlow 10s ease-in-out infinite;
}
.orb-a { left: -80px; top: 40px; width: 300px; height: 300px; background: rgba(42,89,116,.22); }
.orb-b { right: -50px; top: 180px; width: 260px; height: 260px; background: rgba(223,190,111,.10); animation-delay: -3s; }
.orb-c { right: 18%; bottom: 10%; width: 220px; height: 220px; background: rgba(223,190,111,.08); animation-delay: -6s; }
.star-field, .shooting-stars { position: fixed; inset: 0; pointer-events: none; overflow: hidden; }
.star {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(255,245,214,1) 0%, rgba(223,190,111,.95) 42%, rgba(223,190,111,0) 75%);
  box-shadow: 0 0 10px rgba(223,190,111,.28);
  animation: driftStar linear infinite, twinkleStar ease-in-out infinite;
  opacity: .75;
}
.star::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 18px;
  height: 1px;
  transform: translate(-50%, -50%);
  background: linear-gradient(90deg, rgba(223,190,111,0), rgba(255,245,214,.9), rgba(223,190,111,0));
  opacity: .55;
}
.shooting-star {
  position: absolute;
  width: var(--star-length, 180px);
  height: var(--star-thickness, 2px);
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(255,248,230,.96) 0%, rgba(255,245,214,.42) 28%, rgba(223,190,111,.10) 56%, rgba(223,190,111,0) 100%);
  box-shadow: 0 0 8px rgba(255,245,214,.14);
  transform: translate3d(0, 0, 0) rotate(var(--star-angle, -22deg));
  transform-origin: left center;
  animation: shootingStar linear infinite;
  opacity: 0;
  will-change: transform, opacity;
}
.shooting-star::before {
  content: '';
  position: absolute;
  left: -1px;
  top: 50%;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  transform: translateY(-50%);
  background: radial-gradient(circle, rgba(255,248,230,.98) 0%, rgba(255,245,214,.72) 45%, rgba(223,190,111,0) 78%);
}
.shooting-star::after {
  content: '';
  position: absolute;
  inset: -1px 12% -1px 0;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(255,248,230,.10), rgba(223,190,111,.03) 52%, rgba(223,190,111,0) 100%);
  filter: blur(3px);
  opacity: .7;
}
@keyframes portraitFloat { 0%,100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-6px) scale(1.008); } }
@keyframes intervalSymbolFloat { 0%, 100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-11px) scale(1.018); } }
@keyframes intervalGroundShift { 0%, 100% { transform: scaleX(.86) translateY(0px); opacity: .68; } 50% { transform: scaleX(1.22) translateY(1px); opacity: 1; } }
@keyframes pulseGlow { 0%,100% { opacity: .72; transform: scale(1); } 50% { opacity: 1; transform: scale(1.06); } }
@keyframes driftStar { 0% { transform: translate3d(-8px, 0, 0); } 50% { transform: translate3d(12px, -10px, 0); } 100% { transform: translate3d(28px, 2px, 0); } }
@keyframes twinkleStar { 0%,100% { opacity: .24; } 50% { opacity: .95; } }
@keyframes shootingStar {
  0% { opacity: 0; transform: translate3d(0, 0, 0) rotate(var(--star-angle, -22deg)); }
  10% { opacity: 0; transform: translate3d(0, 0, 0) rotate(var(--star-angle, -22deg)); }
  16% { opacity: calc(var(--peak-opacity, .8) * .42); transform: translate3d(calc(var(--travel-x, -1450px) * .12), calc(var(--travel-y, 820px) * .12), 0) rotate(var(--star-angle, -22deg)); }
  32% { opacity: var(--peak-opacity, .8); transform: translate3d(calc(var(--travel-x, -1450px) * .36), calc(var(--travel-y, 820px) * .36), 0) rotate(var(--star-angle, -22deg)); }
  58% { opacity: calc(var(--peak-opacity, .8) * .88); transform: translate3d(calc(var(--travel-x, -1450px) * .68), calc(var(--travel-y, 820px) * .68), 0) rotate(var(--star-angle, -22deg)); }
  82% { opacity: calc(var(--peak-opacity, .8) * .55); transform: translate3d(calc(var(--travel-x, -1450px) * .94), calc(var(--travel-y, 820px) * .94), 0) rotate(var(--star-angle, -22deg)); }
  94% { opacity: calc(var(--peak-opacity, .8) * .12); transform: translate3d(var(--travel-x, -1450px), var(--travel-y, 820px), 0) rotate(var(--star-angle, -22deg)); }
  100% { opacity: 0; transform: translate3d(calc(var(--travel-x, -1450px) * 1.06), calc(var(--travel-y, 820px) * 1.06), 0) rotate(var(--star-angle, -22deg)); }
}
@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
@media (max-width: 1100px) { .hero-grid, .agenda-grid, .local-panel, .contact-panel, .faq-layout { grid-template-columns: 1fr; } }
@media (max-width: 980px) {
  .card-grid, .dual-grid, .structure-grid, .pillars-grid, .trust-grid, .privacy-sections, .references-grid, .approach-references-grid, .availability-inline { grid-template-columns: 1fr; }
  .nav-desktop { display: none; }
  .menu-toggle { display: inline-block; }
}
@media (max-width: 760px) {
  .site-container { width: min(100% - 20px, 1180px); }
  .header-panel, .hero-copy, .hover-card, .structure-panel, .agenda-panel, .local-panel, .faq-panel, .contact-panel, .centered-panel { padding: 24px; }
  .brand-name { font-size: 24px; }
  .hero-title { font-size: clamp(2rem, 8vw, 2.55rem); max-width: 16ch; }
  .section-title { font-size: clamp(1.6rem, 6vw, 2rem); }
  .floating-whatsapp { right: 14px; bottom: 14px; width: 54px; height: 54px; }
  .footer-inner { flex-direction: column; align-items: flex-start; }
  .footer-actions { justify-content: flex-start; }
}
`;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const normalizedPath = typeof window !== "undefined" ? window.location.pathname.replace(/\/$/, "") : "";
  const isPrivacyPage = normalizedPath === "/privacidade";
  const isApproachPage = normalizedPath === "/abordagem-e-pilares";

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const upsertNamedMeta = (name, value) => {
      let element = document.head.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", value);
    };

    const upsertPropertyMeta = (property, value) => {
      let element = document.head.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", value);
    };

    const upsertLink = (rel, href) => {
      let element = document.head.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    const origin = window.location.origin;
    const canonicalUrl = `${origin}${window.location.pathname}`;
    const socialImage = `${origin}${logoSrc}`;
    const pageTitle = isPrivacyPage ? privacyTitle : isApproachPage ? approachTitle : siteTitle;
    const pageDescription = isPrivacyPage ? privacyDescription : isApproachPage ? approachDescription : siteDescription;

    document.title = pageTitle;
    document.documentElement.lang = "pt-BR";

    upsertNamedMeta("description", pageDescription);
    upsertNamedMeta("robots", "index, follow, max-image-preview:large");
    upsertNamedMeta("theme-color", "#07141c");
    upsertNamedMeta("twitter:card", "summary_large_image");
    upsertNamedMeta("twitter:title", pageTitle);
    upsertNamedMeta("twitter:description", pageDescription);
    upsertNamedMeta("twitter:image", socialImage);

    upsertPropertyMeta("og:title", pageTitle);
    upsertPropertyMeta("og:description", pageDescription);
    upsertPropertyMeta("og:type", "website");
    upsertPropertyMeta("og:url", canonicalUrl);
    upsertPropertyMeta("og:image", socialImage);
    upsertPropertyMeta("og:locale", "pt_BR");

    upsertLink("canonical", canonicalUrl);
    upsertLink("icon", logoSrc);

    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Francisco Wellington CR",
      image: socialImage,
      logo: socialImage,
      description: pageDescription,
      areaServed: "Brasil",
      availableLanguage: ["pt-BR"],
      sameAs: [instagramUrl, whatsappUrl],
      url: canonicalUrl,
      serviceType: "Psicoterapia com Logoterapia e clínica existencial",
      openingHours: "Mo-Fr 14:00-22:00"
    };

    let schemaScript = document.head.querySelector('script[data-seo="wellington-schema"]');
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.setAttribute("data-seo", "wellington-schema");
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);
  }, [isPrivacyPage, isApproachPage]);

  if (isPrivacyPage) {
    return (
      <>
        <style>{styles}</style>
        <PrivacyPage />
      </>
    );
  }

  if (isApproachPage) {
    return (
      <>
        <style>{styles}</style>
        <ApproachPage />
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <div className="site-shell">
        <div className="grid-bg" />
        <div className="edge-glow" />
        <div className="star-field" aria-hidden="true">
          {stars.map((star, i) => (
            <span
              key={i}
              className="star"
              style={{
                left: star.left,
                top: star.top,
                animationDelay: `${star.delay}, ${star.delay}`,
                animationDuration: `${star.duration}, 3.8s`,
              }}
            />
          ))}
        </div>
        <div className="shooting-stars" aria-hidden="true">
          {shootingStars.map((item, i) => (
            <span
              key={i}
              className="shooting-star"
              style={{
                top: item.top,
                left: item.left,
                animationDelay: item.delay,
                animationDuration: item.duration,
                '--star-length': item.length,
                '--star-thickness': item.thickness,
                '--travel-x': item.travelX,
                '--travel-y': item.travelY,
                '--peak-opacity': item.opacity,
                '--star-angle': item.angle,
              }}
            />
          ))}
        </div>
        <div className="orb orb-a" aria-hidden="true" />
        <div className="orb orb-b" aria-hidden="true" />
        <div className="orb orb-c" aria-hidden="true" />

        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Abrir conversa no WhatsApp">
          <WhatsAppIcon />
        </a>

        <header className="site-container header-wrap reveal">
          <div className="glass panel header-panel">
            <a href="#topo" className="brand-block" aria-label="Voltar ao início">
              <LogoMark className="brand-logo" />
              <div>
                <p className="eyebrow">Psicólogo | CRP: 17/XXXX</p>
                <h1 className="brand-name">Francisco Wellington CR</h1>
              </div>
            </a>

            <nav className="nav-desktop" aria-label="Navegação principal">
              <NavLinks />
            </nav>

            <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="menu-mobile" onClick={() => setMenuOpen((v) => !v)}>
              <span />
              <span />
              <span />
            </button>
          </div>

          {menuOpen && (
            <div id="menu-mobile" className="glass panel mobile-menu">
              <NavLinks onClick={() => setMenuOpen(false)} />
            </div>
          )}
        </header>

        <main id="topo" className="site-container main-content">
          <section className="hero-grid reveal">
            <div className="glass panel hero-copy">
              <p className="eyebrow">Logoterapia • Online e Presencial • Criança, Adolescentes e Adultos</p>
              <h2 className="title-font hero-title">
                Uma clínica orientada por <span className="hero-accent">sentido, presença e responsabilidade</span> diante da vida
              </h2>
              <p className="copy hero-text">
                Olá, me chamo Wellington, e meu trabalho é acompanhar pessoas na travessia das adversidades. Sei que o percurso da vida nem sempre se mantém em um caminho reto e que, muitas vezes, algumas curvas podem parecer perigosas. Por isso, quero oferecer uma escuta acolhedora que favoreça direção, responsabilidade e reconexão com aquilo que dá sentido à sua existência.
              </p>
            </div>

            <div className="glass panel hero-photo">
              <PortraitPlaceholder />
            </div>
          </section>

          <section id="sobre" className="glass panel centered-panel reveal">
            <p className="eyebrow">Sobre</p>
            <h3 className="title-font section-title">Uma escuta clínica orientada por sensibilidade e sentido</h3>
            <p className="copy centered-copy">
              A proposta terapêutica integra escuta qualificada, ética do cuidado e abertura existencial, permitindo uma escuta mais profunda e significativa. Nessa direção, favorece a redescoberta de valores e da responsabilidade pessoal diante das circunstâncias concretas da vida.
            </p>
            <p className="copy centered-copy" style={{ marginTop: "16px" }}>
              Seu foco não se limita ao alívio imediato do sofrimento, mas alcança a construção de significado, presença, responsabilidade e direção diante das experiências da vida.
            </p>
            <p className="copy centered-copy" style={{ marginTop: "16px" }}>
              Esse cuidado também se sustenta pela continuidade do acompanhamento, com constância terapêutica, organização clara e um percurso pensado para favorecer elaboração, amadurecimento e aprofundamento clínico ao longo do processo.
            </p>
          </section>

          <section className="logo-interval reveal" aria-label="Assinatura visual da marca">
            <div className="logo-interval-shell">
              <LogoMark className="logo-interval-image" />
            </div>
            <div className="interval-line" />
            <p className="interval-text">Sentido, presença e direção</p>
          </section>

          <section id="abordagem" className="glass panel centered-panel reveal">
            <p className="eyebrow">Abordagem</p>
            <h3 className="title-font section-title center-title wide-center-title no-break-title">Logoterapia: como funciona o atendimento?</h3>
            <p className="copy centered-copy long-copy">
              O trabalho da Logoterapia no atendimento clínico é orientado para liberdade interior, responsabilidade e construção de sentido. Trata-se de um processo que não reduz a pessoa ao sintoma, mas considera sua história, seus valores e sua possibilidade de resposta como elementos fundamentais do percurso terapêutico.
            </p>
            <p className="copy centered-copy long-copy" style={{ marginTop: "16px" }}>
              Nesse horizonte, o primeiro atendimento parte de um alinhamento inicial e de um espaço de liberdade para que você possa expressar a si mesmo, seu movimento diante da busca pela terapia e seu caminho de autoconhecimento.
            </p>
            <div className="trust-links" style={{ marginTop: "24px" }}>
              <a href={approachUrl} className="btn btn-secondary">
                Aprofundar abordagem
              </a>
            </div>
          </section>

          <section id="pilares" className="glass panel structure-panel reveal">
            <div className="section-head center-head">
              <p className="eyebrow">Pilares da Logoterapia</p>
              <h3 className="title-font section-title center-title wide-center-title">Princípios centrais que sustentam o direcionamento do cuidado clínico</h3>
              <p className="copy section-copy center-copy long-copy">
                A Logoterapia possui fundamentos que oferecem densidade à prática terapêutica. Nesse caso, os Pilares, que ajudam a compreender a pessoa para além do sofrimento imediato e favorecem uma escuta mais humana, ética e existencial. Esses Pilares são:
              </p>
            </div>

            <div className="pillars-grid">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="pillar-card">
                  <h4 className="title-font pillar-title">{pillar.title}</h4>
                  <p className="copy">{pillar.text}</p>
                </article>
              ))}
            </div>

            <p className="copy pillar-note long-copy">
              Na prática clínica, esses pilares contribuem para que o acompanhamento favoreça elaboração responsável, direção interior e reencontro com valores concretos, mesmo quando a pessoa atravessa sofrimento, vazio ou desorientação existencial.
            </p>
            <div className="trust-links">
              <a href={approachUrl} className="btn btn-secondary">
                Ver mais sobre
              </a>
            </div>
          </section>

          <section className="logo-interval reveal" aria-label="Assinatura visual da marca">
            <div className="logo-interval-shell">
              <LogoMark className="logo-interval-image" />
            </div>
            <div className="interval-line" />
            <p className="interval-text">Sentido, presença e direção</p>
          </section>

          <section id="estrutura" className="glass panel structure-panel reveal">
            <div className="section-head center-head">
              <p className="eyebrow">Estrutura</p>
              <h3 className="title-font section-title center-title">Estrutura do atendimento</h3>
              <p className="copy section-copy center-copy long-copy">
                Uma organização clínica clara e ética, pensada para oferecer confiança, continuidade e orientação desde o primeiro contato, sem pressa e com a serenidade necessária ao processo.
              </p>
            </div>

            <div className="structure-grid">
              {structureSteps.map((step) => (
                <article key={step.number} className="structure-card">
                  <span className="structure-number">{step.number}</span>
                  <h4 className="title-font structure-title">{step.title}</h4>
                  <p className="copy">{step.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="agenda" className="glass panel agenda-preview-panel reveal">
            <div className="agenda-preview-header">
              <p className="eyebrow">Agenda Online</p>
              <p className="copy agenda-preview-copy">
                Escolha visualmente uma data e um horário de preferência. Para consultar a agenda completa com mais clareza,<br />clique no botão abaixo.
              </p>
            </div>

            <div className="agenda-simple-shell">
              <AvailabilityPanel className="agenda-availability" />

              <p className="agenda-simple-note">
                Clique em abrir agenda completa.
              </p>

              <div className="agenda-simple-actions">
                <a href={agendaExternalUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Abrir agenda completa
                </a>
              </div>
            </div>
          </section>

          <section className="glass panel local-panel reveal">
            <div>
              <p className="eyebrow">Local</p>
              <h3 className="title-font section-title left-title">Atendimento presencial</h3>
              <p className="copy section-copy">
                Para quem prefere o encontro presencial, a localização pode ser acessada diretamente pelo mapa, facilitando o trajeto e a organização do deslocamento.
              </p>
              <a href="https://maps.app.goo.gl/mdi4ADt4dUzSarvLA" target="_blank" rel="noreferrer" className="btn btn-secondary compact-btn">
                Abrir localização
              </a>
            </div>

            <div className="map-shell">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5487010679954!2d-37.360463324866984!3d-5.1760379948013995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ba0752e76de553%3A0xde441455f9ebd00!2sLogoviv%C3%AAncia%20%7C%20Espa%C3%A7o%20Integrado%20e%20Existencial!5e0!3m2!1spt-BR!2sbr!4v1773587679709!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Local de atendimento presencial"
              />
            </div>
          </section>

          <section className="logo-interval reveal" aria-label="Assinatura visual da marca">
            <div className="logo-interval-shell">
              <LogoMark className="logo-interval-image" />
            </div>
            <div className="interval-line" />
            <p className="interval-text">Sentido, presença e direção</p>
          </section>

          <section id="faq" className="glass panel faq-panel reveal">
            <div className="section-head center-head">
              <p className="eyebrow">Perguntas frequentes</p>
              <h3 className="title-font section-title">Informações centrais para o primeiro contato</h3>
              <p className="copy centered-copy">
                Uma área mais organizada para responder às dúvidas mais comuns com clareza, serenidade e boa leitura.
              </p>
            </div>

            <div className="faq-layout">
              <aside className="faq-aside">
                {faqHighlights.map((item) => (
                  <div key={item} className="faq-aside-card">
                    {item}
                  </div>
                ))}
              </aside>

              <div className="faq-list">
                {faqs.map((item, index) => {
                  const open = openFaq === index;
                  return (
                    <article key={item.q} className={`faq-item ${open ? "active" : ""}`}>
                      <button type="button" className="faq-button" onClick={() => setOpenFaq(open ? -1 : index)}>
                        <span className="title-font faq-question">{item.q}</span>
                        <ChevronIcon open={open} />
                      </button>
                      {open && <p className="copy faq-answer">{item.a}</p>}
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="contato" className="glass panel contact-panel reveal">
            <div className="contact-centered">
              <p className="eyebrow">Contato</p>
              <h3 className="title-font section-title center-title">Um convite cuidadoso para começar</h3>
              <p className="copy centered-copy long-copy contact-centered-copy">
                Quando fizer sentido para você, estarei disponível para acolher esse primeiro passo com atenção, clareza e presença clínica. Atendimento com base existencial, cuidado ético e organização prática pensada para favorecer confiança desde o primeiro encontro.
              </p>

              <div className="contact-actions contact-actions-centered">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Conversar pelo WhatsApp
                </a>
                <a href={agendaExternalUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  Ver agenda online
                </a>
              </div>
            </div>
          </section>

          <section className="glass panel centered-panel privacy-teaser-final reveal">
            <p className="eyebrow">Privacidade e confidencialidade</p>
            <div className="trust-links">
              <a href={privacyUrl} className="btn btn-secondary">
                Ver privacidade
              </a>
            </div>
          </section>
        </main>

        <footer className="site-container footer reveal">
          <div className="footer-inner">
            <div className="footer-brand">
              <LogoMark className="footer-logo" />
              <div>
                <p className="footer-name">Francisco Wellington CR</p>
                <p className="footer-copy">Atendimento online e presencial • Logoterapia e clínica existencial • CRP 17/XXXX</p>
                <p className="footer-meta">© 2026 – Todos os direitos reservados.</p>
              </div>
            </div>

            <div className="footer-actions">
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="social-circle" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="social-circle" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
              <a href={privacyUrl} className="privacy-link">
                <ShieldIcon />
                Ética, sigilo e privacidade
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
