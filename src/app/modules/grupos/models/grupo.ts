export interface Grupos {
  temGrupo: boolean;
}

export interface Pacote {
  _id: string;
  descricaoPacote: string;
  grupos: Grupos;
}

export interface Doc {
  pacotes: Pacote[];
  _id: string;
  descricaoGrupo: string;
  createdAt: string;
  updatedAt: string;
}

export interface Grupo {
  docs?: Doc[];
  total?: number;
  limit?: number;
  offset?: number;
  page?: number;
  pages?: number;
}
