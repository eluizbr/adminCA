export interface Grupo {
  temGrupo: boolean;
}

export interface PacotesDoc {
  _id: string;
  descricaoPacote: string;
  createdAt: string;
  updatedAt: string;
  grupos: Grupo;
}

export interface Pacotes {
  docs?: PacotesDoc[];
  total?: number;
  limit?: number;
  offset?: number;
  page?: number;
  pages?: number;
}
