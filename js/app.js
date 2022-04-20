$("#search").on("click", function () {
  let t = $("#tango").val();
  // match は直接変数埋め込めないので変化させる
  let reg = new RegExp(t + "(.*?)", "g");
  // console.log(reg, "検索元単語");
  // console.log('検索元単語');

  // .replace(/\s+/g, "").trim(); 空白、改行等を削除
  let word = $("#word").val().replace(/\s+/g, "").trim();
  console.log(word);

  // 文章中に単語があるか検索する　matchは使い方を調べましょう！
  const check = word.match(reg);
  console.log(check, "単語");

  let s = word.replace(reg, `<span>${t}</span>`);
  console.log(s, "ss");

  // 単語が見つかった時とそうでないときで条件分け
  if (check) {
    $("body").append(
      `<div>
				<h1>お探しの単語は<span class="red">${check.length}</span>箇所みつかりました</h1>
				<div class="result">${s}</div>
				</div>
			`
    );
  } else {
    $("body").append(`<h1>お探しの単語はみつかりませんでした！</h1>`);
  }
});

// ## メモ
// コンソールログを使う
// 複数検索、単語で調べる
// 正規表現をチェックする
// 空白、改行のチェックも考える

// など、調べてみると良いと思います🤗
// ※今回は直接質問いただいているので、お答えしていますが、基本はみなさま同士で解決を進めていくことがおすすめです🤗
// 考えることに意味があるからです！！！！
