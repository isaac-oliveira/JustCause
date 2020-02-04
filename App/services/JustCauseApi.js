import { create } from 'apisauce';
import { AsyncStorage } from 'react-native';

import baseURL from '../config/JustCauseConfig';

const api = create({
    baseURL,
});

api.addAsyncRequestTransform(async req => {
    const token = await AsyncStorage.getItem('@JustCause:token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
});

async function login(username, password) {
    const response = await api.post('/login', {
        username,
        password,
    });

    return response;
}

async function getUser(id) {
    const response = await api.get(`/funcionario/${id}`);

    return response;
}

async function getTables() {
    const response = await api.get('/mesas');

    return response;
}

async function toggleTable(table) {
    const response = await api.put(`/mesa/${table.id}`, {
        disponibilidade: !table.disponibilidade,
    });

    return response;
}

async function getCategories() {
    const response = await api.get('/categorias/1');

    return response;
}

async function getProducts(categoryId) {
    const response = await api.get(`/filtro/categoria/produtos/${categoryId}`);

    return response;
}

async function getSubcategories(productId) {
    const response = await api.get(
        `/filtro/produto/subcategorias/${productId}`,
    );

    return response;
}

async function getSubcategoryItens(subcategoryId) {
    const response = await api.get(
        `/filtro/subcategoria/itens/${subcategoryId}`,
    );

    return response;
}

async function getItens() {
    const response = await api.get('/itens/1');

    return response;
}

export default {
    login,
    getUser,
    getTables,
    toggleTable,
    getCategories,
    getProducts,
    getSubcategories,
    getSubcategoryItens,
    getItens,
};
