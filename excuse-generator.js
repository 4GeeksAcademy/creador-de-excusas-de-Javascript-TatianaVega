const who = [
  "Mi perro",
  "Mi vecino",
  "Mi hermano",
  "Mi profesor",
  "Mi compañero"
];
const action = [
  "se comió",
    "rompió",
    "escondió",
    "perdió",
    "mojó"
];
const what = [
  "mi tarea",
  "mi boleto",
  "mi celular",
  "mi mochila",
  "mi proyecto"
];
const when = [
  "hoy",
  "ayer",
  "esta mañana",
  "anoche",
  "esta tarde"
];
const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];
const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
console.log(excuse);
