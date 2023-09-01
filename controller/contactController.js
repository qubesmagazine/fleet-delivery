const Contact = require("../models/contactModel");
// const expressAsyncHandler = require("../middleware/asyncWrapper");
const expressAsyncHandler = require("express-async-handler")
const uuid = require('uuid');



// @desc Get all contact
// @route POST /api/search/
// @access public

const getContacts = expressAsyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({ data: contacts }); // Wrap the contacts array in a 'data' property
});


// @desc Create New contact
// @route POST /api/search/
// @access public


const createContact = expressAsyncHandler(async (req, res) => {
  try {
    console.log("Received JSON data:", req.body);
    const contact = await Contact.create(req.body);
    console.log("Contact created:", contact);
    res.status(201).json(contact);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(400).json({ message: "Error creating contact", error });
  }
});



// @desc Get New contact
// @route GET /api/search/:id
// @access public



const getContact = expressAsyncHandler( async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if (!contact) {
    res.status(404);
    throw new Error('Couldnt find contact')
  }
  res.status(200).json(contact);
});






// @desc Update contact
// @route PUT /api/search/:id
// @access public

const updateContact = expressAsyncHandler( async  (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('Couldnt find contact')
  }
  const updatedContact = await Contact.findByIdAndUpdate(
  req.params.id,
  req.body,
  {new: true}

  )

  res.status(200).json(updatedContact);
});






const deleteContact = expressAsyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error('Could not find contact');
    }

    await Contact.deleteOne({ _id: req.params.id }); // Use deleteOne to delete the contact

    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({ message: "Error deleting contact", error });
  }
});





module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
}