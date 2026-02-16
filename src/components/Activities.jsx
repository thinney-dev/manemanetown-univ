import React from 'react';

const Activities = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto space-y-32">
        
        {/* ==========================================
            4.1 金融教育プロジェクト (まねまねタウン)
           ========================================== */}
        <div className="space-y-12">
          {/* セクションタイトル */}
          <div className="text-center space-y-4">
            <span className="text-gold-400 font-bold tracking-widest text-sm md:text-base border border-gold-400/30 px-4 py-1 rounded-full bg-navy-900/50 backdrop-blur-sm">
              PROJECT
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-bold leading-tight drop-shadow-lg">
              新しい金融教育<br className="md:hidden" />「まねまねタウン」
            </h2>
            <p className="text-lg md:text-xl text-silver/80">
              社会貢献と「最高の実践」がここにある。
            </p>
          </div>

          {/* メインコンテンツ枠 */}
          <div className="bg-navy-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* 左側：説明テキスト */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif text-gold-400 mb-4">
                    子供たちに「社会の仕組み」を届ける
                  </h3>
                  <p className="text-silver leading-loose text-justify">
                    「まねまねタウン」とは、創業当初から手がけている子供たちに金融や社会の仕組みを教える教育プログラムです。
                    コミュニティ内で金融に関する知識を習得し、選ばれた学生には実際の授業をしていただきます。
                  </p>
                </div>

                <div className="bg-black/40 p-6 rounded border-l-4 border-gold-400">
                  <h4 className="text-white font-bold mb-2">なぜやるのか？</h4>
                  <p className="text-sm text-silver/90 leading-relaxed">
                    複雑な社会の仕組みを子供に教えるプロセスは、社会人に不可欠な<span className="text-gold-400 font-bold">「論理的思考力」</span>と、相手の視座に立つ<span className="text-gold-400 font-bold">「高度なコミュニケーション能力」</span>を養う最高のトレーニングです。
                  </p>
                </div>
              </div>

              {/* 右側：選抜特典カード */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gold-400/20 blur-xl rounded-full opacity-50 group-hover:opacity-80 transition duration-500"></div>
                <div className="relative bg-black/60 border border-gold-400/50 p-8 rounded-xl text-center hover:scale-[1.02] transition duration-300">
                  <p className="text-gold-400 font-serif text-lg mb-2">関西唯一の特権</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    選抜メンバー特典
                  </h3>
                  <p className="text-silver text-sm leading-relaxed mb-6">
                    本プロジェクトで得られる高い視座と能力を求める企業は非常に多いです。
                  </p>
                  <div className="bg-gold-400 text-black font-bold py-3 px-4 rounded shadow-lg text-sm md:text-base">
                    外資系コンサル等<br />
                    人事との「特別座談会」参加権
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* ==========================================
            4.2 独自の成長システム (3ステップ)
           ========================================== */}
        <div className="space-y-16">
           <div className="text-center space-y-4">
            <span className="text-gold-400 font-bold tracking-widest text-sm md:text-base border border-gold-400/30 px-4 py-1 rounded-full bg-navy-900/50 backdrop-blur-sm">
              SYSTEM
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold leading-tight drop-shadow-lg">
              理論と実践を繰り返す、<br />
              独自の成長システム
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* 矢印（PC表示時のみ） */}
            <div className="hidden md:block absolute top-1/2 left-1/3 -translate-y-1/2 w-8 h-8 border-t-2 border-r-2 border-gold-400/30 rotate-45 transform translate-x-4"></div>
            <div className="hidden md:block absolute top-1/2 right-1/3 -translate-y-1/2 w-8 h-8 border-t-2 border-r-2 border-gold-400/30 rotate-45 transform translate-x-4"></div>

            {/* STEP 1 */}
            <div className="bg-navy-900/80 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:border-gold-400/50 transition duration-300 relative group">
              <div className="absolute -top-4 left-6 bg-gold-400 text-black font-bold px-4 py-1 text-sm rounded shadow-lg">Step 1</div>
              <h3 className="text-xl font-serif text-white mt-4 mb-6 group-hover:text-gold-400 transition">自分と社会を知る</h3>
              <ul className="space-y-4 text-silver text-sm">
                <li className="flex gap-3">
                  <span className="text-gold-400 mt-1">●</span>
                  <span><strong className="text-white">企業分析：</strong><br />財務や労働条件など、リアルな数字から「企業を見抜く目」を養う。</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 mt-1">●</span>
                  <span><strong className="text-white">自己分析ピッチ：</strong><br />自分のテーマに基づいたアイデアを発表し、自己理解を深める。</span>
                </li>
              </ul>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900/80 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:border-gold-400/50 transition duration-300 relative group">
              <div className="absolute -top-4 left-6 bg-gold-400 text-black font-bold px-4 py-1 text-sm rounded shadow-lg">Step 2</div>
              <h3 className="text-xl font-serif text-white mt-4 mb-6 group-hover:text-gold-400 transition">アウトプットで挑戦する</h3>
              <ul className="space-y-4 text-silver text-sm">
                <li className="flex gap-3">
                  <span className="text-gold-400 mt-1">●</span>
                  <span><strong className="text-white">実践ピッチコンテスト：</strong><br />企業課題に対しチームで解決策を提案。一流企業の社員から忖度なしのFBを獲得。</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 mt-1">●</span>
                  <span><strong className="text-white">リーダー経験：</strong><br />運営やイベント立ち上げを通じ、組織マネジメントを肌で学ぶ。</span>
                </li>
              </ul>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900/80 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:border-gold-400/50 transition duration-300 relative group">
              <div className="absolute -top-4 left-6 bg-gold-400 text-black font-bold px-4 py-1 text-sm rounded shadow-lg">Step 3</div>
              <h3 className="text-xl font-serif text-white mt-4 mb-6 group-hover:text-gold-400 transition">深く繋がる</h3>
              <ul className="space-y-4 text-silver text-sm">
                <li className="flex gap-3">
                  <span className="text-gold-400 mt-1">●</span>
                  <span><strong className="text-white">メンター制度：</strong><br />就活終了者や多様なプロフェッショナルによる座談会・パネルトーク。</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-400 mt-1">●</span>
                  <span><strong className="text-white">本音の交流：</strong><br />匿名質問OKの座談会や、意味のある飲み会・ボドゲ大会などで視座を高める。</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Activities;