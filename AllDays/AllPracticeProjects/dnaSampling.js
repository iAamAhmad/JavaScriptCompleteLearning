// Returns a random DNA base
const returnRandBase = () => {
   const dnaBases = ['A', 'T', 'C', 'G']
   return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
   const newStrand = []
   for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
   }
   return newStrand
}

const pAequorFactory = (id, dna) => {
   return {
      specimenNum: id,
      dna: dna,

      compareDNA(pAequor) {
         const commonBasesCount = this.dna.reduce((count, base, index) => {
            return count + (base === pAequor.dna[index] ? 1 : 0);
         }, 0);

         const commonPercentage = ((commonBasesCount / this.dna.length) * 100).toFixed(2);
         console.log(`Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${commonPercentage}% DNA in common`);
      },


      willLikelySurvive() {
         let survivingChance = 0;
         for (let i = 1; i < this.dna.length; i++) {
            if (this.dna[i] === 'C' || this.dna[i] === 'G')
               survivingChance++;
         }
         survivingChance = survivingChance / this.dna.length * 100;
         //console.log(survivingChance);
         if (survivingChance >= 60) { return true; }
         else { return false; }
      }
   }
};

//let sample = pAequorFactory(1,mockUpStrand());
//console.log (sample);

const mutate = (item) => {
   let newBase = returnRandBase();

   while (item.dna[0] == newBase) {
      newBase = returnRandBase();
   }

   item.dna[0] = newBase;
   return item.dna;
}



const create30Samples = () => {
   let sampleList = [];
   for (let i = 1; i <= 30; i++) {
      //console.log('sampling');
      let sample = pAequorFactory(i, mockUpStrand());
      sampleList.push(sample);
      let surviving = sample.willLikelySurvive();
      while (!surviving) {
         sample.dna = mockUpStrand();
         surviving = sample.willLikelySurvive();
      }
      console.log(`Sample ${sample.specimenNum}: ${sample.dna.join(',')} ${surviving}`);
   }

   return sampleList;
}

create30Samples();