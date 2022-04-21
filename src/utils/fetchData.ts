import { IRepository } from "../interfaces/IRepository";

export function fetchData(
  search: string,
  setState: React.Dispatch<React.SetStateAction<IRepository[]>>,
  page = 1
) {
  if (search) {
    fetch(
      `https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&per_page=25&page=${page}`, //query searches for repositories with  searchTerm in the name, the description, or the README. Results are sorted by stars in descending order
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "github-search",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          //throwing error & only allowing response which has status code of 200
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .then((data) => {
        setState(data.items === undefined ? [] : data.items);
        console.log(data);
      })
      .catch((err) => console.log(err)); //only handles network errors, all 4xx, 5xx don’t get into catch block
  }
}
//what happens when a page number doesnt exist?
//what happens to minus numbers?
