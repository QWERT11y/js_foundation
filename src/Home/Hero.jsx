import React, { useState } from "react";
import heroImg from "../img/img.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const [lesson, setLesson] = useState(false);

  return (
    <div className="container">
      <div className="flex items-center justify-center pt-[10px] pb-[50px]">
        <div className="w-[1300px] pl-[30px] py-[30px] h-[550px] bg-[#E0E0E0] flex justify-between rounded-[30px]">
          <div className="flex flex-col items-start gap-[30px]">
            <button className="bg-transparent px-2 py-[3px] flex items-center border-[1px] border-black rounded-3xl">
              програмирование с нуля
            </button>
            <h1 className="text-[45px] font-medium">
              Курс «Фронтенд- <br />
              разработчик»
            </h1>
            <p className="text-[18px]">
              Освоите фронтенд-разработку — с нуля за 10 месяцев. <br />
              Будет много практики на реальных проектах, <br />
              чтобы вы могли сразу стартовать в IT.
            </p>
            <button
              className="px-[80px] bg-white rounded-sm py-3"
              onClick={() => setLesson(true)}
            >
              начать
            </button>
            <div
              className={`fixed top-1/2 left-1/2 w-[350px] h-[650px] bg-[#D5D5DA] rounded-xl p-[40px] z-20 flex flex-col items-center justify-center transform ${
                lesson
                  ? "opacity-100 scale-100 translate-x-[-50%] translate-y-[-50%]"
                  : "opacity-0 scale-90 translate-x-[-50%] translate-y-[-50%]"
              } transition-all duration-500 ease-in-out`}
            >
              {lesson && (
                <>
                  <ul className="flex items-center flex-col gap-3 px-[10px]">
                    <button className="w-[300px] py-3 px-5 bg-slate-200 rounded-lg">
                      <Link to="/lesson1">String,Number,Var</Link>
                    </button>
                    <button className="w-[300px] py-3 px-5 bg-slate-200 rounded-lg">
                      <Link to="/lesson2">Boolean operators</Link>
                    </button>
                    <button className="w-[300px] py-3 px-5 bg-slate-200 rounded-lg">
                      <Link to="/lesson3">if , else , else if</Link>
                    </button>
                    <button className="w-[300px] py-3 px-5 bg-slate-200 rounded-lg">
                      <Link to="/lesson4">var, let , const</Link>
                    </button>
                    <button className="w-[300px] py-3 px-5 bg-slate-200 rounded-lg">
                      <Link to="/lesson5">string metods</Link>
                    </button>
                    <button className="w-[300px] py-3 px-5 bg-slate-200 rounded-lg">
                      <Link to="/lesson6">function</Link>
                    </button>
                    <button className="w-[300px] py-3 px-5 bg-slate-200 rounded-lg">
                      <Link to="/lesson7">for loop</Link>
                    </button>
                    <button className="w-[300px] py-3 px-5 bg-slate-200 rounded-lg">
                      <Link to="/lesson8">datatypes</Link>
                    </button>
                    <button className="w-[300px] py-3 px-5 bg-slate-200 rounded-lg">
                      <Link to="/lesson9">object</Link>
                    </button>
                    <button className="w-[300px] py-3 px-5 bg-slate-200 rounded-lg">
                      <Link to="/lesson10">array</Link>
                    </button>
                  </ul>
                  <button
                    onClick={() => setLesson(false)}
                    className="absolute text-[20px] top-[-10px] right-[-10px] px-7 py-3 flex items-center justify-center"
                  >
                    x
                  </button>
                </>
              )}
            </div>
          </div>
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
