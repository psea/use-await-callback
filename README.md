# ⚠️ Don't use it. It's a test stub package.

Await callback React hook

```ts
import useAwaitCallback from 'useAwaitCallback';

export default function App() {
  const { callback, resolve } = useAwaitCallback();

  const handleClick = async () => {
    console.log('submit');
    await callback();
    console.log('done');
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={handleClick}>Submit</button>

      // any where in the react component tree
      <button onClick={() => resolve(true)}>completed</button>
    </div>
  );
}
```
