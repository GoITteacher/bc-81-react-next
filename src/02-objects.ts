/**
 * Типізація об'єктів: interface та type, опціональні й readonly поля, вкладені структури.
 *
 * План уроку:
 * - Розбір різниці між interface та type (коли що використовувати).
 * - Приклади опціональних полів та readonly для захисту структури.
 * - Вкладені об'єкти: як задавати типи для address, metadata тощо.
 * - Коротке завдання: описати користувача з адресою і ролями.
 */
//!======================================================
// interface vs type: interface для форм об'єктів і підтримує declaration merging; type універсальний (об'єкти, union, intersection), але не мерджиться.

// interface User {
//   firstname: string;
//   lastname: string;
//   age: number;
//   isAdmin: boolean;
// }

// const user1: User = {
//   firstname: "Vasya",
//   lastname: "Prokopenko",
//   age: 25,
//   isAdmin: false,
//   awdawd: 'awdawd'
// };

// const user2: User = {
//   firstname: "Vasya",
//   lastname: "Prokopenko",
//   age: '25',
//   isAdmin: false,
// };

// const user3: User = {
//   lastname: "Prokopenko",
//   age: 25,
//   isAdmin: false,
// };
//!=========================================

// type UserAge = string | number;
// const age: UserAge = 20;

//!======================================================
// optional та readonly: поле з ? може бути відсутнє; readonly захищає значення після створення (ідентифікатори, константні властивості).

// interface User {
//   readonly id: string;
//   firstname: string;
//   lastname: string;
//   phoneNumber?: string;
// }

// const user: User = {
//   id: "awdawdawd",
//   firstname: "vasya",
//   lastname: "antonenko",
//   // phoneNumber: "str",
// };

// const res = user.phoneNumber?.toUpperCase(); // undefined

//!======================================================
// вкладені об'єкти: описуйте вкладені структури окремими типами (наприклад, Address, Metadata) і використовуйте їх усередині більших сутностей.

interface Location {
  x: number;
  y: number;
}

interface Address {
  city: string;
  country: string;
  street: string;
  location: Location;
}

interface User {
  firstname: string;
  lastname: string;
  address: Address;
}

const userAddress: Address = {};

//!======================================================
// завдання: створити тип користувача з address і roles, де id readonly, email опційний, а roles — масив літералів.
//!======================================================

//!======================================================

/* 🧩 Task 1 — interface
 * Опиши адресу та користувача з опціональним email і readonly id.
 * Зараз усе типізовано як unknown/any — заміни на точні типи.
 */

export const vasyl: unknown = {
  id: 1,
  name: "Vasyl",
  roles: ["student"],
  address: {
    city: "Lviv",
    street: "Shevchenka 10",
  },
};

//!=========================================

/* 🧩 Task 2 — type + об'єднання
 * Опиши контакт і співробітника, додай літеральні ролі та позиції.
 * Поки що position і contact мають нечіткі типи.
 */

export const olena = {
  id: 2,
  name: "Olena",
  email: "olena@example.com",
  roles: ["teacher", "admin"],
  position: "mentor",
  isActive: true,
  address: {
    city: "Kyiv",
    street: "Khreshchatyk 1",
  },
  contact: {
    phone: "+380991234567",
  },
};

//!=========================================
/* 🧩 Task 3 — опціональні поля
 * Типізуй функцію так, щоб доступ до contact.phone не вимагав кастів.
 */

// export function printContact(user) {
//   const contact = user.contact?.phone ?? "no phone";
//   console.log(`${user.name}: ${contact}`);
// }

//!=========================================

// interface Lesson {
//   _id: string;
//   title: string;
//   subject: string;
//   level: string;
//   teacher: string;
//   durationMinutes: number;
//   publishedAt: string;
//   summary: string;
//   createdAt: string;
//   updatedAt: string;
// }

// interface GetLessonsResponse {
//   page: number;
//   perPage: number;
//   totalPages: number;
//   totalItems: number;
//   hasNextPage: boolean;
//   hasPreviousPage: boolean;
//   items: Lesson[];
// }

// const res: GetLessonsResponse = {
//   page: 0,
//   perPage: 0,
//   totalPages: 0,
//   totalItems: 0,
//   hasNextPage: true,
//   hasPreviousPage: true,
//   items: [
//     {
//       _id: "string",
//       title: "string",
//       subject: "string",
//       level: "beginner",
//       teacher: "string",
//       durationMinutes: 0,
//       publishedAt: "2026-07-13T07:27:31.148Z",
//       summary: "string",
//       createdAt: "2026-07-13T07:27:31.148Z",
//       updatedAt: "2026-07-13T07:27:31.148Z",
//     },
//     {
//       _id: "string",
//       title: "string",
//       subject: "string",
//       level: "beginner",
//       teacher: "string",
//       durationMinutes: 0,
//       publishedAt: "2026-07-13T07:27:31.148Z",
//       summary: "string",
//       createdAt: "2026-07-13T07:27:31.148Z",
//       updatedAt: "2026-07-13T07:27:31.148Z",
//     },
//     {
//       _id: "string",
//       title: "string",
//       subject: "string",
//       level: "beginner",
//       teacher: "string",
//       durationMinutes: 0,
//       publishedAt: "2026-07-13T07:27:31.148Z",
//       summary: "string",
//       createdAt: "2026-07-13T07:27:31.148Z",
//       updatedAt: "2026-07-13T07:27:31.148Z",
//     },
//   ],
// };
