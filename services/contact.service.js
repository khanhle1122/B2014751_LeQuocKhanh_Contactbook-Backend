const { objectId } = require("mongodb");

class ContactService{
    constructor(client){
        this.Contact = clien.db().collection("contacts");
    }
}
module.exports = ContactService;