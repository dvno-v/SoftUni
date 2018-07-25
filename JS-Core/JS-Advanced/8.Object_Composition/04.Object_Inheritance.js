function solve(commandsArr) {
    let inheritor = (function () {
        let objects = new Map();

        function create(name, param, parent) {
            parent = parent ? objects.get(parent) : null;
            let newObject = Object.create((parent));
            objects.set(name, newObject)
        }

        function set(name, key, value) {
            let currentObj = objects.get(name);
            currentObj[key] = value;
        }

        function print(objectName) {
            let props = [];
            let currentObj = objects.get(objectName);
            for (let key in  currentObj ) {
                props.push(`${key}:${currentObj[key]}`);
            }
            console.log(props.join(", "))
        }

        return {
            create: create,
            set: set,
            print: print
        }
    })();
    for (let commandAndValue of commandsArr) {
        let [command, name, key, value] = commandAndValue.split(" ");
        inheritor[command](name, key, value);
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)