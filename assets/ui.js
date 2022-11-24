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
    container.innerHTML += `<span class="cat_el" onclick="showCategory(this)">${category.category_name}<span>`
  })
}

const changeActiveLink = (current) => {
  const currentElement = current.textContent

  Array.from(current.parentElement.children).forEach((element) => {
    if (element.textContent == currentElement) {
      element.classList.add("active")
    } else {
      element.classList.remove("active")
    }
  })

  toggleSidebar("close")
}

const showHome = (element) => {
  // TODO: show home page on click
  changeActiveLink(element)
}

const showCategory = (element) => {
  // TODO: show posts of clicked category
  changeActiveLink(element)
}

const toggleSidebar = (action) => {
  const sidebar = document.getElementById("categories")

  if (action == "close") {
    sidebar.classList.add("-right-[100%]")
    sidebar.classList.remove("right-0") 
  } else {
    sidebar.classList.remove("-right-[100%]")
    sidebar.classList.add("right-0") 
  }
}

setCategoryLinks()
