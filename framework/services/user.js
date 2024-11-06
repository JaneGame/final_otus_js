import supertest from "supertest";

import config from "../config/config.js";


const {url} = config;




 
const user = {

    /** Запрос на добавление пользователя
    * @param {Object} user - данные пользователя
    * @returns {Object}
    * 
    */

    addUser:async (user) => {       
        return await supertest(url)
            .post('/user')
            .set('Accept', 'application/json')
            .send(user)
    },

    /** Запрос на удаление пользователя
    * @param {string} username - имя пользователя
    * @returns {Object} 
    */

    deleteUser:async (username) => {       
        return await supertest(url)
            .delete(`/user/${username}`)
            .set('Accept', 'application/json')
    },

    /** Запрос на удаление пользователя
    * @param {string} username - имя пользователя
    * @returns {Object} */

    getUser:async (username) => {       
        return await supertest(url)
            .get(`/user/${username}`)
    },

    /** Запрос на удаление пользователя
    * @param {string} username - имя пользователя
    * @param {string} password - пароль
    * @returns {Object} */

    login:async (username, password) => {       
        return await supertest(url)
            .get(`/user/login?username=${username}&password=${password}`)
    },


    /** Запрос на изменение пользователя
    * @param {string} username - имя пользователя
    * @param {Object} user - пароль
    * @returns {Object} */

    userEdit:async (username, user) => {       
        return await supertest(url)
            .put(`/user/${username}`)
            .set('Accept', 'application/json')
            .send(user)
    },

}


export default user