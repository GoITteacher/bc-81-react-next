/**
 * Узагальнені типи (generics)
 *
 * План:
 * - Навіщо generics: повторне використання з різними типами.
 * - Параметри типів <T>, кілька параметрів <T, U>.
 * - Обмеження (extends) для властивостей/методів.
 * - Інференція типів для generic-функцій і колбеків.
 * - Завдання: переписати функції з any/unknown на generics з обмеженнями.
 */
//!======================================================
// generics дозволяють писати одну функцію для різних типів без any, зберігаючи підказки.

// Type
// function getNumber(value: number): number {
//   return value;
// }

// function getString(value: string): string {
//   return value;
// }

function getValue<T>(value: T): T {
  return value;
}
getValue<number>(10);

getValue<string>('Hello');

getValue(true);

getValue([1, 2, 3])

interface User {
  name: string;
  age: number;
}


getValue<User>({name: 'Jacob', age: 25})
//!======================================================
// обмеження: <T extends { id: number }> гарантує наявність id; зручно для фільтрів і пошуку.

// <T extends User>

function printLength<T extends {length: number}>(value: T) {
  console.log(value.length);
}

// printLength(10);
// printLength(true)
// printLength('Hello');
// printLength([1, 4, 5]);
// printLength({age: 5})

type Animal ={
  makesound(): void
}

type Dog = {
  makesound(): void
}

const dog: Dog = {
  makesound() {
    console.log('Гав');
  }
}



function speak<T extends Animal>(animal: T) {
  animal.makesound();
}

speak(dog)

//!======================================================
// інференція: TS часто виводить T із аргументів, тож явний <T> потрібен лише інколи.
//!======================================================

/* 🧩 Task 1 — перший елемент
 * Заміни any/unknown на generics і додай обмеження, якщо треба.
 */
export function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 3, 3]);
getFirstElement(['sdfa', 'asdfsadf']);
getFirstElement<User>([{name: 'Jacob', age: 25}, {name: 'Jacob', age: 25}])

/* 🧩 Task 2 — перемішування
 * Типізуй shuffle так, щоб зберігався тип елементів без any.
 */
export function shuffle<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

shuffle([1, 2, 3]);

/* 🧩 Task 3 — сховище
 * Використай generics для збереження/завантаження без кастів.
 */
export function saveToStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

saveToStorage<User[]>('users', [{name: 'Jacob', age: 25}, {name: 'Jacob', age: 25}])



export function loadFromStorage<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  if (item !== null) {
    return JSON.parse(item) as T;
  }
  return null;
}

const user = loadFromStorage<User>('user');

function pair<T, U>(first: T, second: U) {
  return [first, second]
}

pair(12 , 'hello')

/* 🧩 Task 4 — max за селектором
 * Додай generics та обмеження для selector, щоб не втратити тип елемента.
 */
export function max(array: any[], selector: (item: any) => number): any {
  return array.reduce((prev, curr) =>
    selector(curr) > selector(prev) ? curr : prev
  );
}


<T extends >
