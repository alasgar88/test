function SlowComponent() {
  const words = Array.from({ length: 100000 }, () => 'word');
  return (
    <ul>
      {words.map((word, i) => {
        return (
          <li key={i}>
            {i}:{word}
          </li>
        );
      })}
    </ul>
  );
}

function Test({}) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={(c) => c + 1}>Increase: {count}</button>
      {children}
      <SlowComponent />
    </div>
  );
}

<Test>
  <SlowComponent />
</Test>;
