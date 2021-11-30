import db from '../../../database/firebase'

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
    const { query } = req;
    const { id } = query;

    getDoc(db, collection('projects')).doc(id).then(doc => {
        const data = doc.data()
        res.status(200).json(data);
    })
}