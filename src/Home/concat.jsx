import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Input qiymatini yangilash
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div  className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-6 " >
      <h1 className="text-4xl font-bold mb-4">Свяжитесь с нами</h1>
      <p className="text-lg mb-6">Используйте форму ниже, чтобы связаться с нами.</p>

      {submitted ? (
        <div className="bg-green-500 text-white p-4 rounded-lg">
          Спасибо! Ваше сообщение отправлено.
        </div>
      ) : (
        <form
          className="w-full max-w-md bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium">Ваше имя</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg bg-gray-200 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Ваш Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg bg-gray-200 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Сообщение</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg bg-gray-200 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition duration-300"
          >
            Отправить
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
