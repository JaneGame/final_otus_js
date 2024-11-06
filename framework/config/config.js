

const date = new Date().getTime();


const config = {
    url: 'https://petstore.swagger.io/v2',
    userInfo: {
        "id": Number,
        "username": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": 'True!' + date,
        "phone": "string",
        "userStatus": 0
      },

    petInfo: {
      "id": Number,
      "category": {
        "id": 0,
        "namePet": "Fix",
      },
      "name": "doggie",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": "string"
    }
}

export default config;