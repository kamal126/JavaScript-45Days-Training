/**
 * Use Object.keys(), Object.values(), and Object.entries() to log all properties and values of a new object employee.
 */

const employee = {
    EmpId: "0001",
    EmpName: "Kamal ch&ra",
    EmpPost: "Project Head",
    Company: "Microsoft",
    EmpMail: "Kamalch&ra@microsoft.org.co.in",
}

console.log(Object.keys(employee));
console.log(Object.values(employee));
console.log(Object.entries(employee));

/**
==========================================================
[ 'EmpId', 'EmpName', 'EmpPost', 'Company', 'EmpMail' ]
==========================================================
[
  '0001',
  'Kamal ch&ra',
  'Project Head',
  'Microsoft',
  'Kamalch&ra@microsoft.org.co.in'
]
============================================================
[
  [ 'EmpId', '0001' ],
  [ 'EmpName', 'Kamal ch&ra' ],
  [ 'EmpPost', 'Project Head' ],
  [ 'Company', 'Microsoft' ],
  [ 'EmpMail', 'Kamalch&ra@microsoft.org.co.in' ]
]
============================================================
 */
