import mssql from 'mssql';

const connectionSettings = {
    server: "LAPTOP-MV0B033E\\SQLEXPRESS",
    database: "ejercicio1",
    user: "sa",
    password: "admin_2024",
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

export async function getConnection(){
    try{
        return await mssql.connect(connectionSettings);
    }
    catch(error){
        console.log(error);
    }
}

export default { getConnection };