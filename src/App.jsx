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
        <h3>ICL Services</h3>
        <p>Full Stack Разработчик</p>
        <p>Августа 2022 - Октябрь 2024</p>
        <ul>
          <li>Разработка и поддержка веб-приложений с использованием React, Angular, C#.</li>
          <li>Участие в проектировании архитектуры приложений логистики компании.</li>
          <li>Написание модульных тестов.</li>
          <li>Рефакторинг и актуализация стека технологий с Angular на React.</li>
          <li>Взаимодействие с командой дизайнеров и менеджеров продукта.</li>
        </ul>
      </div>
      <div className={styles.experienceItem}>
        <h3>IMPERIUM WEB</h3>
        <p>Frontend Разработчик</p>
        <p>Январь 2025 - Настоящее время</p>
        <ul>
          <li>Разработка пользовательских интерфейсов с использованием React.</li>
          <li>Верстка макетов из Figma.</li>
          <li>Оптимизация производительности клиентской части веб-приложений на React.</li>
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