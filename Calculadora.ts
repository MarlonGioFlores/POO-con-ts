/* EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
sumar,restar,multiplicar,dividir,potencia,factorial */

class Calculadora {

    // Método para sumar
    sumar(a: number, b: number): number {
        return a + b;
    }

    // Método para restar
    restar(a: number, b: number): number {
        return a - b;
    }

    // Método para multiplicar
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    // Método para dividir
    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir por 0");
        }
        return a / b;
    }

    // Método para calcular la potencia
    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    // Método para calcular el factorial
    factorial(n: number): number {
        if (n < 0) return -1;
        if (n === 0) return 1;
        return n * this.factorial(n - 1);
    }
}

// Ejemplo de uso
const calc = new Calculadora();
console.log(calc.sumar(7, 3));         
console.log(calc.restar(10, 5));       
console.log(calc.multiplicar(8, 5));  
console.log(calc.dividir(18, 9));      
console.log(calc.potencia(2, 3));      
console.log(calc.factorial(5));        
