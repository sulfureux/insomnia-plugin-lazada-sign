# Insomnia Plugin for Lazada sign request

You are confusing with `sign` param require by APIs of Lazada? This plugins will help you.

This package will auto detect and fill your `query` which required by API of Lazada when you send a request to APIs of Lazada (`app_key`, `sign_method`, `sign`, `timestamp`).

## Install

- Open your __Insomnia__
- Press `command + ,`
- Switch to `Plugins` tab
- Type `insomnia-plugin-lazada-sign` at `npm-package-name`

Or install with `git`

```bash
git clone https://github.com/sulfureux/insomnia-plugin-lazada-sign ~/Library/Application\ Support/Insomnia/plugins/insomnia-plugin-lazada-sign
```

![Install Insomnia Plugin for Lazada sign request](https://i.imgur.com/OQ18bYT.png)


### Setup your environment

Add to your environment of your Insomnia workspace:

```json
{
  "lazada_app_key": 10000,
  "lazada_app_secret": "your app secret key",
}
```

_bonus: it also auto add `access_token` if you set `access_token` at your enviroment._

![Setup your environment at Insomnia Plugin for Lazada sign request](https://i.imgur.com/N5A0JBs.png)

## License

Of course, license of this repo is [MIT](/LICENSE).

## Cooperate

Contact me at email pierreneter@gmail.com for cooperate.
