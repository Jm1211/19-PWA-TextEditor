import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Post to the database');

  const jateDB = await openDB("jate", 1);

  const tx = jateDB.transaction("jate", "readwrite");

  const store = txt.createObjectStore("jate");

  const request = store.put({ id: 1, value: content});

  const result = await request;
    console.log("data saved to database!", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  const jateDB = await openDB("jate", 1);

  const tx = jateDB.transaction("jate", "readonly");

  const store = txt.createObjectStore("jate");

  const request = store.getAll();

  const result = await request;
  console.log("result.value", result.value);
  return result.value;
};

initdb();
