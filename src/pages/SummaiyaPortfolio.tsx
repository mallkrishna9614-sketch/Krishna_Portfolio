import "./SummaiyaPortfolio.css";

const skills = [
  { icon: "✳", title: "Pharmaceutical foundations", text: "Building a strong base in pharmaceutical sciences and healthcare." },
  { icon: "⌘", title: "Python programming", text: "Basic Python knowledge with an interest in practical problem-solving." },
  { icon: "↗", title: "Communication", text: "Clear communication, presentation skills, and a willingness to learn." },
];

const interests = ["Pharmaceutical research", "Clinical research", "Python & programming", "Reading & discovering new things", "Dancing"];

export default function SummaiyaPortfolio() {
  return (
    <main className="sf-site">
      <header className="sf-nav">
        <a className="sf-brand" href="#home" aria-label="Summaiya Fatma home"><span className="sf-brand-mark">S.</span><span>Summaiya Fatma</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#education">Education</a><a href="#contact" className="sf-nav-cta">Let’s connect <span>↗</span></a>
        </nav>
      </header>

      <section className="sf-hero" id="home">
        <div className="sf-hero-copy">
          <p className="sf-eyebrow"><span className="sf-status-dot" /> B.PHARMA STUDENT · LPU</p>
          <h1>Curious about<br />science. <em>Driven by</em><br />care.</h1>
          <p className="sf-hero-description">Hi, I’m <strong>Summaiya Fatma</strong> — an aspiring pharmaceutical professional exploring the world of healthcare, drug development, and the possibilities of technology.</p>
          <div className="sf-actions">
            <a className="sf-button sf-button-dark" href="#about">Get to know me <span>↓</span></a>
            <a className="sf-text-link" href="mailto:summaiyafatma73@gmail.com">Contact me <span>↗</span></a>
          </div>
          <div className="sf-hero-meta"><span>BASED IN PATNA, INDIA</span><span className="sf-meta-line" /><span>LEARNING EVERY DAY</span></div>
        </div>
        <div className="sf-hero-visual">
          <div className="sf-photo-frame"><img src="/images/summaiya-fatma.jpg" alt="Summaiya Fatma wearing her LPU B.Pharm coat" /></div>
          <div className="sf-photo-label"><span className="sf-label-star">✳</span><span>Future pharmacist<br /><strong>in the making</strong></span></div>
          <div className="sf-orbit sf-orbit-one" /><div className="sf-orbit sf-orbit-two" />
          <div className="sf-side-note">SCIENCE · EMPATHY · DISCOVERY</div>
        </div>
        <div className="sf-hero-bottom"><span>01 / INTRODUCTION</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="sf-about sf-section" id="about">
        <div className="sf-section-kicker"><span>01</span> A LITTLE ABOUT ME</div>
        <div className="sf-about-grid">
          <h2>Where healthcare<br />meets <em>curiosity.</em></h2>
          <div className="sf-about-copy"><p>I’m currently pursuing a Bachelor of Pharmacy at Lovely Professional University. I’m interested in pharmaceutical sciences, drug development, and healthcare, and I’m eager to turn what I learn in class into practical knowledge.</p><p>Alongside my pharmacy studies, I’m developing my Python programming skills. I enjoy learning new things, sharing ideas, and exploring how science and technology can support better healthcare.</p><div className="sf-mini-facts"><div><span>01</span><strong>Pharmacy</strong><small>My academic foundation</small></div><div><span>02</span><strong>Python</strong><small>A growing tech skill</small></div></div></div>
        </div>
      </section>

      <section className="sf-skills sf-section" id="skills">
        <div className="sf-section-kicker"><span>02</span> WHAT I BRING</div>
        <div className="sf-section-heading"><h2>Skills I’m <em>growing.</em></h2><p>A work in progress, with curiosity at the centre of it all.</p></div>
        <div className="sf-skill-grid">{skills.map((skill, index) => <article className="sf-skill-card" key={skill.title}><div className="sf-skill-top"><span className="sf-skill-icon">{skill.icon}</span><span>0{index + 1}</span></div><h3>{skill.title}</h3><p>{skill.text}</p><div className="sf-card-line" /></article>)}</div>
        <div className="sf-language-row"><span>LANGUAGES</span><div><strong>English</strong><i /><strong>Hindi</strong><i /><strong>Python</strong><small>Programming language</small></div></div>
      </section>

      <section className="sf-education sf-section" id="education">
        <div className="sf-section-kicker"><span>03</span> THE LEARNING JOURNEY</div>
        <div className="sf-education-grid"><div><h2>Learning with<br /><em>purpose.</em></h2><p>Building knowledge step by step — in the classroom and beyond.</p></div><div className="sf-timeline"><article className="sf-timeline-item"><div className="sf-timeline-dot" /><span className="sf-timeline-date">JUL 2026 — JUL 2030</span><h3>Bachelor of Pharmacy (B.Pharm)</h3><p>Lovely Professional University</p><small>Punjab, India · Currently pursuing</small></article><article className="sf-timeline-item"><div className="sf-timeline-dot" /><span className="sf-timeline-date">ACADEMIC ACHIEVEMENT</span><h3>Class XII — 90%</h3><p>Class X — 87%</p><small>School academic results</small></article></div></div>
      </section>

      <section className="sf-more sf-section">
        <div className="sf-more-left"><div className="sf-section-kicker"><span>04</span> BEYOND THE CLASSROOM</div><h2>Always room<br />to <em>discover.</em></h2><p>Interests that keep me inspired, curious, and open to new perspectives.</p></div>
        <div className="sf-interest-list">{interests.map((interest, i) => <div key={interest}><span>0{i + 1}</span><strong>{interest}</strong><span className="sf-interest-arrow">↗</span></div>)}</div>
      </section>

      <section className="sf-contact" id="contact"><div className="sf-contact-top"><span>HAVE A QUESTION OR OPPORTUNITY?</span><span>LET’S START A CONVERSATION ↘</span></div><h2>Good things begin<br />with a <em>hello.</em></h2><a className="sf-contact-link" href="mailto:summaiyafatma73@gmail.com">summaiyafatma73@gmail.com <span>↗</span></a><div className="sf-contact-details"><span>Patna, Bihar, India</span><a href="tel:+919101531164">+91 91015 31164</a><a href="https://www.linkedin.com/in/summaiya-fatma-44b35b351/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></section>
      <footer className="sf-footer"><a className="sf-brand" href="#home"><span className="sf-brand-mark">S.</span><span>Summaiya Fatma</span></a><span>Made with curiosity & care.</span><a href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}
