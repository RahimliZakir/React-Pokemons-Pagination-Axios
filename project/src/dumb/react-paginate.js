//* 2. react-paginate
window.onload = () => {
  const ul = document.querySelector("ul");
  ul.className = "list-group";

  const lis = ul.children;
  Array.from(lis).forEach((item) =>
    item.children[0].classList.add("list-group-item")
  );
};

//* 2. react-paginate
