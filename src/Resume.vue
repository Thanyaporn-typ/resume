<template>
  <div class="page">

    <!-- ══ Navbar ══ -->
    <nav class="navbar" :class="{ scrolled: scrolled }">
      <div class="nav-brand">Foam<span>.</span></div>
      <ul class="nav-links">
        <li v-for="item in navItems" :key="item.id">
          <a :href="'#' + item.id" @click.prevent="scrollTo(item.id)">{{ item.label }}</a>
        </li>
      </ul>
    </nav>

    <!-- ══ Hero ══ -->
    <section class="hero" id="home">
      <div class="hero-bg">
        <div class="hero-mesh"></div>
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
      </div>
      <div class="hero-content">
        <p class="hero-greeting">Hello, I'm</p>
        <h1 class="hero-name">Thanyaporn<br /><span>Taveechudchaisub</span></h1>
        <div class="hero-roles">
          <span class="role-chip">Full Stack Developer</span>
          <span class="role-chip">Front-End Development</span>
          <span class="role-chip">Back-End Development</span>
        </div>
        <div class="hero-actions">
          <a href="#contact" @click.prevent="scrollTo('contact')" class="btn-primary">Contact Me</a>
          <a href="#experience" @click.prevent="scrollTo('experience')" class="btn-outline">View Experience</a>
        </div>
      </div>
      <div class="hero-scroll-hint" @click="scrollTo('about')">
        <span>scroll</span>
        <div class="scroll-arrow"></div>
      </div>
    </section>

    <!-- ══ About ══ -->
    <section class="section" id="about">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Who I am</span>
          <h2 class="section-title">About Me</h2>
        </div>
        <div class="about-grid">
          <div class="about-photo-wrap">
            <div class="about-photo-ring">
              <div class="about-photo">
                <img src="./assets/my-img.jpg" alt="Thanyaporn" />
              </div>
            </div>
            <div class="about-badge">Full Stack Developer</div>
          </div>
          <div class="about-info">
            <p class="about-desc">
              I am a Full Stack Developer passionate about building solutions that combine creativity and problem-solving.
              I enjoy working on projects that challenge both technical and analytical skills, while always focusing on
              delivering the best user experience.
            </p>
            <div class="about-stats">
              <div class="stat">
                <div class="stat-num">7+</div>
                <div class="stat-label">Years Experience</div>
              </div>
              <div class="stat">
                <div class="stat-num">4</div>
                <div class="stat-label">Companies</div>
              </div>
            </div>
            <div class="about-contacts">
              <a href="mailto:foamtyp@gmail.com" class="contact-pill">
                <span class="cpill-icon">✉</span> foamtyp@gmail.com
              </a>
              <a href="tel:0860299113" class="contact-pill">
                <span class="cpill-icon">📞</span> 086-029-9113
              </a>
              <a href="https://drive.google.com/file/d/1VQnuzzaCurbwDADazQbAzf0rEHNpcNX6/view?usp=drive_link" target="_blank" class="contact-pill">
                <span class="cpill-icon">📄</span> Portfolio PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ Skills ══ -->
    <section class="section section--dark" id="skills">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">What I use</span>
          <h2 class="section-title">Skills</h2>
        </div>
        <div class="skills-grid">
          <div class="skill-card">
            <div class="skill-card-icon">🎨</div>
            <h3>Frontend</h3>
            <div class="skill-pills">
              <span v-for="s in frontendSkills" :key="s" class="skill-pill">{{ s }}</span>
            </div>
          </div>
          <div class="skill-card skill-card--accent">
            <div class="skill-card-icon">⚙️</div>
            <h3>Backend</h3>
            <div class="skill-pills">
              <span v-for="s in backendSkills" :key="s" class="skill-pill">{{ s }}</span>
            </div>
          </div>
          <div class="skill-card">
            <div class="skill-card-icon">🔗</div>
            <h3>Automation & Integration</h3>
            <div class="skill-pills">
              <span v-for="s in automationSkills" :key="s" class="skill-pill">{{ s }}</span>
            </div>
          </div>
          <div class="skill-card">
            <div class="skill-card-icon">🗄️</div>
            <h3>Database</h3>
            <div class="skill-pills">
              <span v-for="s in databaseSkills" :key="s" class="skill-pill">{{ s }}</span>
            </div>
          </div>
          <div class="skill-card">
            <div class="skill-card-icon">🛠</div>
            <h3>Tools & Workflow</h3>
            <div class="skill-pills">
              <span v-for="s in toolSkills" :key="s" class="skill-pill">{{ s }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ Experience ══ -->
    <section class="section" id="experience">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Where I've worked</span>
          <h2 class="section-title">Experience</h2>
        </div>
        <div class="timeline">
          <div v-for="(exp, i) in experiences" :key="i" class="timeline-item"
            :class="{ 'timeline-item--right': i % 2 === 1 }">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="tc-period">{{ exp.period }}</div>
              <h3 class="tc-title">{{ exp.title }}</h3>
              <div class="tc-company">{{ exp.company }}</div>
              <ul class="tc-list">
                <li v-for="(d, j) in exp.details" :key="j">{{ d }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ Education ══ -->
    <section class="section section--dark" id="education">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">My background</span>
          <h2 class="section-title">Education</h2>
        </div>
        <div class="edu-cards">
          <div v-for="(edu, i) in educations" :key="i" class="edu-card">
            <div class="edu-card-icon">🎓</div>
            <div class="edu-card-body">
              <div class="edu-card-year">{{ edu.year }}</div>
              <div class="edu-card-degree">{{ edu.degree }}</div>
              <div class="edu-card-school">{{ edu.school }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ Languages ══ -->
    <section class="section" id="languages">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Communication</span>
          <h2 class="section-title">Languages</h2>
        </div>
        <div class="lang-grid">
          <div v-for="(lang, i) in languages" :key="i" class="lang-card">
            <div class="lang-top">
              <span class="lang-flag">{{ lang.flag }}</span>
              <div>
                <div class="lang-name">{{ lang.name }}</div>
                <div class="lang-level">{{ lang.level }}</div>
              </div>
            </div>
            <div class="lang-bar">
              <div class="lang-bar-fill" :style="{ width: lang.percent + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ Contact ══ -->
    <section class="section contact-section" id="contact">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Get in touch</span>
          <h2 class="section-title">Contact Me</h2>
        </div>
        <div class="contact-grid">
          <div class="contact-card">
            <div class="cc-icon">✉️</div>
            <div class="cc-label">Email</div>
            <a href="mailto:foamtyp@gmail.com" class="cc-value">foamtyp@gmail.com</a>
          </div>
          <div class="contact-card">
            <div class="cc-icon">📱</div>
            <div class="cc-label">Phone</div>
            <div class="cc-value">086-029-9113<br />083-985-0838</div>
          </div>
          <div class="contact-card">
            <div class="cc-icon">🌐</div>
            <div class="cc-label">Portfolio</div>
            <a href="https://drive.google.com/file/d/1VQnuzzaCurbwDADazQbAzf0rEHNpcNX6/view?usp=drive_link" target="_blank" class="cc-value">View Portfolio PDF →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ Footer ══ -->
    <footer class="footer">
      <p>© 2026 Thanyaporn Taveechudchaisub · Built with Vue.js</p>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'ResumeView',
  data() {
    return {
      scrolled: false,
      navItems: [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
      ],
      frontendSkills: ['HTML5', 'CSS3 / SCSS', 'JavaScript (ES6+)', 'Vue.js', 'Nuxt 3', 'BootstrapVue', 'Vuetify.js', 'Responsive Web Design', 'SEO Optimization'],
      backendSkills: ['Node.js', 'PHP', 'Python', 'RESTful API Development', 'API Integration', 'Authentication & Authorization'],
      automationSkills: ['Zapier', 'Zapier Webhooks', 'LINE Messaging API', 'Webhook Integration', 'Third-Party API Integration'],
      databaseSkills: ['MySQL', 'PostgreSQL'],
      toolSkills: ['Git / GitHub / GitLab', 'Agile / Scrum', 'CMS Development', 'Performance Optimization'],
      experiences: [
        {
          period: 'April 2019 – August 2020',
          title: 'Front-End Web Developer',
          company: 'Delta Network Solution',
          details: [
            'Developed and maintained web applications using PHP, HTML, CSS, and JavaScript.',
            'Created responsive and user-friendly interfaces to improve usability across devices.',
            'Collaborated with designers and developers to deliver functional and visually engaging web solutions.',
            'Participated in website planning, prototyping, and front-end implementation.',
          ],
        },
        {
          period: 'September 2020 – October 2021',
          title: 'Front-End Engineer',
          company: 'My Platform',
          details: [
            'Developed front-end features and integrated APIs for the My Platform ecosystem.',
            'Built responsive web applications using Vue.js, BootstrapVue, Vuetify.js, HTML, CSS, and JavaScript.',
            'Improved application performance and user experience through optimized front-end architecture.',
            'Worked closely with back-end teams to ensure seamless API integration.',
          ],
        },
        {
          period: 'November 2021 – November 2024',
          title: 'Front-End & Back-End Developer',
          company: 'SiamSquared Technologies (Thailand) Co., Ltd.',
          details: [
            'Developed enterprise platforms, admin systems, and responsive websites using Vue.js and Nuxt 3.',
            'Designed and implemented RESTful APIs using Node.js, PHP, and Python.',
            'Managed MySQL databases and developed scalable back-end services.',
            'Maintained full-stack web applications with a focus on performance, reliability, and scalability.',
            'Collaborated across teams to deliver end-to-end digital solutions.',
          ],
        },
        {
          period: 'November 2024 – Present',
          title: 'Full Stack Developer',
          company: 'Origin Property',
          details: [
            'Lead the development and maintenance of corporate, investor relations, and back-office platforms.',
            'Develop responsive and multilingual web applications using Vue.js, Node.js, PostgreSQL, and RESTful APIs.',
            'Manage API integrations, database architecture, content management systems, and administrative tools.',
            'Enhance website performance, SEO, security, and overall user experience.',
            'Support digital transformation initiatives across corporate and investor communication channels.',
          ],
        },
      ],
      languages: [
        { flag: '🇹🇭', name: 'Thai', level: 'Native', percent: 100 },
        { flag: '🇬🇧', name: 'English', level: 'Intermediate', percent: 55 },
      ],
      educations: [
        {
          year: '2010 – 2013',
          degree: 'Business Computer',
          school: 'Sahapanich Business Technological College',
        },
        {
          year: '2012 – 2017',
          degree: 'Faculty of Engineering, Computer Engineering',
          school: 'Kasem Bundit University',
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 40
    },
    scrollTo(id) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
/* ── Reset & Base ── */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  color: #e8e8e8;
  background: #080808;

  --gold: #f5c400;
  --gold-2: #f5a623;
  --gold-dim: rgba(245, 196, 0, 0.12);
  --gold-border: rgba(245, 196, 0, 0.28);
  --gold-glow: rgba(245, 196, 0, 0.18);
  --bg: #080808;
  --bg-dark: #0e0e0e;
  --bg-card: #141414;
  --bg-card-2: #191919;
  --bg-light: #f9f8f6;
  --border: #1e1e1e;
  --text: #e8e8e8;
  --text-dim: #909090;
  --text-muted: #555;
}

/* ── Navbar ── */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 60px;
  background: rgba(8, 8, 8, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar.scrolled {
  background: rgba(8, 8, 8, 0.92);
  border-bottom-color: rgba(245, 196, 0, 0.1);
  padding: 15px 60px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 900;
  color: #fff;
  letter-spacing: -0.5px;
}

.nav-brand span {
  color: var(--gold);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 40px;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 0.83rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  position: relative;
  transition: color 0.2s;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1.5px;
  background: var(--gold);
  transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-links a:hover {
  color: #fff;
}

.nav-links a:hover::after {
  width: 100%;
}

/* ── Hero ── */
.hero {
  position: relative;
  min-height: 100vh;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  padding: 0 24px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-mesh {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(245, 196, 0, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(245, 196, 0, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(110px);
  opacity: 0.22;
}

.blob-1 {
  width: 620px;
  height: 620px;
  background: radial-gradient(circle, #f5c400, #f59e00);
  top: -160px;
  left: -160px;
  animation: float 11s ease-in-out infinite;
}

.blob-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #f5a623, #e08000);
  bottom: -100px;
  right: -100px;
  animation: float 14s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-40px) scale(1.06); }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 740px;
}

.hero-greeting {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 0.8rem;
  color: var(--gold);
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.hero-greeting::before,
.hero-greeting::after {
  content: '';
  width: 28px;
  height: 1px;
  background: var(--gold);
  opacity: 0.5;
}

.hero-name {
  font-size: clamp(1.3rem, 6vw, 4rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 28px;
  letter-spacing: -1px;
  text-transform: uppercase;
  overflow-wrap: break-word;
  word-break: break-word;
}

.hero-name span {
  background: linear-gradient(135deg, #f5c400 0%, #f5a623 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-roles {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 46px;
}

.role-chip {
  background: rgba(245, 196, 0, 0.07);
  border: 1px solid rgba(245, 196, 0, 0.22);
  color: rgba(255, 255, 255, 0.75);
  padding: 7px 20px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  backdrop-filter: blur(6px);
}

.hero-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: linear-gradient(135deg, #f5c400 0%, #f5a623 100%);
  color: #080808;
  padding: 14px 34px;
  border-radius: 10px;
  font-weight: 800;
  font-size: 0.88rem;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  letter-spacing: 0.3px;
  box-shadow: 0 4px 24px rgba(245, 196, 0, 0.35);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 36px rgba(245, 196, 0, 0.5);
}

.btn-outline {
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.75);
  padding: 14px 34px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.88rem;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
  backdrop-filter: blur(4px);
}

.btn-outline:hover {
  border-color: var(--gold);
  color: var(--gold);
  background: rgba(245, 196, 0, 0.05);
}

.hero-scroll-hint {
  position: absolute;
  bottom: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.22);
  font-size: 0.67rem;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.scroll-arrow {
  width: 18px;
  height: 18px;
  border-right: 1.5px solid rgba(255, 255, 255, 0.22);
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.22);
  transform: rotate(45deg);
  animation: bounce 1.6s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: rotate(45deg) translateY(0); }
  50% { transform: rotate(45deg) translateY(5px); }
}

/* ── Sections ── */
.section {
  padding: 110px 24px;
  background: var(--bg-light);
}

.section--dark {
  background: var(--bg-dark);
}

.container {
  max-width: 1020px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 68px;
}

.section-tag {
  display: inline-block;
  background: rgba(245, 196, 0, 0.1);
  color: var(--gold);
  border: 1px solid rgba(245, 196, 0, 0.22);
  padding: 5px 18px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.section-title {
  font-size: clamp(1.9rem, 4vw, 2.8rem);
  font-weight: 900;
  color: #111;
  letter-spacing: -0.5px;
  position: relative;
  padding-bottom: 22px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 36px;
  height: 3px;
  border-radius: 3px;
  background: linear-gradient(90deg, var(--gold), var(--gold-2));
}

.section--dark .section-title {
  color: #fff;
}

/* ── About ── */
.about-grid {
  display: grid;
  grid-template-columns: 310px 1fr;
  gap: 72px;
  align-items: center;
}

.about-photo-wrap {
  position: relative;
  display: flex;
  justify-content: center;
}

.about-photo-ring {
  width: 268px;
  height: 348px;
  border-radius: 24px;
  padding: 4px;
  background: linear-gradient(135deg, #f5c400 0%, #f5a623 50%, #f5c400 100%);
  background-size: 200% 200%;
  animation: gradientShift 4s ease infinite;
  box-shadow: 0 24px 64px rgba(245, 196, 0, 0.22);
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.about-photo {
  width: 100%;
  height: 100%;
  border-radius: 21px;
  overflow: hidden;
  background: #ddd;
}

.about-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.about-badge {
  position: absolute;
  bottom: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #f5c400, #f5a623);
  color: #080808;
  font-size: 0.7rem;
  font-weight: 800;
  padding: 7px 20px;
  border-radius: 999px;
  letter-spacing: 1px;
  white-space: nowrap;
  box-shadow: 0 6px 20px rgba(245, 196, 0, 0.4);
}

.about-desc {
  font-size: 0.98rem;
  color: #555;
  line-height: 1.9;
  margin-bottom: 32px;
}

.about-stats {
  display: flex;
  gap: 36px;
  margin-bottom: 32px;
  padding: 24px 0;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
}

.stat-num {
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #f5c400, #f5a623);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.stat-label {
  font-size: 0.72rem;
  color: #aaa;
  font-weight: 700;
  margin-top: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.about-contacts {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.contact-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 1px solid #e2e2e2;
  padding: 9px 18px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #444;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.contact-pill:hover {
  border-color: var(--gold);
  color: #a87900;
  box-shadow: 0 4px 14px rgba(245, 196, 0, 0.15);
  transform: translateY(-1px);
}

/* ── Skills ── */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.skill-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 28px 22px;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s, box-shadow 0.25s;
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--gold), var(--gold-2));
  opacity: 0;
  transition: opacity 0.3s;
}

.skill-card:hover {
  transform: translateY(-6px);
  border-color: var(--gold-border);
  box-shadow: 0 16px 48px rgba(245, 196, 0, 0.08);
}

.skill-card:hover::before {
  opacity: 1;
}

.skill-card--accent {
  background: linear-gradient(145deg, #1a1500 0%, #231d00 100%);
  border-color: rgba(245, 196, 0, 0.28);
}

.skill-card--accent::before {
  opacity: 1;
}

.skill-card--accent h3 {
  color: var(--gold);
}

.skill-card-icon {
  font-size: 1.8rem;
  margin-bottom: 14px;
  display: block;
}

.skill-card h3 {
  font-size: 0.78rem;
  font-weight: 800;
  color: #d0d0d0;
  margin-bottom: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.skill-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.skill-pill {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.65);
  padding: 4px 11px;
  border-radius: 6px;
  font-size: 0.74rem;
  font-weight: 600;
  transition: border-color 0.2s, color 0.2s;
}

.skill-card:hover .skill-pill {
  border-color: rgba(245, 196, 0, 0.18);
  color: rgba(255, 255, 255, 0.8);
}

.skill-card--accent .skill-pill {
  background: rgba(245, 196, 0, 0.1);
  border-color: rgba(245, 196, 0, 0.2);
  color: rgba(245, 196, 0, 0.85);
}

/* ── Timeline ── */
.timeline {
  position: relative;
  padding: 0 0 0 52px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 1.5px;
  background: linear-gradient(to bottom, var(--gold), rgba(245, 196, 0, 0.04));
}

.timeline-item {
  position: relative;
  margin-bottom: 28px;
}

.timeline-dot {
  position: absolute;
  left: -43px;
  top: 26px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 0 0 4px rgba(245, 196, 0, 0.14), 0 0 18px rgba(245, 196, 0, 0.35);
}

.timeline-card {
  background: #fff;
  border: 1px solid #ececec;
  border-left: 3px solid var(--gold);
  border-radius: 14px;
  padding: 26px 28px;
  transition: box-shadow 0.25s, transform 0.25s;
  position: relative;
}

.timeline-card:hover {
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.07);
  transform: translateX(5px);
}

.tc-period {
  display: inline-block;
  background: rgba(245, 196, 0, 0.1);
  color: #a87a00;
  border: 1px solid rgba(245, 196, 0, 0.25);
  padding: 3px 12px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.tc-title {
  font-size: 1rem;
  font-weight: 800;
  color: #111;
  margin-bottom: 4px;
}

.tc-company {
  font-size: 0.82rem;
  color: #bbb;
  font-weight: 600;
  margin-bottom: 14px;
}

.tc-list {
  list-style: none;
  padding: 0;
}

.tc-list li {
  font-size: 0.83rem;
  color: #555;
  line-height: 1.78;
  padding-left: 16px;
  position: relative;
  margin-bottom: 1px;
}

.tc-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--gold);
  font-size: 0.65rem;
  top: 4px;
}

/* ── Education ── */
.edu-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.edu-card {
  background: var(--bg-card-2);
  border: 1px solid #202020;
  border-radius: 20px;
  padding: 32px 28px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  position: relative;
  overflow: hidden;
}

.edu-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--gold), var(--gold-2));
  opacity: 0;
  transition: opacity 0.3s;
}

.edu-card:hover {
  border-color: rgba(245, 196, 0, 0.35);
  transform: translateY(-5px);
  box-shadow: 0 18px 52px rgba(245, 196, 0, 0.07);
}

.edu-card:hover::after {
  opacity: 1;
}

.edu-card-icon {
  font-size: 2.2rem;
  flex-shrink: 0;
}

.edu-card-year {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.edu-card-degree {
  font-size: 1rem;
  font-weight: 800;
  color: #f0f0f0;
  margin-bottom: 6px;
  line-height: 1.4;
}

.edu-card-school {
  font-size: 0.8rem;
  color: #666;
  line-height: 1.5;
}

/* ── Languages ── */
.lang-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 640px;
  margin: 0 auto;
}

.lang-card {
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  padding: 24px 26px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
}

.lang-card:hover {
  border-color: var(--gold-border);
  box-shadow: 0 8px 28px rgba(245, 196, 0, 0.12);
  transform: translateY(-3px);
}

.lang-top {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.lang-flag {
  font-size: 2.2rem;
  line-height: 1;
}

.lang-name {
  font-size: 1rem;
  font-weight: 800;
  color: #111;
}

.lang-level {
  font-size: 0.75rem;
  font-weight: 600;
  color: #aaa;
  margin-top: 2px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.lang-bar {
  height: 5px;
  background: #f0f0f0;
  border-radius: 99px;
  overflow: hidden;
}

.lang-bar-fill {
  height: 100%;
  border-radius: 99px;
  background: linear-gradient(90deg, var(--gold), var(--gold-2));
}

/* ── Contact ── */
.contact-section {
  background: #060606;
}

.contact-section .section-title {
  color: #fff;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.contact-card {
  background: var(--bg-card);
  border: 1px solid #1c1c1c;
  border-radius: 20px;
  padding: 40px 24px;
  text-align: center;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  position: relative;
  overflow: hidden;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--gold), var(--gold-2));
  opacity: 0;
  transition: opacity 0.3s;
}

.contact-card:hover {
  border-color: rgba(245, 196, 0, 0.4);
  transform: translateY(-7px);
  box-shadow: 0 22px 60px rgba(245, 196, 0, 0.1);
}

.contact-card:hover::before {
  opacity: 1;
}

.cc-icon {
  width: 58px;
  height: 58px;
  background: rgba(245, 196, 0, 0.09);
  border: 1px solid rgba(245, 196, 0, 0.18);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  margin: 0 auto 18px;
  transition: background 0.25s, border-color 0.25s;
}

.contact-card:hover .cc-icon {
  background: rgba(245, 196, 0, 0.16);
  border-color: rgba(245, 196, 0, 0.4);
}

.cc-label {
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.cc-value {
  font-size: 0.85rem;
  color: #aaa;
  text-decoration: none;
  line-height: 1.65;
  font-weight: 500;
  transition: color 0.2s;
}

.cc-value:hover {
  color: var(--gold);
}

/* ── Footer ── */
.footer {
  background: #040404;
  border-top: 1px solid #131313;
  text-align: center;
  padding: 28px;
  font-size: 0.76rem;
  color: #3a3a3a;
  letter-spacing: 0.3px;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 16px 24px;
  }

  .navbar.scrolled {
    padding: 12px 24px;
  }

  .nav-links {
    display: none;
  }

  .about-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 48px;
  }

  .about-photo-wrap {
    justify-content: center;
  }

  .about-stats {
    justify-content: center;
  }

  .about-contacts {
    justify-content: center;
  }

  .edu-cards {
    grid-template-columns: 1fr;
  }

  .lang-grid {
    grid-template-columns: 1fr;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .timeline {
    padding-left: 32px;
  }
}

@media (max-width: 520px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .hero-name {
    letter-spacing: 0px;
  }

  .hero-greeting::before,
  .hero-greeting::after {
    display: none;
  }
}</style>
