import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import FlashcardForm from '../components/FlashcardForm';
import UserCard from '../components/UserCard'; // ✅ FIXED

function Home() {
  const [user, setUser] = useState(null);
  const [flashcards, setFlashcards] = useState([]); // ✅ FIXED

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  const handleAdd = (newCard) => {
    setFlashcards([...flashcards, newCard]);
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>Welcome, {user?.fullName || 'User'}! 🎉</h2>
        <p>Create flashcards below:</p>
        <FlashcardForm onAdd={handleAdd} />

        <div style={{ marginTop: '2rem' }}>
          <h3>Your Flashcards:</h3>
          {flashcards.length === 0 && <p>No flashcards yet.</p>}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {flashcards.map((card, idx) => (
              <UserCard key={idx} name={card.name} email={card.email} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
