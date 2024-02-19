# Node.jsのベースイメージを指定
FROM node:14

# アプリケーションのワーキングディレクトリを設定
WORKDIR /usr/src/app

# アプリケーションの依存関係ファイルをコピー
COPY package*.json ./

# アプリケーションの依存関係をインストール
RUN npm install

# serveパッケージをグローバルにインストール
RUN npm install -g serve

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN npm run build

# ビルド成果物をコピー
COPY ./dist/ /usr/src/app/build/

# アプリケーションがリッスンするポートを指定
EXPOSE 8080

# アプリケーションを起動するコマンド
CMD ["serve", "-s", "build", "-l", "8080"]
