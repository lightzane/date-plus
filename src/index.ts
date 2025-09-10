import '@/utils/date-plus';

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
