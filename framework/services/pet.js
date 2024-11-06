import supertest from "supertest";

import config from "../config/config.js";


const {url} = config;

const pet = {

    /** Запрос на добавление питомца
    * @param {Object} pet - данные пользователя
    * @returns {Object}
    * 
    */

    addPets:async (pet) => {       
        return await supertest(url)
            .post('/pet')
            .set('Accept', 'application/json')
            .send(pet)
    },


        /** Запрос на изменение питомца
    * @param {Object} pet - данные пользователя
    * @returns {Object}
    * 
    */

    editPets:async (pet) => {       
        return await supertest(url)
            .put('/pet')
            .set('Accept', 'application/json')
            .send(pet)
        },

            /** получение информации о питомце
    * @param {number} id - id питомца
    * @returns {Object}
    * 
    */

    getPets:async (id) => {       
        return await supertest(url)
            .get(`/pet/${id}`)
        },

            /** изменение питомца через форму
    * @param {number} id - id питомца
    * @param {string} name - имя питомца
    * @param {string} status - статус питомца
    * @returns {Object}
    * 
    */

    editPetsToForm:async (id, name, status) => {       
        return await supertest(url)
            .get(`/pet/${id}`)
            .set('Accept', 'application/json')
            .send(`name=${name}&status=${status}`)
        },

        /** удаление питомца
         * @param {number} id - id питомца
         * @returns {Object} */
    deletePets:async (id) => {       
        return await supertest(url)
            .delete(`/pet/${id}`)
        },
}


export default pet