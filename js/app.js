const container = document.getElementById('container');
const table = document.createElement('table');

for (let i = 0; i < 10; i++) {
  const row = document.createElement('tr');
  
  for (let j = 0; j < 10; j++) {
    const value = i * 10 + j + 1;
    const cell = document.createElement('td');
    
    cell.textContent = value;
    row.appendChild(cell);
  }

  table.appendChild(row);
}

container.appendChild(table);