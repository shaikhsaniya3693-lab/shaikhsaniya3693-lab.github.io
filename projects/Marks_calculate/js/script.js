function calculateTotalMarks(marks) {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
      // if marks[i] is NaN or empty, treat as 0
      let m = Number(marks[i]) || 0;
      total += m;
    }
    return total;
  }

  document.getElementById('calc').addEventListener('click', function() {
    const m1 = document.getElementById('sub1').value;
    const m2 = document.getElementById('sub2').value;
    const m3 = document.getElementById('sub3').value;

    // const total = calculateTotalMarks([m1, m2, m3]);
    // document.getElementById('result').innerText = 'Total Marks: ' + total;
    const total = calculateTotalMarks([m1,m2,m3]);
    document.getElementById('result').innerHTML = "total Marks:" + total;
  });