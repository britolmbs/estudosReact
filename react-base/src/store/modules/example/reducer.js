import * as type from '../types';
const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case type.BOTAO_CLICADO_SUCCESS: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case type.BOTAO_CLICADO_REQUEST: {
      return state;
    }

    case type.BOTAO_CLICADO_FAILURE: {
      return state;
    }

    default: {
      return state;
    }
  }
}
