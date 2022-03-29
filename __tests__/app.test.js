const request = require('supertest');
const app = require('../app')

const seed = require('../db/seeds/seed');
const testData = require('../db/data/test-data');

beforeEach(() => seed(testData));

// describe('Get /api', () => {
//     test('200: responds with JSON describing all the available endpoints on the API', ()=>{
//         return request(app)
//             .get('/api')
//             .expect()
//     })
// })
describe('GET /api/topics', ()=>{
    test('200: responds with an array of topic objects, each of which should have the following properties: slug and description', ()=>{
        return request(app)
            .get('/api/topics')
            .expect(200)
            .then((res)=>{
                expect(res.body).toBeInstanceOf(Object);
                expect(res.body.topics[0]).toEqual({ slug: 'mitch', description: 'The man, the Mitch, the legend' });
                expect(res.body.topics[1]).toEqual({ slug: 'cats', description: 'Not dogs' });
                expect(res.body.topics[2]).toEqual({ slug: 'paper', description: 'what books are made of' });
                    
                  
            })
    })
    test('404: responds with path not found', ()=>{
        return request(app)
            .get('/api/topic')
            .expect(404)
            .then((res)=>{
                expect(res.body.msg).toBe('path not found');
            })
    })
        

})