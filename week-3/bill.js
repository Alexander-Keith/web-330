/*
===========================================
; Title:  bill.js
; Author: Alexander Keith
; Date:   6/11/2023
; Description: bill.js file for Assignment 3.2 – Restaurant App
;==========================================
*/

// Defines Bill class and creates properties assigned to empty array
export class Bill {
    _beverages = [];
    _appetizers = [];
    _mainCourses = [];
    _desserts = [];
  
// Function to add a beverage to the _beverages array
addBeverage(beverage) {
    this._beverages.push(beverage);
}
  
// Function to add an appetizer to the _appetizers array
addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
}
  
// Function to add a main course to the _mainCourses array
addMainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
}
  
// Function to add a dessert to the _desserts array
addDessert(dessert) {
    this._desserts.push(dessert);
}
  
    // Function to calculate and return the total price
    getTotal() {
      let total = 0;// Created and exported bill class.
      export class Bill {
        constructor() {
          //Arrays to store items. 
          this.beverages = [];
          this.appetizers = [];
          this.mainCourses = [];
          this.desserts = [];
        }
        //Add beverage to bill
        addBeverage(beverage) {
          this.beverages.push(beverage);
        }
        //Add appetizer to bill
        addAppetizer(appetizer) {
          this.appetizers.push(appetizer);
        }
        //Add main course to bill. 
        addMainCourse(mainCourse) {
          this.mainCourses.push(mainCourse);
        }
        //Add dessert to bill. 
        addDessert(dessert) {
          this.desserts.push(dessert);
        }
        //Get total function
        getTotal() {
          let total = 0;
          // Adds beverage price if selected
          this.beverages.forEach((beverage) => {
            total += beverage.price;
          });
          // Adds appetizer price if selected
          this.appetizers.forEach((appetizer) => {
            total += appetizer.price;
          });
          //Adds main course price if selected
          this.mainCourses.forEach((mainCourse) => {
            total += mainCourse.price;
          });
          //Adds desert price if selected.
          this.desserts.forEach((dessert) => {
            total += dessert.price;
          });
          // Returns total of all selected items.
          return total;
        }
      
      //Added to clear the bill so that total can be reset when checkbox is unchecked.
        clearBill() {
          this.beverages = [];
          this.appetizers = [];
          this.mainCourses = [];
          this.desserts = [];
        }
      }
  
      // Calculate total for beverages
      this._beverages.forEach((beverage) => {
        total += parseFloat(beverage.price);
      });
  
      // Calculate total for appetizers
      this._appetizers.forEach((appetizer) => {
        total += parseFloat(appetizer.price);
      });
  
      // Calculate total for main courses
      this._mainCourses.forEach((mainCourse) => {
        total += parseFloat(mainCourse.price);
      });
  
      // Calculate total for desserts
      this._desserts.forEach((dessert) => {
        total += parseFloat(dessert.price);
      });
      
      // Returns the togal variable and rounds the last two decimal places
      return total.toFixed(2);
    }
  }
