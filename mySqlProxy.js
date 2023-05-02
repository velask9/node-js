//
// File: mySqlProxy.js
// Auth: Martin Burolla
// Date: 5/2/2023
// Desc: Thin wrapper around the MySQL database.
//

const promisePool = require('./PromisePool.js').promisePool

const SELECT_PERSON = "select * from person where person_id = ?"
const INSERT_PERSON = "insert into person (first_name, last_name) values (?, ?)"
const UPDATE_PERSON = "update person set first_name = ? where first_name = ?"
const DELETE_PERSON = "delete from person where person_id = ?"

//
// Public
//

exports.selectPersonById = async (personId) => {
    try {
        const [rows, fields] = await promisePool.query(SELECT_PERSON, [personId]);
        return rows;
    }
    catch(e) {
        console.log(e)
    }
}

exports.insertPerson = async (firstName, lastName) => {
    try {
        const [rows] = await promisePool.execute(INSERT_PERSON, [firstName, lastName]);
        return rows;
    }
    catch(e) {
        console.log(e)
    }
}

exports.updatePerson = async (oldName, newName) => {
    try {
        const [rows] = await promisePool.execute(UPDATE_PERSON, [newName, oldName]);
        return rows;
    }
    catch(e) {
        console.log(e)
    }
}

exports.deletePerson = async (personId) => {
    try {
        const [rows] = await promisePool.execute(DELETE_PERSON, [personId]);
        return rows;
    }
    catch(e) {
        console.log(e)
    }
}
