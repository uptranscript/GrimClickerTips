// skills.js

// STRENGTH
import rageOfDarkness from './strength/rage_of_darkness.png';
import bloodthirstiness from './strength/bloodthirstiness.png';
import maskOfFire from './strength/mask_of_fire.png';


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
        top: '19.5%', left: '31.5%', image: maskOfFire, title: 'MASK OF FIRE',
        description: 'スキル2の説明'
    },

    // 他のスキルも同様に追加
];
