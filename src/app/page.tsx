// src/pages/index.tsx
"use client"


import { useEffect, useState } from 'react';

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from the DynamoDB-backed API
    const fetchItems = async () => {
      try {
        const res = await fetch('/api/items');
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
