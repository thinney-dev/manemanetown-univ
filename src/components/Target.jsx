import React from 'react';

const Target = () => {
  // ▼▼▼ 修正1： border-t border-white/10 を削除し、はみ出し防止の overflow-hidden を追加しました ▼▼▼
  return (
    <section className="py-10 px-6 relative overflow-hidden bg-navy-900/20">
      
      {/* ▼▼▼ 修正2：上から下へ広がるうっすらとした白いフィルターを追加 ▼▼▼ */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none -z-10"></div>

      {/* ▼▼▼ 修正3：コンテンツがフィルターの上にしっかり表示されるように relative z-10 を追加 ▼▼▼ */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* タイトルエリア */}
        <div className="text-left md:text-center mb-16 animate-fade-in">
          <span className="text-gold-gradient font-sans font-bold tracking-widest text-xs border border-gold-400 px-3 py-1 inline-block mb-4">
            IDEAL CANDIDATE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-6">
            こんな<span className="text-gold-gradient">メンバー</span>を<br className="md:hidden" />求めています
          </h2>
          <p className="text-silver/60 text-sm md:text-base font-sans tracking-wide">
            今の実力は問わない。<br />必要なのは、この想いだけ。
          </p>
        </div>

        {/* 3つの求める人物像 */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">

          {/* 01: 型にハマらない */}
          <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 rounded-xl relative overflow-hidden group hover:border-gold-400/30 transition duration-500">
            {/* 背景装飾 */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            
            {/* 数字 */}
            <span className="text-6xl font-serif text-white/5 font-bold absolute top-2 right-4 group-hover:text-gold-400/10 transition duration-500 pointer-events-none">
              01
            </span>

            {/* 見出し */}
            <div className="mb-6 mt-10 relative z-10">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 whitespace-nowrap">
                    <span className="text-gold-gradient">型</span>にハマりたくない
                </h3>
                <div className="w-12 h-0.5 bg-gold-400 mb-4"></div>
            </div>

            <div className="space-y-4 relative z-10">
                <p className="text-silver/80 text-sm leading-loose text-justify">
                    敷かれたレールの上を歩くだけの学生生活には満足できない。<br />
                    金融教育事業<span className="text-white font-bold">「まねまねタウン」</span>での社会貢献活動を通じ、既存の枠組みを超えて自分の価値を社会に問いかけたい人を求めます。
                </p>
            </div>
          </div>

          {/* 02: 論理的思考力 */}
          <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 rounded-xl relative overflow-hidden group hover:border-gold-400/30 transition duration-500">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            
            <span className="text-6xl font-serif text-white/5 font-bold absolute top-2 right-4 group-hover:text-gold-400/10 transition duration-500 pointer-events-none">
              02
            </span>

            {/* 見出し */}
            <div className="mb-6 mt-10 relative z-10">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 whitespace-nowrap">
                    <span className="text-gold-gradient">論理的思考力</span>を身につけたい
                </h3>
                <div className="w-12 h-0.5 bg-gold-400 mb-4"></div>
            </div>

            <div className="space-y-4 relative z-10">
                <p className="text-silver/80 text-sm leading-loose text-justify">
                    感覚や感情論だけで語るのではなく、数字とロジックで勝負できる力をつけたい。<br />
                    徹底的な<span className="text-white font-bold">「企業分析」</span>やピッチの実践を通じ、社会で通用する本質的な思考力を養う意志のある人を求めます。
                </p>
            </div>
          </div>

          {/* 03: ビジネスキャリア */}
          <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 rounded-xl relative overflow-hidden group hover:border-gold-400/30 transition duration-500">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            
            <span className="text-6xl font-serif text-white/5 font-bold absolute top-2 right-4 group-hover:text-gold-400/10 transition duration-500 pointer-events-none">
              03
            </span>

            {/* 見出し */}
            <div className="mb-6 mt-10 relative z-10">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 whitespace-nowrap">
                    ビジネスで<span className="text-gold-gradient">キャリア</span>を積みたい
                </h3>
                <div className="w-12 h-0.5 bg-gold-400 mb-4"></div>
            </div>

            <div className="space-y-4 relative z-10">
                <p className="text-silver/80 text-sm leading-loose text-justify">
                    学生という立場に甘えず、早期からビジネスの現場で戦いたい。<br />
                    <span className="text-white font-bold">「長期インターン」</span>や<span className="text-white font-bold">「AIハッカソン」</span>への挑戦を通じ、圧倒的な成長と市場価値を追い求める人を求めます。
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Target;