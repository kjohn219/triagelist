const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

alert(patientList);

const command = prompt('Choose one: update, delete, add, reorder').toLocaleLowerCase();

if (command ==='update'){
  const nameupdate = prompt('Enter in patients name');
  for (let i = 0; i < patientList.length; i++){
    if(nameupdate === patientList[i]){
      const namenew = prompt('Enter in new name');
      patientList.splice (i,1, namenew);
      alert(patientList);
    }
  }
}

else if(command === 'delete'){
  const namedelete = prompt('Enter in the name you want to delete');
  patientList.indexOf(namedelete);
  patientList.splice(indexOf(namedelete), 1); 
  alert(patientList);
}

else if(command === 'add'){
  const nameadd = prompt('Enter in a name');
  patientList.push(nameadd);
  alert(patientList);
}

else if(command === 'reorder'){
  const name1 = prompt('Enter in patients name');
  const name2 = prompt('Enter in another patients name');
  const index1 = patientList.indexOf(name1);
  const index2 = patientList.indexOf(name2);
  patientList[index1] = name2;
  patientList[index2] = name1;
  alert(patientList)
}

else {
  alert('Please enter in a valid response')
}