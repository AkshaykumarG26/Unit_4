Assignment

------------ Authentication ------------





for passwords always use hashing bcos it create very high complicated hashes

hashing => palin string(password) + salt or rehash(unique thing ) => strong hash  //rehash 
makes the string more complicated hash

password + unique thing => mix and match and add some stuff and it will give very long hash

rehash means passing rounds for example we pass 8 rounds it do hash => hash=> hash=> it will do it 8 times it will hashes 8 times

encryption => palin string + salt => encrypted string

if we decrypt it we can get raw string back that can't happen in the hash