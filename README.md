**Zadanie JS – Znalezienie największej liczby**

Projekt w JS z uzyciem TS w celu kontrolowania typów danych. W pierwszej kolejności generuję tablicę obiektów Item z losowymi liczbami w polu name zapisanymi jako typ string - zbudowanie danych do analizy w oparciu o klasę Item za pomocą funkcji seed(). Potem wyznaczam największą liczbę analizując zawattość tablicy zwracając ją jako typ number lub zwracając 0 jeśli żadna pozycja nie zawiera liczby.

**Struktura projektu**
.
|- dist/ - kod js po kompilacji (tsc w oparciu o obiekt konfiguracyjny w tsconfig.json)
|- lib/
   |- types.ts - typy TypeScript: Item, Items 
|─ vendors/
   |- seed.ts - funkcja seed() generująca losowe obiekty Item w tablicy
|─ index.ts - główny plik uruchamiający funkcję getItemsMaxNumber()
|─ package.json
|─ tsconfig.json
|─ README.md

**Pliki**

- types.ts – typy TypeScript:

  Item – obiekt z polem name: string

  Items – tablica obiektów typu Item

- seed.ts – generuje losową tablicę obiektów Item na podstawie klasy Item,

- index.ts – importuje seed i typy, zawiera funkcję getItemsMaxNumber(items: Items), która po wywołaniu:

  1. iteruje przez tablicę obiektów
  2. wyciąga liczbę z pola name
  3. zwraca największą liczbę

**Przykład użycia:**
console.log('Your max number from array:', getItemsMaxNumber(seed(5)));

**Uruchomienie projektu**

  1. zainstaluj Node.js 
  2. zainstaluj TypeScript:
     npm install -g typescript
  3. skompiluj TypeScript do JS:
     tsc
  4. uruchom projekt:
     npm start: zgodnie z instrukcją script w package.json

W konsoli/terminalu zobaczą państwo tablicę wygenerowanych obiektów oraz największą liczbę z klucza name spośród wygenerownych obiektów zawierających name.

**Przykładowy wynik**

Your array: [
{ name: 'item 23' },
{ name: 'item 7' },
{ name: 'item 89' },
{ name: 'item 12' },
{ name: 'item 56' }
]
Your max number from array: 89