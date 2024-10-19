"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var luchador_1 = require("./luchador");
var mago_1 = require("./mago");
var arquero_1 = require("./arquero");
var bruja_1 = require("./bruja");
var magoEvolucionado_1 = require("./magoEvolucionado");
var mago = new mago_1.Mago("Kruger");
mago.atacar(); /*polimorfismo*/
mago.hechizar();
var luchador = new luchador_1.Luchador("Grayson");
luchador.defender(); /*polimorfismo*/
luchador.golpear();
var arquero = new arquero_1.Arquero("Oliver");
arquero.atacar(); /*polimorfismo*/
arquero.dispararFlecha();
var giorgia = new bruja_1.Bruja("Giorgia");
giorgia.defender(); /*polimorfismo*/
giorgia.lanzarLlama();
var magoEvolucionado = new magoEvolucionado_1.MagoEvolucionado("SuperKruger");
magoEvolucionado.atacar();
magoEvolucionado.hechizar();
