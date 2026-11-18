package abesajava;
class Animal{
    public void animalSound(){
        System.out.println("Animal create Sound");
    }
}

class Monkey extends Animal{
    public void animalSound(){
        System.out.println("Monkey say khow khow");
    }
}
class  Dog extends Animal{
    public void animalSound(){
        System.out.println("Dog say Bhow Bhow");
    }
}
public class polymorphism {
    public static void main(String[] args) {
        Monkey obj1 = new Monkey();
        obj1.animalSound();
        Dog obj2 = new Dog();
        obj2.animalSound();
    }
}
