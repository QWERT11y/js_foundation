import React, { useState } from "react";
import section3 from "../img copy/img1.png";
import { Link } from "react-router-dom";
import section4 from "../img copy/img3.png";

const Section3 = () => {
  const [lesson, setLesson] = useState(false);
  return (
    <div className="p-16 bg-gray-100 text-gray-900">
      <h1 className="text-[100px] md:text-3xl font-semibold text-center mb-6">
        Каждой компании нужен сайт или приложение, а значит, нужны и
        фронтенд‑разработчики
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-32 p-10">
        <img
          className="w-[500px] md:w-[500px] rounded-lg shadow-lg"
          src={section3}
          alt="Frontend development illustration"
        />

        <div className="max-w-lg space-y-8">
          <h2 className="text-lg font-semibold">
            Они отвечают за внешнюю часть сервиса: заголовки, меню, карточки
          </h2>
          <p className="text-gray-700 text-md">
            Например, скруглённые края у картинки или кнопка «У меня есть
            вопросы», которая всегда отображается в правом нижнем углу страницы,
            — всё это вы сможете сделать, когда пройдёте курс.
          </p>
        </div>
      </div>

      <div className="p-16 bg-gray-100 text-gray-900">
        <h2 className="text-[100px] md:text-4xl font-semibold text-center mb-2">
          На этом курсе вы с нуля освоите фронтенд-разработку
        </h2>
      </div>

      <div className="flex items-center gap-32 p-10">
        <img
          src="https://s3-alpha-sig.figma.com/img/2977/e6ad/fd6cf833501464decbeecbb80ab4c483?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VgSam8BZMnvpNCp~CZT~IVo0vSZXvXxulliX-03gMPN8Q7Va0Q39Z9XpZaLqxNWC~hNivmltW0FoeoMZLMtUPJ1E8S1HEJUDLNXlC6AXSQqcz6JEsmfDhyMetfPvLwKZiapT844Xe3NJagSfD218FB4FBaYcDrdHM6Ky6u1ww9mme7AIxTs253DZvc9Ts1AKAqZNTTPMthfj1077wEzv5XYFCuxLhyCyGuroh7Gy385wUw3MtZXK3LWD17d5ATJxbwoB8Cp1a3Cd4oVB75kmPTZJ9JEZ37e67Xo6Mo7rAeyVqKvAycBAAim3DR8tkii2rA1eP2R0oaXmbNYPeE2M3Q__"
          alt="Advanced frontend development course"
          className="w-[500px] rounded-lg shadow-lg"
        />

        <div className="max-w-lg space-y-8">
          <h2 className="text-lg font-semibold">
            А если вы уже знаете HTML, CSS, JS и имеете опыт коммерческой
            разработки, вам подойдёт курс «Мидл фронтенд-разработчик»
          </h2>
          <p className="text-gray-700 text-md">
            Изучите продвинутый JavaScript и TypeScript, научитесь использовать
            API браузера, освоите DevOps и прототипирование.
          </p>
        </div>
      </div>

      <section className="mb-12 p-8 font-sans text-gray-800 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Это востребованная профессия: на hh.ru ~2 000 вакансий для
          фронтендеров
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Найти работу без опыта вполне реально, нужно освоить технические
            навыки и пройти собеседование.
          </li>
          <li>
            Далеко фрилансить не пойдет начинающих, но вы получите опыт работы и
            начнете зарабатывать деньги.
          </li>
          <li>
            Конкуренция тоже довольно высокая, что нормально — все плюсы за вас,
            если у вас будет портфолио.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Освойте фронтенд-разработку с нуля за 10 месяцев обучения
        </h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Получите мощный набор знаний и инструментов
          </h3>
          <p className="text-gray-700 mb-6">
            Мы регулярно обновляем программу, чтобы у вас были актуальные
            навыки, которыми нужны работодатели:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            <span className="bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-center">
              HTML
            </span>
            <span className="bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-center">
              CSS - SCSS
            </span>
            <span className="bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-center">
              Flexbox
            </span>
            <span className="bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-center">
              Git
            </span>
            <span className="bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-center">
              Bash
            </span>
            <span className="bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-center">
              JavaScript
            </span>
            <span className="bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-center">
              TypeScript
            </span>
            <span className="bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-center">
              React
            </span>
            <span className="bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-center">
              Redux
            </span>
            <span className="bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-center">
              Grid Layout
            </span>
            <span className="bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-center">
              DOM
            </span>
            <span className="bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-center">
              Webpack + Vite
            </span>
            <span className="bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-center">
              React Router
            </span>
            <span className="bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-center">
              ООП
            </span>
          </div>
          <button
            className="px-[80px] bg-blue-200 text-black rounded-sm py-3"
            onClick={() => setLesson(true)}
          >
            начать
          </button>
        </div>
      </section>

      <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
        <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold">Полная программа курса</h2>
          <p className="text-gray-600">
            Составили программу по модели 4C/ID: будете проходить только то, что
            нужно для решения настоящих задач
          </p>

          <div className="bg-gray-900 text-white p-6 rounded-lg mt-4">
            <h3 className="text-xl font-bold">
              HTML, CSS, JavaScript: бесплатный модуль
            </h3>
            <p className="text-gray-400">
              Почувствуйте себя в роли frontend-разработчика и поймите, хотите
              ли развиваться в программировании...
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="text-lg font-semibold">Первый код</h4>
                <p className="text-gray-300">
                  Задачи frontend-разработчиков, базовые элементы, HTML, CSS
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Что такое HTML и CSS</h4>
                <p className="text-gray-300">
                  Теги HTML, разметка, абзацы, ссылки, атрибуты, списки и другие
                  элементы.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Базовые CSS-свойства</h4>
                <p className="text-gray-300">
                  Стилизация элементов, размеры, отступы, цвета, шрифты.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Больше CSS</h4>
                <p className="text-gray-300">
                  Типы верстки, классы, позиционирование, внешние и внутренние
                  отступы.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">JavaScript</h4>
                <p className="text-gray-300">
                  Типы данных, арифметика, переменные, функции, DOM.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Создадите проект</h4>
                <p className="text-gray-300">
                  Напишите простую программу на JavaScript и сделаете страницу
                  интерактивной.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg mt-6 shadow-md">
            <h3 className="text-xl font-bold text-center">
              Кто такие фронтенд-разработчики?
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Прежде чем говорить о том, как всё устроено, разберёмся, кто такие
              фронтенд-разработчики.
            </p>
            <div className="bg-gray-200 p-4 rounded-lg text-center mt-4">
              <p className="text-gray-800 font-medium">
                Они всё время сидят за компом и сосредоточенно пишут код?
              </p>
            </div>
          </div>

         
        </div>
      </div>
      <section className="bg-gray-100 py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">
            В курсе есть модуль по YandexGPT
          </h2>
          <p className="text-gray-700 mt-2">
            Работодатели ценят специалистов, которые умеют работать с
            нейросетями
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md mt-6 flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Увидите возможности нейросетей, научитесь использовать их в
                работе, поймёте, <br className="hidden md:block" />
                <span className="text-blue-600">
                  когда это безопасно и этично, а когда нет
                </span>
              </h3>
              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                <li>с генерацией и проверкой кода</li>
                <li>ведением документации</li>
                <li>ответами на вопросы о языке</li>
              </ul>
            </div>

            <div className="flex-1 mt-6 md:mt-0 md:ml-8">
              <div className="relative">
                <img
                  src={section4}
                  alt="YandexGPT Screenshot"
                  className="rounded-lg shadow-lg"
                />
                <span className="absolute bottom-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                  640 × 344
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section3;
