
function test_prime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0 ) return false
    }
    return n !== 1;
  }

document.writeln(test_prime(51));