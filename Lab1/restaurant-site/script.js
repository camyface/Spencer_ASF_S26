const money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

const MENU_ITEMS = [
    {id: 1, name: "Garden Citrus Burrata", description: "Creamy Burrata served with heirloom tomatoes,\n" +
            "                    shaved fennel, and fresh basil, finished with\n" +
            "                a bright citrus vinaigrette and toasted artisan bread", price: 26, category: "Appetizer"},
    {id: 2, name: "*Seared Scallops with Herb Butter", description: "Perfectly seared sea scallops served over a light\n" +
            "                lemon herb butter sauce with microgreens and a touch\n" +
            "                of sea salt for a delicate coastal flavor", price: 32, category: "Appetizer"},
    {id: 3, name: "Wild Mushroom Tartlet", description: "A flaky pastry filled with sauteed wild mushrooms,\n" +
            "                caramelized shallots, and creamy goat cheese, finished\n" +
            "                with fresh thyme and truffle oil", price: 19, category: "Appetizer"},
    {id: 4, name: "Coastal Shrimp Cocktail", description: "Chilled jumbo shrimp served with a house-made citrus\n" +
            "                cocktail sauce, fresh lemon, and a hint of horseradish\n" +
            "                for a refreshing start to your meal", price: 21, category: "Appetizer"},
    {id: 5, name: "Charred Asparagus with Parmesan", description: "Fresh asparagus lightly grilled and topped with\n" +
            "                shaved parmesan, toasted pine nuts, and a drizzle of\n" +
            "                ages balsamic reduction", price: 13, category: "Appetizer"},
    {id: 6, name: "Smoked Salmon Crostini", description: "Thinly sliced smoked salmon layered over toasted\n" +
            "                crostini with herbed cream cheese, capers, pickled\n" +
            "                red onion, and fresh dill", price: 22, category: "Appetizer"},
    {id: 7, name: "Garden Sunrise Omelet", description: "Fluffy farm-fresh eggs folded with sauteed spinach, vine-ripened tomatoes, wild mushrooms, and creamy goat cheese, served with roasted herb potatoes and toasted artisan bread.", price: 21, category: "Breakfast"},
    {id: 8, name: "Citrus Ricotta Pancakes", description: "Light and fluffy ricotta pancakes topped with fresh seasonal berries, a drizzle of local honey, and delicate citrus zest, served with whipped butter and warm maple syrup.", price: 18, category: "Breakfast"},
    {id: 9, name: "Coastal Grilled Salmon Salad", description: "Fresh grilled Atlantic salmon served over mixed greens with avocado, cucumber, cherry tomatoes, and a light lemon herb vinaigrette.", price: 28, category: "Lunch"},
    {id: 10, name: "Herb Roasted Chicken Sandwich", description: "Tender herb-roasted chicken layered with arugula, tomato, and garlic aioli on toasted ciabatta, served with a side of crisp garden salad.", price:19 , category: "Lunch"},
    {id: 11, name: "Garden Vegetable Flatbread", description: "Stone-baked flatbread topped with roasted seasonal vegetables, caramelized onions, fresh mozzarella, and basil pesto.", price: 21, category: "Lunch"},
    {id: 12, name: "Seaside Shrimp Linguine", description: "Delicate linguine tossed with sauteed shrimp, garlic, white wine, and fresh herbs, finished with a light lemon butter sauce", price: 23, category: "Lunch"},
    {id: 13, name: "Pan-Seared Filet Mignon", description: "A tender center-cut filet mignon served with truffle mashed potatoes, roasted seasonal vegetables, and a rich red wine reduction.", price: 42, category: "Dinner"},
    {id: 14, name: "Herb Crusted Sea Bass", description: "Fresh sea bass crusted with aromatic herbs and lightly pan-seared, served alongside citrus beurre blanc and grilled asparagus.", price: 31, category: "Dinner"},
    {id: 15, name: "Wild Mushroom Risotto", description: "Creamy arborio rice slow-cooked with wild mushrooms, parmesan, and fresh thyme, finished with a drizzle of truffle oil", price: 26, category: "Dinner"},
    {id: 16, name: "Rosemary Roasted Lamb", description: "Slow-roasted lamb infused with rosemary and garlic, served with roasted root vegetables and a delicate herb jus.", price: 39, category: "Dinner"},
    {id: 17, name: "Vanilla Bean Creme Brulee", description: "Silky vanilla custard topped with a perfectly caramelized sugar crust and fresh berries.", price: 14, category: "Dessert"},
    {id: 18, name: "Chocolate Ganache Torte", description: "Rich dark chocolate torte with a smooth ganache center, served with raspberry coulis and whipped cream.", price: 16, category: "Dessert"},
    {id: 19, name: "Lemon Lavender Cheesecake", description: "Creamy cheesecake infused with delicate lavender and bright lemon, served with a honey drizzle and candied citrus.", price: 15, category: "Dessert"}

];

function populateMenu(category, tableBodyId) {
    const tableBody = document.getElementById(tableBodyId);
    const items = MENU_ITEMS.filter(item => item.category === category);

    items.forEach(item => {

        const nameRow = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.classList.add("item-name");
        nameCell.textContent = item.name;

        const priceCell = document.createElement("td");
        priceCell.classList.add("price");
        priceCell.textContent = `$${item.price}`;

        nameRow.appendChild(nameCell);
        nameRow.appendChild(priceCell);

        const descRow = document.createElement("tr");

        const descCell = document.createElement("td");
        descCell.classList.add("item-description");
        descCell.colSpan = 2;
        descCell.textContent = item.description;

        descRow.appendChild(descCell);

        tableBody.appendChild(nameRow);
        tableBody.appendChild(descRow);
    })
}


const form = document.getElementById("reservation");
const errorBox = document.getElementById("errorBox");

if(form) {
    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let errors = [];

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const party = document.getElementById("party").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const seat = document.querySelector('input[name="seating_pref"]:checked');
        const resultsBox = document.getElementById("reservationResults");

// Name validation
        if (name === "") {
            errors.push("Full Name is required");
        } else if (name.length > 20) {
            errors.push("Full Name must be under 20 characters");
        }


// Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            errors.push("Please enter a valid email address");
        }


// Party size validation
        if (party < 1 || party > 8) {
            errors.push("Party size must be between 1 and 8");
        }


// Date validation
        if (date === "") {
            errors.push("Please select a reservation date");
        }


// Time validation
        if (time === "") {
            errors.push("Please select a reservation time");
        }


// Seating validation
        if (!seat) {
            errors.push("Please choose a seating preference");
        }


// Show errors
        if (errors.length > 0) {

            let errorHTML = `
<div class="alert alert-danger">
<strong>Please fix the following errors:</strong>
<ul>
`;

            errors.forEach(error => {
                errorHTML += `<li>${error}</li>`;
            });

            errorHTML += `</ul></div>`;

            errorBox.innerHTML = errorHTML;

        } else {

            const dietary = document.getElementById("dietary").value.trim();
            const newsletter = document.querySelector('input[name="newsletter_opt_in"]').checked
                ? "Yes"
                : "No";

            const seatingPref = seat ? seat.value : "None";

            const reservationData = {
                name: name,
                email: email,
                partySize: Number(party),
                date: date,
                time: time,
                seatingPreference: seatingPref,
                dietaryNotes: dietary,
                newsletterOptIn: newsletter
            };

            console.log("Reservation Submitted:", reservationData);

            resultsBox.innerHTML = `
<div class="card mt-4">
    <div class="card-header bg-success text-white">
        Reservation Confirmed
    </div>
    <div class="card-body">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Party Size:</strong> ${party}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Seating Preference:</strong> ${seatingPref}</p>
        <p><strong>Dietary Notes:</strong> ${dietary || "None"}</p>
        <p><strong>Newsletter Signup:</strong> ${newsletter}</p>
    </div>
</div>
`;

            errorBox.innerHTML = `
<div class="alert alert-success">
Reservation submitted successfully!
</div>
`;

            form.reset();

        }

    });
}

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const filter = this.getAttribute('data-filter');
        filterItems(filter);
    });
});

function filterItems(filter) {
    const tables = document.querySelectorAll('.menu-table tbody');
    tables.forEach(table => {
        if (filter === 'all' || table.id === filter) {
            table.parentElement.style.display = 'block';
        } else {
            table.parentElement.style.display = 'none';
        }
    })
}


document.addEventListener("DOMContentLoaded", function () {
    populateMenu("Appetizer", "appetizer-menu");
    populateMenu("Breakfast", "breakfast-menu");
    populateMenu("Lunch", "lunch-menu");
    populateMenu("Dinner", "dinner-menu");
    populateMenu("Dessert", "dessert-menu");



});