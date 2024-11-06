/* eslint-disable import/no-named-default */
import {faker} from '@faker-js/faker';
import {default as pet} from '../framework/services/pet.js'
import config from '../framework/config/config.js';



describe('Операции с животными',() => {

    let petInfo
    
    beforeEach(() =>{
        petInfo = config.petInfo;
        petInfo.id = faker.number.int({ min: 1, max: 5000 });
    });

    it('Добавить питомца', async()=>{
        
        const addPet = await pet.addPets(petInfo);
        expect(addPet.status).toEqual(200)

        expect(addPet.body.id).toEqual(petInfo.id)

    });

    it('поменять статус питомца', async()=>{
        
        const addPet = await pet.addPets(petInfo);
        expect(addPet.status).toEqual(200)

        expect(addPet.body.id).toEqual(petInfo.id)

        petInfo.status = 'sold'

        const editPet = await pet.editPets(petInfo)
        expect(editPet.status).toEqual(200)

        expect(editPet.body.id).toEqual(petInfo.id)
        expect(editPet.body.status).toEqual('sold')

    });

    it('запросить информацию о питомце', async()=>{
        
        const addPet = await pet.addPets(petInfo);
        expect(addPet.status).toEqual(200)
        

        expect(addPet.body.id).toEqual(petInfo.id)

        const getPet = await pet.getPets(petInfo.id)
    
        expect(getPet.status).toEqual(200)

        expect(getPet.body.name).toEqual(petInfo.name)

    });

    it('поменять питомца с помощью формы', async()=>{
        
        const addPet = await pet.addPets(petInfo);
        expect(addPet.status).toEqual(200)

        const newName = faker.person.lastName()
        const getPet = await pet.editPetsToForm(petInfo.id, newName, 'sold')
        
        expect(getPet.status).toEqual(200)

    });

    it('удалить питомца', async()=>{
        
        const addPet = await pet.addPets(petInfo);
        expect(addPet.status).toEqual(200)

        
        const getPet = await pet.deletePets(petInfo.id)
        
        expect(getPet.status).toEqual(200)

    });
    
});