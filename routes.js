module.exports = (app) => {

    /* CONTROLLERS */
    const user = require('./controllers/user.controller');


    app.get('/', (req, res) => { res.json("Server Online") });
 

    /* USUÁRIO */
    app.post('/user/login', user.Login);
    app.post('/user/cadastro', user.Cadastrar);

}