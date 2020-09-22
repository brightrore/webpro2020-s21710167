let total = 0;
let account = {
    name: "bright",
    expenses: []
}

function addExpenses(description, amount) {
    account.expenses.push({description: description, amount: amount})
}

function getAccountSummary() {
    account.expenses.forEach(function(el){
        total = total + el.amount;
    })
    console.log("Total pengeluaran " + account.name +" adalah Rp. "+ total);
}
addExpenses("Beli Ayam Geprek", 20000);
addExpenses("Ongkos",7000);
getAccountSummary();
