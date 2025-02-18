import { useState } from 'react';
import './App.css';
import Header from './components/common/Header';
import MainLayout from './components/layout/MainLayout';
import SectionOne from './components/section/SectionOne';
import SidebarRight from './components/section/SidebarRight';

function App() {
  const [config, setConfig] = useState({
    interior:"Dark", exterior:"red"
  })
  return (
    <>
      <Header />
      <MainLayout>
        <SectionOne interior={config.interior} exterior={config.exterior} />
        <SidebarRight setConfig={setConfig} config={config} />
      </MainLayout>
    </>
  );
}

export default App;
