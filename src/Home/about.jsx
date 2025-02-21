import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-6">
      <h1 className="text-4xl font-bold mb-4">О нас</h1>
      <p className="text-lg mb-6 max-w-2xl text-center">
        Добро пожаловать в наш проект! Мы стремимся предоставлять лучшие решения в области веб-разработки и программирования.
      </p>

      <div className="max-w-3xl bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-3">Наша миссия</h2>
        <p className="mb-4">
          Мы верим, что современные технологии могут изменить мир. Наша цель – создавать инновационные и удобные решения, которые помогают людям и бизнесам расти.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Почему выбирают нас?</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Профессиональный и опытный коллектив</li>
          <li>Высококачественные продукты и услуги</li>
          <li>Гибкий подход к каждому проекту</li>
          <li>Клиентоориентированность и поддержка</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Наши ценности</h2>
        <p>
          Мы ценим честность, креативность и постоянное развитие. Наша команда всегда ищет новые способы улучшения и оптимизации наших решений.
        </p>
      </div>
    </div>
  );
};

export default About;
