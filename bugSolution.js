function handleData(snapshot) {
  if (snapshot.exists()) {
    const name = snapshot.val()?.name ?? 'Default Name'; // Optional chaining and nullish coalescing
    console.log(name); 
  } else {
    console.log('No data available');
  }
} 