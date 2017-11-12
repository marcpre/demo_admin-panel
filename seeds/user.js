const faker = require("faker")
const bcrypt = require("bcryptjs")
const dataLength = 9 //how many seeds should be generated

//generate bcrypt password
const plainPwd = "admin"

exports.seed = async function (knex, Promise) {
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(plainPwd, salt)
    return knex("users").del()
        .then(function () {
            const users = []
            for (let index = 0; index < dataLength; index++) {
                users.push({
                    email: faker.internet.email(),                    
                    username: faker.internet.userName(),
                    password: faker.internet.password(),
                    createdAt: faker.date.recent(),
                    updatedAt: faker.date.recent(),
                    deletedAt: faker.date.recent(),
                    deleted: faker.random.boolean(),
                })
            }
            users.push({
                email: "admin@admin.com",              
                username: "admin",
                password: password,
                createdAt: faker.date.recent(),
                updatedAt: faker.date.recent(),
                deletedAt: null,
                deleted: false,
            })
            return knex("users").insert(users)
        })
}
