import React from 'react';
import Header from './components/Header';
import ProjectGallery from './components/ProjectGallery';
import Carousel from "./components/Carousel"

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <Carousel />
      <ProjectGallery />
      <div className="text-center p-2 text-gray-400 text-sm">
        © 2024 Sahi Sagiraju. All Rights Reserved.
      </div>

    </div>
  );
}

export default App;
