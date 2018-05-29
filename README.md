# Just Tweet Button

## Manual install
chrome->extension->developer modeにて，
```
パッケージ化されていない拡張機能を読み込む
```
でsrcディレクトリを指定

## Usage
onにしているとchromeのアドレスバー右に青い鳥が出る．そのボタンをクリックするか，あるいは`Ctrl+T`を押すと現在chromeで開いているページをツイートする画面が出る．
よくあるツイート連携とかと同じ仕組みで，ログイン等はしてないなら要求されるししてるならよしなにやってくれてる．

## Customize
src/manifest.jsonの以下部分を適当に変更するとショートカットの割当を任意に変更できる．他のextensionと衝突などしてしまったときに変えよう．
```javascript
commands": {
  "tweet": {
    "suggested_key": {
      "default": "Ctrl+T",
      "mac": "MacCtrl+T"
    },
    "description": "tweet current tab"
  }
},
```


## Publish

```console
$ make
```

It generates `just_tweet_button.zip` file.

Then upload it from https://chrome.google.com/webstore/developer/dashboard
