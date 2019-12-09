const mariadb = require('../utils/mariadb.util');


module.exports.Login = async (req, res) => {
    try {
        let obj = req.body;
        let query = ("select * from tb_user where email = ? and senha = ?");

        let data = await mariadb.query(query, [obj.email, obj.senha]);

        if (data.length >= 1) {
            res.json('ok');
        } else {
            res.json('naook');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: error.message });
    }
}


module.exports.Cadastrar = async (req, res) => {
    try {
        let obj = req.body;


        let query = `
        insert into tb_user(
              email
             ,senha
             ,nome
             ,cpf
             ,telefone
            )
        values(?,?,?,?,?)`

        await mariadb.query(query, [obj.email, obj.senha, obj.nome, obj.cpf, obj.telefone]);
        console.log('ok')
        return res.json('ok');
    } catch (error) {
        console.log('erro')
        return res.status(500).send(error.message);
    }
}