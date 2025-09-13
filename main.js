const { URL } = require('url');

// Константи для варіанту 1
const currency = "USD";
const date_from = "20220707";
const date_to = "20220719";

// Базовий URL
const myUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange");

// Додаємо параметри
myUrl.searchParams.append("valcode", currency);
myUrl.searchParams.append("start", date_from);
myUrl.searchParams.append("end", date_to);
myUrl.searchParams.append("json", "");

// Виводимо у консоль
console.log(myUrl.toString());