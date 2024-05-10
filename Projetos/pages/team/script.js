import { playersWestern } from "../../data/jogadores.js";

const param = new URLSearchParams(window.location.search);
const nameTeam = param.get('name');
