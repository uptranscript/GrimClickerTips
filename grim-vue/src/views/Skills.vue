<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="image-container" style="position: relative; display: inline-block;">
          <!-- 画像を表示 -->
          <img :src="gameImage" alt="ゲームのスクリーンショット" class="responsive-image" />
          <!-- スキルの位置に応じたツールチップ -->
          <template v-for="(skill, index) in skills" :key="`skill-${index}`">
            <v-img :src="skill.image" :alt="`スキル${index + 1}`" class="skill-image"
              :style="{ top: skill.top, left: skill.left }">
              <v-tooltip activator="parent" location="bottom">
                <h2>{{ skill.title }}</h2>
                <div v-for="(line, lineIndex) in skill.description.split('\n')" :key="`line-${index}-${lineIndex}`">
                  <p v-if="line">{{ line }}</p>
                </div>
              </v-tooltip>
            </v-img>
          </template>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import gameImage from '@/assets/game-image.jpg';
import { skills as importedSkills } from '@/assets/skills.js'; // スキルデータのインポート

const skills = ref(importedSkills);


</script>

<style>
.responsive-image {
  width: 100%;
  /* 画像がコンテナの幅に応じてリサイズされるようにする */
  height: auto;
  /* 画像の高さを自動調整してアスペクト比を保持 */
}

.skill-point {
  position: absolute;
  width: 5%;
  height: 5%;
  background-color: rgba(255, 255, 255, 0.5);
  /* 視認性のための背景色、必要に応じて調整 */
  border-radius: 50%;
  cursor: pointer;
}

.skill-image {
  position: absolute;
  /* ゲーム画像に対する相対位置で配置 */
  width: 8%;
  height: 8%;
  /* 必要に応じて、widthとheightでサイズを調整 */
}
</style>