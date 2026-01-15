const sym1 = Symbol("id");
const sym2 = Symbol("token");

const obj = {
    10: "number-like key",
    2: "number-like key",
    100: "number-like key",
    "5": "string but integer-like",
    "02": "string key (not integer)",
    "name": "Alice",
    "age": 30,
    "!special": "special key",
    "Zkey": "capital letter",
    "akey": "normal string key",
    [sym1]: "symbol value 1",
    [sym2]: "symbol value 2"
};

console.log(obj);
