rs.initiate({
  _id: "shard2rs",
  members: [
    { _id: 0, host: "shard2svr1-ip:50021" },
    { _id: 1, host: "shard2svr2-ip:50022" },
    { _id: 2, host: "shard2svr3-ip:50023" }
  ]
});

// rs.status()
