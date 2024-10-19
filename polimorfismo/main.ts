import { Luchador } from "./luchador";
import { Mago } from "./mago";
import { Arquero } from "./arquero";
import { Bruja } from "./bruja";
import { MagoEvolucionado } from "./magoEvolucionado";


let mago = new Mago ("Kruger");
mago.atacar();/*polimorfismo*/
mago.hechizar();

let luchador = new Luchador("Grayson");
luchador.defender(); /*polimorfismo*/
luchador.golpear();

let arquero = new Arquero("Oliver");
arquero.atacar();  /*polimorfismo*/
arquero.dispararFlecha();

let giorgia = new Bruja("Giorgia");
giorgia.defender();/*polimorfismo*/
giorgia.lanzarLlama();

let magoEvolucionado = new MagoEvolucionado("SuperKruger");
magoEvolucionado.atacar();
magoEvolucionado.hechizar();
