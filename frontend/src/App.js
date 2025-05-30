import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePing = async () => {
    try {
      const res = await fetch('http://localhost:9000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setResponse(data.message || data.error);
    } catch (err) {
      setResponse('Error: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col items-center py-12 px-4 font-outfit">
      <div
        className={`w-full max-w-md bg-white rounded-xl shadow-xl p-8 mb-8 transform transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } hover:shadow-2xl`}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          What is in your Mind 😜😍
        </h2>
        <div className="flex flex-col items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a message"
            className="w-full p-3 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
          <button
            onClick={handlePing}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            Ping To Me 😜
          </button>
          {response && (
            <p className="mt-4 text-gray-600 animate-fade-in">
              Response: <span className="font-semibold">{response}</span>
            </p>
          )}
        </div>
      </div>

      <div
        className={`w-full max-w-2xl bg-white rounded-xl shadow-xl p-8 transform transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } hover:shadow-2xl`}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">🌟 About Me</h1>
        <p className="text-gray-600 mb-4">
          Hi, I’m <span className="font-semibold">Abrar Ali</span> — a passionate Full-Stack Web Developer at{' '}
          <span className="font-semibold">Sebez System Technology</span>. With expertise in Laravel, WordPress, React, and Next.js, I build fast, secure, and scalable web solutions from concept to deployment.
        </p>
        <p className="text-gray-600 mb-4">
          I’ve delivered 20+ high-performance websites and full-stack apps, including:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Custom WordPress themes and plugins for dynamic sites</li>
          <li>Laravel applications with REST APIs and payment gateway integrations</li>
          <li>React/Next.js frontends with responsive, modern UI/UX</li>
        </ul>
        <p className="text-gray-600 mb-4">
          I’m driven by solving real-world problems with clean code and optimized systems, ensuring performance, security, and user satisfaction. This project showcases my ability to build a full-stack app with React, PHP, and Docker under tight constraints.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">🔧 Key Skills</h2>
        <p className="text-gray-600 mb-4">
          Laravel | WordPress | React | Next.js | Tailwind CSS | MySQL | REST APIs | Payment Integrations | UI/UX Design | Docker
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">🔗 Let’s Connect</h2>
        <ul className="text-gray-600 space-y-2">
          <li>
            <a
              href="https://github.com/AbrarAli14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-all duration-300"
            >
              🖥️ GitHub: AbrarAli14
            </a>
          </li>
          <li>
            <a
              href="https://portfolio.elzinabrar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-all duration-300"
            >
              💼 Portfolio: portfolio.elzinabrar.com
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/abrar-ali-846637231"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-all duration-300"
            >
              🌐 LinkedIn: abrar-ali-846637231
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;