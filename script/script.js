const employees = [
    { name: 'Alice', salary: 5000 },
    { name: 'Bob', salary: 6000 },
    { name: 'Charlie', salary: 4500 }
  ];
  //"Удвоение зарплаты" Используя метод map, удвойте зарплату каждого сотрудника.
  const doubleSalary = employees.map(employee => {
    return{
        name: employee.name,
        salary: employee.salary * 2
    };
  });
  console.log(doubleSalary);
  console.log(" ");

  //"Фильтрация сотрудников" Используя метод filter, отфильтруйте сотрудников, у которых зарплата выше 5500.
  const employees_1 = employees.filter(({salary}) => salary > 5500);
  console.log(employees_1);
  console.log(" ");

  //"Общая зарплата" Используя метод reduce, вычислите общую зарплату всех сотрудников.
  const totalSalary = employees.reduce((acc, item) => acc + item.salary, 0);
  console.log(totalSalary);
  console.log(" ");

  //"Имена в верхнем регистре" Используя метод map, преобразуйте имена всех сотрудников к верхнему регистру.
  const employees_2 = employees.map(employee => {
    return{
        name: employee.name.toUpperCase(),
        salary: employee.salary
    };
  });
  console.log(employees_2);
  console.log(" ");