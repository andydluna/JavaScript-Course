const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

/*
// *******************************************
// Destructing Arrays

const [firstBook, secondBook] = books;
const [, , thirdBook] = books;
console.log(firstBook, secondBook, thirdBook);

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatingCount, oneStarRatingCount, threeStarRatings = 0] =
  ratingStars;

console.log(fiveStarRatingCount, oneStarRatingCount, threeStarRatings);
*/

/*
// *******************************************
// Destructing Objects

const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

const { keywords: tags } = books[0];
console.log(tags);

const { language, programmingLanguage = 'unknown' } = books[6];
console.log(language, programmingLanguage);

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

const {
  thirdParty: {
    goodreads: { rating },
  },
} = books[0];
console.log(rating);

const printBookInfo = function ({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
};

printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});
printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });
*/

/*
// *******************************************
// Spread Operator

const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

const spellWord = str => console.log(...str);
spellWord('JavaScript');
*/

/*
// *******************************************
// Rest Pattern

const {
  keywords: [mainKeyword, ...rest],
} = books[0];
console.log(mainKeyword, rest);

const { publisher: bookPublisher, ...restOfBook } = books[1];
console.log(bookPublisher, restOfBook);

const printBookAuthorsCount = (title, ...authors) => {
  console.log(`The Book "${title}" has ${authors.length} authors`);
};
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
*/

/*
// *****************************************
// Short Circuiting

const hasExamplesInJava = book =>
  book.programmingLanguage === 'Java' || 'no data available';

console.log(hasExamplesInJava(books[0]));
console.log(hasExamplesInJava(books[1]));

for (const book of books) {
  book.onlineContent && console.log(`${book.title} provides online content`);
}
*/

/*
// ****************************************
// Nullish Coalescing Operator

for (const book of books) {
  book.onlineContent ??
    console.log(`${book.title} provides no data about its online content`);
}
*/

/*
// ***************************************
// Logical Asssignments Operators

for (const book of books) {
  book.edition ??= 1;
  console.log(book.edition);
}

for (const book of books) {
  book.highlighted &&= book.thirdParty.goodreads.rating >= 4.2;
  console.log(book.highlighted);
}
*/

/*
// **************************************
// Looping arrays: The for-of loop

let pageSum = 0;
for (const book of books) {
  pageSum += book.pages;
}
console.log(pageSum);

const allAuthors = [];
for (const book of books) {
  if (typeof book.author === 'string') allAuthors.push(book.author);
  else allAuthors.push(...book.author);
}
console.log(allAuthors);

for (const [i, author] of allAuthors.entries()) {
  console.log(`${i + 1}. ${author}`);
}
*/

/*
// ***********************************
// Enhanced Object Literals

const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};

console.log(newBook);

const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};

console.log(newBook2);
*/

/*
// ******************************************
// Optional Chaining

const getFirstKeyword = book => book.keywords?.[0];
console.log(getFirstKeyword(books[0]));
console.log(getFirstKeyword(newBook2));
*/

/*
// ******************************************
// Object keys, values and entries

const entries = [];
for (const entry of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([entry]);
}
console.log(entries);

for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value);
}
console.log(entries);

const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries2);

console.log(entries, entries2);
*/

/*
// *****************************************
// Sets

const allKeywords = [];
for (const book of books) {
  allKeywords.push(...book.keywords);
}
console.log(allKeywords);

const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);

uniqueKeywords.add('coding');
uniqueKeywords.add('science');
console.log(uniqueKeywords);

uniqueKeywords.delete('business');
console.log(uniqueKeywords);

const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

uniqueKeywords.clear();
console.log(uniqueKeywords);
*/

/*
// ****************************************
// Maps: Fundamentals

const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);
console.log(bookMap);

bookMap.set('pages', 464);
console.log(bookMap);

console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

console.log(bookMap.size);

bookMap.has('author') && console.log('The author of the book is known');
*/

/*
// ****************************************
// Maps: Iteration

const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

for (const [key, value] of firstBookMap) {
  typeof value === 'number' && console.log(key);
}
*/
/*
// ***************************************
// Working with Strings - Part 1

const { ISBN } = books[0];
console.log(ISBN[6], ISBN[4], ISBN[9], ISBN[8]);

const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));
console.log(quote.slice(quote.lastIndexOf(' ') + 1));

const isContributor = str =>
  str.slice(str.lastIndexOf(' ') + 1) === '(Contributor)';

console.log(isContributor('Julie Sussman (Contributor)'));
console.log(isContributor('Robert Sedgewick'));
*/

/*
// ***************************************
// Working with Strings - Part 2

const normalizeAuthorName = name => {
  name = name.trim().slice(0, name.lastIndexOf(' '));
  const [firstName, lastName] = name.split(' ');
  const normalizedName =
    firstName[0].toUpperCase() +
    firstName.slice(1).toLowerCase() +
    ' ' +
    lastName[0].toUpperCase() +
    lastName.slice(1).toLowerCase();
  return normalizedName;
};
console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

const newBookTitle = books[1].title.replace('Programs', 'Software');
console.log(newBookTitle);

const logBookTheme = title => {
  const lowTitle = title.toLowerCase();
  lowTitle.startsWith('computer') &&
    console.log('This book is about computers');
  lowTitle.includes('algorithms') &&
    lowTitle.includes('structures') &&
    console.log('This book is about algorithms and data structures');
  lowTitle.endsWith('system') &&
    lowTitle.endsWith('systems') &&
    !lowTitle.includes('operating') &&
    console.log(
      'This book is about some sytems, but definetly not about operating systems'
    );
};

logBookTheme(books[2].title);
*/

/*
// ***************************************
// Working with Strings - Part 3

const logBookCategories = topics =>
  topics.split(';').forEach(topic => console.log(topic));
const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
logBookCategories(bookCategories);

const getKeywordsAsString = books => {
  let result;
  const uniqueKeywords = new Set();
  for (const book of books) {
    book.keywords.forEach(keyword => uniqueKeywords.add(keyword));
  }

  result = [...uniqueKeywords].join(';');

  return result;
};
console.log(getKeywordsAsString(books));

const logBookChapters = chapters => {
  chapters.forEach(chapter => {
    const [title, pages] = chapter;
    console.log(title.padEnd(20, '_'), pages);
  });
};
const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];
logBookChapters(bookChapters);
*/
