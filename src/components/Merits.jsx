import React, { useState, useRef, useEffect } from 'react';
// ロゴ画像の読み込み
import companyLogos from '../assets/company-logos.png';

const Merits = () => {
  // 現在のアクティブなスライド番号（0, 1, 2）を管理
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef(null);

  // スクロール位置を監視して、アクティブなスライドを更新する関数
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const width = scrollContainerRef.current.offsetWidth;
      // スクロール位置から、現在表示されているスライドのインデックスを計算
      const index = Math.round(scrollLeft / width);
      setActiveSlide(index);
    }
  };

  return (
    <section className="py-32 px-6 relative border-t border-white/10 overflow-hidden">
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        
        {/* セクションタイトル */}
        <div className="mb-12 md:mb-20 animate-fade-in text-left">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            学生が得られる<span className="text-gold-gradient ml-4">3つの実利</span>
          </h2>
          <p className="text-silver/60 text-sm md:text-base font-sans tracking-wider">
            綺麗事抜き<br />将来のあなたを助ける武器がここにある。
          </p>
        </div>

        {/* スクロールコンテナ */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
        >
          
          {/* Merit 01 */}
          <div className="flex-shrink-0 w-[85vw] md:w-auto snap-center bg-white/5 border border-white/10 p-8 hover:border-gold-400/50 transition duration-500 group relative overflow-hidden flex flex-col rounded-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-400/20 transition duration-500"></div>
            
            <div className="text-6xl font-serif text-gold-gradient opacity-90 mb-6 group-hover:scale-110 transition duration-500 origin-left">
              01
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 leading-relaxed">
              一流企業への 直結ルート
            </h3>
            
            <div className="space-y-4 text-silver/80 text-sm leading-loose text-justify mb-6">
              <p>
                ここでの活動実績は高く評価され、提携企業の<span className="text-white border-b border-gold-400/50">特別選考フロー</span>や人事担当者との<span className="text-white border-b border-gold-400/50">直接面談</span>の機会が提供されます。
              </p>
            </div>

            <div className="mt-auto pt-6 border-t border-white/10">
              <p className="text-xs text-gold-gradient font-bold tracking-widest mb-3">
                SPECIAL CONNECTIONS
              </p>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                <img 
                  src={companyLogos} 
                  alt="提携企業一覧" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>


          {/* Merit 02 */}
          <div className="flex-shrink-0 w-[85vw] md:w-auto snap-center bg-white/5 border border-white/10 p-8 hover:border-gold-400/50 transition duration-500 group relative overflow-hidden flex flex-col rounded-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-400/20 transition duration-500"></div>
            
            <div className="text-6xl font-serif text-gold-gradient opacity-90 mb-6 group-hover:scale-110 transition duration-500 origin-left">
              02
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 leading-relaxed">
              ここだけの 教える 金融学習
            </h3>
            
            <div className="flex-1 space-y-4 text-silver/80 text-sm leading-loose text-justify">
              <p>
                ラーニングピラミッドにおいて、講義を受けるだけの定着率はわずか5%。対して他人に教える経験の定着率は<span className="text-white font-bold text-lg mx-1">90%</span>と言われます。
              </p>
              <p>
                子供たちに噛み砕いて教えるという<span className="text-white border-b border-gold-400/50">究極のアウトプット</span>を繰り返すことで、生半可な勉強では到達できないレベルの実力が定着します。
              </p>
            </div>
          </div>


          {/* Merit 03 */}
          <div className="flex-shrink-0 w-[85vw] md:w-auto snap-center bg-white/5 border border-white/10 p-8 hover:border-gold-400/50 transition duration-500 group relative overflow-hidden flex flex-col rounded-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-400/20 transition duration-500"></div>
            
            <div className="text-6xl font-serif text-gold-gradient opacity-90 mb-6 group-hover:scale-110 transition duration-500 origin-left">
              03
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 leading-relaxed">
              将来の資産と年収を最大化する
            </h3>
            
            <div className="flex-1 space-y-4 text-silver/80 text-sm leading-loose text-justify">
              <p>
                金融教育を提供する側になることで、NISAや投資信託など<span className="text-white border-b border-gold-400/50">自分の将来の資産形成</span>に直結する知識が、嫌でも身につきます。
              </p>
              <p>
                さらに、大企業に就職する以外の<span className="text-white border-b border-gold-400/50">稼ぐ力</span>やビジネスモデルへの理解が深まり、将来のキャリアにおける<span className="text-white border-b border-gold-400/50">期待年収の底上げ</span>が可能です。
              </p>
            </div>
          </div>

        </div>

        {/* ▼▼▼ 追加：スマホ版のみ表示されるドットインジケーター ▼▼▼ */}
        <div className="flex md:hidden justify-center gap-3 mt-6">
          {[0, 1, 2].map((index) => (
            <div 
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                activeSlide === index ? 'bg-gold-400' : 'bg-white/20'
              }`}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Merits;