import request from 'superagent';

// API url -- different from the front end URL
const URL = 'http://localhost:3000';

export async function signUpUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        // .send({
        //     email: email,
        //     password: password
        // })
        .send({ email, password })

    return response.body;
}

export async function loginUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signin`)
        // .send({
        //     email: email,
        //     password: password
        // })
        .send({ email, password })

    return response.body;
}

export async function searchAdvice(query) {
    const response = await request
        .get(`${URL}/advice?search=${query}`)

    return response.body;
}

export async function addFavorite(movie, token) {
    const response = await request
        .post(`${URL}/api/favorites`)
        .set('Authorization', token)
        .send(movie)

    return response.body;
}

export async function getFavorites(token) {
    const response = await request
        .get(`${URL}/api/favorites`)
        .set('Authorization', token);

    return response.body;
}
