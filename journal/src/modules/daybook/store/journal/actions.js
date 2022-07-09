import journalApi from "@/api/journalApi";

// export const myAction = async ({commit}) => {}

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/entries.json");

  const entries = [];
  for (const id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id]
    });
  }

  commit("setEntries", entries);
};

export const updateEntry = async ({ commit }, entry) => {
  const { date, picture, text } = entry;

  const resp = await journalApi.put(`/entries/${entry.id}.json`, {
    date,
    picture,
    text
  });
  console.log(resp);

  commit("updateEntry", { ...entry });
};

export const createEntry = async ({ commit }, entry) => {
  const { date, picture, text } = entry;

  const { data } = await journalApi.post(`/entries.json`, {
    date,
    picture,
    text
  });
  console.log(data);
  entry.id = data.name;

  commit("addEntry", { ...entry });
  return data.name;
};
