/* eslint-disable import/no-named-default */
import config from '../framework/config/config.js';
import {default as user} from '../framework/services/user.js'
import {faker} from '@faker-js/faker';

describe('Действия с пользователем',()=>{
    let userInfo
    
    beforeEach(() =>{
        userInfo = config.userInfo;
        userInfo.id = faker.number.int({ min: 1, max: 5000 });
        userInfo.username = faker.person.lastName();
    });
    
    it('Добавить пользователя', async ()=>{
        const addUsers = await user.addUser(userInfo)

      
        expect(addUsers.status).toEqual(200)
        expect(addUsers.body.message).toEqual(String(userInfo.id))
        
    });

    it('Удалить пользователя', async ()=>{
        const addUsers = await user.addUser(userInfo)
      
        expect(addUsers.status).toEqual(200)
        
        const deleteUsers = await user.deleteUser(userInfo.username)
        expect(deleteUsers.status).toEqual(200)
    });

    it('Получить информацию о пользователе', async ()=>{

        userInfo.id = faker.number.int({ min: 1, max: 5000 });
        const addUsers = await user.addUser(userInfo)
      
        expect(addUsers.status).toEqual(200)
        
        const deleteUsers = await user.getUser(userInfo.username)
        expect(deleteUsers.status).toEqual(200)
        expect(deleteUsers.body).toEqual(userInfo)
    });

    it('Авторизоваться за пользователя', async ()=>{
        const addUsers = await user.addUser(userInfo)
      
        expect(addUsers.status).toEqual(200)
        
        const userLogin = await user.login(userInfo.username, userInfo.password)
        expect(userLogin.status).toEqual(200)
        console.log(userLogin.body)
    });

    it('Изменить информацию о пользователе', async ()=>{
        const addUsers = await user.addUser(userInfo)

        expect(addUsers.status).toEqual(200)
        userInfo.id = '999'
        
        const userEditId = await user.userEdit(userInfo.username, userInfo)
        expect(userEditId.status).toEqual(200)
    });

})