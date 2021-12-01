const { initializeApp } = require('firebase-admin/app');

export default function projects(req, res) {

    const admin = require('firebase-admin');
    const serviceAccount = require('./vani-portfolio-firebase-adminsdk-exbkm-61b5e5c070.json');
    initializeApp({
        credential: applicationDefault(),
        databaseURL: 'firebase-adminsdk-exbkm@vani-portfolio.iam.gserviceaccount.com'
    });

    const project = [{
        id: "", 
        title: "", 
        description: "", 
        image: "",
        fecha: "",
        ubicacion: "",

    }]



    res.status(200).json(project)
    
}