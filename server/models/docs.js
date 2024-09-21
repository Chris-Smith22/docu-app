module.exports = (sequelize, DataTypes) => {

    const Docs = sequelize.define("Docs", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return Docs
} 