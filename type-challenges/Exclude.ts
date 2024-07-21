type MyExclude<Union, > = 

type Result = MyExclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'
