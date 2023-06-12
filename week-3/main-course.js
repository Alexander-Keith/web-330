/*
===========================================
; Title:  main-course.js
; Author: Alexander Keith
; Date:   6/11/2023
; Description: main-course.js file for Assignment 3.2 – Restaurant App
;==========================================
*/

// Imports Product class from product module
import { Product } from './product.js';

// Defines MainCourse class that extends Product class
export class MainCourse extends Product {
    constructor(name, price) {
        super(name, price);
    }
}