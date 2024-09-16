/* EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos: 
Crear un constructor que reciba como parámetros el título y género de la canción.
Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
Crea un método para mostrar los datos de la canción.  */

class Cancion {
    public titulo: string;
    public genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ''; 
    }

    // Método get para obtener el autor
    getAutor(): string {
        return this.autor;
    }

    // Método set para establecer el autor
    setAutor(autor: string): void {
        this.autor = autor;
    }

    // Método para mostrar los datos de la canción
    mostrarCancion(): void {
        console.log(`Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.autor}`);
    }
}

// Ejemplo de uso
const cancion = new Cancion('Bohemian Rhapsody', 'Rock');
cancion.setAutor('Queen');
console.log(cancion.getAutor());        
cancion.mostrarCancion();              
