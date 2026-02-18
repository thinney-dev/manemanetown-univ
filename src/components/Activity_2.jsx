import React, { useState, useRef } from 'react';

const Activity_2 = () => {
  // カルーセルの状態管理（0: Step01, 1: Step02）
  const [activeStep, setActiveStep] = useState(0);
  const scrollRef = useRef(null);

  // スクロール時にアクティブなステップを判定
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      // 中心に近い方のインデックスを計算
      const index = Math.round(scrollLeft / width);
      setActiveStep(index);
    }
  };

  return (
    <section className="py-32 px-6 relative border-t border-white/10">
      
      {/* スクロールバー非表示用のスタイル */}
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
        
        {/* === ヘッダーエリア === */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8 animate-fade-in items-start text-left">
          <div className="space-y-6 w-full md:w-auto">
            <span className="text-gold-gradient font-sans font-bold tracking-widest text-xs border border-gold-400 px-3 py-1 inline-block">
              ACTIVITY 02
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              理論と実践を繰り返す、<br />
              独自の成長システム
            </h2>
          </div>
          <div className="md:text-right text-silver/80 text-sm md:text-base leading-loose font-sans w-full md:w-auto">
            <p>インプットだけで終わらせない。</p>
            <p>実社会で通用する<span className="text-white border-b border-gold-400/50">再現性</span>のあるスキルを習得できます。</p>
          </div>
        </div>

        {/* === メインコンテンツ === */}
        {/* PC: 3カラムグリッド / スマホ: カルーセル(Step1-2) + 通常配置(Support) */}
        <div className="relative md:grid md:grid-cols-3 md:gap-8">
          
          {/* ▼▼▼ スマホ用カルーセルラッパー（Step 1 & 2） ▼▼▼ */}
          {/* スマホでは横スクロール、PCではグリッドの一部として機能させるため col-span-2 md:contents を使用 */}
          <div className="md:contents block">
            
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex md:contents overflow-x-auto snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 gap-6 pb-8 md:pb-0"
            >
              
              {/* Step 01: Input */}
              <div className="flex-shrink-0 w-[85vw] md:w-auto snap-center bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 rounded-xl relative overflow-hidden group hover:border-gold-400/40 transition duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-gold-gradient font-serif text-base tracking-widest block mb-2">Step 01</span>
                  <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">自分と社会を知る</h3>
                  
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-white font-bold mb-2 border-l-2 border-gold-400 pl-3 text-sm md:text-base">ライバルと差がつく企業分析</h4>
                      <p className="text-silver/80 text-xs md:text-sm leading-relaxed text-justify">
                        財務分析や労働条件など、リアルな数字から「企業を見抜く目」を養います。
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2 border-l-2 border-gold-400 pl-3 text-sm md:text-base">自己分析ピッチ</h4>
                      <p className="text-silver/80 text-xs md:text-sm leading-relaxed text-justify">
                        自分のテーマに基づいたアイデアを発表し、自己理解を深めます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 02: Output */}
              <div className="flex-shrink-0 w-[85vw] md:w-auto snap-center bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 rounded-xl relative overflow-hidden group hover:border-gold-400/40 transition duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-gold-gradient font-serif text-base tracking-widest block mb-2">Step 02</span>
                  <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">アウトプットで挑戦する</h3>
                  
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-white font-bold mb-2 border-l-2 border-gold-400 pl-3 text-sm md:text-base">実践形式ピッチコンテスト</h4>
                      <p className="text-silver/80 text-xs md:text-sm leading-relaxed text-justify">
                        企業課題に対し、チームで解決策をプレゼン。一流企業の社員から忖度なしのフィードバックをいただきます。
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2 border-l-2 border-gold-400 pl-3 text-sm md:text-base">リーダー経験</h4>
                      <p className="text-silver/80 text-xs md:text-sm leading-relaxed text-justify">
                        運営メンバーやイベント立ち上げを通じ、組織マネジメントを肌で学ぶことができます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>

            {/* ▼▼▼ 追加：スマホのみ表示のドットインジケーター（2つ） ▼▼▼ */}
            <div className="flex md:hidden justify-center gap-3 mb-8 -mt-4">
              {[0, 1].map((index) => (
                <div 
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    activeStep === index ? 'bg-gold-400' : 'bg-white/20'
                  }`}
                ></div>
              ))}
            </div>

          </div>


          {/* スマホ版のみ表示される区切り線（Step2とサポートの間） */}
          <div className="md:hidden flex justify-center items-center py-2 mb-8">
            <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"></div>
          </div>


          {/* Support System: 土台となる環境 */}
          {/* PCでは3列目、スマホではカルーセルの下に通常配置 */}
          <div className="bg-navy-900/40 border border-white/5 p-8 rounded-xl relative overflow-hidden group hover:border-gold-400/20 transition duration-500 backdrop-blur-sm">
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-silver/60 font-sans font-bold text-xs tracking-widest block mb-2 border border-silver/20 px-2 py-1 inline-block w-max rounded">
                SUPPORT SYSTEM
              </span>
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">「深く繋がる」環境</h3>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-white font-bold mb-2 border-l-2 border-silver/50 pl-3 text-sm md:text-base">メンター制度</h4>
                  <p className="text-silver/80 text-xs md:text-sm leading-relaxed text-justify">
                    同大学の先輩など、就活終了者や多様なジャンルのプロフェッショナルによる座談会・パネルトークの開催
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 border-l-2 border-silver/50 pl-3 text-sm md:text-base">本音の交流</h4>
                  <p className="text-silver/80 text-xs md:text-sm leading-relaxed text-justify">
                    匿名質問OKの座談会や、意味のある飲み会、ボードゲーム大会など、楽しみながら視座を高めるオフラインの交流
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Activity_2;