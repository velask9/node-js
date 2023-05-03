//
// File: MySqlProxy.js
// Auth: Martin Burolla
// Date: 5/2/2023
// Desc: Thin wrapper around the MySQL database.
//

const promisePool = require('./PromisePool.js').promisePool

const SELECT_PERSONS = "select * from person"
const SELECT_PERSON  = "select * from person where person_id = ?"
const INSERT_PERSON  = "insert into person (first_name, last_name) values (?, ?)"
const UPDATE_PERSON  = "update person set first_name = ?, last_name = ? where person_id = ?"
const DELETE_PERSON  = "delete from person where person_id = ?"

//
// Public
//

exports.selectPersonById = async (personId) => {
    try {
        const [rows] = await promisePool.query(SELECT_PERSON, [personId])
        return rows
    }
    catch (e) {
        console.log(e)
    }
}

exports.selectPersons = async () => {
    try {
        const [rows] = await promisePool.query(SELECT_PERSONS)
        return rows
    }
    catch (e) {
        console.log(e)
    }
}

exports.insertPerson = async (person) => {
    try {
        const [rows] = await promisePool.execute(INSERT_PERSON, [person.firstName, person.lastName])
        return { personId: rows.insertId, ...person } 
    }
    catch (e) {
        console.log(e)
    }
}

exports.updatePerson = async (person) => {
    try {
        const [rows] = await promisePool.execute(UPDATE_PERSON, [person.firstName, person.lastName, person.personId])
        return rows.info
    }
    catch (e) {
        console.log(e)
    }
}

exports.deletePerson = async (personId) => {
    try {
        const [rows] = await promisePool.execute(DELETE_PERSON, [personId])
        return rows
    }
    catch (e) {
        console.log(e)
    }
}
