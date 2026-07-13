/**
 * Типізація функцій: параметри, тип результату, void, опціональні параметри та значення за замовчуванням.
 *
 * План блоку:
 * 1) Сигнатури функцій: параметри та повернення.
 * 2) void і never — коли застосовувати.
 * 3) Опціональні параметри та дефолти в сигнатурі.
 * 4) Стрілкові функції vs декларації: як описувати типи.
 *
 */

//СИГНАТУРА = НАЗВА ФУНКЦІЇ + ОПИС ВХІДНИХ ПАРАМЕТРІВ + ОПИС РЕЗУЛЬТАТУ

// function foo(x: number, y: number, title: string): number {
//   return x * 2;
// }

//!======================================================
// сигнатури: задаємо типи параметрів і повернення; TS виводить їх з тіла, але явна анотація робить контракт явним.

// function showFullName(firstname: string, lastname: string): string | number {
//   console.log(firstname, lastname);
//   return firstname + lastname;
// }

//!======================================================
// void/never: void для "нічого не повертає", never для "не завершується" (кидає помилку або нескінченний цикл).

// function foo(name: string): void {
//   console.log(name);
// }

//!=========================================

// type Logger = (value: string) => void;

// const showName: Logger = (name) => {
//   console.log(name);
// };

// const showNumber: Logger = (phoneNumber) => {
//   console.log(phoneNumber);
// };

//!=========================================

// interface Props {
//   x: number;
//   y: number;
//   callback: (value: number) => void;
// }

//!======================================================
// optional/дефолти: параметр? або значення за замовчуванням у сигнатурі; перевіряти на undefined усередині.

// function foo(x?: number) {}
// foo(10);
// foo();

// function foo2(x?: number, y: number = 0) {}

// foo2(undefined, 10);

// type Logger = (value: string) => void;

//!======================================================
/* 🧩 Task 1 — типізація аргументів
 * Додай точні типи замість any/unknown.
 */
export function add(a: number, b: number): number {
  return a + b;
}

//!=========================================
/* 🧩 Task 2 — void функція
 * Опиши логер так, щоб він нічого не повертав і приймав рядок.
 */
export const logMessage = (message: string): void => {
  console.log("[LOG]", message);
};

/* 🧩 Task 3 — optional параметр
 * Типізуй title як опціональний, а role — літерально.
 */
type UserRole = "admin" | "teacher" | "student";

interface User {
  name: string;
  role: UserRole;
  title: string;
}

export function createUser(name: string, role: UserRole, title?: string): User {
  return { name, role, title: title || "MR" };
}

/* 🧩 Task 4 — never
 * Додай тип never для функції, що завжди кидає помилку.
 */
// export function fail(message: string): never {
//   console.log("start");
//   throw new Error(message);
//   console.log("end");
// }

//!=========================================

// const arr = [1, 2, 3, 4, 4, 5];

// const callback = (elem:number) => {};

// arr.map(callback);

//!=========================================
