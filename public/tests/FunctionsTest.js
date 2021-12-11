describe('1. Array Slice',()=>{
    it('My test cases',()=>{

        expect(typeof slice).toBe('function');
        expect(slice(1,4)).toEqual([ 'burger', 'fingerChips', 'donuts' ])
    })
  
  })
  
  describe('2. Array Splice',()=>{
    it('My test cases',()=>{
        expect(typeof splice).toBe('function');
        expect(splice(2,0,'noodles','icecream')).toEqual([ 'pizza',
        'burger',
        'noodles',
        'icecream',
        'fingerChips',
        'donuts',
        'springRoll' ])
    })
  
  })
  
  
  describe('3. Filter',()=>{
    it('My test cases',()=>{
        expect(typeof filter_even).toBe('function');
        expect(typeof filter_prime).toBe('function');
        expect(filter_even([12,324,213,4,2,3,45,4234])).toEqual([ 12, 324, 4, 2, 4234 ])
        expect(filter_prime([12,324,213,4,2,3,45,4234])).toEqual([2, 3])
    })
  
  })
  
  
  
  describe('4 Reject',()=>{
    it('My test cases',()=>{
      expect(typeof reject).toBe('function');
      expect(reject([12,324,213,4,2,3,45,4234])).toEqual([ 12, 324, 213, 4, 45, 4234 ])
    })
  
  })
  
  describe('5. Lambda ',()=>{
    it('My test cases',()=>{
      expect(typeof lambda).toBe('function');
      expect(lambda([12,324,213,4,2,3,45,4234])).toEqual([ 12, 324, 4, 2, 4234 ])
    })
  
  })
  
  describe('6. Map',()=>{
    it('My test cases',()=>{
      expect(typeof map).toBe('function');
      expect(map([11, 34, 20, 5, 53, 16])).toEqual([ 121, 1156, 400, 25, 2809, 256 ])
      expect(map([])).toEqual([])
    })
  
  })
  
  describe('7. Reduce',()=>{
    it('My test cases',()=>{
      expect(typeof reduce).toBe('function');
      expect(reduce([2, 3, 5, 10])).toBe(300)
    })
  
  })
  