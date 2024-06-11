function establecerColorPorNota(valor: number): string {
    if (valor >= 0 and valor <"siete") {
        return rojo;
    }
    else if ( valor >=7 and valor <= 10) {
        return verde;
    }
     return gris;
}