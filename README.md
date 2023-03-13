# MyProjects
I don't even know what I do here. I just put my random things. If you find anything useful, feel free to use it :)


## Lib.js
Lib.js is a file where users can generate custom villagers and have custom trades as they wish.


# Understanding the command

```js
function generateVillager(level, type, toReceive, toSend, Enchantments, Count, toSellCount)
```

------------

Level - The villager's level
Type - You can use default: 'plains'
toRceive - An array of item codes you want to send (What villager wants).
toSend  - An array of Item codes you want to receive.
Enchantments - An array of enchantments that you want to implement to each item.
Example: [[], [], [{name: 'unbreakin', level: 2}]] - This will add Unbreaking II enchantment to 3rd item from toSend array.
Count - An array of Counts that villager needs for trade.
toSellCount - Number of items you want to receive of that type

------------

### Example usage and explanation

```js

generateVillager(3, 'plains', ['stick', 'diamond_axe'], ['diamond', 'netherite_sword'], [[], [{name: "sharpness", level: 5}]], [2, 1], [64, 1]);
// Ok and what does this do?
// Let's take each parameter in order to explain what's going on
// 3 - It's villager's level.
// 'plains' - Villager's type
// ['stick', 'diamond_axe'] - Huh? What's this? Ok, let's get it straight. It's an array of items. Each item will create a new trade row, so for example, we will trade stick for first item in next array, and a diamond axe for second array in the next array and so on.
// ['diamond', 'netherite_sword'] - Same as above, but these, are what you want to receive.
// [[]. [{name: "sharpness", level: 5}]] - Enchantments. As we can see, we have an [] array. An array that contains two other arrays. An empty array ([]) and an array with an object ([{name: "sharpness", level: 5}]). This will add no enchantments to the diamond, because the array is empty, and a sharpness level 5 to the netherite sword. You can also add multiple enchantments. Like: [[{name: "sharpness", level: 5}, {name: "mending", level: 1}]]
// [2, 1] - Counts, the number of items you want to trade.
// [64, 1] - Counts, the number of items you want to receive 

// Long story short: You trade 2 sticks for 64 diamonds in first row, and 2 sticks for a sharpness level 5 netherite sword in 2nd row.
```
Example:

```js
generateVillager(3, 'plains', ['iron_sword', 'diamond_sword', 'netherite_sword', 'stick', 'emerald'], ['diamond_sword', 'netherite_sword', 'netherite_sword', 'crossbow', 'emerald_block'], [[], [], enchantments, [{ name: 'multishot', level: 1 }, { name: 'unbreaking', level: 3 }, { name: 'mending', level: 1 }, { name: 'piercing', level: 4 }, { name: 'quick_charge', level: 3 }], []], [1, 1, 1, 1, 1], [1, 1, 1, 1, 64])
// Generates a villager that trades a diamond sword for an iron sword, a netherite sword for a diamond sword, an enchanted netherite sword with all possible enchantments for a netherite sword, a crossbow enchanted for a stick and an emerald for 64 Emerald Blocks.
```

If you have any questions, join our support server: https://join.drake2.com/


