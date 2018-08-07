# Mastodon keybase proof alternative

2018.08.02

**Update 2018.08.07: Added optional pinned toot section**

A couple of months ago I wrote up an article on [Mastodon Keybase Proof](/posts/mastodon-keybase-proof.html) that explained how to set up a [Mastodon](https://joinmastodon.org) proof on [Keybase](https://keybase.io).

Since then, I've looked further into the alternative version I've seen around, which is to post a signed and encrypted message in the toot that can be directly verifyed with **keybase verify** in the command line. I like this option better, as it is easier to check the proof than the other one, in my opinion.

## Signing the message


Via the command line with the keybase cli you can use **keybase sign** to create a saltpack signed message that you can post to Mastodon, like so:

```
keybase sign -m "I am @0x4464@tiny.tilde.website"
```

This will return something like this:

```
BEGIN KEYBASE SALTPACK SIGNED MESSAGE. kXR7VktZdyH7rvq v5weRa0zkUyw3D9 mqfbVNdS9QDfUFc TIjGoQrGAwHMP83 3zU2vXvGaXUYErH 9WnF9NA1VEyAbVe OlZwpnrlTDgR85h Xjm713lA7yA9XAR X9dgHmbrZ4C7VAk R0azpm0VauA8W06 lAU8N6WFiMfVghR JiGxbxEa6u0bhqG tJNqwakC9y50zD6 Y9sa0Inc5TWIppx gajLw0ZrqDgjyHv 4Q1. END KEYBASE SALTPACK SIGNED MESSAGE.
```

# Tooting the message

You can then post it to Mastodon. I like this format for the toot:

```
Verifying myself: I am 0x4464 on Keybase.io.

BEGIN KEYBASE SALTPACK SIGNED MESSAGE. kXR7VktZdyH7rvq v5weRa0zkUyw3D9 mqfbVNdS9QDfUFc TIjGoQrGAwHMP83 3zU2vXvGaXUYErH 9WnF9NA1VEyAbVe OlZwpnrlTDgR85h Xjm713lA7yA9XAR X9dgHmbrZ4C7VAk R0azpm0VauA8W06 lAU8N6WFiMfVghR JiGxbxEa6u0bhqG tJNqwakC9y50zD6 Y9sa0Inc5TWIppx gajLw0ZrqDgjyHv 4Q1. END KEYBASE SALTPACK SIGNED MESSAGE.

#keybase 
```

I would suggest pinning the toot to your profile so users can see that first when landing on your account.

## Adding verify info to keybase file system

You should now add a file to your public keybase file system. I created a file under **proofs/mastodon.txt**. Since I have multiple accounts. I added all of them to the file. Here is the format I used:

```
You can verify that I am the following accounts on Mastodon:

@0x4464@tiny.tilde.website
Proof: https://tiny.tilde.website/@0x4464/100481806915663385
Verify: keybase verify -m "BEGIN KEYBASE SALTPACK SIGNED MESSAGE. kXR7VktZdyH7rvq v5weRa0zkUyw3D9 mqfbVNdS9QDfUFc TIjGoQrGAwHMP83 3zU2vXvGaXUYErH 9WnF9NA1VEyAbVe OlZwpnrlTDgR85h Xjm713lA7yA9XAR X9dgHmbrZ4C7VAk R0azpm0VauA8W06 lAU8N6WFiMfVghR JiGxbxEa6u0bhqG tJNqwakC9y50zD6 Y9sa0Inc5TWIppx gajLw0ZrqDgjyHv 4Q1. END KEYBASE SALTPACK SIGNED MESSAGE."

@0x4464@infosec.exchange
Proof: https://infosec.exchange/@0x4464/100481819565083473
Verify: keybase verify -m "BEGIN KEYBASE SALTPACK SIGNED MESSAGE. kXR7VktZdyH7rvq v5weRa0zkUyw3D9 mqfbVNdS9QDfUFc TIjGoQrGAwHMP83 3zU2vXvGaXRnu4E BjFRtkTKZEaHDdY 5Fl3FFtefJOndNo X5bc0aFZNPeRzGx y4vUA9ySWPMEYeK 6izX2JeqlFSiVNR yETleImiSJShrgw isHRjIw17JMddvQ J5KYKiGKpH1TF3L 5XD71J8lwulHCdV 9pOTd2VCNGOZqYn . END KEYBASE SALTPACK SIGNED MESSAGE."

@0x4464@cybre.space
Proof: https://cybre.space/@0x4464/100481813823883732
Verify: keybase verify -m "BEGIN KEYBASE SALTPACK SIGNED MESSAGE. kXR7VktZdyH7rvq v5weRa0zkUyw3D9 mqfbVNdS9QDfUFc TIjGoQrGAwHMP83 3zU2vXvGaXpPFWh J5R73uCxwAYDZ8y d9RaQS7vBnLzzQN ieG1fyQmFtBFLdW wM0fVq2no1TxU81 DuauER5IV3oCFXU UPNhnCoXOdqjf05 2h99SUPrfKD2kCO eKpNGA0RT2Ne7kN cl5TqSGbAwiweNw gIVgf6cP. END KEYBASE SALTPACK SIGNED MESSAGE."

@0x4464@mstdn.jp
Proof: https://mstdn.jp/@0x4464/100481822871577280
Verify: keybase verify -m "BEGIN KEYBASE SALTPACK SIGNED MESSAGE. kXR7VktZdyH7rvq v5weRa0zkUyw3D9 mqfbVNdS9QDfUFc TIjGoQrGAwHMP83 3zU2vXvGaYh58aK q07aZWVdhW5JekT c39OkZy5VUUNmGC KI6T2xBNLKwSTsE XzMQqL0QJvcwpMD O3sDJ4pk7y5JPer cJ2Gd1ETyI8IPxM nTiOjhFCYi20CwC nFvONyu6wUWsxor UgyyRFJCpkYc1qq dYo4. END KEYBASE SALTPACK SIGNED MESSAGE."
```

You can see my copy of the proof file over on my [public keybase file system](https://keybase.pub/0x4464/proofs/mastodon.txt).

As a reference, here are links to my proof toots on various instances:

* [@0x4464@tiny.tilde.website](https://tiny.tilde.website/@0x4464/100481806915663385)
* [@0x4464@infosec.exchange](https://infosec.exchange/@0x4464/100481819565083473)
* [@0x4464@cybre.space](https://cybre.space/@0x4464/100481813823883732)
* [@0x4464@mstdn.jp](https://mstdn.jp/@0x4464/100481822871577280)

# Optional pinned toot

I got this idea from [@4n47xt@mastodon.social](https://mastodon.social/@4n47xt).

Instead of just pinning the keybase proof toot, you can write another toot that links to both the proof toot and the keybase pub txt file. It could be written up however, but this is the format I've adopted:

```
I am 0x4464 on #keybase and @0x4464@tiny.tilde.website

Proof:
https://tiny.tilde.website/@0x4464/100481806915663385

How to verify:
https://keybase.pub/0x4464/proofs/mastodon.txt
```

I find this to be more readable and informative for users, instead of an ecrytped string. You can see my [pinned toot](https://tiny.tilde.website/@0x4464/100509624672352373) here: 

<iframe src="https://tiny.tilde.website/@0x4464/100509624672352373/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400"></iframe><script src="https://tiny.tilde.website/embed.js" async="async"></script>

I hope this helps someone who is unsure how to do something like this. Feel free to reach out to me on [Mastodon](https://tiny.tilde.website/@0x4464) if you have any questions.