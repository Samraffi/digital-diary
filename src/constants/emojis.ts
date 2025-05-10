interface EmojiData {
  emoji: string;
  keywords: string[];
}

interface EmojiCategories {
  [key: string]: EmojiData[];
}

export const EMOJI_CATEGORIES: EmojiCategories = {
  "Смайлики": [
    { emoji: "😊", keywords: ["улыбка", "радость", "счастье"] },
    { emoji: "😂", keywords: ["смех", "радость", "веселье"] },
    { emoji: "🥰", keywords: ["любовь", "счастье", "нежность"] },
    { emoji: "😎", keywords: ["крутой", "солнце", "уверенность"] },
    { emoji: "🤔", keywords: ["думать", "размышление", "сомнение"] }
  ],
  "Животные": [
    { emoji: "🐶", keywords: ["собака", "щенок", "питомец"] },
    { emoji: "🐱", keywords: ["кот", "кошка", "котенок"] },
    { emoji: "🦊", keywords: ["лиса", "хитрость", "рыжий"] },
    { emoji: "🦁", keywords: ["лев", "король", "сила"] },
    { emoji: "🐼", keywords: ["панда", "медведь", "милый"] }
  ],
  "Природа": [
    { emoji: "🌸", keywords: ["цветок", "весна", "красота"] },
    { emoji: "🌺", keywords: ["цветок", "гибискус", "тропики"] },
    { emoji: "🌳", keywords: ["дерево", "природа", "лес"] },
    { emoji: "🌞", keywords: ["солнце", "лето", "тепло"] },
    { emoji: "⭐", keywords: ["звезда", "ночь", "сияние"] }
  ],
  "Еда": [
    { emoji: "🍎", keywords: ["яблоко", "фрукт", "еда"] },
    { emoji: "🍕", keywords: ["пицца", "еда", "фастфуд"] },
    { emoji: "🍦", keywords: ["мороженое", "десерт", "сладкое"] },
    { emoji: "🍪", keywords: ["печенье", "десерт", "выпечка"] },
    { emoji: "🍫", keywords: ["шоколад", "сладость", "десерт"] }
  ],
  "Сердца": [
    { emoji: "❤️", keywords: ["сердце", "любовь", "красный"] },
    { emoji: "💚", keywords: ["сердце", "зеленый", "любовь"] },
    { emoji: "💙", keywords: ["сердце", "синий", "любовь"] },
    { emoji: "💜", keywords: ["сердце", "фиолетовый", "любовь"] },
    { emoji: "🧡", keywords: ["сердце", "оранжевый", "любовь"] }
  ],
  "Символы": [
    { emoji: "✨", keywords: ["искры", "блеск", "магия"] },
    { emoji: "💫", keywords: ["звезда", "головокружение", "магия"] },
    { emoji: "⚡", keywords: ["молния", "энергия", "сила"] },
    { emoji: "💥", keywords: ["взрыв", "столкновение", "удар"] },
    { emoji: "🎯", keywords: ["цель", "точность", "дартс"] }
  ]
};

// Для обратной совместимости
export const COMMON_EMOJIS = Object.values(EMOJI_CATEGORIES)
  .flat()
  .map(data => data.emoji);
