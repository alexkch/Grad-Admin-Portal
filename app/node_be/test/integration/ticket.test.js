const request = require('supertest');
const {Ticket} = require('../../models/ticket');
let server;

describe('/api/tickets', () => {
  beforeEach(() => { server = require('../../index'); });
  afterEach( async () => {
    server.close();
    await Ticket.remove({});
  });


  describe('GET /', () => {
    it('should return all tickets', async () => {
      await Ticket.collection.insertMany([
        // example of ticket
        { professor : "Professor John",
          status: "granted",
          created_by: "Daniel",
          created_on: Date,
          updated_on: Date.now,
        },
       
        { professor : "Professor Justin",
          status: "redeemed",
          created_by: "John",
          created_on: Date,
          updated_on: Date.now,
        },
        
        { professor : "Professor John",
          status: "granted",
          created_by: "Daniel",
          created_on: Date,
          updated_on: Date.now,
        }
      ]);

      const res = await request(server).get('/api/ticket');
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(3);
      expect(res.body.some(x => x.professor === "Professor John"));
      expect(res.body.some(x => x.status === "granted"));
      expect(res.body.some(x => x.created_by === "Daniel"));
      // expect(res.body.some(x => x.professor_id === "")); //////  COMEBACK 
    });
  });

  describe('GET /self', () => {
    it('should return a ticket if valid id is passed', async () => {
      const ticket = new Ticket(
        { professor : "Professor John",
          status: "granted",
          created_by: "Daniel",
          created_on: Date,
          updated_on: Date.now,
        });
      await ticket.save();
      const res = await request(server).get('/api/tickets/' + ticket.created_by);
      expect(res.status).toBe(200);
    });

    it('should return 404 if invalid id is passed', async () => {

      const res = await request(server).get('/api/tickets/' + 'Daniel');
      expect(res.status).toBe(404);
    });
  });

  describe('POST /', () => {
    it('should return 401 since user is not signed in', async () => {
      const ticket = new Ticket(
        // Ticket 1
        { professor : "Professor John",
          status: "granted",
          created_by: "Daniel",
          created_on: Date,
          updated_on: Date.now,
        });
      const res = await request(server).post('/api/tickets/').send(ticket);
      expect(res.status).toBe(401);
    });

    it ('should return 400 if user json does not meet validation', async () => {
      const token = new Ticket().generateAuthToken();
      const ticket = new Ticket(
        {
          professor : "Professor John",
          status: "granted",
          created_by: "Daniel",
          created_on: Date,
          updated_on: Date.now,
        });
      const res = await request(server).post('/api/users/').set('x-auth-token', token).send(ticket);
      expect(res.status).toBe(400);
    });

    //need to fix this....
    it('should save ticket in db if user is signed in/signed up and passes validation', async () => {
      const token = new Ticket().generateAuthToken();
      const new_ticket = new Ticket(
        // ticket 1
        {
          professor : "Professor John",
          status: "granted",
          created_by: "Daniel",
          created_on: Date,
          updated_on: Date.now,
        });
      const res = await request(server).post('/api/tickets/').set('x-auth-token', token).send(new_ticket);
      const query = await Ticket.findById({"_email" : "daniel@hotmail.com"});
      console.log(new_ticket);
      console.log('value ' + query);
      expect(query).not.toBeNull();
    });
  });

  describe('PUT /:id', () => {
    it('should update a ticket if valid id is passed in', async () => {
      const ticket = new Ticket(
        // Ticket 1
        { professor : "Professor John",
          status: "granted",
          created_by: "Daniel",
          created_on: Date,
          updated_on: Date.now,
        });
      old_ticket = Ticket.find(ticket.professor: "Professor John");
      old_ticket.f
      const res = await request(server).post('/api/tickets/').send(ticket);

    });

    
  });
});
