/* 1. Írj egy függvény kifejezést `removeDuplicatesFromArray` néven,
ami a paraméterként megadott tömbből eltávolítja a duplikált elemeket!
A tömb csak primítív értékeket tartalmaz! 
A függvény visszatérési értéke a duplikált elemektől mentes új tömb! */

const removeDuplicatesFromArray = (arr) => {
    const newArr = [...new Set(arr)]
    return newArr
//   const newArr = Array.from(new Set(arr));
//   return newArr
}

export default removeDuplicatesFromArray;