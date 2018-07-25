function a(inputStr) {
    let inventory = inputStr.shift().split(/\s+/gm);
    for (let commandItem of inputStr) {
        let commandTokens = commandItem.split(/\s+/gm);
        let command = commandTokens[0].toLowerCase();
        let item = commandTokens[1];
            switch (command) {
            case 'buy':
                if (!inventory.includes(item))
                    inventory.push(item);
                break;
            case 'trash':
                if (inventory.includes(item)) {
                    for (let i = 0; i < inventory.length; i++) {
                        if (inventory[i] === item)
                            inventory[i] = "";
                    }
                }
                inventory = inventory.filter(a => a.length > 0)
                break;
            case 'repair':
                if (inventory.includes(item)) {
                    for (let i = 0; i < inventory.length; i++) {
                        if (inventory[i] === item)
                            inventory[i] = "";
                    }
                }
                inventory = inventory.filter(a => a.length > 0)
                inventory.push(item);
                break;
            case 'upgrade':
                let upItem = item.split("-")[0];
                let upgrade = item.split("-")[1];
                if (inventory.includes(upItem)) {
                    for (let i = 0; i < inventory.length; i++) {
                        if(upItem == inventory[i]){
                            let invetoryToItem = inventory.splice(0,i+1);
                            invetoryToItem.push(`${upItem}:${upgrade}`);
                            inventory = invetoryToItem.concat(inventory);;
                        }
                    }
                }
                break;
            case'fight!':
                console.log(inventory.join(" "))
                break;
        }
    }
}

a(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel',
    'Fight!'])

a([ 'SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V',
    'Fight!' ]
)