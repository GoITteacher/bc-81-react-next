/**
 * Прості типи в TypeScript описують значення без внутрішньої структури.
 *
 * Структура заняття:
 * 1) Коротко про цінність явної типізації.
 * 2) Демонстрація: any, number, string, boolean, null, undefined.
 * 3) Інференція типів: як TS сам розуміє типи змінних.
 */
//!======================================================
// any vs конкретні примітиви: any вимикає перевірки; number/string/boolean/undefined/null дають передбачуваність і підказки.

//number, string, boolean, null, undefined, any

// let x: number = 50;
// x = 89;
// x = 99;
// let firstName: string = "Volodymyr";
// const isAdmin: boolean = true;

// let x: any = "hello";
// x = 25;
// x = true;

//!======================================================
// інференція: TS виводить тип з присвоєння (const x = 10 => number), але явна анотація потрібна, коли інференція двозначна.

// let x = 10;
// let firstName = "Vasya";
// let userAge: number | string = "12";
// userAge = 25;

//!======================================================
// null/undefined: позначають відсутність значення; часто комбінують через union з основним типом.

let x: number | null;

x = 25;
x = 99;
x = null;

//!======================================================

/* 🧩 Task 1 — типи змінних
 * Додай явні примітивні типи замість unknown/any.
 */
export let userName: string = "Olena";
export const isOnline: boolean = true;
export let clicks: number = 0;

//!=========================================
/* 🧩 Task 2 — інференція
 * Дай TS самостійно вивести типи, а потім спробуй порушити типобезпеку.
 */

export const basePrice = 100;
export const totalPrice: string = basePrice + " UAH";

/* 🧩 Task 3 — union для відсутності значення
 * Обмеж те, що може бути null чи undefined, без any.
 */

export let optionalScore: number | null = null;
export let promoCode: string | undefined = undefined;
