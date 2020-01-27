const INITIAL_STATE = {
    loading: false,
    logged: false,
    erro: '',
    user: null,
};

export const EmployeeTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SECESS: 'LOGIN_SECESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGOUT: 'LOGOUT',
    LOGOUT_REQUEST: 'LOGOUT_REQUEST',
    UPDATE_USER: 'UPDATE_USER',
};

export default function Employee(state = INITIAL_STATE, { type, data }) {
    switch (type) {
        case EmployeeTypes.LOGIN_REQUEST:
            return { ...state, loading: true, erro: '' };
        case EmployeeTypes.LOGIN_SECESS:
            return { user: data, loading: false, logged: true, erro: '' };
        case EmployeeTypes.LOGIN_FAILED:
            return { ...state, loading: false, logged: false, erro: data };
        case EmployeeTypes.LOGOUT:
            return INITIAL_STATE;
        case EmployeeTypes.UPDATE_USER:
            return { ...state, user: data };
        default:
            return state;
    }
}
