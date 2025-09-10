import '@/utils/date-plus';
import '@/utils/zero';

const date = new Date()
  .plus({ days: 5 })
  .toLocaleString('en-GB' /* Great Britain */, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
  });

console.log('The date for the next 5 days is:');
console.log(date);

console.log('Zero padded numbers:');
console.log((5).padZero());
console.log((5).z());
console.log((123).padZero());
console.log((123).z());

console.log('Zero padded strings:');
console.log('5'.padZero());
console.log('5'.z());
console.log('123'.padZero());
console.log('123'.z());
