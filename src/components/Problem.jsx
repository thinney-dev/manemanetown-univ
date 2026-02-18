import React from 'react';

const Problem = () => {
  return (
    <section id="problem" className="py-32 px-6 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* 左側：問いかけ */}
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
            こんな
            <span className="text-gold-gradient mx-2">モヤモヤ</span>、<br />
            抱えていませんか？
          </h2>
          <p className="text-silver/60 text-sm leading-loose font-sans">
            多くの学生が感じる違和感<br />
            それは、あなたが本気である証拠かもしれない。
          </p>
        </div>

        {/* 右側：悩みリスト */}
        <div className="space-y-8">
          {[
            "想像していた大学生像はもっと視座の高いものだった。日々の生活に物足りなさを感じている。",
            "様々な業務がAIに置き換わりつつある中、漠然とした未来への不安がある。",
            "就活に向けて企業とのコネクションを作っておきたい。",
            "本気で意見を語り合える仲間が欲しい。"
          ].map((text, index) => (
            <div key={index} className="flex gap-6 border-b border-white/10 pb-6 group hover:border-gold-400/50 transition duration-300">
              <span className="text-gold-gradient font-serif text-xl md:text-2xl opacity-80 group-hover:scale-110 transition duration-300">
                0{index + 1}
              </span>
              <p className="text-silver/90 text-sm md:text-base leading-relaxed font-sans">
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* 下部のメッセージ */}
      <div className="text-center mt-24 animate-fade-in delay-200">
        {/* ▼▼▼ 修正：スマホの文字サイズをtext-baseに調整し、各行に whitespace-nowrap を追加 ▼▼▼ */}
        <p className="text-white font-serif text-base md:text-xl tracking-wider leading-loose">
          <span className="inline-block whitespace-nowrap">このコミュニティは、ただのサークルではない。</span><br />
          <span className="inline-block whitespace-nowrap">
            <span className="text-gold-gradient">社会で通用する自分軸</span> を作る場所だ。
          </span>
        </p>
      </div>
    </section>
  );
};

export default Problem;