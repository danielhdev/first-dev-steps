import React from "react";
import './main.css';
import Header from './Header';
function App() {
  return (
    <>
      <section className="flex justify-center items-center h-screen bg-yellow-600">
        <div id="container" className="w-[440px] h-[430px] bg-neutral-800">
          <Header />
          <div className="flex justify-center items-left flex-col w-[90%] h-[80%] m-auto">
            <h1 className="font-bold text-3xl text-left">Fun facts about React</h1>
            <ul className="mt-7 mb-7 pl-8 list-disc">
              <li className="p-1">Was first released in 2013</li>
              <li className="p-1">Was originally created by Jordan Walke</li>
              <li className="p-1">Has over 100.000 stars on GitHub</li>
              <li className="p-1">Is maintained by the Elves of Facebook</li>
              <li className="p-1">Powers thousands of apps</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
