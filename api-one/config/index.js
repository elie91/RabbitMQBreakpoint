module.exports = app => {
    app.config = {
        "apiurl": "http://localhost",
        "port": "3001",
        "cors": {
            "origin": "*"
        },
        "sequelize": {
            "name": "apiOne",
            "host": "db-api-one",
            "port": "5432",
            "user": "postgres",
            "password": "postgres",
            "option": {
                "force": false,
                "loggin": false
            },
            "model": {
                "freezeTableName": true
            }
        }
    }
}