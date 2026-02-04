import { useState } from 'react';
import Layout from './components/Layout';
import Home from './sections/Home';
import About from './sections/About';
import Blog from './sections/Blog';
import MeetingLog from './sections/MeetingLog';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderSection = () => {
    switch (activeTab) {
      case 'home': return <Home setActiveTab={setActiveTab} />;
      case 'about': return <About />;
      case 'blog': return <Blog />;
      case 'meeting-log': return <MeetingLog />;
      case 'gallery': return <Gallery />;
      case 'contact': return <Contact />;
      default: return <About />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderSection()}
    </Layout>
  );
}

export default App;
