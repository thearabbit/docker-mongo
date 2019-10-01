rs.initiate({
  _id: "shard3rs",
  members: [
    { _id: 0, host: "shard3svr1-ip:50031" },
    { _id: 1, host: "shard3svr2-ip:50032" },
    { _id: 2, host: "shard3svr3-ip:50033" }
  ]
});

// rs.status()
