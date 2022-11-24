const api = async ({ url, method = "GET" }) => {
  return (
    await (
      await fetch(url, {
        method: method,
      })
    ).json()
  ).data
}

const getCategories = async () => {
  return (
    await api({
      url: "https://openapi.programming-hero.com/api/news/categories",
    })
  ).news_category
}

const setCategoryLinks = async () => {
  const container = document.getElementById("categories")
  const categories = await getCategories()

  categories.forEach((category) => {
    console.log(categories)
    container.innerHTML += `<span class="hover:text-indigo-500 cursor-pointer" onclick="showCategory(this)">${category.category_name}<span>`
  })
}

const changeActiveLink = (current) => {
  const currentElement = current.textContent

  Array.from(current.parentElement.children).forEach((element) => {
    if (element.textContent == currentElement) {
      element.classList.add("cat_el_active")
    } else {
      element.classList.remove("cat_el_active")
    }
  })
}

const showHome = (element) => {
  // TODO: show home page on click
  changeActiveLink(element)
}

const showCategory = (element) => {
  // TODO: show posts of clicked category
  changeActiveLink(element)
}

setCategoryLinks()
