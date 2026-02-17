import React from 'react';

// ロゴ画像の読み込み
import logo1 from '../assets/logos_1.png';
import logo2 from '../assets/logos_2.png';

const Hero = () => {
  // ロゴ配列（PC版スクロール用）
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
        }
      `}</style>

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center px-2 md:px-6 animate-fade-in space-y-5 md:space-y-8 mt-[-15vh] md:mt-[-10vh]">
        
        {/* タグライン */}
        <div className="inline-block border border-gold-400/50 px-6 py-2 backdrop-blur-sm bg-navy-900/30">
          <p className="text-gold-gradient tracking-[0.2em] text-xs md:text-sm font-sans font-bold">
            関西唯一・4大外資戦略コンサル認定団体
          </p>
        </div>

        {/* メインタイトル */}
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif text-white font-medium tracking-wide leading-tight drop-shadow-2xl whitespace-nowrap">
          みちを歩める存在へ
        </h1>

        {/* コンセプトテキストエリア */}
        <div className="space-y-4 md:space-y-6 pt-2 md:pt-4">
          
          {/* 左揃えラッパー */}
          <div className="inline-block text-left">
            <p className="text-silver/70 text-xs md:text-sm font-sans tracking-[0.15em] leading-loose md:leading-loose">
              単なる就活対策ではなく、社会で通用する<br className="md:hidden" />
              
              <span className="whitespace-nowrap">
                <span className="text-white border-b border-gold-400/50">論理的思考力</span>
                <span className="mx-1 md:mx-2"></span>
                <span className="text-white border-b border-gold-400/50">対話力</span>
                <span className="mx-1 md:mx-2"></span>
                <span className="text-white border-b border-gold-400/50">社会貢献意識</span>を。
              </span><br />
              
              本質的な成長を通して、<br className="md:hidden" />世界で活躍できるキャリアを切り拓く。
            </p>
          </div>

          {/* サブコピー */}
          <p className="text-white/95 text-sm md:text-base font-serif tracking-widest drop-shadow-md">
            自分らしく生きる人を増やす<br className="md:hidden"/>実践型学生コミュニティ
          </p>
          
        </div>

      </div>

      {/* 企業ロゴのエリア */}
      {/* ▼▼▼ 修正: bg-white を md:bg-white に変更し、スマホでは背景が透明になるようにしました ▼▼▼ */}
      <div className="absolute bottom-0 md:bottom-24 left-0 w-full md:bg-white py-4 z-20 overflow-hidden">
        
        {/* PC版のみ表示：横スクロール */}
        <div className="hidden md:flex animate-scroll-logos gap-12 md:gap-20 items-center px-6">
          {logos.map((logo, index) => (
            <div key={`logo-set1-${index}`} className="flex-shrink-0">
              <img 
                src={logo} 
                alt={`Partner Logo ${index + 1}`} 
                className="h-12 w-auto object-contain transition duration-300" 
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`logo-set2-${index}`} className="flex-shrink-0">
              <img 
                src={logo} 
                alt={`Partner Logo ${index + 1}`} 
                className="h-12 w-auto object-contain transition duration-300" 
              />
            </div>
          ))}
        </div>

        {/* スマホ版のみ表示：静止画像1枚を中央配置 */}
        <div className="flex md:hidden justify-center items-center px-4 w-full py-2">
          <img 
            src={logo2} 
            alt="Partner Logos Mobile" 
            className="w-[85%] max-w-[320px] h-auto object-contain" 
          />
        </div>

      </div>
      
    </section>
  );
};

export default Hero;