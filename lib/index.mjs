import { Nanopool } from './vendors/nanopool';
import { NodejsPool } from './vendors/nodejs-pool';


(async function () {
  const _nanopool = new Nanopool()
  const res = await _nanopool.execute('4ALcw9nTAStZSshoWVUJakZ6tLwTDhixhQUQNJkCn4t3fG3MMK19WZM44HnQRvjqmz4LkkA8t565v7iBwQXx2r34HNroSAZ.9e45788238250cdcf63e7b39b025fc9b6987152ea372ad0de5f886458f123cd1')
  console.log(`_nanopool: `, res);
})();

(async function () {
  const _nodejspool = new NodejsPool()
  const res = await _nodejspool.execute('4ALcw9nTAStZSshoWVUJakZ6tLwTDhixhQUQNJkCn4t3fG3MMK19WZM44HnQRvjqmz4LkkA8t565v7iBwQXx2r34HNroSAZ.9e45788238250cdcf63e7b39b025fc9b6987152ea372ad0de5f886458f123cd1')
  console.log(`_nodejspool: `, res);
})();

export default function init() {
  console.log('defalt something')

};
