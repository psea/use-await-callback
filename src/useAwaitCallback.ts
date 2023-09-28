import { useState } from 'react';

const useAwaitCallback = () => {
  const [resolve, setResolve] = useState<(value: unknown) => void>(()=>{});

  const callback = () => new Promise((resolve, reject)=> {
    setResolve(() => resolve);
  });

  return {
    callback,
    resolve
  }
}

export default useAwaitCallback;
