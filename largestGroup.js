/* eslint-disable prefer-destructuring */
const input1 = [
  ['item1', 'item2'],
  ['item1', 'item2'],
  ['item1', 'item2'],
  ['item1', 'item2'],
  ['item1', 'item2'],
  ['item1', 'item2'],
  ['item1', 'item2'],
  ['item1', 'item2'],
  ['item1', 'item2'],
  ['item2', 'item3'],
  ['item5', 'item6'],
  ['item6', 'item7'],
  ['item7', 'item8'],
  ['item7', 'item12'],
];
const largestGroup = input => {
  const graph = {};
  input.forEach(element => {
    if (!graph[element[0]]) {
      graph[element[0]] = new Set([]);
    }
    if (!graph[element[1]]) {
      graph[element[1]] = new Set([]);
    }
    graph[element[0]].add(element[1]);
    graph[element[1]].add(element[0]);
  });
  const visited = new Set([]);
  const dfs = (parent, set) => {
    if (visited.has(parent)) {
      return set;
    }
    visited.add(parent);
    set.add(parent);
    const children = graph[parent];
    [...children].forEach(child => dfs(child, set));
    return set;
  };

  let ans = [];
  let max = 0;
  Object.keys(graph).forEach(key => {
    if (!visited.has(key)) {
      const set = dfs(key, new Set([]));
      if (set.size > max) {
        max = set.size;
        ans = set;
      }
    }
  });

  return ans;
};
console.log(largestGroup(input1));
