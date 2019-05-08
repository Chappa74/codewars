function spinningRings(innerMax, outerMax) {
    function spin(inner, outer, count) {
        if (inner == outer && count !== 0) {
            return count;
        }
        inner = inner == 0 ? inner = innerMax : inner - 1;
        outer = outer == outerMax ? outer = 0 : outer + 1;
        return spin(inner, outer, count + 1);
    }
    return spin(0, 0, 0);
};