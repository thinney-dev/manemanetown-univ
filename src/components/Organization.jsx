import React, { useState } from 'react';
import oritoImg from '../assets/orito.png';

const Organization = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-10 px-6 relative overflow-hidden">
      
      {/* 上から下へ広がるうっすらとした白いフィルター */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* タグ */}
        <div className="mb-10 md:mb-16">
          <span className="text-gold-gradient font-sans font-bold tracking-widest text-xs border border-gold-400 px-3 py-1">
            TRUST & COMPANY
          </span>
        </div>

        <div className="flex flex-col gap-20 md:gap-32 items-start">
          
          {/* 上部：団体情報 */}
          <div className="space-y-8 animate-fade-in w-full md:max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              運営団体について
            </h2>
            
            <div className="bg-white/5 border border-white/10 p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              
              {/* 左側：THINNEY株式会社 */}
              <div className="flex flex-col justify-center">
                <span className="text-xs text-silver/50 tracking-widest block mb-2">OPERATED BY</span>
                <p className="text-2xl text-white font-serif">THINNEY株式会社</p>
              </div>
              
              {/* 右側：A.T. Kearney */}
              <div className="pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-8 flex flex-col justify-center">
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

          {/* 下部：ビジョン（代表の想い） */}
          <div className="space-y-8 animate-fade-in delay-100 w-full">
            
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              代表の想い
            </h2>
            
            <div className="space-y-8 md:max-w-4xl">
              
              {/* アイコンと名前エリア */}
              <div className="flex items-center gap-3 md:gap-6">
                <div className="w-16 h-16 md:w-24 md:h-24 flex-shrink-0 relative">
                  <div className="absolute inset-0 rounded-full border border-gold-400/30 animate-pulse"></div>
                  <img 
                    src={oritoImg} 
                    alt="代表" 
                    className="w-full h-full object-cover rounded-full border-2 border-gold-400/20"
                  />
                </div>
                <div className="border-l-4 border-gold-400 pl-3 md:pl-4 space-y-1 md:space-y-2">
                  <h3 className="text-[clamp(12px,3.5vw,20px)] md:text-xl text-white font-serif whitespace-nowrap">
                    自分らしく生きる人を増やす
                  </h3>
                  <p className="text-xs md:text-sm text-silver/60 tracking-widest font-serif">
                    織戸 弘暉　Koki Orito
                  </p>
                </div>
              </div>
              
              {/* テキストエリア */}
              <div className="text-silver/80 leading-loose text-justify font-sans text-sm md:text-base space-y-6 relative">
                
                {/* 常に表示される冒頭部分 */}
                <p>
                  なぜ、私はこの団体を立ち上げたのか。<br />
                  その原点は、私自身の強烈な過去にあります。
                </p>

                {/* 続きを読むボタンで展開される部分（PCでは常に表示） */}
                <div className={`transition-all duration-700 overflow-hidden ${isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'}`}>
                  <div className="space-y-6 pt-4">
                    <p>
                      私は母子家庭で育ち、さらには自分自身が詐欺に遭うというどん底の経験をしました。そこから痛感したのは、「お金の知識がないと、自分の人生すら守れない」という残酷な現実でした。この原体験から、私は金融教育事業『まねまねタウン』をスタートさせました。金融商品の販売などは一切行わない、徹底的に「ユーザー目線」を貫くプロダクトです。
                    </p>
                    <p>
                    <span className="text-white font-bold text-lg mx-1">【お金の教育行を始めた理由】</span><br />
                      背景には、先進国で金融リテラシーが最下位と言われる日本の現状があります。私たちは生きていくために毎日お金を使うにもかかわらず、これまでお金について学ぶ機会が完全に抜け落ちていました。しかし、生きる上で金融知識はもはや必須です。2020年から小中高の学習指導要領で金融教育が必修化された事実が、それを裏付けています。
                    </p>
                    <p>
                      まねまねタウンの根底にあるのは、「自分らしく生きる人を増やす」という弊社のミッションです。私たちはこのゴールから逆算し、論理的思考力やプレゼンテーション能力といった多様な非認知能力を身につけられる設計にしました。簡単に言えば、「チームで協力して、最後まで頑張り抜ける子」を育てています。
                    </p>
                    <p>
                      この活動を続ける中で、子どもたちは驚くべき成長を見せてくれました。<br />
                      小学生が自ら株式投資に興味を持ったり、自分の手の届く範囲で小さなビジネスを始めたりしているのです。たとえば、家にある家族の不用品を買い取り、メルカリで販売する。これは「仕入れ・加工（付加価値をつける）・販売」というビジネスの基本の「き」そのものです。今の新学習指導要領のもとで学ぶ子どもたちの中には、すでにこうしたビジネスの本質を実践できる子たちが確かに存在しています。
                    </p>
                    <p>
                      一方で、私は強い危機感を抱いています。<br />
                      それは、今の大学生たちの現状です。
                    </p>
                    <p>
                    <span className="text-white font-bold text-lg mx-1">【このコミュニティを始めた理由】</span><br />
                      皆さんは、金融教育が必修化される前の「旧学習指導要領」の世代です。それに加え、コロナ禍という未曾有の事態によって、対面でのコミュニケーションやプレゼンテーションの機会を理不尽に奪われてきました。<br />
                      人と深く話し、議論する機会が圧倒的に少なかったがゆえに、「本来ならもっと伸ばせるはずの才能」が眠ったままになっている人が大勢いるのです。
                    </p>
                    <p>
                      だからこそ、私たちは今回、大学生に向けた新たな団体を立ち上げました。
                    </p>
                    <p>
                      もちろん就活の圧倒的な武器になります。しかし、それ以上に私たちが大切にしたいこと守っていきたいことは「自分自身のキャリアを高め、自分を守るためのお金の教養、そして仕事を通じて日本経済を大きくしていくこと」を自らの手で掴み取ることです。<br />
                      活動内容は極めて実践的です。AIを活用したハッカソンや、実際の有価証券報告書を読み込んで行う本質的な企業分析など。個人として、そしてキャリアの一環として、いま自分たちにできる社会貢献を追求できる環境を用意しました。
                    </p>
                    <p>
                      人生において、仕事をする時間は膨大です。その時間が「ただ耐えるだけの楽しくない時間」であっていいはずがありません。仕事とは本来、プライベートと同じくらい熱狂でき、楽しいものであるべきです。<br />
                      そのためには、表面的な就活テクニックではなく、本質的な企業分析を通して「入社後のリアルなイメージ」を深く理解した上で社会に出る必要があります。私たちは、そのための機会も全力で創出していきます。
                    </p>
                    <p>
                      このプログラムは、大学生の皆さんは【完全無料】で参加できます。<br />
                      「自分らしく生きる人を増やす」という私たちのミッションを、これからの社会を創る大学生の皆さんにも展開したいと本気で考えているからです。
                    </p>
                    
                    {/* ▼▼▼ 修正：箇条書き部分を綺麗なリスト形式に変更しました ▼▼▼ */}
                    <div className="bg-navy-900/50 p-6 md:p-8 border-l-2 border-gold-400/50 rounded-r-lg my-8">
                      <ul className="text-white mb-6 leading-loose font-serif space-y-4">
                        <li className="flex items-start">
                          <span className="mr-2">・</span>
                          <span>このミッションに少しでも共感してくれた人。</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">・</span>
                          <span>自分たちにできることから社会貢献をしたい人。</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">・</span>
                          <span>圧倒的に成長して自分のキャリアに活かしたい人。</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">・</span>
                          <span>お金の教養を身につけ、自らの力で生きていくスキルを得たい人。</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">・</span>
                          <span>そして、ここで得たものをいつか日本社会に還元したいという熱い思いを持った人。</span>
                        </li>
                      </ul>
                      <p className="text-gold-gradient font-bold font-serif text-base md:text-lg">
                        そんなエネルギーを持った皆さんに、ぜひ来てほしいと願っています。
                      </p>
                    </div>

                    <p>
                      もちろん、ここでこのスキルを身に付ければ、あなたの今後の人生における選択肢は間違いなく無限に広がります。そしてその成長は、あなた自身を豊かにするだけでなく、これからの日本をアップデートしていく大きな力になるはずです。
                    </p>
                    <p className="text-white font-bold pb-4">
                      最高の環境は用意しました。<br />
                      あとは、あなたの「一歩を踏み出す決意」だけです。<br />
                      共に学び、共に成長し、一緒に社会を変える挑戦をしませんか？<br />
                      あなたにお会いできるのを、心から楽しみにしています。
                    </p>
                  </div>
                </div>

                {/* 続きを読む / 折りたたむ ボタン（スマホのみ） */}
                <div className={`md:hidden relative ${!isExpanded ? 'mt-[-40px] pt-[40px] bg-gradient-to-t from-black via-black/80 to-transparent' : 'mt-8'}`}>
                  <div className="text-center pb-2">
                    {!isExpanded ? (
                      <button 
                        onClick={() => setIsExpanded(true)}
                        className="text-gold-400 font-bold text-sm tracking-widest border border-gold-400/30 bg-navy-900/80 px-6 py-2 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.1)] hover:bg-gold-400 hover:text-navy-900 transition-all duration-300"
                      >
                        続きを読む
                      </button>
                    ) : (
                      <button 
                        onClick={() => setIsExpanded(false)}
                        className="text-silver/50 font-bold text-sm tracking-widest border-b border-silver/30 pb-1 hover:text-white transition duration-300"
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
      </div>
    </section>
  );
};

export default Organization;