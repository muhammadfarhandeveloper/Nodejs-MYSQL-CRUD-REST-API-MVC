const Contact = require("../models/contactModel");

exports.getAllContacts = async (req, res) => {
    const {name} = req.query;
    
    try{
        const contacts = await Contact.getAllContacts(name);
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve contacts" , error: error.message });
    }   

};
exports.getContactsCount = async (req, res) => {
    
    try{
        const contacts = await Contact.getContactsCount();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve contacts" , error: error.message });
    }   

};

exports.getContactById = async (req, res) => {

    const id = req.params.id;

    try{
        const contact = await Contact.getContactById(id);
        if (contact) {
            res.json(contact);
        } else {
            res.status(404).json({ error: "Contact not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve contact" , error: error.message });
    }

};

exports.createContact = async (req, res) => {
    const emailrg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const contactData = req.body;
    const {name,email} = req.body;
    if(!name || !email){
        res.status(422).json({error: "Name & Email is Required"});
    }
    if(!emailrg.test(email)){
        
        res.status(422).json({error: "Email is not applicable"});
    }

    try{
        const newContact = await Contact.createContact(contactData);
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ error: "Failed to create contact" , error: error.message });
    }
};

exports.updateContact = async (req, res) => {

    const id = req.params.id;
    const contactData = req.body;   

    try{
        const updatedContact = await Contact.updateContact(id, contactData);
        res.json(updatedContact);
    } catch (error) {
        res.status(500).json({ error: "Failed to update contact" , error: error.message });
    }
};

exports.deleteContact = async (req, res) => {

    const id = req.params.id;

    try{
        await Contact.deleteContact(id);
        res.json({ message: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete contact" , error: error.message });
    }
};
