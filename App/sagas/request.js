import { takeLatest, call, put } from 'redux-saga/effects';

import { RequestTypes } from '../store/reducers/request';
import JustCauseApi from '../services/JustCauseApi';

function* fetchRequests(action) {
    const table = action.payload;

    const response = yield call(JustCauseApi.getRequests, table.id);
    let payload = {};
    if (response.ok) {
        if (response.ok) {
            let aux = 0;
            const data = response.data.map(function(
                { atendimento, itens },
                index,
            ) {
                let checkedStatus = 2;
                let statusRequest = 'enviado para cozinha';
                let info = '';
                let value = 0;
                for (let i = 0; i < itens.length; i++) {
                    const { observacao, montante, status } = itens[i];
                    info += `${observacao.split(':')[0]}, `;
                    value += parseFloat(montante);
                    if (
                        status === 'enviado para cozinha' &&
                        checkedStatus !== 1
                    ) {
                        checkedStatus = 0;
                    }
                    if (status === 'preparando') {
                        checkedStatus = 1;
                    }
                }
                if (checkedStatus !== 0) {
                    statusRequest =
                        checkedStatus === 2 ? 'pronto' : 'preparando';
                }
                info = info.slice(0, info.length - 2);
                aux += value;

                return {
                    id: atendimento,
                    info,
                    value,
                    status: statusRequest,
                };
            });
            payload = {
                data,
                dataApi: response.data,
                total: aux,
            };
        }

        yield put({ type: RequestTypes.REQUETS_RECEIVED, payload });
    } else {
        const { message } = response.data;

        yield put({ type: RequestTypes.REQUETS_FAILED, data: message });
    }
}

export const updateRequest = function*(action) {
    yield takeLatest(RequestTypes.UPDATE_REQUETS, fetchRequests);
};

export const loadRequests = function*(action) {
    yield takeLatest(RequestTypes.GET_REQUETS, fetchRequests);
};
