import React from 'react';

const JoinButton = () => {
  return (
    /* fixed: 画面に固定
      bottom-0 left-0 w-full: 画面の最下部全体に配置
      z-50: 最前面に表示
      md:hidden: PCでは非表示
      pointer-events-none: このエリア自体はクリックを透過させる（ボタンのみクリック可能にするため）
    */
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden pointer-events-none flex flex-col justify-end mb-0">
      
      {/* ▼▼▼ 修正1：背景の影（グラデーション）を確実に配置 ▼▼▼
        h-48: 高さを少し広めにとって、自然な影を作る
        from-navy-900: 下の方は完全に不透明な濃紺にして、背景の文字と被らないようにする
        z-0: 親要素(z-50)の中での後ろ側に配置
      */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-navy-900 via-navy-900/90 to-transparent z-0 pointer-events-none"></div>

      {/* ボタン本体を囲むコンテナ（パディング用） */}
      {/* relative z-10: 影よりも手前に表示 */}
      <div className="relative z-10 p-6 w-full pb-8">
        <a
          href="#" // 後でリンクを設定します
          // pointer-events-auto: ボタンはクリックできるようにする
          // ▼▼▼ 修正2＆3：ボタンのデザインを強化 ▼▼▼
          // bg-gradient-to-r ... : 直接ゴールドのグラデーションを指定して確実に色を出す
          // shadow-[...] : 影を強めにして立体感を出す
          className="pointer-events-auto block w-full bg-gradient-to-r from-[#D4AF37] via-[#F2D06B] to-[#C5A028] text-navy-900 font-bold py-4 rounded-full text-center shadow-[0_6px_25px_rgba(212,175,55,0.5)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.6)] active:scale-[0.98] transition-all duration-200 tracking-[0.15em] text-lg font-serif border border-[#F2D06B]/50 relative overflow-hidden group"
        >
          {/* キラッと光るエフェクト（おまけ） */}
          <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] animate-[shine_3s_infinite]"></div>
          <span className="relative z-10 drop-shadow-sm">コミュニティに参加する</span>
        </a>
      </div>
    </div>
  );
};

export default JoinButton;