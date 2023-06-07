const {Router} = require ("express");
const fs = require ('fs');
const router = Router();

const filepath = __dirname + "/../data/internlist.json";

router.get("/", (req, res) => {
    res.send("Hola pasante! :) Sos lo mas");
});

//obtener un solo pasante por id:
router.get('/list/:id', (req, res) => {
    const contentInternList = fs.readFileSync (filepath, 'utf-8');
    const internId = req.params.id;
    if (internId) res.send(JSON.parse(contentInternList)[internId])
    else res.status(404).send({error: 'no-exist-userid', msg:'No existe el pasante con el id:' + internId});
})


//con query filtrar por propiedades distintas al id
router.get('/list', (req, res) => {
    const contentInternList = JSON.parse(fs.readFileSync (filepath, 'utf-8'));
    const queryParams = req.query;
    if (!queryParams) return res.send(contentInternList);

    // array filter
    const filteredInternList = Object.fromEntries(
        Object.entries(contentInternList).filter(e => queryFilterForIntern(e, queryParams))
    )
    return res.send(filteredInternList)
})

function queryFilterForIntern(e, query){
    for (k in query){
        if (!e[1][k] || e[1][k] !== query[k]) return false
    }
    return true
}

module.exports = router;
