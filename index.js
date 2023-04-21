// code your solution here
function superbowlWin(record){
   for(let item of record){
     if (item.result === "W"){ 
  return item.year};
}
}

//console.log(results.find(superbowlWin).year);

/*it('returns a year the Denver Broncos won the superbowl', function () {
    expect(superbowlWin(record)).to.equal('2015');
      });
    
      it('returns undefined if the record has no win objects', function() {
        const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
        expect(superbowlWin(sadReality)).to.equal(undefined)
        */