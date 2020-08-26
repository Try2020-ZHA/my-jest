import { add } from './add';
import { multi } from './multi';

sum=(a, b)=> {
  return add(a, b);
}

m=(a, b)=> {
  return multi(a, b);
}

export default {sum,m};