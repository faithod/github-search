import { IRepository } from "../interfaces/IRepository";

export function fetchData(
  search: string,
  setState: React.Dispatch<React.SetStateAction<IRepository[]>>
) {
  if (search) {
    fetch(
      `https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&per_page=25`, //query searches for repositories with  searchTerm in the name, the description, or the README. Results are sorted by stars in descending order
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    )
      .then((res) => {
        if (res.status === 200) {
          //throwing error & only allowing response which has status code of 200
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
