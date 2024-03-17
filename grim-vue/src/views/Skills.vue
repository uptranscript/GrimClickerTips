<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="image-container" style="position: relative; display: inline-block;">
          <!-- 画像を表示 -->
          <img :src="gameImage" alt="ゲームのスクリーンショット" class="responsive-image" />
          <!-- スキルの位置に応じたアイコン -->
          <template v-for="(skill, index) in skills" :key="`skill-${index}`">
            <v-img :src="skill.image" :alt="`スキル${index + 1}`" class="skill-image"
              :style="{ top: skill.top, left: skill.left }" @click="toggleDialog(index)">
            </v-img>
          </template>
          <!-- フローティングカード -->
          <v-card v-if="showDetail" class="floating-card" :style="{ top: `${detailTop}px`, left: `${detailLeft}px` }">
            <v-card-title>{{ selectedSkill.title }}</v-card-title>
            <v-card-text>
              <div v-for="(line, lineIndex) in selectedSkill.description.split('\n')" :key="`line-${selectedSkillIndex}-${lineIndex}`">
                <p :class="{ 'empty-line': line === '' }">{{ line || ' ' }}</p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text @click="showDetail = false">閉じる</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue';
import gameImage from '@/assets/game-image.jpg';
import { skills as importedSkills } from '@/assets/skills.js';

const skills = ref(importedSkills);
const selectedSkillIndex = ref(null);
const showDetail = ref(false);
const detailTop = ref(0);
const detailLeft = ref(0);

const toggleDialog = (index) => {
  selectedSkillIndex.value = index;
  showDetail.value = !showDetail.value;
  // ここでフローティングカードの位置を調整するロジックを追加
};

const selectedSkill = computed(() => {
  return skills.value[selectedSkillIndex.value] || { title: '', description: '' };
});
</script>

<style>
.responsive-image {
  width: 100%;
  height: auto;
}

.skill-image {
  position: absolute;
  width: 8%;
  height: 8%;
}

.floating-card {
  position: absolute;
  z-index: 10; /* 必要に応じて調整 */
  /* ここにその他のスタイルを追加 */
}
</style>
