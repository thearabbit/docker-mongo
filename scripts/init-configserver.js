rs.initiate({
  _id: "cfgrs",
  configsvr: true,
  members: [
    { _id: 0, host: "cfgsvr1-ip:40001" },
    { _id: 1, host: "cfgsvr2-ip:40002" },
    { _id: 2, host: "cfgsvr1-ip:40003" }
  ]
});

// rs.status();
