import * as $ from 'jquery'

function createUserInfo() {
  let counter = 0;

  let setCount = () => counter++;

  document.addEventListener("click", setCount);
  let isDestroy = false;

 $(document).on('click', setCount)
  return {
    getCount() {
    
        if(isDestroy) {
            return 'counter stop'
        }

      return counter;
    },
    destroy() {
      document.removeEventListener("click", setCount);
      isDestroy = true;
    },
  };
}

window.userInfo = createUserInfo();
