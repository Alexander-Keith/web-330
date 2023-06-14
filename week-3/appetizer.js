/*
===========================================
; Title:  appetizer.js
; Author: Alexander Keith
; Date:   6/11/2023
; Description: appetizer.js file for Assignment 3.2 – Restaurant App
;==========================================
*/


import { Product } from "./product.js";

export class Appetizer extends Product {
    constructor(name, price) {
        super(name, price);
    }
}