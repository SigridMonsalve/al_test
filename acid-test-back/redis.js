import redis from 'redis';

const client = redis.createClient('redis://h:pc044cddeae18d5ac0d7052e3809f03cb85ded7a211126d51c73527cd78c2a4f8@ec2-18-208-73-222.compute-1.amazonaws.com:13309');

export const init = (route) => {
  client.on('connect', () => {
    console.log('Redis client connected');
  });
  client.on('error', (err) => {
    console.log('Something went wrong ' + err);
  });
  client.set('my test key', 'my test value', redis.print);
  client.get('my test key', (error, result) => {
    if (error) {
      console.log(error);
      throw error;
    }
    console.log('GET result ->' + result);
  });
}
