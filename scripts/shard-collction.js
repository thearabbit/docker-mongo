// Enable DB
sh.enableSharding("dbName");
// sh.status()

// Shard Empty Collection
sh.shardCollection("dbName.myCollections", { field: "hashed" });
// db.myCollections.getShardDistribution();

// Shard Exist Collection
db.myCollections.createIndex({ field: "hashed" });
sh.shardCollection("dbName.myCollections", { field: "hashed" });
// db.myCollections.getShardDistribution();
