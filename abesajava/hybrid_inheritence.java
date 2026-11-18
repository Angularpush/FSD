package abesajava;

class Vehicle{
    void Start(){
        System.out.println("Starting the vehicle");
    }
}
class Car extends Vehicle{
    void cartype(){
        System.out.println("This is a Car");
    }
}
class bus extends Vehicle implements fare{
    void bustype(){
        System.out.println("this is a bus");
    }
}
interface fare{
    default void fareinfo(){
        System.out.println("This is a fare");
    }
}
public class hybrid_inheritence {
    public static void main(String[] args) {
        Car c = new Car();
        c.Start();
        c.cartype();
        bus b = new bus();
        b.Start();
        b.bustype();
        b.fareinfo();
    }
}