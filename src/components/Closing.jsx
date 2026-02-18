import React from 'react';

const Closing = () => {
  return (
    <section 
      className="relative py-40 px-6 flex flex-col items-center justify-center text-center min-h-[60vh] bg-transparent"
    >
      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        
        {/* ▼▼▼ 修正：アニメーション関連のクラスを削除し、初めから表示 ▼▼▼ */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight drop-shadow-2xl">
            共に一歩を<br />
            踏み出しませんか？
          </h2>
          
          <p className="text-silver/90 text-sm md:text-lg font-sans tracking-wide drop-shadow-md">
            あなたの<span className="text-gold-gradient">個</span>が輝く場所が、ここにあります。
          </p>
        </div>

        {/* ボタン・コピーライト部分：初めから表示 */}
        <div className="space-y-12 pt-8">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href="#entry" 
              className="bg-gold-400 text-navy-900 font-bold py-4 px-12 rounded hover:bg-white transition duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              体験に申し込む
            </a>
            <a 
              href="#entry" 
              className="bg-navy-900/80 border border-white/30 text-white font-bold py-4 px-12 rounded hover:bg-white/10 transition duration-300 backdrop-blur-sm"
            >
              説明会にエントリー
            </a>
          </div>

          <div className="pt-20 text-silver/30 text-xs">
            © 2026 THINNEY Inc. All Rights Reserved.
          </div>
        </div>

      </div>
    </section>
  );
};

export default Closing;