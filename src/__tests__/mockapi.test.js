import { getUsers } from "../apis";

jest.mock('../apis');

test('should fetch users', () => {
  const users = [{name: 'cxk', age:20,gender:'male'}];
  getUsers.mockResolvedValue(users);
  return getUsers().then(data=>expect(data).toEqual(users));
});