/*
app.get('/pets', async (req, res) => {
    const dataPage = {};

    const pets = await Pet.findAll({
        include: [Owner, PetType],
        order: ["name"]

    });
    dataPage.pets = pets;

    res.send( dataPage.pets);
*/

[{"id":6,"name":"Adventure","petTypeId":1,"age":1,"createdAt":"2022-06-14T14:40:03.091Z","updatedAt":"2022-06-14T14:40:03.091Z",
    "Owners":[],
    "PetType":{"id":1,"type":"dog","createdAt":"2022-06-14T14:37:34.448Z","updatedAt":"2022-06-14T14:37:34.448Z"}}

,{"id":1,"name":"Azorel","petTypeId":1,"age":2,"createdAt":"2022-06-14T14:37:34.475Z","updatedAt":"2022-06-14T14:37:34.475Z",
    "Owners":[{"id":2,"firstName":"Adriana","lastName":"Smith","createdAt":"2022-06-14T14:37:34.492Z","updatedAt":"2022-06-14T14:37:34.492Z",
    "PetOwner":{"petId":1,"ownerId":2,"createdAt":"2022-06-14T14:37:34.509Z","updatedAt":"2022-06-14T14:37:34.509Z"}}],
    "PetType":{"id":1,"type":"dog","createdAt":"2022-06-14T14:37:34.448Z","updatedAt":"2022-06-14T14:37:34.448Z"}},
    
    {"id":7,"name":"Friday","petTypeId":1,"age":12,"createdAt":"2022-06-14T14:41:09.975Z","updatedAt":"2022-06-14T14:41:09.975Z",
        "Owners":[{"id":6,"firstName":"Robinson","lastName":"Crusoe","createdAt":"2022-06-14T14:41:09.932Z","updatedAt":"2022-06-14T14:41:09.932Z",
        "PetOwner":{"petId":7,"ownerId":6,"createdAt":"2022-06-14T14:50:56.145Z","updatedAt":"2022-06-14T14:50:56.145Z"}}],
        "PetType":{"id":1,"type":"dog","createdAt":"2022-06-14T14:37:34.448Z","updatedAt":"2022-06-14T14:37:34.448Z"}},
        
{"id":5,"name":"Giry","petTypeId":4,"age":7,"createdAt":"2022-06-14T14:40:03.045Z","updatedAt":"2022-06-14T14:40:03.045Z",
"Owners":[],"PetType":{"id":4,"type":"giraffe","createdAt":"2022-06-14T14:38:45.471Z","updatedAt":"2022-06-14T14:38:45.471Z"}},
            
{"id":2,"name":"Miau","petTypeId":2,"age":7,"createdAt":"2022-06-14T14:37:34.475Z","updatedAt":"2022-06-14T14:37:34.475Z",
"Owners":[{"id":3,"firstName":"Claudia","lastName":"Roy","createdAt":"2022-06-14T14:37:34.492Z","updatedAt":"2022-06-14T14:37:34.492Z",
"PetOwner":{"petId":2,"ownerId":3,"createdAt":"2022-06-14T14:37:34.509Z","updatedAt":"2022-06-14T14:37:34.509Z"}},

{"id":2,"firstName":"Adriana","lastName":"Smith","createdAt":"2022-06-14T14:37:34.492Z","updatedAt":"2022-06-14T14:37:34.492Z",
"PetOwner":{"petId":2,"ownerId":2,"createdAt":"2022-06-14T14:37:34.509Z","updatedAt":"2022-06-14T14:37:34.509Z"}}],
"PetType":{"id":2,"type":"cat","createdAt":"2022-06-14T14:37:34.448Z","updatedAt":"2022-06-14T14:37:34.448Z"}},

{"id":3,"name":"Radix","petTypeId":3,"age":2,"createdAt":"2022-06-14T14:37:34.475Z","updatedAt":"2022-06-14T14:37:34.475Z",
"Owners":[{"id":1,"firstName":"Xenia","lastName":"Princess","createdAt":"2022-06-14T14:37:34.492Z","updatedAt":"2022-06-14T14:37:34.492Z",
"PetOwner":{"petId":3,"ownerId":1,"createdAt":"2022-06-14T14:37:34.509Z","updatedAt":"2022-06-14T14:37:34.509Z"}}],
"PetType":{"id":3,"type":"panther","createdAt":"2022-06-14T14:37:34.448Z","updatedAt":"2022-06-14T14:37:34.448Z"}},

{"id":4,"name":"Stray","petTypeId":1,"age":5,"createdAt":"2022-06-14T14:37:34.475Z","updatedAt":"2022-06-14T14:37:34.475Z",
    "Owners":[{"id":3,"firstName":"Claudia","lastName":"Roy","createdAt":"2022-06-14T14:37:34.492Z","updatedAt":"2022-06-14T14:37:34.492Z",
               "PetOwner":{"petId":4,"ownerId":3,"createdAt":"2022-06-14T14:37:34.509Z","updatedAt":"2022-06-14T14:37:34.509Z"}},
               
        {"id":1,"firstName":"Xenia","lastName":"Princess","createdAt":"2022-06-14T14:37:34.492Z","updatedAt":"2022-06-14T14:37:34.492Z",
            "PetOwner":{"petId":4,"ownerId":1,"createdAt":"2022-06-14T14:37:34.509Z","updatedAt":"2022-06-14T14:37:34.509Z"}},
            {"id":2,"firstName":"Adriana","lastName":"Smith","createdAt":"2022-06-14T14:37:34.492Z","updatedAt":"2022-06-14T14:37:34.492Z",
                "PetOwner":{"petId":4,"ownerId":2,"createdAt":"2022-06-14T14:37:34.509Z","updatedAt":"2022-06-14T14:37:34.509Z"}}],
                "PetType":{"id":1,"type":"dog","createdAt":"2022-06-14T14:37:34.448Z","updatedAt":"2022-06-14T14:37:34.448Z"}}]