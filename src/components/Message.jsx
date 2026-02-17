import React from 'react';
import trainImg from '../assets/train.png';

const Message = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden min-h-[80vh] flex items-center">
      
      {/* PC版のみ表示：背景の巨大な汽車 */}
      <div className="hidden md:flex absolute top-0 left-0 w-full h-full -z-20 items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-full max-w-md transform scale-150 translate-y-[20vh] -translate-x-[30vw]">
          <img 
            src={trainImg} 
            alt="Steam Train" 
            className="w-full object-contain drop-shadow-2xl grayscale brightness-125"
          />
        </div>
      </div>

      {/* テキストコンテンツ */}
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          
          {/* 左側：キャッチコピー ＆ スマホ版汽車 */}
          <div className="md:w-1/3 animate-fade-in relative w-full">
            
            {/* テキスト部分 */}
            <div className="space-y-6 relative z-10">
              <span className="text-gold-gradient font-sans font-bold tracking-widest text-xs border-b border-gold-400 pb-2 inline-block">
                OUR MESSAGE
              </span>
              
              {/* ▼▼▼ 修正：元のデザインを採用し、スマホバグ対策(transform-gpu等)を追加 ▼▼▼ */}
              {/* ※ bg-navy-00/10 を bg-navy-900/20 に修正し、より安定したすりガラスにしています */}
              <h2 
                className="text-3xl md:text-4xl font-serif text-white leading-tight drop-shadow-xl bg-navy-650/20 backdrop-blur-sm p-4 md:p-2 rounded-xl w-[120%] md:w-max -ml-2 md:ml-0 transform-gpu overflow-hidden"
                style={{ WebkitBackdropFilter: 'blur(4px)' }}
              >
                AIに仕事が<br />
                奪われる時代。<br />
                あなたは<br />
                どう生きますか？
              </h2>
            </div>

            {/* スマホ版のみ表示：見出しの右側に汽車を配置 */}
            <div className="flex md:hidden absolute right-[-5vw] bottom-0 w-[60%] sm:w-[45%] pointer-events-none -z-10 items-end">
              {/* 汽車の画像にも transform-gpu を追加して描画を安定化 */}
              <img 
                src={trainImg} 
                alt="Steam Train" 
                className="w-full object-contain grayscale brightness-125 drop-shadow-2xl transform-gpu"
              />
            </div>

          </div>

          {/* 右側：本文 */}
          <div className="w-full md:w-2/3 space-y-8 animate-fade-in delay-100">
            <div className="text-silver/90 leading-loose text-base font-sans space-y-6 text-justify bg-navy-900/60 p-8 rounded-lg backdrop-blur-md shadow-2xl">
              <p>
                「AIに仕事が奪われる」なんてニュースを、あなたはどんな気持ちで見ているだろうか。
              </p>
              <p>
                産業革命によって文明が急速に発展した19世紀。ハーバーボッシュ法により食糧生産に革命が起きた20世紀。そして、AIが急速に社会に浸透しつつある今。
              </p>
              <p>
                我々は、過去の革命に次ぐ「変化の時代」の真っ只中にいる。
                10年先の未来さえ想像できないこの世界で、社会に出る前の私たち学生は何を武器にすればいいのか。
              </p>
              <p>
                正解なんて誰も持っていない。<br />
                だからこそ私たちは集う。
              </p>
              
              {/* 強調メッセージ */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-gold-gradient font-bold text-xl font-serif tracking-wide drop-shadow-md whitespace-nowrap">
                  解のない問いに立ち向かう力を。<br />
                  ここにしかいない仲間と共に。
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Message;