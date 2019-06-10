import { Mesa } from './mesa.model';
import { Candidato } from './candidato.model';

export class MesaCandidato {
    mesa: Mesa;
    candidato: Candidato;
    cantidadVotos: number;

    constructor(mesaCandidato: {
        mesa: Mesa,
        candidato: Candidato,
        cantidadVotos?: number
    }) {
        this.mesa = mesaCandidato.mesa;
        this.candidato = mesaCandidato.candidato;
        this.cantidadVotos = mesaCandidato.cantidadVotos ? mesaCandidato.cantidadVotos : null; 
    }
}