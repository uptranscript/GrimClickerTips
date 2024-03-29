// skills.js

// STRENGTH
import rageOfDarkness from './strength/rage_of_darkness.png';
import bloodthirstiness from './strength/bloodthirstiness.png';
import maskOfFire from './strength/mask_of_fire.png';
import flameFlow from './strength/flame_flow.png';


export const skills = [
    {
        top: '14%', left: '12%', image: rageOfDarkness, title: 'RAGE OF DARKNESS',
        description: `このスキルによるクリックは無料ではありません。
        通常のマウスクリックと同様に、各クリックには1エネルギーが消費されます。これは1秒あたり10エネルギーを消費することを意味します。

        通常のクリックと同様に、このスキルからのオートクリックはキャラクターの加速を促進し、攻撃速度と移動速度を増加させます。
        オートクリックは画面上のランダムな場所で行われるため、生き物（コウモリ、ホタルなど）、篝火や神殿を集めるチャンスがあります。

        説明では「物理的」ダメージの増加について言及されていますが、実際には総ダメージを増加させます。
        なぜなら、現時点でゲームはダメージをタイプ別に分けていないからです。ダメージタイプのすべての説明は現在純粋に装飾的なものです。`
    },
    {
        top: '24%', left: '12%', image: bloodthirstiness, title: 'BLOODTHIRSTINESS',
        description: 
        `このスキルは、敵を倒したりコウモリを集めることでエネルギーを回復します。
        非常に状況に依存するスキルであり、エネルギー回復手段としてはそれほど効果的ではありません。
        ある時点で、敵を倒す前にエネルギーが尽きてしまったり、近くにコウモリがいない場合があります。

        レベルアップ時 敵を倒すと（1+N）エネルギーを回復し、どんなコウモリを集めても（1+N）*20のエネルギーを回復します（ここで「N」はスキルレベルを指します）。`
        // description: 'このスキルは、敵を倒したりコウモリを集めることでエネルギーを回復します。'
    },
    {
        top: '19.5%', left: '22.5%', image: flameFlow, title: 'Flame Flow',
        description: `Xは総ダメージの1500%（ダメージ乗数x15）に等しいようです。スキルレベルの増加は火の流れの数だけを増やします。
        しかし、スキルレベルがどれだけ大きくても、視覚的には5つの流れ以上になることはありません。
        最大範囲は非常に近くに立っている5体の敵です（敵が広いモデルを持っている場合 - ゴーレム、狼、チャンピオンなど - は5体未満です）。
        しかし、同時に、最初の流れは5体の敵全てにダメージを与え、2番目は4体のみ、3番目は3体、4番目は2体、そして5番目は1体の敵にのみダメージを与えます。

        パッチ0.66では、スキルの説明にわずかな変更がありました。スキルが単一の火の流れを作らない場合、説明に「火の流れはFLASHによってブロックされました」という警告文が表示されるようになりました。
        さらに、スキルが単一の流れも与えない場合、スキルパネル上のそのアイコンは非アクティブになり、上に赤い「Flash」アイコンが表示されます。
        この警告は、「フレイムフロー」と「フラッシュ」スキルの相互作用によって引き起こされる誤解を減らすことを目的としています：
        「フラッシュ」は「フレイムフロー」のマナコストを減らしますが、同時に火の流れの量を減らします。

        一方で、これは良いことです：人々は実際に「フラッシュ」スキルのせいで火の流れの数が減る事実に注意を払わないことがよくあります。
        一方で、「フラッシュ」と「フレイムフロー」のレベルが0のときでも警告サインが表示されます。そしてこれは混乱を増大させるだけです。

        レベルアップ時：火の流れの数を1つ増加します（しかし視覚的には5つの流れ以上になることはありません）。`
    },
    {
        top: '19.5%', left: '31.5%', image: maskOfFire, title: 'MASK OF FIRE',
        description: 'スキル2の説明'
    },

    // 他のスキルも同様に追加
];
