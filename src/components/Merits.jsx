import React from 'react';
// ロゴ画像の読み込み
import companyLogos from '../assets/company-logos.png';

const Merits = () => {
  return (
    <section className="py-32 px-6 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        
        {/* セクションタイトル */}
        {/* ▼▼▼ 修正：text-center md:text-left を削除し、text-left に統一しました ▼▼▼ */}
        <div className="mb-20 animate-fade-in text-left">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            学生が得られる<span className="text-gold-gradient ml-4">3つの実利</span>
          </h2>
          <p className="text-silver/60 text-sm md:text-base font-sans tracking-wider">
            綺麗事抜き。<br />将来のあなたを助ける武器がここにある。
          </p>
        </div>

        {/* 3つのメリットカード */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* ============================================================
              Merit 01: 一流企業への「直結ルート」
             ============================================================ */}
          <div className="bg-white/5 border border-white/10 p-8 hover:border-gold-400/50 transition duration-500 group relative overflow-hidden flex flex-col">
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

            {/* ロゴ表示エリア */}
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


          {/* ============================================================
              Merit 02: 最強の学習法「教える」経験
             ============================================================ */}
          <div className="bg-white/5 border border-white/10 p-8 hover:border-gold-400/50 transition duration-500 group relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-400/20 transition duration-500"></div>
            
            <div className="text-6xl font-serif text-gold-gradient opacity-90 mb-6 group-hover:scale-110 transition duration-500 origin-left">
              02
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 leading-relaxed">
              ここだけの 教える 金融学習
            </h3>
            
            <div className="flex-1 space-y-4 text-silver/80 text-sm leading-loose text-justify">
              <p>
                ラーニングピラミッドにおいて、講義を受けるだけの定着率はわずか5%。対して「他人に教える」経験の定着率は<span className="text-white font-bold text-lg mx-1">90%</span>と言われます。
              </p>
              <p>
                子供たちに噛み砕いて教えるという<span className="text-white border-b border-gold-400/50">究極のアウトプット</span>を繰り返すことで、生半可な勉強では到達できないレベルの実力が定着します。
              </p>
            </div>
          </div>


          {/* ============================================================
              Merit 03: 将来の「資産」と「年収」を最大化する
             ============================================================ */}
          <div className="bg-white/5 border border-white/10 p-8 hover:border-gold-400/50 transition duration-500 group relative overflow-hidden flex flex-col">
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
                さらに、大企業に就職する以外の「稼ぐ力」やビジネスモデルへの理解が深まり、将来のキャリアにおける<span className="text-white border-b border-gold-400/50">期待年収の底上げ</span>が可能です。
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Merits;