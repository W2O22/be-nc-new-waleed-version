const request = require('supertest');
const app = require('../app')

const seed = require('../db/seeds/seed');
const testData = require('../db/data/test-data');

beforeEach(() => seed(testData));


describe('GET /api/topics', ()=>{
    test('200: responds with an array of topic objects, each of which should have the following properties: slug and description', ()=>{
        return request(app)
            .get('/api/topics')
            .expect(200)
            .then((res)=>{
                console.log(res.body, '<<<res.body')
                expect(res.body).toBeInstanceOf(Object);
                expect(res.body).not.toBeInstanceOf(Array);
                expect(res.body).toEqual({
                    topics: [
                      { slug: 'mitch', description: 'The man, the Mitch, the legend' },
                      { slug: 'cats', description: 'Not dogs' },
                      { slug: 'paper', description: 'what books are made of' }
                    ]
                  })
            })
    })
})