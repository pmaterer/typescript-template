import { ping } from './index';

test('ping', () => {
    expect(ping()).toBe('pong');
});
