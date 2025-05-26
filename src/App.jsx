import React from 'react';
import ResumeSection from './components/ResumeSections';
import styles from './App.module.css'; 

function App() {
  const aboutContent = (
    <p>
      Я целеустремленный и увлеченный разработчик с опытом работы в области веб-разработки.
      Стремлюсь создавать приложения, используя современные технологии. 
      Увлекаюсь изучением новых технологий и решением сложных задач на алгоритмы и структуры данных.
    </p>
  );

  const experienceContent = (
    <div>
      <div className={styles.experienceItem}>
        <h3>Globus</h3>
        <p>Full Stack Разработчик</p>
        <p>Августа 2024 - настоящее время</p>
        <ul>
          <li>Разработка и поддержка веб-приложений с использованием React, Angular, C#.</li>
          <li>Написание модульных тестов.</li>
          <li>Рефакторинг и актуализация стека технологий с Angular на React.</li>
          <li>Взаимодействие с командой дизайнеров и менеджеров продукта.</li>
        </ul>
      </div>
    </div>
  );

    const projectsContent = (
        <div>
            <div className={styles.projectItem}>
                <h3>Утилита для шифрования данных</h3>
                <p>На основе ассиметричного шифрования с двойным ключем.</p>
                <a href="https://github.com/qasmark/ransomware-sample" target="_blank" rel="noopener noreferrer">
                    GitHub репозиторий
                </a>
            </div>
        </div>
    );

  const skillsContent = (
    <ul>
      <li>JavaScript (ES6+)</li>
      <li>TypeScript</li>
      <li>React</li>
      <li>Redux</li>
      <li>HTML5</li>
      <li>CSS3 (Sass/Less/CSS Modules)</li>
      <li>Git</li>
      <li>C#</li>
      <li>SQL (MSSQL)</li>
      <li>Тестирование (Jest, React Testing Library)</li>
      <li>Webpack</li>
      <li>Figma</li>
      <li>Python</li>
    </ul>
  );

    const educationContent = (
        <div>
            <div className={styles.educationItem}>
                <h3>ПГТУ</h3>
                <p>Факультет: Информатики и вычислительной техники</p>
                <p>Специальность: Программная Инженерия</p>
                <p>2021 - 2025</p>
            </div>
        </div>
    );

  const contactContent = (
    <div>
      <p>Email: mecladenec@gmail.com</p>
      <p>Телефон: +7 (913) 156-91-25</p>
      <p>
        <a href="https://github.com/qasmark" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
       <p>
          <a href="https://t.me/qasmark" target="_blank" rel="noopener noreferrer"> 
            Telegram
         </a>
       </p>
       <p>
          <a href="https://stepik.org/users/61874105/profile" target="_blank" rel="noopener noreferrer"> 
            Stepik
         </a>
       </p>
    </div>
  );

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Игнатьев Владислав Дмитриевич</h1>
        <p>Full Stack Web Developer</p>
        <nav className={styles.nav}>
          <a href="#about">Обо мне</a>
          <a href="#experience">Опыт</a>
          <a href="#projects">Проекты</a>
          <a href="#skills">Навыки</a>
          <a href="#education">Образование</a>
          <a href="#contact">Контакты</a>
        </nav>
      </header>
      <main>
        <ResumeSection title="Обо мне" content={aboutContent} id="about" />
        <ResumeSection title="Опыт работы" content={experienceContent} id="experience" />
        <ResumeSection title="Проекты" content={projectsContent} id="projects"/>
        <ResumeSection title="Навыки" content={skillsContent} id="skills" />
        <ResumeSection title="Образование" content={educationContent} id="education" />
        <ResumeSection title="Контакты" content={contactContent} id="contact" />
      </main>
    </div>
  );
}

export default App;
