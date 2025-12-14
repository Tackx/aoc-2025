{
  const data = [
    "52500467-52574194",
    "655624494-655688785",
    "551225-576932",
    "8418349387-8418411293",
    "678-1464",
    "33-79",
    "74691-118637",
    "8787869169-8787890635",
    "9898977468-9899009083",
    "548472423-548598890",
    "337245835-337375280",
    "482823-543075",
    "926266-991539",
    "1642682920-1642753675",
    "3834997-3940764",
    "1519-2653",
    "39697698-39890329",
    "3-21",
    "3251796-3429874",
    "3467-9298",
    "26220798-26290827",
    "80-124",
    "200638-280634",
    "666386-710754",
    "21329-64315",
    "250-528",
    "9202893-9264498",
    "819775-903385",
    "292490-356024",
    "22-32",
    "2663033-2791382",
    "133-239",
    "56514707-56704320",
    "432810-458773",
    "4949427889-4949576808"
  ];

  const testData = ["11-22", "95-115", "998-1012", "1188511880-1188511890", "222220-222224", "1698522-1698528", "446443-446449", "38593856-38593862", "565653-565659", "824824821-824824827", "2121212118-2121212124"];

  const invalidIDs = new Set<number>();

  data.forEach((item) => {
    const start = parseInt(item.split("-")[0]);
    const end = parseInt(item.split("-")[1]);

    for (let currentNumber = start; currentNumber <= end; currentNumber++) {
      const digitArray = currentNumber
        .toString()
        .split("")
        .map((item) => parseInt(item));

      const checkedDigits = [] as number[];

      for (const [index, digit] of digitArray.entries()) {
        if (index === digitArray.length - 1) {
          continue;
        }
        checkedDigits.push(digit);

        const restOfNumber = digitArray.slice(index + 1);
        const restOfNumberTuples = [] as number[][];

        for (let i = 0; i < restOfNumber.length; i += checkedDigits.length) {
          restOfNumberTuples.push([...restOfNumber.slice(i, checkedDigits.length + i)]);
        }

        if (
          restOfNumberTuples.every((arr) => {
            return checkedDigits.every((el, i) => el === arr[i]);
          })
        ) {
          invalidIDs.add(currentNumber);
        }
      }
    }
  });

  // Correct = 66500947346
  console.log(Array.from(invalidIDs).reduce((prev, current) => prev + current, 0));
}
