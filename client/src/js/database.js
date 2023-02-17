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


export const putDb = async (content) => {
  console.log('Post to the database');

  const jateDB = await openDB("jate", 1);

  const txt = jateDB.transaction("jate", "readwrite");

  const store = txt.objectStore("jate");

  const request = store.put({ id: 1, value: content});

  const result = await request;
    console.log("data saved to database!", result);
};


export const getDb = async () => {
  console.log('GET from the database');

  const jateDB = await openDB("jate", 1);

  const txt = jateDB.transaction("jate", "readonly");

  const store = txt.objectStore("jate");

  const request = store.getAll();

  const result = await request;
  console.log("result.value", result.value);
  return result.value;
};

initdb();
