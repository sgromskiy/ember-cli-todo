import { helper } from '@ember/component/helper';

export function plural([num, ...rest]) {
  return (num > 1)? 'are' : 'is';
}

export default helper(plural);
