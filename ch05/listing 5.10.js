// Listing 5.10  General map and chain functions that work on any container

// map :: (ObjectA -> ObjectB), Monad -> Monad[ObjectB]
const map = R.curry(function (f, container) {
    return container.map(f);
});

// chain :: (ObjectA -> ObjectB), M -> ObjectB
const chain = R.curry(function (f, container) {
    return container.chain(f);
});
