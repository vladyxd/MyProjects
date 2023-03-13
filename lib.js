const mainCmd = `summon villager ~ ~1 ~ {VillagerData:{profession:"minecraft:librarian",level:2,type:plains},Offers:{Recipes:[{buy:{id:"minecraft:stick",Count:1},sell:{id:"minecraft:enchanted_book",Count:1,tag:{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:3}]}}},{buy:{id:"minecraft:stick",Count:1},sell:{id:"minecraft:enchanted_book",Count:1,tag:{StoredEnchantments:[{id:"minecraft:respiration",lvl:3}]}}},{buy:{id:"minecraft:stick",Count:1},sell:{id:"minecraft:enchanted_book",Count:1,tag:{StoredEnchantments:[{id:"minecraft:multishot",lvl:1}]}}},{buy:{id:"minecraft:stick",Count:1},sell:{id:"minecraft:enchanted_book",Count:1,tag:{StoredEnchantments:[{id:"minecraft:channeling",lvl:1}]}}},{buy:{id:"minecraft:stick",Count:1},sell:{id:"minecraft:enchanted_book",Count:1,tag:{StoredEnchantments:[{id:"minecraft:riptide",lvl:3}]}}}]}}`;

const coordinates = {
    'x': `69`,
    'y': `65`,
    'z': `83`
};

let generatedCommand = `execute as @p run summon villager ${coordinates['x']} ${coordinates['y']} ${coordinates['z']} `;
function generateVillager(level, type, toReceive, toSend, Enchantments, Count, toSellCount) {
    let generatedReceipt = [];

    for (let i = 0; i < toReceive.length; i++) {
        let sellItem = { id: toSend[i], Count: toSellCount[i] };

        if (Enchantments[i] && Enchantments[i].length > 0) {
            let enchantmentsTag = { Enchantments: [] };
            for (let j = 0; j < Enchantments[i].length; j++) {
                enchantmentsTag.Enchantments.push({ id: Enchantments[i][j].name, lvl: Enchantments[i][j].level });
            }
            if (!sellItem.tag) {
                sellItem.tag = {};
            }
            sellItem.tag.Enchantments = enchantmentsTag.Enchantments;
        }

        generatedReceipt.push({ buy: { id: toReceive[i], Count: Count[i] }, sell: sellItem });
    }

    let data = {
        level: level,
        type: type,
        toReceive: toReceive,
        toSend: toSend,
        Enchantment: Enchantments,
        Count: Count,
        toSellCount: toSellCount,
        text: generatedCommand.concat(`{VillagerData:{profession:"minecraft:librarian",level:${level},type:"${type}"},Offers:{Recipes:${JSON.stringify(generatedReceipt)}}}`)
    };

    return data;
}


const enchantments = [
    { name: 'aqua_affinity', level: 1 },
    { name: 'bane_of_arthropods', level: 5 },
    { name: 'binding_curse', level: 1 },
    { name: 'blast_protection', level: 4 },
    { name: 'channeling', level: 1 },
    { name: 'curse_of_binding', level: 1 },
    { name: 'curse_of_vanishing', level: 1 },
    { name: 'depth_strider', level: 3 },
    { name: 'efficiency', level: 5 },
    { name: 'feather_falling', level: 4 },
    { name: 'fire_aspect', level: 2 },
    { name: 'fire_protection', level: 4 },
    { name: 'flame', level: 1 },
    { name: 'fortune', level: 3 },
    { name: 'frost_walker', level: 2 },
    { name: 'impaling', level: 5 },
    { name: 'infinity', level: 1 },
    { name: 'knockback', level: 2 },
    { name: 'looting', level: 3 },
    { name: 'loyalty', level: 3 },
    { name: 'luck_of_the_sea', level: 3 },
    { name: 'lure', level: 3 },
    { name: 'mending', level: 1 },
    { name: 'multishot', level: 1 },
    { name: 'piercing', level: 4 },
    { name: 'power', level: 5 },
    { name: 'projectile_protection', level: 4 },
    { name: 'protection', level: 4 },
    { name: 'punch', level: 2 },
    { name: 'quick_charge', level: 3 },
    { name: 'respiration', level: 3 },
    { name: 'riptide', level: 3 },
    { name: 'sharpness', level: 5 },
    { name: 'silk_touch', level: 1 },
    { name: 'smite', level: 5 },
    { name: 'soul_speed', level: 3 },
    { name: 'sweeping', level: 3 },
    { name: 'thorns', level: 3 },
    { name: 'unbreaking', level: 3 }
];
const { execSync } = require('child_process');

function copyToClipboard(text) {
    if (process.platform === 'darwin') {
        execSync(`echo "${text}" | pbcopy`);
    } else if (process.platform === 'win32') {
        execSync(`echo ${text}| clip`);
    } else if (process.platform === 'linux') {
        execSync(`echo "${text}" | xclip -sel clip`);
    }
}
let z = generateVillager(3, 'plains', ['iron_sword', 'diamond_sword', 'netherite_sword', 'stick', 'emerald'], ['diamond_sword', 'netherite_sword', 'netherite_sword', 'crossbow', 'emerald_block'], [[], [], enchantments, [{ name: 'multishot', level: 1 }, { name: 'unbreaking', level: 3 }, { name: 'mending', level: 1 }, { name: 'piercing', level: 4 }, { name: 'quick_charge', level: 3 }], []], [1, 1, 1, 1, 1], [1, 1, 1, 1, 64])
copyToClipboard(z.text)
let output = z
function formatItemName(name) {
    return name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log('\x1b[36m%s\x1b[0m', 'Copied this command to clipboard. This command gives: ');
for (let i = 0; i < output.toReceive.length; i++) {
    const from = formatItemName(output.toReceive[i]);
    const to = formatItemName(output.toSend[i]);
    console.log('\x1b[32m\x1b[48m%s\x1b[0m', `- ${from} (x${output.Count[i]}) for ${to} (x${output.toSellCount[i]}) ${output.Enchantment[i] == undefined ? '' : output.Enchantment[i].map(e => 'x' + output.Enchantment[i].length + ' ( ' + formatItemName(e.name) + ' - Level: ' + e.level + ')').join(', ')}\n\n`);
}

const prompt = require('prompt-sync')();

console.log('Want to see command?');
const name = prompt('> ');

if (name.toLowerCase() == "y" || name.toLowerCase() == 'yes' || name == 'true') {
    return console.log('\x1b[35m%s\x1b[0m', output.text)
}
else {
    return console.log('Okay.');
}