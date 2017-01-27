module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
        burger_name: {

                  type: DataTypes.STRING,
                  allowNull: false,
                  Validate: {
                    len: [1]
                  }
        },
          devoured:{
                  type: DataTypes.BOOLEAN,
                  allowNull: false,
                  defaultValue: false
          }
  },{
        timestamps:false
  });
  return burgers;
};


