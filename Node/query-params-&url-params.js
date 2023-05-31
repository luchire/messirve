
//////////////////////
// PARAMS O URL PARAMS: 
// obligatorios, posicionales (se colocan en el path de la url, cuando los busco en la url no hace falta poner los ':')
//////////////////////
router.get('/ejemplo/:estoEsUnParam1/:estoEsUnParam2', (req, res) => {
    const yAsiSeObtiene = req.params.estoEsUnParam1;
    const yAsiSeObtieneTambien = req.params.estoEsUnParam2;
    res.send('parametros '+ yAsiSeObtiene + ' ' + yAsiSeObtieneTambien)
})

//////////////////////
// QUERY PARAMS
// opcionales, nombrados (se colocan despues del path, indicados con '?' y separados por '&' donde cada uno es 'nombre=valor')
// ejemplo 
//////////////////////

router.get('/ejemplo', (req, res) => {
    const allQueryParams = req.query;
    const name = req.query.name || allQueryParams.name;
    const age = req.query.age || allQueryParams.age;
    if (name) res.send('Tu nombre es ' + name + ' y tienes ' + (age || 0) + ' anos')
    else res.send('hola sinnombre tienes ' + (age || 0) + ' anos')
})

