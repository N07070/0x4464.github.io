# Mastodon keybase proof

2018.06.05

**Update 2018.08.02: I have written up an [alternative way of doing Mastodon proofs](/posts/mastodon-keybase-proof-alt.html) which I find to be a better option, and will be using myself. Both options are valid, so it's just a matter of opinion.**

Since [Keybase](https://keybase.io) doesn't have [Mastodon](https://joinmastodon.org) support, I went ahead and made a proof of my own. This isn't really detailed anywhere, so I decided to write up a little explaination of what I did.

This wasn't an original idea of mine and is based on [@00dani@glitch.social](https://glitch.social/@00dani)'s Mastodon proof ([toot](https://glitch.social/@00dani/329738) and [proof](https://00dani.keybase.pub/proofs/glitch.txt)).

The general concept here is to use your PGP key to sign a message that states who you are on Mastodon and Keybase, host a copy of the file in your public keybase filesystem, and toot a link and SHA512 hash for the file on Mastodon.

## Signing the message

The first thing you want to do is go to the Keybase website and click **sign** on the top (the little pencil icon).

In the message box, you will want to add something to this effect (modified with your account information):

```
I hereby claim:

* I am @0x4464@infosec.exchange
* I am 0x4464 (https://keybase.io/0x4464) on keybase.
* I have a public key whose fingerprint is:
  DDFE FA65 2466 206A 8145 D639 2543 1DA0 BF80 9063

To claim this, I am signing this message with my public key. Then I will prove
ownership of @0x4464@infosec.exchange by posting this document's
publicly-accessible URL - https://0x4464.keybase.pub/proofs/mastodon.txt - as a
toot on @0x4464@infosec.exchange, accompanied by its SHA-512 hash.
```

When you put in your passphrase and click **Sign** it will output the signed version of the message. Copy the contents of the output box.

## Creating the public file

Open the Keybase app on your computer and click **Files** on the left-hand navigation. Hover over **public**, click the three dots that appear to the right and click **Show in Explorer** to open up the folder. For some reason this didn't work for me while writing this article, but you can go find your keybase filesystem wherever it was mounted (on Windows it's the **K:\\** drive).

Create a new directory in the **public/USERNAME/** directory called **proofs**, and create a new file in that directory called **mastodon.txt**. Paste the signed message into that file and save.

Your newly created file should now be publicly available at **USERNAME.keybase.pub/proofs/mastodon.txt**. You can find my proof at [https://0x4464.keybase.pub/proofs/mastodon.txt](https://0x4464.keybase.pub/proofs/mastodon.txt).

## Getting the SHA512 hash of the file

There are many ways to get the SHA512 for a file, including some online tools. I'm running Windows, so I used Powershell, which I will explain here.

Open up a new Powershell and change into the proofs directory with the following command:

```
cd K:\public\USERNAME\proofs\
```

You can then get the SHA512 hash with this command:

```
Get-FileHash -Algorithm SHA512 .\mastodon.txt | Format-List
```

This will output something like this:

```
Algorithm : SHA512
Hash      : A6BBE76504488858D97E3AD6416DA335C7ADB4FCB2746EE4CC1326E57F6F2B2A96F4835D086C67D8274D7AAA279397D5362B24FD3BD3744D1CF355C66A99CCED
Path      : K:\public\0x4464\proofs\mastodon.txt
```

## Tooting your proof

Copy the hash (in my example it's the part that starts with A6BBE7 and ends with 99CCED, yours will be different), and post a toot in this format (swap out your hash and username):

```
Verifying myself: I am 0x4464 on Keybase.io.

A6BBE76504488858D97E3AD6416DA335C7ADB4FCB2746EE4CC1326E57F6F2B2A96F4835D086C67D8274D7AAA279397D5362B24FD3BD3744D1CF355C66A99CCED

https://0x4464.keybase.pub/proofs/mastodon.txt

#keybase
```

This is what my Keybase proof toot looks like:

<iframe src="https://infosec.exchange/@0x4464/100153255511196605/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400"></iframe><script src="https://infosec.exchange/embed.js" async="async"></script>

I would suggest pinning the toot to your profile so users can see that first when landing on your account.

I hope this helps someone who is unsure how to do something like this. Feel free to reach out to me on [Mastodon](https://infosec.exchange/@0x4464) if you have any questions.