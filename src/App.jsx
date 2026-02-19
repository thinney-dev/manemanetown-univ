import React, { useEffect, useState } from 'react';
import heroBg from './assets/hero-bg.jpg';
import Hero from './components/Hero';
import Message from './components/Message';
import Problem from './components/Problem';
import Merits from './components/Merits';
import Activity_1 from './components/Activity_1';
import Activity_2 from './components/Activity_2';
import Target from './components/Target'; 
import Organization from './components/Organization';
import Closing from './components/Closing';
// ▼▼▼ 修正1：ボタンのインポートはここに1つだけ ▼▼▼
import JoinButton from './components/JoinButton'; 

function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * 0.00007;
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ▼▼▼ 修正2：すべての要素を1つの return 内にまとめました ▼▼▼
  return (
    <div className="relative min-h-screen font-sans text-silver overflow-hidden">
      
      {/* 固定背景画像 */}
      <div 
        className="fixed top-0 left-0 w-full h-full -z-50"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `scale(${scale})`,
          transition: 'transform 0.1s ease-out',
          willChange: 'transform'
        }}
      ></div>

      {/* 背景フィルター */}
      <div className="fixed top-0 left-0 w-full h-full bg-navy-900/85 -z-40"></div>
      
      {/* メインコンテンツ */}
      <div className="relative z-10">
        <Hero />
        <Message />
        <Problem />
        <Merits />
        <Activity_1 />
        <Activity_2 />
        <Target />
        <Organization />
        <Closing />
      </div>

      {/* 常時表示ボタン（スマホ版のみ） */}
      <JoinButton />

    </div>
  );
}

// ▼▼▼ 修正3：最後のエクスポートもこれ1つだけ ▼▼▼
export default App;