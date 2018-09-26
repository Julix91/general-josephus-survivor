function josephusSurvivor(n,k) {
  var d = 1;
  while (d <= (k-1) * n) {
    d = Math.ceil( k * d / (k - 1) );
  }
  return k * n + 1 - d;
}

function josephusSurvivorVerbose(n,k) {
  var d = 1;
  var count = 1;
  console.log(`In round 1 d starts as ${d} because Math shown in the video above...`);
  while (d <= (k-1) * n) {
    console.log(`
      In round ${count + 1} d starts as ${Math.ceil( k * d / (k - 1) )} because ${k} * ${d} / ${(k - 1)} is ${k * d / (k - 1)} (which we Math.ceil)
    `);
    d = Math.ceil( k * d / (k - 1) );
    
    count++;
  }
  console.log(`Since ${d} is greater than or equal to ${(k-1) * n} that ends the loop.`);
  console.log(`Time to return k * n + 1 - d, which is ${k} * ${n} + 1 - ${d} or ${k * n + 1 - d}.`);
  
  return k * n + 1 - d;

}
