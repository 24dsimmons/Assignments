
using ShapeSystem;
namespace ConsoleApp1;
class Program
{
    static void Main()
    {
        ILog logger = new FileLogger("ShapeLog.txt");

        ShapeService service = new ShapeService(logger);

        IShape circle = new Circle(5);
        IShape rectangle = new Rectangle(10, 4);
        IShape triangle = new Triangle(6, 3);

        service.ProcessShape(circle);
        service.ProcessShape(rectangle);
        service.ProcessShape(triangle);
    }
}

