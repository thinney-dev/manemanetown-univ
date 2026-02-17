import React from 'react';

// ロゴ画像の読み込み
import logo1 from '../assets/logos_1.png';

const Hero = () => {
  // ロゴ配列
  const logos = [logo1];

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* 無限スクロール用のアニメーション定義 */}
      <style>{`
        @keyframes scroll-logos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-logos {
          animation: scroll-logos 40s linear infinite;
          width: max-content;
          display: flex;
        }
      `}</style>

      {/* メインコンテンツ */}
      {/* 全体を text-center で中央揃えにしています */}
      <div className="relative z-10 text-center px-6 animate-fade-in space-y-10 mt-[-10vh]">
        
        {/* タグライン */}
        <div className="inline-block border border-gold-400/50 px-6 py-2 backdrop-blur-sm bg-navy-900/30">
          <p className="text-gold-gradient tracking-[0.2em] text-xs md:text-sm font-sans font-bold">
            関西唯一・4大外資戦略コンサル認定団体
          </p>
        </div>

        {/* ▼▼▼ 修正：白色・1行・中央揃え ▼▼▼ */}
        {/* whitespace-nowrap を追加して、どんな画面サイズでも絶対に改行されないようにしました */}
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif text-white font-medium tracking-wide leading-tight drop-shadow-2xl whitespace-nowrap">
          みちを歩める存在へ
        </h1>

        {/* サブコピー */}
        <p className="text-silver/80 text-sm md:text-base font-sans tracking-widest">
          自分らしく生きる人を増やす<br />実践型学生コミュニティ
        </p>

      </div>

      {/* 企業ロゴの横スクロールエリア */}
      <div className="absolute bottom-24 left-0 w-full overflow-hidden bg-white py-4 z-20">
        <div className="animate-scroll-logos gap-12 md:gap-20 items-center px-6">
          {/* 1セット目のロゴ */}
          {logos.map((logo, index) => (
            <div key={`logo-set1-${index}`} className="flex-shrink-0">
              <img 
                src={logo} 
                alt={`Partner Logo ${index + 1}`} 
                className="h-8 md:h-12 w-auto object-contain transition duration-300" 
              />
            </div>
          ))}
          {/* 2セット目のロゴ（シームレスなループのために複製） */}
          {logos.map((logo, index) => (
            <div key={`logo-set2-${index}`} className="flex-shrink-0">
              <img 
                src={logo} 
                alt={`Partner Logo ${index + 1}`} 
                className="h-8 md:h-12 w-auto object-contain transition duration-300" 
              />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Hero;