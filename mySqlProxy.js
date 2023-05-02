//
// File: mySqlProxy.js
// Auth: Martin Burolla
// Date: 5/2/2023
// Desc: 
//

const mysql = require('mysql2');

const pool = mysql.createPool(
    {
        host:'127.0.0.1', 
        user: 'db-user', 
        password: 'Ihp5150!', 
        database: 'express'
    });
const promisePool = pool.promise();




//
// Public
//

exports.selectPersonById = async (personId) => {
    try {
        const [rows, fields] = await promisePool.query("select * from person where person_id = ?", [personId]);
        return rows;
    }
    catch(e) {
        console.log(e)
    }
}

exports.insertPerson = async (firstName, lastName) => {
    try {
        const [rows] = await promisePool.execute("insert into person (first_name, last_name) values (?, ?)", [firstName, lastName]);
        return rows;
    }
    catch(e) {
        console.log(e)
    }
}

exports.updatePerson = async (oldName, newName) => {
    try {
        const [rows] = await promisePool.execute("update person set first_name = ? where first_name = ?;", [newName, oldName]);
        return rows;
    }
    catch(e) {
        console.log(e)
    }
}

exports.deletePerson = async (personId) => {
    try {
        const [rows] = await promisePool.execute("delete from person where person_id = ?;", [personId]);
        return rows;
    }
    catch(e) {
        console.log(e)
    }
}
