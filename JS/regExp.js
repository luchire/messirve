//genero las expresiones regulares:
const regexs = {
    numbers : /[0-9]/,
    notMail : /[^0-9a-z\@\.]/
}

//para testerlas uso el .test:
// objeto regexs.propiedad.test(elemento que quiero testear): regexs.numbers.test(body.career)
if (regexs.numbers.test(body.career)) return res.status(400).send('Career can not contain numbers');