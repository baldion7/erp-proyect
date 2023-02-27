const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://electafarus:9ITyTxHPeIGK6EvU@erpproyect.zhii4gf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    if (err) {
        console.log('Error al conectarse a la base de datos:', err);
        return;
    }

    console.log('Conectado exitosamente a la base de datos');

    const db = client.db('equipment');
    client.close();
});console.log(client.connect);