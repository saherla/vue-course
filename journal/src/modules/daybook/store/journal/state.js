export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(), // 1234342352
      date: new Date().toDateString(), // sat 23, july
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales est imperdiet eros porta, non ultricies sem suscipit. Ut non justo imperdiet, eleifend neque id, vestibulum purus.",
      picture: null // https://
    },
    {
      id: new Date().getTime() + 100, // 1234342352
      date: new Date().toDateString(), // sat 23, july
      text: "Maecenas convallis sit amet risus eget condimentum. Pellentesque eu quam sollicitudin, hendrerit dui a, vestibulum urna.",
      picture: null // https://
    },
    {
      id: new Date().getTime() + 200, // 1234342352
      date: new Date().toDateString(), // sat 23, july
      text: "Donec finibus lobortis enim vitae congue. Pellentesque non urna justo. Vivamus vel ultricies diam. Aenean molestie elit non lacus interdum posuere.",
      picture: null // https://
    }
  ]
});
