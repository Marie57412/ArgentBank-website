function Card({ icon, icon_descritpion, titre, text }) {
  return (
    <div className="feature-item">
      <img src={icon} alt={icon_descritpion} className="feature-icon" />
      <h3 className="feature-item-title">{titre}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Card;
