class Singleton {
    static _instance: Singleton;
    data: string;
    private constructor(d: string) {
        this.data = d;
    }

    static getInstance(d: string): Singleton {
        if(!Singleton._instance) {
            Singleton._instance = new Singleton(d);            
        }
        return Singleton._instance;
    }
}

const theOne = Singleton.getInstance("Neo");

console.log(theOne.data);

const another = Singleton.getInstance("Agent Smith");

console.log(another.data);

console.log(theOne === another);

// Should report an error because constructor is private: 
const yetAnother = new Singleton("Quack!");