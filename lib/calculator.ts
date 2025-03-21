/**
 * Calculator functions for testing
 */

export function add(a: number, b: number): number {
    return a + b
  }
  
  export function subtract(a: number, b: number): number {
    return a - b
  }
  
  export function multiply(a: number, b: number): number {
    return a * b
  }
  
  export function divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero")
    }
    return a / b
  }
  
  /**
   * Additional scientific calculator functions
   */
  export function square(a: number): number {
    return a * a
  }
  
  export function squareRoot(a: number): number {
    if (a < 0) {
      throw new Error("Cannot calculate square root of negative number")
    }
    return Math.sqrt(a)
  }
  
  export function percentage(a: number, b: number): number {
    return (a * b) / 100
  }
  
  