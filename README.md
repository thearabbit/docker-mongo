# Mongo Sharded Cluster with Docker Compose

### Mongo Components

- Config Server (3 member replica set): `cfgsvr1, cfgsvr2, cfgsvr3`
- 3 Shards (each a 3 member replica set):
  - `shard1svr1, shard1svr2, shard1svr3`
  - `shard2svr1, shard2svr2, shard2svr3`
  - `shard3svr1, shard3svr2, shard3svr3`
- Router (mongos): `router`

### Setup

- Cloud Server 1
  `docker-compose -f docker-compose1.yml -d`

- Cloud Server 2
  `docker-compose -f docker-compose2.yml -d`

- Cloud Server 3
  `docker-compose -f docker-compose3.yml -d`

- Cloud Router (Application Cloud)
  `docker-compose -f docker-router.yml -d`

### Configuration

- Config Server

```bash
docker exec -it cfgsvr1
mongo < /scripts/init-configserver.js
```

- Shard1

```bash
docker exec -it shard1svr1
mongo < /scripts/init-shard1.js
```

- Shard2

```bash
docker exec -it shard2svr1
mongo < /scripts/init-shard2.js
```

- Shard3

```bash
docker exec -it shard3svr1
mongo < /scripts/init-shard3.js
```

- Router

```bash
docker exec -it router
mongo < /scripts/init-router.js
```

### Sharding a Mongo Collection

```bash
docker exec -it router
mongo
```

- Check status

```bash
router> sh.status()
```

#### Enable Sharding of Database

```bash
sh.enableSharding("dbName")
```

#### Shard Empty Collection Data

```bash
sh.shardCollection( "dbName.myCollections", {"field": 1, ...} )
sh.shardCollection( "dbName.myCollections", {"field": "hashed", ...} )
```

_Ex:_

```bash
sh.shardCollection( "dbName.users", { _id: "hashed" } )
sh.shardCollection( "dbName.invoices", { tranType: "hashed", tranDate: "hashed" } )
```

#### Shard Exist Collection Data

- Create Collection Index

```bash
db.myCollections.createIndex({"field": "hashed"})
```

- Sharding Collection

```bash
sh.shardCollection( "dbName.myCollections", {"field": "hashed"} )
```

#### Check Collection Sharding

```bash
db.myCollections.getShardDistribution()
```

### References

- [YouTube](https://www.youtube.com/watch?v=LBthwZDRR-c&list=PL34sAs7_26wPvZJqUJhjyNtm7UedWR8Ps&index=1)
- [How to choose a shard key for MongoDB](https://www.bugsnag.com/blog/mongo-shard-key)
- [Choosing a Mongo Shard Key](http://tebros.com/2010/11/choosing-a-mongo-shard-key/)
- [Shard keys](https://docs.mongodb.com/manual/core/sharding-shard-key/)
