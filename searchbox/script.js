const endPoint =
  "https://raw.githubusercontent.com/Hanu73/staticJson/master/states.json?token=GHSAT0AAAAAABWZVWSC7JR45BMAJZXC6TFQYYUPFTQ";

  const cities = []
fetch(endPoint)
  .then((res) => res.json())
  .then((data) => {
    cities.push([...data])
    console.log(cities)
  });
