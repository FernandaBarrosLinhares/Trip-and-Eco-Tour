'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
       
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome:{
        allowNull: false,
        type: Sequelize.STRING
      },
      sexo:{
        allowNull: false,
        type: Sequelize.STRING
      },
     //  //TODO:enum
    //  sexo:{
    //   allowNull: false,
    //   type: Sequelize.ENUM('Femino','Masculino')
    // },

      cpf:{
        allowNull: false,
        type:Sequelize.STRING, 
      },
      email:{
        allowNull:false,
        type:Sequelize.STRING,
      },
      senha: {
        allowNull:false,
        type:Sequelize.STRING
      },
      data_nascimento: {
        allowNull:false,
        type:Sequelize.DATE
      },
      endereco:{
        allowNull:false,
        type:Sequelize.STRING
      },

      //TODO depois que funcionar quero separar endereco pois faz mais sentido
      // endereco_id: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'enderecos',
      //     key: 'id'
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE'
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    
    
    });
     
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.dropTable('usuarios');
    
  }
};
