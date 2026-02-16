import React from 'react';

const Organization = () => {
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

          {/* ▼▼▼ 右側：ビジョン（団体への想いを追加） ▼▼▼ */}
          {/* 修正：左の見出しと高さを揃えるため、pt-10 md:pt-20 を削除しました */}
          <div className="space-y-8 animate-fade-in delay-100">
            
            {/* 追加：「団体への想い」の見出し */}
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              代表の想い
            </h2>
            
            <div className="space-y-8">
              <h3 className="text-xl text-white font-serif border-l-4 border-gold-400 pl-4">
                「自分らしく生きる人を増やす」
              </h3>
              <p className="text-silver/70 leading-loose text-justify font-sans">
                私たちは、学生が社会の「枠」に囚われることなく、自分の意志で未来を選択できる世界を目指しています。<br /><br />
                そのために必要なのは、机上の空論ではない「本物の経験」と、視座を高め合う「仲間」の存在です。
                怪しい勧誘や無意味な馴れ合いは一切ありません。
                ここにあるのは、あなたの可能性を最大化するための環境だけです。
              </p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Organization;