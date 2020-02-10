import { takeLatest, call, put } from 'redux-saga/effects';

import { CartType } from '../store/reducers/cart';
import JustCauseApi from '../services/JustCauseApi';

function* postCart(action) {
    let montante = 0
    const { mesaId, itens} = action.payload
    const aux = itens.map(function(item) {
        const { idProduto, quantidade, valorUnidade, observacao } = item;
        montante += (quantidade * parseFloat(valorUnidade));

        return {
            idProduto,
            quantidade,
            valorUnidade,
            observacao
        }
    });
    yield call(JustCauseApi.sendToKitchen, mesaId, montante, aux);
    yield put({ type: CartType.SEND_TO_KITCHEN_SUCESS });
}

export const sendToKitchen = function*(action) {
    yield takeLatest(CartType.SEND_TO_KITCHEN, postCart);
};
