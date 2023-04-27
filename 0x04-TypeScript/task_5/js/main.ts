interface MajorCredits {
  credits: number;
  brand: "Major";
}
interface MinorCredits {
  credits: number;
  brand: "Minor";
}
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const sum: number = subject1.credits + subject2.credits;
  const total: MajorCredits = {
    credits : sum,
    brand: "Major",
  }
  return total;
}
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const sum: number = subject1.credits + subject2.credits;
  const total: MinorCredits = {
    credits: sum,
    brand: "Minor",
  }
  return total;

}
const Majorsubject1: MajorCredits = {
  credits: 20,
  brand: "Major",

}
const Majorsubject2: MajorCredits = {
  credits: 25,
  brand: "Major",

}
const Minorsubject1: MinorCredits = {
  credits: 20,
  brand: "Minor",

}
const Minorsubject2: MinorCredits = {
  credits: 2,
  brand: "Minor",

}
//console.log(sumMajorCredits(Majorsubject1, Majorsubject2));
//console.log(sumMinorCredits(Minorsubject1, Minorsubject2));
