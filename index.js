let persion={
    'name':'Poseidon',
    'age':'19',
    'city':'CD'
};

let persion1=clone(persion),

function clone(x) {
  //拷贝对象记录
  const uniqueList = []; 
 
  let root = {};
 
  // 循环数组
  const loopList = [{
    parent: root,
    key: undefined,
    data: x,
  }];
 
  while (loopList.length) {
    //深拷贝，元素出栈
    const node = loopList.pop();
    const parent = node.parent;
    const key = node.key;
    const data = node.data;
 
    let res = parent;
    if (typeof key !== 'undefined') {
      res = parent[key] = {};
    }
 
    // 判断数据是否存在
    let uniqueData = find(uniqueList, data);
    //数据存在
    if (uniqueData) {
      parent[key] = uniqueData.target;
      break; // 中断本次循环
    }
 
    //数据不存在，将其放入数组
    uniqueList.push({
      source: data,
      target: res,
    });
 
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k],
          });
        } else {
          res[k] = data[k];
        }
      }
    }
  }
 
  return root;
}
 
function find(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].source === item) {
      return arr[i];
    }
  }
 
  return null;
}

