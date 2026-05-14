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
              I am a Full Stack Developer who is passionate about building modern, scalable, and user-friendly web
              applications. I enjoy working on projects that require both creative and analytical thinking, with a strong
              focus on user experience, performance, and system efficiency.
            </p>
            <div class="about-stats">
              <div class="stat">
                <div class="stat-num">6+</div>
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
              <a href="https://foamtyp.wixsite.com/my-site-3" target="_blank" class="contact-pill">
                <span class="cpill-icon">🔗</span> Portfolio
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
            <div class="skill-card-icon">🛠</div>
            <h3>Tools & Others</h3>
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
            <a href="https://foamtyp.wixsite.com/my-site-3" target="_blank" class="cc-value">View Portfolio →</a>
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
      frontendSkills: ['HTML / HTML5', 'CSS', 'JavaScript', 'Vue.js', 'Nuxt 3', 'BootstrapVue', 'Vuetify.js', 'Responsive Design'],
      backendSkills: ['Node.js', 'PHP', 'Python', 'RESTful API', 'MySQL', 'PostgreSQL'],
      toolSkills: ['Git', 'VS Code', 'Postman', 'Figma', 'SEO Optimization'],
      experiences: [
        {
          period: 'April 2019 – August 2020',
          title: 'Front-End Web Developer',
          company: 'Delta Network Solution',
          details: [
            'Designed, prototyped, and developed web applications using PHP, HTML, CSS, and JavaScript.',
            'Developed responsive and user-friendly website interfaces.',
            'Collaborated with development teams to implement front-end functionality and improve user experience.',
          ],
        },
        {
          period: 'September 2020 – 2021',
          title: 'Front-End Engineer',
          company: 'My Platform',
          details: [
            'Developed front-end projects and connected APIs for the My Platform website.',
            'Built responsive web applications using BootstrapVue, Vuetify.js, HTML, CSS, and JavaScript.',
            'Integrated APIs and improved front-end functionality and performance.',
          ],
        },
        {
          period: 'November 2021 – November 2024',
          title: 'Front-End Web Developer & Back-End Developer',
          company: 'SiamSquared Technologies (Thailand) Co., Ltd.',
          details: [
            'Developed API-connected front-end platform projects, admin consoles, and responsive websites using Vue.js and Nuxt 3.',
            'Designed and developed RESTful APIs connected to MySQL databases using Node.js, PHP, and Python.',
            'Built and maintained both front-end and back-end systems for web applications.',
            'Improved application performance, responsiveness, and scalability.',
          ],
        },
        {
          period: 'November 2024 – Present',
          title: 'Full Stack Developer',
          company: 'Origin Property',
          details: [
            'Responsible for full-stack development and maintenance of corporate and investor relations platforms.',
            'Developed and maintained corporate websites, investor relations systems, and back-office platforms for Origin Property and Britania Investor Relations.',
            'Built responsive and multilingual web applications using Vue.js, Node.js, PostgreSQL, and RESTful APIs.',
            'Managed APIs, database systems, dynamic content management, and administrative tools.',
            'Improved website performance, SEO optimization, security, and user experience.',
          ],
        },
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
  font-family: 'Segoe UI', Arial, sans-serif;
  color: #1a1a1a;
  background: #0d0d0d;
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
  padding: 20px 60px;
  transition: all 0.3s;
}

.navbar.scrolled {
  background: rgba(13, 13, 13, 0.95);
  backdrop-filter: blur(10px);
  padding: 14px 60px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 900;
  color: #fff;
  letter-spacing: 1px;
}

.nav-brand span {
  color: #f5c400;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 36px;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #f5c400;
}

/* ── Hero ── */
.hero {
  position: relative;
  min-height: 100vh;
  background: #0d0d0d;
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

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.35;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: #f5c400;
  top: -100px;
  left: -100px;
  animation: float 8s ease-in-out infinite;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: #f5a623;
  bottom: -80px;
  right: -80px;
  animation: float 10s ease-in-out infinite reverse;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(-30px) scale(1.05);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
}

.hero-greeting {
  font-size: 1.1rem;
  color: #f5c400;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.hero-name {
  font-size: clamp(2.6rem, 6vw, 4.5rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 24px;
}

.hero-name span {
  color: #f5c400;
}

.hero-roles {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 36px;
}

.role-chip {
  background: rgba(245, 196, 0, 0.12);
  border: 1px solid rgba(245, 196, 0, 0.4);
  color: #f5c400;
  padding: 6px 18px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: #f5c400;
  color: #0d0d0d;
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 800;
  font-size: 0.9rem;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  letter-spacing: 0.5px;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(245, 196, 0, 0.4);
}

.btn-outline {
  border: 2px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s;
}

.btn-outline:hover {
  border-color: #f5c400;
  color: #f5c400;
}

.hero-scroll-hint {
  position: absolute;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.72rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.scroll-arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid rgba(255, 255, 255, 0.35);
  border-bottom: 2px solid rgba(255, 255, 255, 0.35);
  transform: rotate(45deg);
  animation: bounce 1.5s ease-in-out infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: rotate(45deg) translateY(0);
  }

  50% {
    transform: rotate(45deg) translateY(4px);
  }
}

/* ── Sections ── */
.section {
  padding: 100px 24px;
  background: #fff;
}

.section--dark {
  background: #111;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-tag {
  display: inline-block;
  background: rgba(245, 196, 0, 0.12);
  color: #f5c400;
  border: 1px solid rgba(245, 196, 0, 0.3);
  padding: 4px 16px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 900;
  color: #1a1a1a;
  letter-spacing: -0.5px;
}

.section--dark .section-title {
  color: #fff;
}

/* ── About ── */
.about-grid {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 60px;
  align-items: center;
}

.about-photo-wrap {
  position: relative;
  display: flex;
  justify-content: center;
}

.about-photo-ring {
  width: 280px;
  height: 360px;
  border-radius: 24px;
  padding: 5px;
  background: linear-gradient(135deg, #f5c400, #f5a623);
}

.about-photo {
  width: 100%;
  height: 100%;
  border-radius: 20px;
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
  bottom: 8px;
  right: 16px;
  background: #f5c400;
  color: #0d0d0d;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 5px 14px;
  border-radius: 999px;
  letter-spacing: 1px;
}

.about-desc {
  font-size: 1rem;
  color: #444;
  line-height: 1.8;
  margin-bottom: 28px;
}

.about-stats {
  display: flex;
  gap: 32px;
  margin-bottom: 28px;
  padding: 20px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.stat-num {
  font-size: 1.8rem;
  font-weight: 900;
  color: #f5c400;
  line-height: 1;
}

.stat-label {
  font-size: 0.78rem;
  color: #888;
  font-weight: 600;
  margin-top: 4px;
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
  background: #f7f7f7;
  border: 1px solid #e8e8e8;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s;
}

.contact-pill:hover {
  border-color: #f5c400;
  color: #b8920a;
}

/* ── Skills ── */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.skill-card {
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 16px;
  padding: 32px 24px;
  transition: transform 0.2s, border-color 0.2s;
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: rgba(245, 196, 0, 0.4);
}

.skill-card--accent {
  background: #f5c400;
  border-color: #f5c400;
}

.skill-card--accent h3 {
  color: #0d0d0d;
}

.skill-card-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.skill-card h3 {
  font-size: 1rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}

.skill-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-pill {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.85);
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 600;
}

.skill-card--accent .skill-pill {
  background: rgba(0, 0, 0, 0.1);
  color: #1a1a1a;
}

/* ── Timeline ── */
.timeline {
  position: relative;
  padding: 0 0 0 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 12px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #f5c400, rgba(245, 196, 0, 0.1));
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-dot {
  position: absolute;
  left: -35px;
  top: 20px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #f5c400;
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px rgba(245, 196, 0, 0.25);
}

.timeline-card {
  background: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 24px 28px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.timeline-card:hover {
  border-color: rgba(245, 196, 0, 0.5);
  box-shadow: 0 4px 20px rgba(245, 196, 0, 0.1);
}

.tc-period {
  font-size: 0.78rem;
  font-weight: 700;
  color: #f5a623;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
  text-transform: uppercase;
}

.tc-title {
  font-size: 1rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 4px;
}

.tc-company {
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 12px;
}

.tc-list {
  list-style: none;
  padding: 0;
}

.tc-list li {
  font-size: 0.85rem;
  color: #555;
  line-height: 1.7;
  padding-left: 14px;
  position: relative;
}

.tc-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #f5c400;
  font-size: 0.7rem;
  top: 2px;
}

/* ── Education ── */
.edu-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.edu-card {
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 16px;
  padding: 32px 28px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  transition: border-color 0.2s, transform 0.2s;
}

.edu-card:hover {
  border-color: rgba(245, 196, 0, 0.4);
  transform: translateY(-3px);
}

.edu-card-icon {
  font-size: 2rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.edu-card-year {
  font-size: 0.78rem;
  font-weight: 700;
  color: #f5c400;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.edu-card-degree {
  font-size: 1rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 4px;
}

.edu-card-school {
  font-size: 0.82rem;
  color: #888;
}

/* ── Contact ── */
.contact-section {
  background: #0d0d0d;
}

.contact-section .section-title {
  color: #fff;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.contact-card {
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 16px;
  padding: 36px 24px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}

.contact-card:hover {
  border-color: #f5c400;
  transform: translateY(-4px);
}

.cc-icon {
  font-size: 2.2rem;
  margin-bottom: 12px;
}

.cc-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #f5c400;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.cc-value {
  font-size: 0.88rem;
  color: #ccc;
  text-decoration: none;
  line-height: 1.6;
  font-weight: 500;
}

.cc-value:hover {
  color: #f5c400;
}

/* ── Footer ── */
.footer {
  background: #0d0d0d;
  border-top: 1px solid #1e1e1e;
  text-align: center;
  padding: 24px;
  font-size: 0.8rem;
  color: #555;
}

/* ── Responsive ── */
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

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .edu-cards {
    grid-template-columns: 1fr;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .timeline {
    padding-left: 28px;
  }
}</style>
