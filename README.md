# ETC利用実績

[ETCの利用照会サービス](https://www.etc-meisai.jp/)は、定期的にログインしないと、アカウントを無効化される。

定期的にログインを自動実行で走らせる

# ログイン


```sh
bin/etc-meisai-login.js USER_ID PASSWORD
```

ETC利用明細（利用実績）は定期的にログインしないとIDを無効化される。

お盆・正月（夏休み冬休みなど）年に数回しかないログインだと、IDは確実に無効化されるだろう。


# ETCマイレージサービス

```shell
bin/etc-points-login.js USER_ID PASSWORD
```

ETC利用明細とETCマイレージサービス（ポイントサービス）は別IDが必要。

マイレージと明細のID申請は個別に行う必要がある。

マイレージ登録には車載器IDとETCカードをペアにして申請する必要がある。


