import { useState } from 'react';
import './FlashcardForm.css';

function FlashcardForm({ onAdd }) {
  const [card, setCard] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!card.name || !card.email) return;
    onAdd(card);
    setCard({ name: '', email: '' });
  };

  return (
    <form className="flashcard-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={card.name}
        onChange={(e) => setCard({ ...card, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={card.email}
        onChange={(e) => setCard({ ...card, email: e.target.value })}
      />
      <button type="submit">Add Flashcard</button>
    </form>
  );
}

export default FlashcardForm;
