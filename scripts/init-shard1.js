rs.initiate({
  _id: "shard1rs",
  members: [
    { _id: 0, host: "shard1svr1-ip:50011" },
    { _id: 1, host: "shard1svr2-ip:50012" },
    { _id: 2, host: "shard1svr3-ip:50013" }
  ]
});

// rs.status();
