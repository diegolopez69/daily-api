module.exports = (sequelize, Sequelize) => {
  const tb_ordenadors = sequelize.define("tb_ordenadors", {
    Arroz: {
      type: Sequelize.STRING
    },
    Nombre: {
      type: Sequelize.STRING
    }
  });

  return tb_ordenadors;
};
