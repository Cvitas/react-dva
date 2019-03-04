/**  @Author: Chasen  @Date: 2018/12/19 18:14  @Description:  */

import * as service from '../services/login';

export default {
    namespace: 'login',
    state: {
        userId: null,
        userName: null,
        token:""
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if ( pathname === '/user' ) {
                }
            });
        },
    },
    effects: {
        *fetchLogin({ payload: { userInfo } }, { call, put }) {
            const { result } = yield call(service.login, { userInfo });
            yield put({
                type: 'saveUser',
                payload: { result: result }
            });
        }
    },
    reducers: {
        saveUser(state, { payload: { result } }) {
            return { ...state, ...result };
        }
    }
}
