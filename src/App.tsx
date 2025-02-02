import { createSignal } from 'solid-js';
import './App.css';

const App = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class="content">
      <h1>Solidjs를 aws s3로 배포해보자</h1>
      <div>배포 테스트4</div>
      <span>{count()}</span>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
    </div>
  );
};

export default App;
