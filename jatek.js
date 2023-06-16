// Kitalálós szám játék

// Véletlenszerű szám generálása 1 és 100 között
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Játék indítása
alert("Üdvözlöm! Gondoltam egy számra 1 és 100 között. Próbálja meg kitalálni!");

let guess;
let attempts = 0;

// Fő játék ciklus
do {
  // Kérjük be a tippelt számot
  guess = parseInt(prompt("Kérjük, adjon meg egy számot:"));

  // Ellenőrzés és visszajelzés
  if (isNaN(guess)) {
    alert("Hibás bemenet! Kérjük, adjon meg egy érvényes számot.");
  } else {
    attempts++;

    if (guess === targetNumber) {
      alert("Gratulálok! Kitaláltad a számot " + attempts + " próbálkozás után!");
    } else if (guess < targetNumber) {
      alert("A gondolt szám nagyobb!");
    } else {
      alert("A gondolt szám kisebb!");
    }
  }
} while (guess !== targetNumber);

// Játék vége
alert("Köszönöm a játékot! Viszlát!");