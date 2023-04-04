db = db.getSiblingDB('testdb');
db.createUser({
  user: 'aws',
  pwd: 'test',
  roles: [
    {
      role: 'readWrite',
      db: 'testdb',
    },
  ],
});