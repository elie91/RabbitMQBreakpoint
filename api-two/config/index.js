module.exports = app => {
    app.config = {
        "apiurl": "http://localhost",
        "port": "3002",
        "cors": {
            "origin": "*"
        },
        "sequelize": {
            "name": "apiTwo",
            "host": "db-api-two",
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