import { add, subtract, multiply, divide, square, squareRoot, percentage } from "@/lib/calculator"

describe("Calculator Functions", () => {
  test("adds two numbers correctly", () => {
    expect(add(1, 2)).toBe(3)
    expect(add(-1, 1)).toBe(0)
    expect(add(0, 0)).toBe(0)
    expect(add(0.1, 0.2)).toBeCloseTo(0.3) // Handles floating point precision
  })

  test("subtracts two numbers correctly", () => {
    expect(subtract(5, 2)).toBe(3)
    expect(subtract(2, 5)).toBe(-3)
    expect(subtract(0, 0)).toBe(0)
    expect(subtract(0.5, 0.1)).toBeCloseTo(0.4)
  })

  test("multiplies two numbers correctly", () => {
    expect(multiply(3, 4)).toBe(12)
    expect(multiply(-3, 4)).toBe(-12)
    expect(multiply(0, 5)).toBe(0)
    expect(multiply(0.1, 0.1)).toBeCloseTo(0.01)
  })

  test("divides two numbers correctly", () => {
    expect(divide(10, 2)).toBe(5)
    expect(divide(7, 2)).toBe(3.5)
    expect(divide(0, 5)).toBe(0)
    expect(divide(1, 3)).toBeCloseTo(0.3333333, 5)
  })

  test("throws error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero")
  })

  test("calculates square correctly", () => {
    expect(square(2)).toBe(4)
    expect(square(-3)).toBe(9)
    expect(square(0)).toBe(0)
    expect(square(0.5)).toBe(0.25)
  })

  test("calculates square root correctly", () => {
    expect(squareRoot(4)).toBe(2)
    expect(squareRoot(9)).toBe(3)
    expect(squareRoot(0)).toBe(0)
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4)
  })

  test("throws error when calculating square root of negative number", () => {
    expect(() => squareRoot(-1)).toThrow("Cannot calculate square root of negative number")
  })

  test("calculates percentage correctly", () => {
    expect(percentage(100, 10)).toBe(10)
    expect(percentage(200, 5)).toBe(10)
    expect(percentage(50, 50)).toBe(25)
    expect(percentage(0, 10)).toBe(0)
  })
})

