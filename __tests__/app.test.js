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

describe('GET /api/articles/:article_id', ()=>{
    test('200: responds with article object', ()=>{
        return request(app)
            .get('/api/articles/1')
            .expect(200)
            .then((res)=>{
                const article = res.body.article;
                expect(typeof article.title).toBe('string');
                expect(typeof article.author).toBe('string');
                expect(typeof article.body).toBe('string');
                expect(typeof article.topic).toBe('string');
                expect(typeof article.created_at).toBe('string');
                expect(typeof article.votes).toBe('number');

            })
    })
})