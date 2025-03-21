'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [history, setHistory] = useState<string[]>([])
  const [firstOperand, setFirstOperand] = useState<number | null>(null)
  const [operator, setOperator] = useState<string | null>(null)
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false)
  const [theme, setTheme] = useState('blue') // 'blue', 'purple', 'green'

  // Button press animation effect
  const [activeButton, setActiveButton] = useState<string | null>(null)

  const handleButtonPress = (value: string) => {
    setActiveButton(value)
    setTimeout(() => setActiveButton(null), 150)
  }

  const getThemeColors = () => {
    switch(theme) {
      case 'purple':
        return {
          primary: 'bg-gradient-to-r from-purple-600 to-indigo-600',
          secondary: 'bg-purple-700 hover:bg-purple-800',
          display: 'bg-gradient-to-r from-purple-900/20 to-indigo-900/20',
          button: 'bg-purple-50 hover:bg-purple-100 text-purple-900',
          operator: 'bg-indigo-600 hover:bg-indigo-700 text-white',
          equals: 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white',
        }
      case 'green':
        return {
          primary: 'bg-gradient-to-r from-emerald-600 to-teal-600',
          secondary: 'bg-emerald-700 hover:bg-emerald-800',
          display: 'bg-gradient-to-r from-emerald-900/20 to-teal-900/20',
          button: 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900',
          operator: 'bg-teal-600 hover:bg-teal-700 text-white',
          equals: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white',
        }
      default: // blue
        return {
          primary: 'bg-gradient-to-r from-blue-600 to-cyan-600',
          secondary: 'bg-blue-700 hover:bg-blue-800',
          display: 'bg-gradient-to-r from-blue-900/20 to-cyan-900/20',
          button: 'bg-blue-50 hover:bg-blue-100 text-blue-900',
          operator: 'bg-cyan-600 hover:bg-cyan-700 text-white',
          equals: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white',
        }
    }
  }

  const colors = getThemeColors()

  const inputDigit = (digit: string) => {
    handleButtonPress(digit)
    
    if (waitingForSecondOperand) {
      setDisplay(digit)
      setWaitingForSecondOperand(false)
    } else {
      setDisplay(display === '0' ? digit : display + digit)
    }
  }

  const inputDecimal = () => {
    handleButtonPress('.')
    
    if (waitingForSecondOperand) {
      setDisplay('0.')
      setWaitingForSecondOperand(false)
      return
    }

    if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const clearDisplay = () => {
    handleButtonPress('C')
    
    setDisplay('0')
    setFirstOperand(null)
    setOperator(null)
    setWaitingForSecondOperand(false)
  }

  const clearAll = () => {
    handleButtonPress('AC')
    
    clearDisplay()
    setHistory([])
  }

  const performOperation = (nextOperator: string) => {
    handleButtonPress(nextOperator)
    
    const inputValue = parseFloat(display)

    if (firstOperand === null) {
      setFirstOperand(inputValue)
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator)
      const calculation = `${firstOperand} ${operator} ${inputValue} = ${result}`
      
      setDisplay(String(result))
      setFirstOperand(result)
      setHistory(prev => [...prev, calculation])
    }

    setWaitingForSecondOperand(true)
    setOperator(nextOperator)
  }

  const calculate = (firstOperand: number, secondOperand: number, operator: string) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand
      case '-':
        return firstOperand - secondOperand
      case '×':
        return firstOperand * secondOperand
      case '÷':
        return firstOperand / secondOperand
      default:
        return secondOperand
    }
  }

  const toggleTheme = () => {
    const themes = ['blue', 'purple', 'green']
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  return (
    <div className="flex flex-col items-center">
      <Card className={`w-full max-w-md shadow-xl rounded-xl overflow-hidden border-0 ${colors.primary}`}>
        <CardHeader className={`p-6 ${colors.primary} text-white`}>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold">Calculator</CardTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleTheme}
              className="text-white hover:bg-white/20"
            >
              Change Theme
            </Button>
          </div>
          <div className={`mt-4 p-4 rounded-lg ${colors.display} backdrop-blur-sm text-right text-3xl font-mono text-white h-20 flex items-center justify-end overflow-x-auto`}>
            {display}
          </div>
        </CardHeader>
        <CardContent className="p-6 bg-white rounded-t-3xl -mt-4">
          <div className="grid grid-cols-4 gap-3">
            <Button 
              variant="outline" 
              onClick={() => clearDisplay()} 
              className={`${colors.button} font-bold ${activeButton === 'C' ? 'scale-95' : ''} transition-transform`}
            >
              C
            </Button>
            <Button 
              variant="outline" 
              onClick={clearAll} 
              className={`${colors.button} font-bold ${activeButton === 'AC' ? 'scale-95' : ''} transition-transform`}
            >
              AC
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setDisplay(display.charAt(0) === '-' ? display.substring(1) : '-' + display)} 
              className={`${colors.button} font-bold ${activeButton === '+/-' ? 'scale-95' : ''} transition-transform`}
            >
              +/-
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => performOperation('÷')} 
              className={`${colors.operator} font-bold ${activeButton === '÷' ? 'scale-95' : ''} transition-transform`}
            >
              ÷
            </Button>
            
            <Button 
              onClick={() => inputDigit('7')} 
              className={`${colors.button} ${activeButton === '7' ? 'scale-95' : ''} transition-transform`}
            >
              7
            </Button>
            <Button 
              onClick={() => inputDigit('8')} 
              className={`${colors.button} ${activeButton === '8' ? 'scale-95' : ''} transition-transform`}
            >
              8
            </Button>
            <Button 
              onClick={() => inputDigit('9')} 
              className={`${colors.button} ${activeButton === '9' ? 'scale-95' : ''} transition-transform`}
            >
              9
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => performOperation('×')} 
              className={`${colors.operator} font-bold ${activeButton === '×' ? 'scale-95' : ''} transition-transform`}
            >
              ×
            </Button>
            
            <Button 
              onClick={() => inputDigit('4')} 
              className={`${colors.button} ${activeButton === '4' ? 'scale-95' : ''} transition-transform`}
            >
              4
            </Button>
            <Button 
              onClick={() => inputDigit('5')} 
              className={`${colors.button} ${activeButton === '5' ? 'scale-95' : ''} transition-transform`}
            >
              5
            </Button>
            <Button 
              onClick={() => inputDigit('6')} 
              className={`${colors.button} ${activeButton === '6' ? 'scale-95' : ''} transition-transform`}
            >
              6
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => performOperation('-')} 
              className={`${colors.operator} font-bold ${activeButton === '-' ? 'scale-95' : ''} transition-transform`}
            >
              -
            </Button>
            
            <Button 
              onClick={() => inputDigit('1')} 
              className={`${colors.button} ${activeButton === '1' ? 'scale-95' : ''} transition-transform`}
            >
              1
            </Button>
            <Button 
              onClick={() => inputDigit('2')} 
              className={`${colors.button} ${activeButton === '2' ? 'scale-95' : ''} transition-transform`}
            >
              2
            </Button>
            <Button 
              onClick={() => inputDigit('3')} 
              className={`${colors.button} ${activeButton === '3' ? 'scale-95' : ''} transition-transform`}
            >
              3
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => performOperation('+')} 
              className={`${colors.operator} font-bold ${activeButton === '+' ? 'scale-95' : ''} transition-transform`}
            >
              +
            </Button>
            
            <Button 
              onClick={() => inputDigit('0')} 
              className={`col-span-2 ${colors.button} ${activeButton === '0' ? 'scale-95' : ''} transition-transform`}
            >
              0
            </Button>
            <Button 
              onClick={() => inputDecimal()} 
              className={`${colors.button} font-bold ${activeButton === '.' ? 'scale-95' : ''} transition-transform`}
            >
              .
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => performOperation('=')} 
              className={`${colors.equals} font-bold ${activeButton === '=' ? 'scale-95' : ''} transition-transform`}
            >
              =
            </Button>
          </div>
        </CardContent>
        {history.length > 0 && (
          <CardFooter className="p-4 bg-white border-t">
            <div className="w-full">
              <h3 className="text-sm font-medium text-gray-500 mb-2">History</h3>
              <div className="max-h-32 overflow-y-auto text-sm text-gray-600 space-y-1">
                {history.map((item, index) => (
                  <div key={index} className="p-2 bg-gray-50 rounded">{item}</div>
                ))}
              </div>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}

