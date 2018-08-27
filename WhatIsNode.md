#What is Node ?
## 概要
ChromeのV8 Javascriptエンジンで動作するJavascript環境．
言語ではない．

公式より，

> Nodeはスケーラブルなネットワークアプリケーションを構築するために設計された非同期型のイベント駆動のJavaScript環境です．

サーバーサイドでJavaScriptを動かすことを目的として作られたので，こういうことを言っている．

### スケーラブル？？

Nodeの関数はI/Oを直接実行しないため，プロセスをブロックすることがない．???

[Blocking vs Non-Blocking](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)

Node標準ライブラリのすべてのI/Oメソッドは非ブロッキングであり，コールバック関数を受け入れる非同期バージョンを提供する．

これによって問題は起きないの？



### イベントループモデル



### イベントドリブン

イベント駆動型のため，何も操作がないときは待機状態となる．