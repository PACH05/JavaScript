// Implementation of Debouncing

const getData = () => {
  console.log("Inside Function ");
};

const debounce = function (fn, delay) {
    let timer;
    return function () {
      let context = this;
      clearTimeout(timer)
      timer = setTimeout(()=>{
          getData.apply(context)
      }, delay)
    };
  };

const betterFn = debounce(getData, 300);

betterFn()
