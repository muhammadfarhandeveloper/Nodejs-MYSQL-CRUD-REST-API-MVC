const Contact = require("../models/contactModel");

exports.getAllContacts = async (req, res) => {

    try{
        const contacts = await Contact.getAllContacts();
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

    const contactData = req.body;

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
