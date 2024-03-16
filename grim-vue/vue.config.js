const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // プロジェクトの公開パスを設定
  // GitHubリポジトリ名が`<repository>`の場合、`/`を`/<repository>/`に置き換えます。
  // 開発環境用のパブリックパス
  publicPath: process.env.NODE_ENV === 'production'
    ? '/GrimClickerTips/' // 本番環境用のパブリックパス
    : '/',

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
