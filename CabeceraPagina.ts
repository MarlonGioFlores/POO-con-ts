/* EJERCICIO   1.  Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer
método que obtenga el título, color y fuente de la página, el segundo método que indique
como desea que aparezca el título si centrado, derecha o izquierda y el tercer método
que imprima todas las propiedades. */

class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = 'izquierda'; // Valor por defecto
    }

    // Método que obtiene el título, color y fuente
    obtenerPropiedades(): void {
        console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`);
    }

    // Método que establece cómo se desea que aparezca el título (centrado, derecha, izquierda)
    establecerAlineacion(alineacion: 'centrado' | 'derecha' | 'izquierda'): void {
        this.alineacion = alineacion;
        console.log(`El título se alineará a la ${alineacion}`);
    }

    // Método que imprime todas las propiedades
    imprimirCabecera(): void {
        console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}, Alineación: ${this.alineacion}`);
    }
}

// Ejemplo de uso
const cabecera = new CabeceraPagina('Mi Página', 'Azul', 'Arial');
cabecera.obtenerPropiedades();
cabecera.establecerAlineacion('centrado');
cabecera.imprimirCabecera();
