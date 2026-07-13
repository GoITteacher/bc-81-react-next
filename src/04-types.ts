/**
 * Власні типи: об'єднання (union), літеральні типи, перевірки типів (type guards).
 *
 * Що показати:
 * - Приклади union: number | string для ідентифікаторів.
 * - Літеральні типи: фіксовані статуси чи ролі.
 * - Type guards: перевірка typeof/символи in для звуження типу.
 *
 */

// interface — коли описуєте структуру об’єкта, особливо для класів або публічних API.

// type — коли потрібні union, intersection, кортежі (tuple), примітиви або інші складні комбінації типів.

//!======================================================
// union: дозволяє кілька варіантів типу (number | string) без any.

// type PhoneNumber = string | number | null;

//!======================================================
// літеральні типи: обмежують значення до конкретних рядків/чисел, зручно для статусів/ролей.

// type InsertPosition = "afterbegin" | "beforebegin" | "afterend" | "beforeend";
// const pos: InsertPosition = 'afterend'

// type UserRole = "freeUser" | "admin" | "paidUser";
// const role: UserRole = "paidUser";

// type StatusCode = 200 | 400 | 404 | 500;
// const code: StatusCode = 200;

//!======================================================
// type guards: перевірка typeof/Array.isArray/"prop" in звужує union до конкретного варіанта.

// type PhoneNumber = string | number;

// function foo(phoneNumber: PhoneNumber) {
//   if (typeof phoneNumber === "string") {
//     console.log(phoneNumber.length);
//   } else {
//     const str = phoneNumber.toString();
//     console.log(str.length);
//   }
// }

// foo("+380123123123");

//!=========================================

// type UserDate = string | Date;

// function showDate(date: UserDate){
//   if(date instanceof Date){
//     date.
//   }
// }

//!=========================================

// interface User {
//   firstname: string;
//   lastname: string;
// }

// function foo(user:User){
//   if('firstname' in user){
//     user.firstname;
//   }
// }

//!=========================================

// interface Teacher {
//   userType: "teacher";
//   firstname: string;
//   lastname: string;
//   salary: number;
// }

// interface Student {
//   userType: "student";
//   firstname: string;
//   lastname: string;
//   group: string;
// }

// type User = Teacher | Student;

// function showInfo(user: User) {
//   console.log(user.firstname);
//   console.log(user.lastname);

//   if (user.userType === "teacher") {
//     console.log(user.salary);
//   } else {
//     console.log(user.group);
//   }
// }

//!======================================================
/* 🧩 Task 1 — ідентифікатор
 * Заміни any на union number|string і відформатуй для обох випадків.
 */
export type Identifier = any;
export const formatId = (id: Identifier) => {
  return typeof id === "number" ? `#${id}` : id.toUpperCase();
};

/* 🧩 Task 2 — статуси замовлення
 * Опиши літеральні статуси, щоб заборонити довільні рядки.
 */
export type OrderStatus = string;
export const nextStatus = (status: OrderStatus): OrderStatus => {
  if (status === "pending") return "shipped";
  return "done";
};

/* 🧩 Task 3 — type guard
 * Додай звуження типу для різних форм payload.
 */
export type Payload =
  | { type: "text"; value: string }
  | { type: "count"; value: number };
export function handlePayload(payload: any) {
  if (payload.type === "text") {
    return payload.value.trim();
  }
  return payload.value + 1;
}
