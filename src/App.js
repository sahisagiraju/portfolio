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
    </div>
  );
}

export default App;
