export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Добавьте немного вещей в ваш список :)</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "У вас все готово к поездке!"
          : `У вас ${numItems} вещей в вашем списке, и вы уже упаковали ${numPacked} (
        ${percentage}%)`}
      </em>{" "}
    </footer>
  );
}
