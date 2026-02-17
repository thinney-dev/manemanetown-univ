import React, { useState } from 'react';
import oritoImg from '../assets/orito.png';

const Organization = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        
        {/* タグ */}
        <div className="mb-10">
          <span className="text-gold-gradient font-sans font-bold tracking-widest text-xs border border-gold-400 px-3 py-1">
            TRUST & COMPANY
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* 左側：団体情報 */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              運営団体について
            </h2>
            
            <div className="bg-white/5 border border-white/10 p-8 space-y-6">
              <div>
                <span className="text-xs text-silver/50 tracking-widest block mb-2">OPERATED BY</span>
                <p className="text-2xl text-white font-serif">THINNEY株式会社</p>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs text-silver/50 tracking-widest block mb-2">CERTIFIED BY</span>
                <p className="text-xl text-gold-gradient font-bold font-serif mb-2">
                  A.T. Kearney<br />
                  認定学生団体
                </p>
                <p className="text-xs text-silver/60 leading-relaxed">
                  世界的な経営コンサルティングファームの<br />
                  公認を受けて活動しています。
                </p>
              </div>
            </div>
          </div>

          {/* 右側：ビジョン */}
          <div className="space-y-8 animate-fade-in delay-100">
            
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              代表の想い
            </h2>
            
            <div className="space-y-8">
              
              {/* ▼▼▼ 修正：スマホ画面ではみ出さないよう、画像サイズ・余白・文字サイズを自動調整 ▼▼▼ */}
              {/* gap-3 md:gap-6 でスマホ時の写真と文字の隙間を少し詰めています */}
              <div className="flex items-center gap-3 md:gap-6">
                
                {/* w-16 h-16 でスマホ時の写真を少しだけ小さくし、文字スペースを確保 */}
                <div className="w-16 h-16 md:w-24 md:h-24 flex-shrink-0 relative">
                  <div className="absolute inset-0 rounded-full border border-gold-400/30 animate-pulse"></div>
                  <img 
                    src={oritoImg} 
                    alt="代表" 
                    className="w-full h-full object-cover rounded-full border-2 border-gold-400/20"
                  />
                </div>
                
                <div className="border-l-4 border-gold-400 pl-3 md:pl-4 space-y-1 md:space-y-2">
                  {/* text-[clamp(...)] で画面幅に合わせて文字サイズを自動計算（最小12px〜最大20px） */}
                  <h3 className="text-[clamp(12px,3.5vw,20px)] md:text-xl text-white font-serif whitespace-nowrap">
                    自分らしく生きる人を増やす
                  </h3>
                  <p className="text-xs md:text-sm text-silver/60 tracking-widest font-serif">
                    織戸 弘暉
                  </p>
                </div>

              </div>
              
              {/* テキストと「続きを読む/折りたたむ」ボタン */}
              <div className="text-silver/70 leading-loose text-justify font-sans space-y-6">
                <p>
                  私たちは、学生が社会の「枠」に囚われることなく、自分の意志で未来を選択できる世界を目指しています。
                </p>

                <div className={`transition-all duration-500 ${isExpanded ? 'block opacity-100' : 'hidden md:block'}`}>
                  <p>
                    そのために必要なのは、机上の空論ではない「本物の経験」と、視座を高め合う「仲間」の存在です。
                    怪しい勧誘や無意味な馴れ合いは一切ありません。
                    ここにあるのは、あなたの可能性を最大化するための環境だけです。
                  </p>
                </div>

                <div className="md:hidden text-center pt-2">
                  {!isExpanded ? (
                    <button 
                      onClick={() => setIsExpanded(true)}
                      className="text-gold-400 font-bold text-sm tracking-widest border-b border-gold-400/50 pb-1"
                    >
                      続きを読む...
                    </button>
                  ) : (
                    <button 
                      onClick={() => setIsExpanded(false)}
                      className="text-gold-400 font-bold text-sm tracking-widest border-b border-gold-400/50 pb-1"
                    >
                      折りたたむ
                    </button>
                  )}
                </div>

              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Organization;