const request = require('supertest');
const {Issue} = require('../../models/issue');
let server;

describe('/api/issues', () => {
  beforeEach(() => { server = require('../../index'); });
  afterEach( async () => {
    server.close();
    await Issue.remove({});
  });

  describe('GET /', () => {
    it('should return all issues', async () => {
      await Issue.collection.insertMany([
        // Issue 1
        { created_by : "Steven",
          created_by_id: "5a9d6cc70218274308a12744",
          description: "Issue 1",
          status: "open",
          priority: "medium",
        },
        // Issue 2
        { created_by : "Alex",
          created_by_id: "5a9d6cc70218274308a12744",
          description: "Issue 2",
          status: "closed",
          priority: "medium",
        },
        // Issue 3...
        { created_by : "Jenny",
          created_by_id: "5a9d6cc70218274308a12744",
          description: "Issue 3",
          status: "closed",
          priority: "high",
        },
        { created_by : "Mr. Singh",
          created_by_id: "5a9d6cc70218274308a12744",
          description: "Issue 4",
          status: "open",
          priority: "low",
        },
        { created_by : "Dummy",
          created_by_id: "5a9d6cc70218274308a12744",
          description: "Issue 5",
          status: "closed",
          priority: "low",
        }
      ]);




      const res = await request(server).get('/api/issues');
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(5);
      expect(res.body.some(x => x.name === "Alex"));
    });
  });
});
