let emojis = [];

export class EmojiManager {
  static getEmojiByKey(key) {
    return emojis[key];
  }
}

const buildEmojiList = () => {
  return {
    grass: '\u2747',
    // grass: '\uD83C\uDF3E',
    borderTree: '\uD83C\uDF32',
    faceSunglasses: '\uD83D\uDE0E',
  }
};

emojis = buildEmojiList();
