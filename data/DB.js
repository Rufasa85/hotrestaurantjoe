const util = require("util")
const fs = require("fs")
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const tableData = "./data/tables.json"
const waitingData = "./data/waiting.json"



class DB{
    async readTables(){
        try {
            const tablesRaw = await readFileAsync(tableData,"utf8")
            return tablesRaw ? JSON.parse(tablesRaw) : []
        } catch (e) {
            console.log("Something went wrong while READING tables ", e)
        }
     
    }
    async writeTables(tablesArr){
        try {
          await writeFileAsync(tableData, JSON.stringify(tablesArr))
        } catch (e) {
            console.log("Something went wrong while WRITING tables ", e)
        }
    }
    async readWaiting(){
        try {
            const tablesRaw = await readFileAsync(waitingData,"utf8")
            return tablesRaw ? JSON.parse(tablesRaw) : []
        } catch (e) {
            console.log("Something went wrong while READING tables ", e)
        }
    }
    async writeWaiting(waitingArr){
        try {
            await writeFileAsync(waitingData, JSON.stringify(waitingArr))
          } catch (e) {
              console.log("Something went wrong while WRITING tables ", e)
          }
    }
}

module.exports = new DB();

// const testDB = new DB();
// const test = async ()=>{
//     await testDB.writeTables({
//         name: "trish",
//         email: "123456",
//         phone: "123455"
//     })
//     console.log('testDB.readTables()', await testDB.readTables())  
// }
// test()
