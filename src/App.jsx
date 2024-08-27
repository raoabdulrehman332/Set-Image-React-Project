import { useState } from 'react'
import './App.css'

function App() {
  let user = false;
  const [topOffset, setTopOffset] = useState(0);
  const [leftOffset, setLeftOffset] = useState(0);

  const handleTopClick = () => {
    setTopOffset((prevOffset) => Math.max(prevOffset - 10, 0)); // Top ki taraf move karega
  };

  const handleBottomClick = () => {
    setTopOffset((prevOffset) => prevOffset + 20); // Bottom ki taraf move karega
  };

  const handleLeftClick = () => {
    setLeftOffset((prevOffset) => Math.max(prevOffset - 10, 0)); // Left ki taraf move karega
  };

  const handleRightClick = () => {
    setLeftOffset((prevOffset) => prevOffset + 20); // Right ki taraf move karega
  };
  
  return (
  <>
 <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">Set Images</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">About</a>
      <a className="mr-5 hover:text-gray-900">Contact Us</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-5 focus:outline-none hover:bg-teal-400-200 rounded text-base mt-4 md:mt-0">
      {user ? 'Log in':'Log out'}
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>

{/* image box */}

  <div className="container py-7 w-full h-5/6">
    
      <div className=" w-full h-full bg-gray-100 py-40 px-10 relative mb-4">
        <img
          alt="gallery"
          className="w-full object-cover h-full object-center block  absolute inset-0"
          src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=pexels-eberhardgross-443446.jpg&fm=jpg"
        />
        
        <img
          alt="gallery"
          id='ph'
          className="w-20 object-cover h-15 object-center block opacity-1 absolute inset-0" style={{ top: `${topOffset}px`,left: `${leftOffset}px`}} 
          src="img/360_F_533178753_ASLNL6D0VchJdgnxPJYq4fQ4ePeFHGWv-removebg-preview.png"
        />
        </div>
  </div>
    <button className="inline-flex items-center bg-gray-100 border-0 mx-2 py-1 px-5 focus:outline-none hover:bg-teal-400-200 rounded text-base mt-4 md:mt-0" onClick={handleTopClick}>Top</button>
    <button className="inline-flex items-center bg-gray-100 border-0 mx-2 py-1 px-5 focus:outline-none hover:bg-teal-400-200 rounded text-base mt-4 md:mt-0" onClick={handleBottomClick}>Bottom</button>
    <button className="inline-flex items-center bg-gray-100 border-0 mx-2 py-1 px-5 focus:outline-none hover:bg-teal-400-200 rounded text-base mt-4 md:mt-0" onClick={handleLeftClick}>Left</button>
    <button className="inline-flex items-center bg-gray-100 border-0 mx-2 py-1 px-5 focus:outline-none hover:bg-teal-400-200 rounded text-base mt-4 md:mt-0" onClick={handleRightClick}>Right</button>


  </>
 
  )
}

export default App
