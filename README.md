# Zero

Demonstrates how to extend a built-in global class with custom functionality.

```ts
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
```

See [`zero.ts`](./src/utils/zero.ts)
