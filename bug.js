function handleData(snapshot) {
  if (snapshot.exists()) {
    // Assuming snapshot.val() returns an object with a 'name' property
    const name = snapshot.val().name; 
    console.log(name); // This might throw an error if snapshot.val() is null or undefined, or doesn't contain 'name'
  } else {
    console.log('No data available');
  }
}