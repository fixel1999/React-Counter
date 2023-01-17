const Contador = () => {
  const [counter, setCounter] = React.useState(0);

  const add = () => setCounter(counter + 1);
  const rest = () => setCounter(counter - 1);
  return (
    <div>
      <h1 className={counter < 0 ? "menor" : "mayor"}>Contador: {counter}</h1>
      <hr />
      <button onClick={add}>Aumentar</button>
      <button onClick={rest}>Disminuir</button>
    </div>
  );
};
