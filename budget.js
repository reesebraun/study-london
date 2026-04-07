function calculateBudget() {
  const totalBudget = Number(document.getElementById("totalBudget").value) || 0;
  const housing = Number(document.getElementById("housing").value) || 0;
  const groceries = Number(document.getElementById("groceries").value) || 0;
  const eatingOut = Number(document.getElementById("eatingOut").value) || 0;
  const transport = Number(document.getElementById("transport").value) || 0;
  const entertainment = Number(document.getElementById("entertainment").value) || 0;
  const travel = Number(document.getElementById("travel").value) || 0;
  const misc = Number(document.getElementById("misc").value) || 0;

  const totalSpending = housing + groceries + eatingOut + transport + entertainment + travel + misc;
  const remainingBudget = totalBudget - totalSpending;

  document.getElementById("totalSpending").textContent = totalSpending.toFixed(2);
  document.getElementById("remainingBudget").textContent = remainingBudget.toFixed(2);

  const budgetMessage = document.getElementById("budgetMessage");

  if (remainingBudget > 50) {
    budgetMessage.textContent = "You’re in a good spot and still have room in your budget.";
  } else if (remainingBudget >= 0) {
    budgetMessage.textContent = "You’re getting close to your budget limit.";
  } else {
    budgetMessage.textContent = "You’re over budget. Try adjusting a few categories.";
  }
}