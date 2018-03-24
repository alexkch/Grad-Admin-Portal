const request = require('supertest');
const {User} = require('../../models/user');
let server;

describe('/api/users', () => {
  beforeEach(() => { server = require('../../index'); });
  afterEach( async () => {
    server.close();
    await User.remove({});
  });


  describe('GET /', () => {
    it('should return all users', async () => {
      await Issue.collection.insertMany([
        // example of student user
        { email : "tiffany@hotmail.com",
          name: "tiffany",
          password: "2222",
          usertype: "Grad",
          isAdmin: true,
          created_on: Date.now,
          last_login: Date.now
        },
        // example of admin user
        { email : "daniel@hotmail.com",
          name: "Daniel",
          password: "2222dfasfa",
          usertype: "Grad",
          isAdmin: true,
          created_on: Date.now,
          last_login: Date.now
        },
        // example of broken email.
        { email : "randomUser@hotmail.coms",
          name: "randomUsers",
          password: "123123qwer",
          usertype: "Grad",
          isAdmin: true,
          created_on: Date.now,
          last_login: Date.now
        },

        { email : "justin@gmail.com",
          name: "Justin",
          password: "2222222",
          usertype: "Grad",
          isAdmin: true,
          created_on: Date.now,
          last_login: Date.now
        },

        // example of 
        { email : "daniel@hotmail.com",
          name: "Daniel",
          password: "123456",
          usertype: "Student",
          isAdmin: true,
          created_on: Date.now,
          last_login: Date.now
        },
      ]);

      const res = await request(server).get('/api/user');
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(5);
      expect(res.body.some(x => x.name === "Daniel"));
    });
  });

  describe('GET /self', () => {
    it('should return an user if valid id is passed', async () => {
      const user = new User(
        // user 1
        {
          email : "daniel@hotmail.com",
          name: "Daniel",
          password: "2222dfasfa",
          usertype: "Student",
          isAdmin: false,
          created_on: Date.now,
          last_login: Date.now
        });
      await user.save();
      const res = await request(server).get('/api/users/' + user.email);
      expect(res.status).toBe(200);
    });

    it('should return 404 if invalid id is passed', async () => {

      const res = await request(server).get('/api/users/' + 'daniel1@hotmail.com');
      expect(res.status).toBe(404);
    });
  });

  describe('POST /', () => {
    it('should return 401 since user is not signed in', async () => {
      const issue = new Issue(
        // Issue 1
        { created_by : "Donny",
          created_by_id: "5a9d6cc70218274308a12744",
          description: "Issue 99",
          status: "closed",
          priority: "high"
        });
      const res = await request(server).post('/api/users/').send(user);
      expect(res.status).toBe(401);
    });

    it('should return 400 if user json does not meet validation', async () => {
      const token = new User().generateAuthToken();
      const user = new User(
        {
          email : "daniel@hotmail.com",
          name: "Daniel",
          password: "2222dfasfa",
          usertype: "Student",
          isAdmin: false,
          created_on: Date.now,
          last_login: Date.now
        });
      const res = await request(server).post('/api/users/').set('x-auth-token', token).send(user);
      expect(res.status).toBe(400);
    });

    //need to fix this....
    it('should save user in db if user is signed in/signed up and passes validation', async () => {
      const token = new User().generateAuthToken();
      const new_user = new User(
        // user 1
        {
          email : "daniel@hotmail.com",
          name: "Daniel",
          password: "2222dfasfa",
          usertype: "Student",
          isAdmin: false,
          created_on: Date.now,
          last_login: Date.now
        });
      const res = await request(server).post('/api/users/').set('x-auth-token', token).send(new_user);
      const query = await Issue.findById({"_email" : "daniel@hotmail.com"});
      console.log(new_user);
      console.log('value ' + query);
      expect(query).not.toBeNull();
    });
  });
});
