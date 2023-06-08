const myObject = {
    ind: 0,
    arr: [11, 13, 14, 66, 67, 69, 234, 456, 2, 1],
    [Symbol.iterator]: function () {
      const arr = this.arr;
      let ind = this.ind;
      return {
        next() {
          for (let i = ind; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
              ind = i + 1;
              return {
                done: false,
                value: arr[i],
              };
            }
          }
          return {
            done: true,
          };
        },
      };
    },
  };
  
  for (let x of myObject) {
    console.log(x);
  }
