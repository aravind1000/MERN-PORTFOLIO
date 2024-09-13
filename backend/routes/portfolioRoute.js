const router = require('express').Router();
const nodemailer = require('nodemailer');
const { Intro, About, Project, Contact, Experience, Certification, ContactForm } = require('../models/portfolioModel');
const User = require('../models/userModel');

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Get all portfolio data
router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Project.find();
        const contacts = await Contact.find();
        const experiences = await Experience.find();
        const certifications = await Certification.find(); 

        res.status(200).send({
            intro: intros[0],
            about: abouts[0],
            projects: projects,
            contact: contacts[0],
            experiences: experiences,
            certifications: certifications
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update intro
router.post('/update-intro', async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: intro,
            success: true,
            message: "Intro updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update about
router.post('/update-about', async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: about,
            success: true,
            message: "About updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Add experience
router.post('/add-experience', async (req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience added successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update experience
router.put('/update-experience', async (req, res) => {
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete experience
router.post('/delete-experience', async (req, res) => {
    try {
        const experience = await Experience.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience deleted successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Add certification
router.post('/add-certificate', async (req, res) => {
    try {
        const certification = new Certification(req.body); 
        await certification.save();
        res.status(200).send({
            data: certification,
            success: true,
            message: "Certification added successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update certification
router.put('/update-certificate', async (req, res) => {
    try {
        const certification = await Certification.findOneAndUpdate( 
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: certification,
            success: true,
            message: "Certification updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete certification
router.post('/delete-certificate', async (req, res) => {
    try {
        const certification = await Certification.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            data: certification,
            success: true,
            message: "Certification deleted successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Add project
router.post('/add-project', async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(200).send({
            data: project,
            success: true,
            message: "Project added successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update project
router.put('/update-project', async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: project,
            success: true,
            message: "Project updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete project
router.post('/delete-project', async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            data: project,
            success: true,
            message: "Project deleted successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update contact
router.post('/update-contact', async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: contact,
            success: true,
            message: "Contact updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/submit-contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newContactForm = new ContactForm({ name, email, message });
        await newContactForm.save();

        // Send email notification
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).send({
            data: newContactForm,
            success: true,
            message: "Message sent successfully"
        });
    } catch (error) {
        console.error('Error occurred:', error.message);
        res.status(500).send({
            success: false,
            message: "An error occurred while sending the message",
            error: error.message
        });
    }
});

// Admin login
router.post('/admin-login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username, password: req.body.password });
        user.password = "";
        if (user) {
            res.status(200).send({ success: true, message: "Login successful", data: user });
        } else {
            res.status(200).send({ success: false, message: "Invalid username or password", data: user });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
