/**
 * Типізація масивів: number[] чи Array<number>, підказки методів, масиви об'єктів і кортежі.
 *
 * Структура пояснення:
 * 1) Два синтаксиси типів масивів і коли який читабельніший.
 * 2) Як TS знає тип елементів у map/filter/find.
 * 3) Масиви об'єктів: окремий інтерфейс + список.
 * 4) Кортежі: фіксована кількість елементів різних типів.
 * 5) Міні-практика: типізувати список курсів та кортеж налаштувань.
 *
 */
//!======================================================
// синтаксис: number[] і Array<number> рівноцінні; обирайте читабельний для команди.
// const arr: number[] = [];
// type Matrix = Array<Array<number>>;

//!======================================================
// методи масивів: map/filter/find знають тип елементів і підказують параметри колбеків.

// const names: string[] = ["volodymyr", "vasya", "roman", "anton"];

// names.map((name) => {
//   return name.toUpperCase();
// });

//!======================================================
// масиви об'єктів: краще описати окремий тип елемента й використовувати його для списку.

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

// const lessons: Lesson[] = [];

// lessons.push({
//   _id: "string",
//   title: "string",
//   subject: "string",
//   level: "beginner",
//   teacher: "string",
//   durationMinutes: 0,
//   publishedAt: "2026-07-13T07:27:31.148Z",
//   summary: "string",
//   createdAt: "2026-07-13T07:27:31.148Z",
//   updatedAt: "2026-07-13T07:27:31.148Z",
// });

//!======================================================
// кортежі: фіксована кількість елементів різних типів, наприклад [string, number].
// type RGBColor = [number, number, number];
// const accentColor: RGBColor = ["string", 12, 12];
// const primaryColor: RGBColor = [255];
// const bgColor: RGBColor = [255, 12, 51, 123, 124];

// type Props = [number, string];
// const options: Props = [25, "Test"];
//!======================================================

// type UserAge = string | number;
// const arr: UserAge[] = [];

// const arr: number[] | string[] = [];

//!======================================================
/* 🧩 Task 1 — масив чисел
 * Заміни unknown на коректний тип масиву та виправ push/map.
 */

export const points: number[] = [10, 20, 30];

// points.push("forty");
// const doubled = points.map((p) => p * 2);

//!=========================================

/* 🧩 Task 2 — масив об'єктів
 * Типізуй список курсів, щоб title і lessons були підказуваними.
 */

// interface Course {
//   title: string;
//   lessons: number;
// }

// export const courses: Course[] = [
//   { title: "TS Basics", lessons: 12 },
//   { title: "React", lessons: 18 },
// ];

// const titles = courses.map((c) => c.title);
//!=========================================
/* 🧩 Task 3 — кортеж налаштувань
 * Опиши фіксований набір значень: назва, лічильник, активність.
 */

// type Settings = [string, number, boolean];
// export const settings: Settings = ["autosave", 3, true];

// const user = {
//   firstname: "Vasya",
//   lastName: "Antonenko",
//   age: 25,
// };

// const entries = Object.entries(user);

//!=========================================
