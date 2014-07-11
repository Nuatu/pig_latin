describe("pigLatin", function() {
  it("takes words that start with a vowel and adds 'ay' to the end", function(){
    pigLatin("apple").should.equal("appleay");
  });

  it("takes words that start with a consonant and moves all of the first conecutive consanants to the end and add 'ay'", function (){
    pigLatin("sap").should.equal("apsay");
  });

  it("takes a word that has a 'qu' in it and moves the qu along with the consonants to the end", function(){
    pigLatin("squeal").should.equal("ealsquay");
  });

  it("takes a single letter vowel word and adds 'ay' to the end", function(){
    pigLatin("i").should.equal("iay");
  });

  it("takes a word a 'qu' after a vowel and returns the correct Pig Latin output", function(){
    pigLatin("clique").should.equal("iqueclay");
  });

});

