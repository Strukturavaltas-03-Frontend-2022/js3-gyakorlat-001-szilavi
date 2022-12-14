/*2. Készíts egy `HU` nevű objektumot, aminek az alábbi propertijei vannak:
- `date()`: Visszaadja a paraméterként megadott dátumot a magyar dátumírás szabályainak megfelelően
- `currency()`: Visszaadja a paraméterként megadott számot a magyar pénzformátumnak megfelelően a Ft végződéssel együtt
- `list()`: A paraméterként kapott string tömböt visszaadja az alábbi formában: első, második és harmadik"
(Tehát vesszőkkel elválasztva az utolsó elem előtt az és szóval)*/

const HU = {
  date(date) {
    return date = new Intl.DateTimeFormat('hu-HU').format(date)
  },
  currency(number) {
    return new Intl.NumberFormat('hu-HU', {
      style: 'currency',
      currency: 'HUF',
    }).format(number)
  },
  list(arr) {
    for (let i = 0; i < arr.length; i++) {
      const newArr = arr[0] + ", " + arr[1] + " és " + arr[2]
      return newArr

    /*szebb:
    lit(arr) {
        const lastElement = stringArr.pop()
        return arr.join(', ').concat(` és ${lastElement}`)
    }
    */
    }
}
}

export default HU;