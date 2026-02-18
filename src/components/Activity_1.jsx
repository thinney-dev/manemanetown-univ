import React, { useState } from 'react';

// 画像の読み込み（png形式）
import img1 from '../assets/IMG_1.png';
import img2 from '../assets/IMG_2.png';
import img3 from '../assets/IMG_3.png';
import img4 from '../assets/IMG_4.png';
import img5 from '../assets/IMG_5.png';
import img6 from '../assets/IMG_6.png';

// アイコン画像
import userIcon from '../assets/SF.png'; 

// 教授の顔写真
import moriImg from '../assets/mori.png'; 
import kitaguchiImg from '../assets/kitaguchi.png';

const Activity_1 = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-32 px-6 border-t border-white/10 overflow-hidden">
      
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: infinite-scroll 40s linear infinite;
          width: max-content;
          display: flex;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        
        {/* === 上部エリア（タイトル・スライダー） === */}
        {/* ▼▼▼ 修正1：スマホ版のみ mb-20 を mb-10 に減らして余白を短縮 ▼▼▼ */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-10 md:mb-20">
          <div className="md:w-5/12 space-y-6">
            <span className="text-gold-gradient font-sans font-bold tracking-widest text-xs border border-gold-400 px-3 py-1 inline-block">
              ACTIVITY 01
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              新しい金融教育<br />
              「まねまねタウン」
            </h2>
            <p className="text-lg text-silver/80 font-serif border-l-4 border-gold-400 pl-4">
              社会貢献と<span className="text-gold-gradient">最高の実践</span>がここにある。
            </p>
          </div>

          <div className="md:w-7/12 w-full overflow-hidden relative flex items-center h-64 md:h-80">
            <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-navy-900 to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-navy-900 to-transparent z-10"></div>
            <div className="animate-scroll gap-4 px-4">
              {images.map((src, index) => (
                <div key={`set1-${index}`} className="w-48 md:w-64 flex-shrink-0">
                  <img src={src} alt={`Activity ${index + 1}`} className="w-full h-48 md:h-64 object-cover rounded-lg opacity-100 transition duration-300" />
                </div>
              ))}
              {images.map((src, index) => (
                <div key={`set2-${index}`} className="w-48 md:w-64 flex-shrink-0">
                  <img src={src} alt={`Activity ${index + 1}`} className="w-full h-48 md:h-64 object-cover rounded-lg opacity-100 transition duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* === 中段エリア（説明・監修・特典） === */}
        {/* ▼▼▼ 修正2：スマホ版のみ pt-12 を pt-6 に減らして余白を短縮 ▼▼▼ */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 pt-6 md:pt-12 pb-20">
          
          <div className="md:col-span-7 space-y-10">
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-white">子供たちに社会の仕組みを届ける</h3>
              <p className="text-silver/80 leading-loose text-justify text-sm md:text-base">
                「まねまねタウン」とは、子供たちに金融や社会の仕組みを教える教育プログラムです。
                コミュニティ内で金融に関する知識を習得し、選ばれた学生には実際の授業をしていただきます。
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif text-white">なぜやるのか？</h3>
              <p className="text-silver/80 leading-loose text-justify text-sm md:text-base">
                複雑な社会の仕組みを子供に教えるプロセスは、社会人に不可欠な<span className="text-white border-b border-gold-400/50">論理的思考力</span>と、相手の視座に立つ高度な<span className="text-white border-b border-gold-400/50">コミュニケーション能力</span>を養う最高のトレーニングです。
              </p>
            </div>

            {/* 監修者セクション */}
            <div className="pt-8 border-t border-white/10">
              {/* ▼▼▼ 修正3：スマホ版のみ text-center を適用して中央揃えに ▼▼▼ */}
              <span className="text-gold-gradient font-sans font-bold tracking-widest text-xs mb-6 block text-center md:text-left">
                教材監修者
              </span>
              
              <div className="grid gap-6">
                {/* 森先生 */}
                <div className="flex items-center gap-5 bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
                  <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-gold-400/30">
                    <img src={moriImg} alt="森 利博氏" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[10px] text-silver/60 tracking-wider mb-1 font-sans">
                      ゴールドマンサックス出身<br />立命館大学大学院 前教授
                    </p>
                    <p className="text-white font-serif text-lg leading-tight">
                      森 利博 <span className="text-xs text-silver/40">氏</span>
                    </p>
                  </div>
                </div>

                {/* 北口先生 */}
                <div className="flex items-center gap-5 bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
                  <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-gold-400/30">
                    <img src={kitaguchiImg} alt="北口 勝也教授" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[10px] text-silver/60 tracking-wider mb-1 font-sans">
                      武庫川女子大学 教育学部長
                    </p>
                    <p className="text-white font-serif text-lg leading-tight">
                      北口 勝也 <span className="text-xs text-silver/40">教授</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="md:col-span-5">
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 md:p-10 relative overflow-hidden group hover:border-gold-400/50 transition duration-500 h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 space-y-6">
                <span className="text-gold-gradient font-serif italic text-xl border-b border-gold-400/30 pb-1 inline-block">
                  Premium Benefit
                </span>
                <h3 className="text-2xl font-serif text-white leading-snug">
                  <span className="text-gold-gradient">関西唯一。</span><br />
                  外資系コンサル人事との<br />
                  「特別座談会」参加権
                </h3>
                <p className="text-silver/60 text-xs leading-relaxed text-justify">
                  本プロジェクトで得られる高い視座と能力(アウトプット)を求める企業は非常に多いです。
                  選抜メンバーには、特別なオファーや座談会への参加権が付与されます。
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* MEMBER'S VOICE */}
        <div className="pt-20">
            <div className="text-center mb-10">
                <span className="text-gold-gradient font-serif italic text-2xl">MEMBER'S VOICE</span>
            </div>

            <div className="bg-navy-900/40 border border-white/10 p-8 md:p-12 rounded-xl backdrop-blur-sm relative overflow-hidden flex flex-col md:flex-row gap-8 items-start">
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-gold-400/5 rounded-full blur-3xl"></div>

                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 relative mx-auto md:mx-0">
                    <div className="absolute inset-0 rounded-full border border-gold-400/30 animate-pulse"></div>
                    <img 
                        src={userIcon} 
                        alt="Member" 
                        className="w-full h-full object-cover rounded-full border-2 border-gold-400/20"
                    />
                </div>

                <div className="space-y-6 text-center md:text-left flex-1">
                    <p className="text-gold-gradient font-bold text-lg md:text-xl font-serif">
                        「見えるようになった景色」
                    </p>
                    
                    <div className="text-silver/80 text-sm md:text-base leading-loose text-justify space-y-4">
                      <p>
                        「お金にお金を生み出させる」一体、何割の大学生がこの発想に出会えるだろう。
                        <span className={`transition-all duration-500 ${isExpanded ? 'inline opacity-100' : 'hidden md:inline'}`}>
                          <br />私はまねまねタウンで２年に渡り教材開発の責任者を務めました。
                        </span>
                      </p>

                      <div className={`space-y-4 transition-all duration-500 ${isExpanded ? 'block opacity-100' : 'hidden md:block'}`}>
                        <p>
                          事前学習、教材開発、教室でのアウトプット。このサイクルを回していると驚くべき光景を目の当たりにすることがあります。
                          前回まで「お小遣い」の概念しか持っていなかった子どもたちが、投資や金利の仕組みを理解し、目の色を変えてコンテンツを楽しみ始めたり、学んだ知識を家に持ち帰って親御さんに熱心に教えたりすることです。自分の作成した教材をきっかけに、子どもたちの行動そのものが変わっていくのです。
                        </p>
                        <p>
                          日々の経済ニュース、企業の広告、毎日の資産推移といった情報に関心を抱くようになり、私自身も大きく成長できました。<br />
                          私が作った教材を通じ自分と子どもたちの世界が広がる。その様子を実感するたびにまねまねタウンに出会えてよかったと感じます。「お金について学ぶことは未来の選択肢を広げることだ」。そう確信を持って言えるようになったことこそがこの2年間の活動で得た最大の財産です。
                        </p>
                      </div>

                      <div className="md:hidden text-center pt-2 mt-4">
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

                    <div className="pt-2 border-t border-white/10 inline-block w-full">
                        <span className="text-xs text-silver/40 tracking-widest block pt-2 text-right">
                            PROJECT LEADER / 27 GRADUATE　SHUNTA FURUKAWA
                        </span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Activity_1;