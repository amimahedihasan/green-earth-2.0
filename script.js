// fetch("https://openapi.programming-hero.com/api/categoriesd")
// .then((res) => res.json())
// .then((data)=>{console.log(data)

// })
// .catch((e)=> console.log(e));

// main code start
const categoriesContainer = document.getElementById('categoriesContainer')
const treeContainer = document.getElementById("treeContainer")

// async await
async function loadCategories(){
const res = await fetch("https://openapi.programming-hero.com/api/categories");
const data = await res.json()

// console.log(data);
data.categories.forEach(category => {
    // console.log(category)
    const btn = document.createElement("button")
    btn.className = "btn btn-outline w-full"
    btn.textContent= category.category_name
    categoriesContainer.appendChild(btn)
})

}

async function loadTree(){
    const res = await fetch("https://openapi.programming-hero.com/api/plants")
    const data = await res.json()
    // console.log(data)
    // data.plants.forEach()
    displayTrees(data.plants)

}

function displayTrees(trees){
    console.log(trees)
    trees.forEach(tree=>{
        console.log(tree)
        const card = document.createElement("div")
        card.className ="card bg-base-100 shadow-sm"
        card.innerHTML = `
                    <div class="card bg-base-100 shadow-sm">
                        <figure>
                            <img class="h-48 w-full object-cover"
                            src="${tree.image}"
                            alt="${tree.name}"
                            title="${tree.name}"/>
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">
                            ${tree.name}
                            </h2>
                            <p class="line-clamp-2">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div class="badge badge-success badge-outline">${tree.category}</div>


                            <div class=" flex justify-between items-center">
                                <h2 class="font-bold text-xl text-[#15803D] ">${tree.price}</h2>
                                <button class="btn primary-btn bg-[#15803D] btn-primary">Cart</button>
                            
                            </div>
                        </div>
                    </div>`
        treeContainer.appendChild(card)
    })
}
    

loadTree()
loadCategories()
