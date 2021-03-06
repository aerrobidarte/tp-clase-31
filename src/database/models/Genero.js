module.exports=(sequelize,dataTypes)=>{
    let alias="Generos";
    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        name:{
            type:dataTypes.STRING,
        },
        ranking:{
            type:dataTypes.INTEGER,
        }

    };
    let config={
        tableName:"genres",
        timestamps:false,
    };
     const Genero=sequelize.define(alias,cols,config);
     
     return Genero;

}