import { IRepository } from "../interfaces/IRepository";

export function fetchData(
  search: string,
  setState: React.Dispatch<React.SetStateAction<IRepository[]>>,
  page = 1
) {
  const query = `${search}&sort=stars&order=desc&per_page=25&page=${page}`; //query searches for repositories with  searchTerm in the name, the description, or the README. Results are sorted by stars in descending order
  const url = `https://api.github.com/search/repositories?q=${query}`;

  if (search) {
    fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
      .then((res) => {
        if (res.ok) {
          //throwing error
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .then((data) => {
        setState(data.items === undefined ? [] : data.items);
      })
      .catch((err) => console.log(err)); //only handles network errors, all 4xx, 5xx don’t get into catch block
  }
}
